import { Search, Bot, Zap, BarChart2, Settings, Brain } from 'lucide-react';
import googleVideo from '../assets/Googlevideo.mp4';

export default function ChallengesSection() {
  const challenges = [
    { icon: <Search size={28} />, title: 'Visibility Gap', desc: "92% of users don't scroll past page 1 of Google results." },
    { icon: <Bot size={28} />, title: 'AI Erosion', desc: 'AI Search now answers 40% of queries directly, bypassing your site.' },
    { icon: <Zap size={28} />, title: 'Conversion Leak', desc: 'Poor UX kills conversion faster than low traffic volume ever could.' },
    { icon: <BarChart2 size={28} />, title: 'Legacy Tracking', desc: 'Relying on vanity metrics like "clicks" instead of actual pipeline revenue.' },
    { icon: <Settings size={28} />, title: 'Technical Debt', desc: 'Slow page speeds and mobile friction hurting your organic authority.' },
    { icon: <Brain size={28} />, title: 'Semantic Discord', desc: 'Content that fails to answer the user intent that modern LLMs prioritize.' },
  ];

  const ticker = 'Plan Winning Strategy ✦ Select ROI Proof Strategies ✦ AI Links Recommendations ✦ AI Mode Simulator ✦ Track Performance ✦ Live Results ✦ Own the Team';
  const repeated = Array(6).fill(ticker).join(' ✦ ');

  return (
    <div>
      {/* Ticker */}
      <div style={{ overflow: 'hidden', background: '#fff', padding: '25px 0', borderTop: '1px solid rgba(255,102,0,0.15)', borderBottom: '1px solid rgba(255,102,0,0.15)', marginTop: '0' }}>
        <style>{`
          @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'ticker 80s linear infinite', width: 'max-content' }}>
          {[repeated, repeated].map((t, i) => (
            <span key={i} style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', letterSpacing: '0.5px', paddingRight: '48px' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Google I/O Video Section */}
      <section className="process">
        <div className="process-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginTop: '0', flexWrap: 'wrap' }}>

            {/* Left: Text */}
            <div style={{ flex: '1 1 300px' }}>
              <p style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.25,
                textAlign: 'left',
                margin: '0 0 12px 0',
                letterSpacing: '-0.5px',
              }}>
                At Google I/O 2026, Google just announced the biggest overhaul to Search in over 25 years — pivoting from a traditional link-based search engine to an{' '}
                <span style={{ color: '#ff6600', fontStyle: 'italic' }}>agentic, AI-powered system.</span>
              </p>
              <p style={{ fontSize: '11px', color: '#999', textAlign: 'left', margin: 0 }}>
                Source: <a href="https://blog.google/products-and-platforms/products/search/search-io-2026/#powerful-ai" target="_blank" rel="noopener noreferrer" style={{ color: '#999', textDecoration: 'underline' }}>Google Blog — Search at I/O 2026</a>
              </p>
            </div>

            {/* Right: Video */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <video
                src={googleVideo}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.15)' }}
              />
              <p style={{ fontSize: '11px', color: '#999', textAlign: 'right', margin: 0 }}>
                Source: <a href="https://blog.google/products-and-platforms/products/search/search-io-2026/#powerful-ai" target="_blank" rel="noopener noreferrer" style={{ color: '#999', textDecoration: 'underline' }}>Google Blog — Search at I/O 2026</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges" style={{ marginTop: '-70px' }}>
        <div className="challenges-container">
          <div className="section-header">
            <h2 className="section-h3" style={{ textDecoration: 'none' }}>Is your Business Ready for <span className="italic-orange">this Change.</span></h2>
            <p className="section-p">Most agencies focus on traffic. We focus on ROI. In the age of AI search, simply "ranking" isn't enough.</p>
          </div>

          <div className="grid-3">
            {challenges.map((item, i) => (
              <div key={i} className="modular-grid-card">
                <div className="card-icon">{item.icon}</div>
                <h4 className="card-h4">{item.title}</h4>
                <p className="card-p">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
