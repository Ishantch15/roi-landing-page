import AuditForm from './AuditForm';

export default function CTASection({ onAuditSuccess }) {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-grid">
          <div className="cta-left">
            <h2 className="cta-h2">
              <span style={{ color: 'white', fontStyle: 'normal' }}>Claim Your Free </span>
              <span style={{ color: '#ff6600', fontStyle: 'italic' }}>SEO & AI Visibility Audit Today.</span>
            </h2>
            <p className="cta-p">Our team of senior analysts will manually review your website, identify "leaking" conversion paths, and build a customized AI Search roadmap for your brand. No generic reports. No automated fluff.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '10px', padding: '16px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', maxWidth: '100%' }}>
              <span style={{ fontSize: '18px', color: '#ff6600', flexShrink: 0 }}>🛡</span>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: 0 }}>
                Verified data-driven results for 100+ brands worldwide.
              </p>
            </div>
          </div>

          <div className="cta-form">
            <AuditForm onSubmit={onAuditSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
}
