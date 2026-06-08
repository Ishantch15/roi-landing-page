import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function Toast({ id, title, message, onRemove }) {
  const [exiting, setExiting] = useState(false);

  const dismiss = () => {
    setExiting(true);
    setTimeout(() => onRemove(id), 350);
  };

  useEffect(() => {
    const t = setTimeout(() => dismiss(), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`toast${exiting ? ' toast-exit' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="toast-icon">✓</div>
      <div className="toast-body">
        <div className="toast-title">{title}</div>
        <div className="toast-msg">{message}</div>
      </div>
      <button className="toast-close" onClick={dismiss} aria-label="Dismiss">
        <X size={14} />
      </button>
      {!exiting && <div className="toast-progress" />}
    </div>
  );
}

export function ToastContainer({ toasts, onRemove }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <Toast key={t.id} {...t} onRemove={onRemove} />
      ))}
    </div>
  );
}
