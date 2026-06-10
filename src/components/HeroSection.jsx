import { useEffect, useRef } from 'react';
import background from '../assets/background.jpg';
import AnimatedHeadline from './AnimatedHeadline';

export default function HeroSection({ openModal }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToCaseStudies = () => {
    const el = document.querySelector('.case-studies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const avatars = [
    { flag: 'https://flagcdn.com/w40/us.png', alt: 'USA' },
    { flag: 'https://flagcdn.com/w40/gb.png', alt: 'UK' },
    { flag: 'https://flagcdn.com/w40/ae.png', alt: 'UAE' },
    { flag: 'https://flagcdn.com/w40/ca.png', alt: 'Canada' },
  ];

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">
          FUTURE-PROOF SEARCH DOMINANCE
        </div>

        <h1 className="hero-h1">
          <AnimatedHeadline />
        </h1>

        <p className="hero-subtitle" style={{ opacity: 1, transform: 'none' }}>
          Traditional SEO is evolving. We help brands master Search Generative Experience and AI-driven discovery to drive high-intent conversion.
        </p>

        {/* Social proof pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px',
          background: 'rgba(255,102,0,0.08)',
          border: '1px solid rgba(255,102,0,0.25)',
          borderRadius: '9999px',
          padding: '8px 20px 8px 8px',
        }}>
          {/* Stacked avatars */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {avatars.map((a, i) => (
              <div key={i} style={{
                width: '32px', height: '32px', borderRadius: '50%',
                border: '2px solid #0f172a',
                marginLeft: i === 0 ? 0 : '-8px',
                zIndex: avatars.length - i,
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img
                  src={a.flag}
                  alt={a.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>

          {/* Text */}
          <span style={{
            fontSize: 'clamp(11px, 2vw, 17px)',
            fontWeight: 600,
            color: '#ff9933',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '0.1px',
          }}>
            <span className="revenue-label-full">125+ Businesses Served In North America, Middle East &amp; Europe</span>
            <span className="revenue-label-short" style={{ display: 'none' }}>125+ Businesses · US, UK, UAE &amp; CA</span>
          </span>
        </div>

        <div className="hero-buttons" style={{ opacity: 1, transform: 'none' }}>
          <button className="btn-main" onClick={openModal}>Start Your Free Audit ↗</button>
          <button className="btn-secondary" onClick={scrollToCaseStudies}>View Case Studies</button>
        </div>
      </div>

      {/* Overlapping dashboard image */}
      <div className="hero-img-wrap">
        <div className="hero-img-frame hero-img-parallax" ref={frameRef}>
          <div className="hero-img-chrome">
            <div className="hero-img-dot" style={{ background: '#ff5f57' }} />
            <div className="hero-img-dot" style={{ background: '#ffbd2e' }} />
            <div className="hero-img-dot" style={{ background: '#28c840' }} />
            <div className="hero-img-bar" />
          </div>
          <img
            src={background}
            alt="ROI Spectrum Dashboard"
            style={{ marginTop: '36px' }}
          />
        </div>
      </div>
    </section>
  );
}
