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
          <h2 className="section-h2">What Happens <span className="italic-orange">After You Book?</span></h2>
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
      </div>
    </section>
  );
}
