import logo from '../assets/roilogo.jpg';

export default function Header({ scrollY, mobileMenuOpen, setMobileMenuOpen, openModal }) {
  return (
    <header className={`roi-header ${scrollY > 20 ? 'scrolled' : ''}`}>
      <div className="roi-header-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="roi-logo">
            <img src={logo} alt="ROI Spectrum" style={{ height: '50px', width: 'auto' }} />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '2px solid rgba(255, 102, 0, 0.3)',
            paddingLeft: '12px',
          }}>
            <span style={{
              fontSize: 'clamp(7px, 1.8vw, 10px)',
              fontWeight: 600,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: '#888',
              fontFamily: 'Arial, sans-serif',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              display: 'block',
            }}>
              <span className="revenue-label-full">Revenue Driven For Our Clients</span>
              <span className="revenue-label-short" style={{ display: 'none' }}>Revenue Driven</span>
            </span>
            <span style={{
              fontSize: 'clamp(13px, 2.5vw, 20px)',
              fontWeight: 700,
              color: '#ff6600',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '-0.5px',
              lineHeight: 1.3,
              whiteSpace: 'nowrap',
            }}>
              $10,085,355+
            </span>
          </div>        </div>

        <div className="roi-header-cta">
          <button className="roi-btn roi-btn-primary" onClick={openModal}>Get a Free Audit</button>
        </div>

        <button
          className="roi-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`roi-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <a href="#" className="active" style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,102,0,0.06)', color: '#ff6600', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>Solutions</a>
        </nav>
        <button className="roi-btn roi-btn-primary" style={{ width: '100%', marginTop: '16px', padding: '14px', fontSize: '15px' }} onClick={openModal}>Get Free Audit</button>
      </div>
    </header>
  );
}
