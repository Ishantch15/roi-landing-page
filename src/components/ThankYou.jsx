import { useEffect } from 'react';
import logo from '../assets/roilogo.jpg';
import heroVideo from '../assets/thankyou.mp4';
import adsCertified from '../assets/ads-certified.png';
import { Mail, Clock } from 'lucide-react';
export default function ThankYou({ onGoHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fb',
      fontFamily: 'Arial, sans-serif',
      color: '#1a1a1a',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,102,0,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 80%, rgba(255,153,51,0.04) 0%, transparent 60%)
        `,
      }} />

      {/* ===================== HERO ===================== */}
      <section style={{
        textAlign: 'center',
        padding: '64px 24px 48px',
        position: 'relative',
        zIndex: 1,
        maxWidth: '700px',
        margin: '0 auto',
      }}>

        {/* Logo */}
        <div style={{ marginBottom: '24px' }}>
          <img src={logo} alt="ROI Spectrum" style={{ height: '52px', width: 'auto', margin: '0 auto' }} />
        </div>

        {/* Checkmark */}
        <div style={{
          width: '64px', height: '64px',
          background: 'linear-gradient(135deg, #ff6600, #ff9933)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          boxShadow: '0 8px 32px rgba(255,102,0,0.25)',
          fontSize: '26px', color: 'white',
        }}>✓</div>

        <h1 style={{
          fontSize: 'clamp(17px, 3.5vw, 35px)',
          fontWeight: 700, lineHeight: 1.2, marginBottom: '16px',
          letterSpacing: '-0.5px', color: '#1a1a1a',
        }}>
          Thank You for Choosing <span style={{ color: '#ff6600', fontStyle: 'italic' }}>ROI Spectrum.</span>
        </h1>

        <p style={{
          fontSize: '16px', color: '#555', lineHeight: 1.7,
          maxWidth: '520px', margin: '0 auto 36px',
        }}>
          Your audit request is being processed. While our engine parses your data, take the next step toward market dominance with our expert-led growth strategies.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Primary button */}
          <button
            onClick={() => window.location.href = 'https://app.roispectrum.com'}
            style={{
              flex: '1 1 220px', maxWidth: '300px',
              background: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '9999px', padding: '14px 24px',
              fontSize: '15px', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              boxShadow: '0 4px 20px rgba(255,102,0,0.3)',
              transition: 'all 0.3s', lineHeight: 1.4,
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Start Your Campaign
          </button>

          {/* Schedule a Call button with badge */}
          <button
            onClick={() => window.location.href = 'https://calendly.com'}
            style={{
              flex: '1 1 220px', maxWidth: '340px',
              background: 'transparent',
              color: '#ff6600',
              border: '2px solid #ff6600',
              borderRadius: '9999px', padding: '10px 20px',
              fontSize: '15px', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Arial, sans-serif',
              transition: 'all 0.3s', lineHeight: 1.4,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.background = 'rgba(255,102,0,0.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <img
              src={adsCertified}
              alt="Google Ads Search Certified"
              style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0 }}
            />
            Schedule a Call with a Google Certified Expert
          </button>
        </div>

        {onGoHome && (
          <button onClick={onGoHome} style={{
            marginTop: '20px', background: 'none', border: 'none',
            color: '#aaa', fontSize: '13px', cursor: 'pointer',
            fontFamily: 'Arial, sans-serif', textDecoration: 'underline', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#555'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >← Back to Home</button>
        )}
      </section>

      {/* ===================== WHAT HAPPENS NEXT ===================== */}
      <section style={{ padding: '0 24px 80px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.5px' }}>
            What Happens Next?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { num: '1', title: 'Data Aggregation', desc: "Our proprietary AI begins analyzing your site's semantic signature and technical performance architecture." },
            { num: '2', title: 'Expert Review', desc: "ROI Spectrum's senior SEO specialists manually verify AI findings to ensure strategic precision." },
            { num: '3', title: 'Strategy Delivery', desc: 'Your custom performance roadmap is delivered to your inbox within 24 hours of submission.' },
          ].map((step, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px',
              padding: '28px 24px', textAlign: 'left', transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
            >
              <div style={{
                width: '36px', height: '36px', background: '#ff6600', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '16px',
              }}>{step.num}</div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#1a1a1a' }}>{step.title}</h4>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== VIDEO SECTION ===================== */}
      <section style={{ padding: '0 24px 72px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: 700, color: '#ff6600', letterSpacing: '-0.3px' }}>
            Watch Our Platform In Action
          </h2>
        </div>

        {/* Browser chrome frame */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 16px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)',
          border: '1px solid #e8e8e8',
        }}>
          {/* Browser top bar */}
          <div style={{
            background: '#f5f5f5', borderBottom: '1px solid #e8e8e8',
            padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <div style={{ flex: 1, height: 22, background: '#e8e8e8', borderRadius: '6px', margin: '0 16px' }} />
            <div style={{ width: 24, height: 10, background: '#e0e0e0', borderRadius: '4px' }} />
          </div>

          {/* Video */}
          <div style={{ width: '100%', aspectRatio: '16/9', background: '#f0f0f0' }}>
            <video
              src={heroVideo}
              autoPlay loop muted playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDIES ===================== */}
      <section style={{ padding: '0 24px 60px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '38px', fontWeight: 700, marginBottom: '24px', color: '#1a1a1a', letterSpacing: '-0.3px' }}>
          Businesses that gained <span style={{ color: '#ff6600' }}>Organic Success</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

          {/* Card 1 */}
          <div
            onClick={() => window.open('https://roispectrum.com/blogs/seo-case-study-personalise-wholesaleblanks-co-uk', '_blank')}
            style={{
              background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px',
              padding: '28px', cursor: 'pointer', transition: 'all 0.3s',
              textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ff6600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>E-Commerce SEO</div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ff6600', lineHeight: 1.1 }}>£5.1M</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#999', marginTop: '3px' }}>Attributed Goal Value</div>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', lineHeight: 1.35, color: '#1a1a1a' }}>
                personalise-wholesaleblanks.co.uk: £5.1M Goal Value via Technical & Content SEO
              </h4>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65, marginBottom: '16px' }}>
                Technical fixes, entity-rich on-page updates, and internal linking grew organic impressions by +823.99K and clicks by +16.75K — with 6,200 conversions driven in the period.
              </p>
            </div>
            <span style={{ color: '#ff6600', fontSize: '13px', fontWeight: 700 }}>Read Case Study →</span>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => window.open('https://roispectrum.com/blogs/mca-group-commercial-cleaning-toronto-gta', '_blank')}
            style={{
              background: '#fff', border: '1px solid #e8e8e8', borderRadius: '16px',
              padding: '28px', cursor: 'pointer', transition: 'all 0.3s',
              textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ff6600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Local SEO · B2B</div>
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ff6600', lineHeight: 1.1 }}>3.5x</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: '#999', marginTop: '3px' }}>ROI Achieved</div>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px', lineHeight: 1.35, color: '#1a1a1a' }}>
                MCA Group: 145% Traffic Growth for Commercial Cleaning Brand in Toronto & GTA
              </h4>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65, marginBottom: '16px' }}>
                12-month multi-channel SEO campaign combining technical fixes, local SEO, topical authority content, and CRO drove a 145% increase in website traffic and 72% higher conversion rate.
              </p>
            </div>
            <span style={{ color: '#ff6600', fontSize: '13px', fontWeight: 700 }}>Read Case Study →</span>
          </div>

        </div>
      </section>

      {/* ===================== NEED IMMEDIATE ACTION ===================== */}
      <section style={{ padding: '0 24px 80px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          background: '#fff', border: '1px solid #e8e8e8', borderRadius: '20px',
          padding: '40px 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '10px', color: '#1a1a1a', textAlign: 'left' }}>
            Need immediate action?
          </h2>
          <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '32px', lineHeight: 1.6, textAlign: 'left' }}>
            Our specialists are available for urgent performance inquiries during standard market hours.
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              {
                icon: <Mail size={20} color="#ff6600" />,
                label: 'Email Support',
                content: <a href="mailto:ops@roispectrum.com" style={{ color: '#ff6600', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >ops@roispectrum.com</a>,
              },
              {
                icon: <Clock size={20} color="#ff6600" />,
                label: 'Office Hours',
                content: <p style={{ color: '#1a1a1a', fontSize: '15px', fontWeight: 600, margin: 0 }}>Mon–Fri: 09:00 – 18:00 EST</p>,
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'rgba(255,102,0,0.1)', border: '1px solid rgba(255,102,0,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', flexShrink: 0,
                }}>{item.icon}</div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#999', marginBottom: '5px' }}>
                    {item.label}
                  </p>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
