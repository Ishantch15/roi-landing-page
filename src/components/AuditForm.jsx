import { useState } from 'react';

const N8N_WEBHOOK_URL = 'https://n8n.srv1484736.hstgr.cloud/webhook/roi-spectrum-audit';

export default function AuditForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', budget: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email is required';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
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
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormData({ name: '', email: '', phone: '', budget: '' });
      onSubmit();
    } catch (err) {
      console.error('Webhook error:', err);
      onSubmit();
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
          onChange={e => handleChange('phone', e.target.value)}
          style={inputStyle('phone')}
        />
        {errors.phone && <span style={{ fontSize: '11px', color: '#ef4444', paddingLeft: '12px' }}>{errors.phone}</span>}
      </div>

      <div className="form-field">
        <label className="form-label"> MONTHLY MARKETING BUDGET</label>
        <div className="form-select-wrapper">
          <select
            className="form-select"
            value={formData.budget}
            onChange={e => handleChange('budget', e.target.value)}
            style={inputStyle('budget')}
          >
            <option value="" disabled>Select your budget range</option>
            <option value="lt900">$0-$900</option>
            <option value="900k-2k">$900 – $2,000</option>
            <option value="2k-5k">$2,000 – $5,000</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k+">$10,000+</option>
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
      <p className="form-disclaimer">By submitting, you agree to our Terms &amp; Privacy Policy.</p>
    </div>
  );
}
