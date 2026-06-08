import { useEffect } from 'react';
import { X } from 'lucide-react';
import AuditForm from './AuditForm';

export default function AuditModal({ onClose, onSuccess }) {
  const handleSubmit = () => {
    onSuccess();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>
        <h2 className="modal-title">
          Claim Your Free <span className="orange">SEO & AI Audit</span>
        </h2>
        <p className="modal-subtitle">
          No generic reports. No automated fluff. Just a senior-led audit built for your brand.
        </p>
        <AuditForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
