import missionImg from '../assets/Mission.png';
import valuesImg from '../assets/values.png';
export default function ProcessSection() {
  const steps = [
    { num: 1, title: 'Initial Scan', desc: 'Our AI agents run a 24-hour diagnostic on your domain visibility.' },
    { num: 2, title: 'Expert Review', desc: "A senior analyst manually identifies 'quick-win' revenue gaps." },
    { num: 3, title: 'Roadmap Call', desc: 'A 30-min strategy session to walk through your custom plan.' },
    { num: 4, title: 'Launch Prep', desc: 'We scope technical resources needed to kick off Phase 1.' }
  ];

  return (
    <section className="process">
      <div className="process-container">
        <div className="section-header">
          <h2 className="section-h2" style={{ marginTop: '-95px' }}>What Happens <span className="italic-orange">After You Book?</span></h2>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-num">{step.num}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        {/* OUR MISSION */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginTop: '80px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#ff6600', marginBottom: '12px', textAlign: 'left' }}>OUR MISSION</p>
            <p style={{ fontSize: '30px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, textAlign: 'left' }}>
              To make world-class SEO accessible, transparent, and tailored - for businesses that want to grow without the gimmicks.
            </p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <img src={missionImg} alt="Our Mission" style={{ width: '100%', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.15)' }} />
          </div>
        </div>

        {/* OUR VALUES */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', marginTop: '60px', flexWrap: 'wrap-reverse' }}>
          <div style={{ flex: '1 1 300px' }}>
            <img src={valuesImg} alt="Our Values" style={{ width: '100%', borderRadius: '20px', border: '1px solid rgba(255,102,0,0.15)' }} />
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#ff6600', marginBottom: '12px', textAlign: 'left' }}>OUR VALUES</p>
            <p style={{ fontSize: '30px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, textAlign: 'left' }}>
              We believe in transparency, result-driven strategies, and building lasting partnerships that help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
