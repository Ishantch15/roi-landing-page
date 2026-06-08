import CountUp from './CountUp';

export default function CampaignSection() {
  const campaignItems = [
    { title: 'Bespoke Cluster Strategy', desc: 'Custom semantic maps for your niche.' },
    { title: 'Technical Implementation', desc: 'Hands-on fixes for CMS, speed, schema.' },
    { title: 'High-Authority Digital PR', desc: 'Relevant, high-traffic publications.' },
    { title: 'AI Visibility Tracking', desc: 'Monitoring ChatGPT & SGE rankings.' },
    { title: 'Weekly Performance Sync', desc: 'Direct access to your strategist.' },
    { title: 'Conversion Lab Access', desc: 'Continuous A/B landing page testing.' }
  ];

  const resultItems = [
    { target: 2.5, decimals: 1, suffix: 'x', label: 'Avg. Lead Growth (Year 1)' },
    { target: 3, prefix: 'Top ', suffix: '', label: 'AEO Visibility Positioning' },
    { target: 30, suffix: '%', label: 'Reduction in Paid CPA' },
    { target: 100, suffix: '%', label: 'Transparency Reporting' },
  ];

  return (
    <section className="campaign">
      <div className="campaign-container">
        <div className="campaign-grid">
          <div className="campaign-left">
            <h2 className="campaign-h2">Everything Included in <br /><span className="italic-orange">Your Campaign</span></h2>

            <div className="campaign-items">
              {campaignItems.map((item, i) => (
                <div key={i} className="campaign-item">
                  <div className="campaign-icon" style={{ fontSize: '20px' }}>✓</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="results-box">
            <h2 style={{ fontSize: '32px', fontWeight: 800 }}>What Results <br /><span className="italic-orange">Can You Expect?</span></h2>

            <div className="results-grid">
              {resultItems.map((item, i) => (
                <div key={i}>
                  <div className="result-num">
                    <CountUp
                      target={item.target}
                      decimals={item.decimals || 0}
                      prefix={item.prefix || ''}
                      suffix={item.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="result-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
