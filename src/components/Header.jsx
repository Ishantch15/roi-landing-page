import logo from '../assets/roilogo.jpg';
import { Phone } from 'lucide-react';

export default function Header({ scrollY, mobileMenuOpen, setMobileMenuOpen, openModal }) {
  return (
    <header className={`roi-header ${scrollY > 20 ? 'scrolled' : ''}`}>
      <div className="roi-header-content">

        {/* Logo + Revenue Counter */}
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
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <span className="revenue-label-full" style={{
                fontSize: '12px', fontWeight: 700, color: '#1a1a1a', fontFamily: 'Arial, sans-serif',
              }}>Revenue Driven For Our Clients</span>
              <span className="revenue-label-short" style={{ display: 'none', fontSize: '10px', fontWeight: 700, color: '#1a1a1a' }}>Revenue Driven</span>
            </span>
            <span style={{
              fontSize: 'clamp(13px, 2.5vw, 20px)', fontWeight: 700, color: '#ff6600',
              fontFamily: 'Arial, sans-serif', letterSpacing: '-0.5px', lineHeight: 1.3, whiteSpace: 'nowrap',
            }}>
              $10,085,355+
            </span>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="roi-header-cta">

          <a href="tel:+12362430590"
            onClick={() => window.gtag_report_conversion && window.gtag_report_conversion('tel:+12362430590')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              textDecoration: 'none', color: '#ff6600',
              fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '15px',
              padding: '10px 16px', borderRadius: '9999px',
              border: '1.5px solid #ff6600', transition: 'all 0.3s', whiteSpace: 'nowrap',
            }}
          >
            <Phone size={16} strokeWidth={2} />
            +1 (236) 243-0590
          </a>
          <button className="roi-btn roi-btn-primary" onClick={openModal}>
            Get a Free Audit
          </button>
        </div>

        {/* Hamburger */}
        <button className="roi-mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`roi-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>

        < a href="tel:+12362430590"
          onClick={() => window.gtag_report_conversion && window.gtag_report_conversion('tel:+12362430590')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '8px', textDecoration: 'none', color: '#ff6600',
            fontFamily: 'Arial, sans-serif', fontWeight: 600, fontSize: '15px',
            padding: '12px', borderRadius: '12px',
            border: '1.5px solid #ff6600', background: '#fff7f0', marginBottom: '10px',
          }}
        >
          <Phone size={16} strokeWidth={2} />
          +1 (236) 243-0590
        </a>
        <button
          className="roi-btn roi-btn-primary"
          style={{ width: '100%', padding: '14px', fontSize: '15px' }}
          onClick={openModal}
        >
          Get Free Audit
        </button>
      </div >
    </header >
  );
}
