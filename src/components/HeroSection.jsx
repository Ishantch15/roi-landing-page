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
