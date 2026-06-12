import { useState } from 'react';

const N8N_WEBHOOK_URL = 'https://n8n.srv1484736.hstgr.cloud/webhook/roi-spectrum-audit';
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycby06t7nAxgb-klUk4SscMzQO5fJStM8U952KHfAa6S1hnGZ3ZeAkeWExLdPabQSm7Hh/exec';

export default function AuditForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', budget: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email is required';
    if (!formData.phone.trim()) {
      e.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length !== 10) {
      e.phone = 'Phone number must be exactly 10 digits';
    }
    if (!formData.budget) e.budget = 'Please select a budget range';
    return e;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    setLoading(true);
    try {
      // Send to n8n webhook
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      // Send to Google Sheets
      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            budget: formData.budget,
            submittedAt: new Date().toLocaleString(),
          }),
        });
      }

      setFormData({ name: '', email: '', phone: '', budget: '' });
      // Call onSubmit - App.jsx handles the redirect via state
      if (onSubmit) onSubmit();
    } catch (err) {
      console.error('Submission error:', err);
      // Still redirect on error so user isn't stuck
      if (onSubmit) onSubmit();
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    borderColor: errors[field] ? '#ef4444' : 'transparent',
  });

  return (
    <div className="form-group">
      <div className="form-row">
        <div className="form-field">
          <label className="form-label">FULL NAME</label>
          <input
            type="text"
            className="form-input"
            placeholder="John Doe"
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            style={inputStyle('name')}
          />
          {errors.name && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.name}</span>}
        </div>
        <div className="form-field">
          <label className="form-label">WORK EMAIL</label>
          <input
            type="email"
            className="form-input"
            placeholder="john@company.com"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            style={inputStyle('email')}
          />
          {errors.email && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.email}</span>}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label">MOBILE NUMBER</label>
        <input
          type="tel"
          className="form-input"
          placeholder="+1 (555) 000-0000"
          value={formData.phone}
          maxLength={10}
          onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
          style={inputStyle('phone')}
        />
        {errors.phone && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.phone}</span>}
      </div>

      <div className="form-field">
        <label className="form-label">MONTHLY MARKETING BUDGET</label>
        <div className="form-select-wrapper">
          <select
            className="form-select"
            value={formData.budget}
            onChange={e => handleChange('budget', e.target.value)}
            style={inputStyle('budget')}
          >
            <option value="" disabled>Select your budget range</option>
            <option value="₹10,000-₹25,000">₹10,000 – ₹25,000</option>
            <option value="₹25,000-₹50,000">₹25,000 – ₹50,000</option>
            <option value="₹50,000-₹1,00,000">₹50,000 – ₹1,00,000</option>
            <option value="₹1,00,000+">More than ₹1,00,000</option>
          </select>
        </div>
        {errors.budget && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.budget}</span>}
      </div>

      <button
        type="button"
        className="form-submit"
        onClick={handleSubmit}
        disabled={loading}
        style={{ opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? 'Submitting…' : 'Submit For Free Audit ✉'}
      </button>
      <p className="form-disclaimer">
        By submitting, you agree to our{' '}
        <a href="https://roispectrum.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms</a>
        {' '}&amp;{' '}
        <a href="https://roispectrum.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
      </p>
    </div>
  );
}
