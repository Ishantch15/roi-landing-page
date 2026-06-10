export default function RealResultsSection() {
  const results = [
    {
      stat: '40%',
      title: 'Lower Acquisition Costs',
      desc: 'Brands that invest in a well-executed SEO strategy see their cost-per-acquisition drop by an average of 40%—all while organic leads keep climbing.'
    },
    {
      stat: '50%',
      title: 'Less Spent on Ads',
      desc: 'Over-reliance on paid ads can drain your budget fast. A strong SEO foundation steadily replaces that spend, helping you redirect funds where they matter most.'
    },
    {
      stat: '10x',
      title: 'Return Within 12 Months',
      desc: 'Many businesses report seeing a double return on investment in just the first year, proving that quality SEO pays for itself—and then some.'
    },
    {
      stat: '80%',
      title: 'Reduction in Time Spent on "Fixes"',
      desc: 'Cheap tactics often lead to hidden penalties and endless patch-ups. With a trusted agency from the start, you avoid costly cleanups and wasted effort down the line.'
    },
  ];

  return (
    <section style={{ background: 'white', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="section-header">
          <h2 className="section-h2">Real Results. Real Savings. </h2>
        </div>

        <div
          className="real-results-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '48px' }}
        >
          {results.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                border: '1.5px solid #ff6600',
                borderRadius: '20px',
                padding: '36px 28px',
                textAlign: 'center',
                transition: 'all 0.3s',
                boxShadow: '0 2px 8px rgba(255,102,0,0.06)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,102,0,0.15)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,102,0,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '52px', fontWeight: 800, color: '#ff6600', marginBottom: '12px', letterSpacing: '-1px' }}>
                {item.stat}
              </div>
              <h4 style={{ fontWeight: 700, fontSize: '18px', color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.3 }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
