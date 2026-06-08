export default function CaseStudiesSection() {
  const studies = [
    {
      tag: 'FinTech',
      metric: '$2.4M',
      label: 'New Pipeline',
      title: 'Artemis Finance: Dominating Complex Financial Queries',
      desc: 'Secured top-tier visibility in ChatGPT and Claude through semantic mapping for high-value financial keywords.'
    },
    {
      tag: 'Enterprise E-comm',
      metric: '+180%',
      label: 'Organic Rev Growth',
      title: 'Velo Sport: 180% Increase in Global Organic Revenue',
      desc: 'Full technical infrastructure overhaul to meet Core Web Vitals and maximize conversion for 50+ locations.'
    },
    {
      tag: 'Local SEO',
      metric: '8.2K',
      label: 'Sessions in 8 Months',
      title: 'Driving Local Visibility & Conversions: How SEO Scaled North County Spa in Just 8 Months',
      desc: '15 keywords ranking in Google Top 10 and 5.8K engaged sessions with 70%+ engagement rate — all within 8 months of campaign launch.',
    },
    {
      tag: 'Health & Wellness',
      metric: '24.6K',
      label: 'Organic Clicks',
      title: 'How Energy Men Spa (NYC) Boosted Organic Traffic & Bookings with Targeted SEO',
      desc: 'Targeted local and national SEO strategy drove 37.1K sessions with 51.9% engagement rate and 11.9K conversions through optimized content and authority building.',
    },
  ];

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-header">
          <div>
            <h2 className="section-h2">Case <span className="italic-orange">Studies</span></h2>
            <p className="section-p" style={{ marginTop: '8px' }}>Real data. Real growth. High-impact results.</p>
          </div>
          <a href="#" className="case-link">View All Case Studies →</a>
        </div>

        <div className="case-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {studies.map((study, i) => (
            <div key={i} className="case-card">
              <div className="case-card-header">
                <div className="case-tag">{study.tag}</div>
                <div className="case-metric">
                  <div className="case-metric-num">{study.metric}</div>
                  <div className="case-metric-label">{study.label}</div>
                </div>
              </div>
              <h4 className="case-card-h4">{study.title}</h4>
              <p className="case-card-p">{study.desc}</p>

              {study.stats && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  padding: '16px',
                  background: '#faf8ff',
                  borderRadius: '12px',
                  border: '1px solid #f0eeff',
                }}>
                  {study.stats.map((s, j) => (
                    <div key={j} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#ff6600', lineHeight: 1.2 }}>{s.num}</div>
                      <div style={{ fontSize: '10px', fontWeight: 600, color: '#999', marginTop: '4px', lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
