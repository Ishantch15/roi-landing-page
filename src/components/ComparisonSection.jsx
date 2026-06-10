const comparisonRows = [
  { feature: 'Optimization Focus', trad: 'Keywords & Rankings', roi: 'AI Answers & Revenue ROI', free: 'Basic On-Page' },
  { feature: 'Search Channels', trad: 'Google & Bing', roi: 'Google, ChatGPT, Gemini', free: 'Google Only' },
  { feature: 'Transparency', trad: 'Monthly Static PDF', roi: 'Real-Time Project Dashboard', free: 'Inconsistent Email' },
  { feature: 'Implementation', trad: '"Advice" Only', roi: 'Hands-on Technical Execution', free: 'Scope Limited' },
  { feature: 'Strategic Level', trad: 'Junior-Managed', roi: 'Senior-Only Leadership', free: 'Varies Greatly' },
];

export default function ComparisonSection() {
  return (
    <section className="comparison">
      <div className="comparison-container">
        <div className="section-header">
          <h2 className="section-h2" style={{ marginTop: '-55px' }}>Traditional Agencies <span className="italic-orange">vs. ROI Spectrum</span></h2>
        </div>

        <div className="comparison-wrapper">
          <div className="comparison-header">
            <div className="comparison-header-cell">Service Feature</div>
            <div className="comparison-header-cell" style={{ opacity: 0.55 }}>Traditional Agency</div>
            <div className="comparison-header-cell col-highlight">ROI Spectrum (AEO+SEO)</div>
            <div className="comparison-header-cell" style={{ opacity: 0.55 }}>Freelancers</div>
          </div>

          {comparisonRows.map((row, i) => (
            <div key={i} className="comparison-row">
              <div className="comparison-cell col-feature">{row.feature}</div>
              <div className="comparison-cell col-muted">{row.trad}</div>
              <div className="comparison-cell col-highlight">{row.roi}</div>
              <div className="comparison-cell col-muted">{row.free}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
