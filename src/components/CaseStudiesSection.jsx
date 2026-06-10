import { Code2, ShoppingCart, HeartPulse, Landmark, GraduationCap, Home } from 'lucide-react';
export default function CaseStudiesSection() {
  const studies = [
    {
      tag: 'E-Commerce SEO',
      metric: '£5.1M',
      label: 'Attributed Goal Value',
      title: 'personalise-wholesaleblanks.co.uk: £5.1M Goal Value via Technical & Content SEO',
      desc: 'Technical fixes, entity-rich on-page updates, and internal linking grew organic impressions by +823.99K and clicks by +16.75K - with 6,200 conversions driven in the period.',
      href: 'https://roispectrum.com/blogs/seo-case-study-personalise-wholesaleblanks-co-uk',
      // stats: [
      //   { num: '105.9K', label: 'Total Sessions' },
      //   { num: '56.6K', label: 'Organic Sessions' },
      //   { num: '54%', label: 'Organic Share' },
      // ]
    },
    {
      tag: 'Local SEO · B2B',
      metric: '3.5x',
      label: 'ROI Achieved',
      title: 'MCA Group: 145% Traffic Growth for Commercial Cleaning Brand in Toronto & GTA',
      desc: '12-month multi-channel SEO campaign combining technical fixes, local SEO, topical authority content, and CRO drove a 145% increase in website traffic and 72% higher conversion rate.',
      href: 'https://roispectrum.com/blogs/mca-group-commercial-cleaning-toronto-gta',
      // stats: [
      //   { num: '+145%', label: 'Traffic Growth' },
      //   { num: '+72%', label: 'Conversion Rate' },
      //   { num: '3.5x', label: 'ROI' },
      // ]
    },
    {
      tag: 'Local SEO',
      metric: '8.2K',
      label: 'Sessions in 8 Months',
      title: 'North County Spa: Zero to 8.2K Organic Sessions in 8 Months',
      desc: '15 keywords ranking in Google Top 10 and 5.8K engaged sessions with 70%+ engagement rate  all within 8 months of campaign launch.',
      href: 'https://roispectrum.com/blogs/north-county-spa-8-month-seo-case-study',
      // stats: [
      //   { num: '15', label: 'Top 10 Keywords' },
      //   { num: '5.8K', label: 'Engaged Sessions' },
      //   { num: '70%+', label: 'Engagement Rate' },
      // ]
    },
    {
      tag: 'Health & Wellness',
      metric: '24.6K',
      label: 'Organic Clicks',
      title: 'Energy Men Spa (NYC): 37.1K Sessions & 11.9K Conversions via Targeted SEO',
      desc: 'Targeted local and national SEO strategy drove 37.1K sessions with 51.9% engagement rate and 11.9K conversions through optimised content and authority building.',
      href: 'https://roispectrum.com/blogs/energy-men-spa-nyc-seo-case-study',
      // stats: [
      //   { num: '37.1K', label: 'Total Sessions' },
      //   { num: '51.9%', label: 'Engagement Rate' },
      //   { num: '11.9K', label: 'Conversions' },
      // ]
    },
  ];

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-header">
          <div>
            <h2 className="section-h2" style={{ marginTop: '-55px' }}>Case <span className="italic-orange">Studies</span></h2>
            <p className="section-p" style={{ marginTop: '8px' }}>Real data. Real growth. High-impact results.</p>
          </div>

          <a href="https://roispectrum.com/blogs" className="case-link" target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start', marginTop: '-55px', whiteSpace: 'nowrap', fontSize: 'clamp(13px, 2vw, 16px)' }}>View All Case Studies →</a>
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


              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="case-link"
                style={{ marginTop: '4px', display: 'inline-block' }}
              >
                Read Case Study →
              </a>
            </div>
          ))}
        </div>
        {/* INDUSTRIES */}
        <div style={{ marginTop: '64px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, textAlign: 'left', marginBottom: '40px', color: '#1a1a1a' }}>
            Industries We've <span style={{ color: '#ff6600' }}>Transformed</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { icon: <Code2 size={20} color="#ff6600" />, title: 'Technology & SaaS', desc: 'Turning complex solutions into findable, bookable demos' },
              { icon: <ShoppingCart size={20} color="#ff6600" />, title: 'E-commerce & Retail', desc: 'From browsers to buyers with conversion-focused SEO' },
              { icon: <HeartPulse size={20} color="#ff6600" />, title: 'Healthcare & Wellness', desc: 'Connecting patients with providers they can trust' },
              { icon: <Landmark size={20} color="#ff6600" />, title: 'Financial Services', desc: 'Building authority in highly regulated industries' },
              { icon: <GraduationCap size={20} color="#ff6600" />, title: 'Education & EdTech', desc: 'Reaching learners at every stage of their journey' },
              { icon: <Home size={20} color="#ff6600" />, title: 'Real Estate', desc: 'Dominating local markets and luxury segments' },
            ].map((ind, i) => (
              <div key={i} style={{
                background: '#fafafa', border: '1px solid #ebebeb', borderRadius: '16px',
                padding: '24px 20px', transition: 'all 0.3s',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,102,0,0.4)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,102,0,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ebebeb'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,102,0,0.08)', border: '1px solid rgba(255,102,0,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>{ind.icon}</div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', textAlign: 'left' }}>{ind.title}</h4>
                <p style={{ fontSize: '16px', color: '#1a1a1a', lineHeight: 1.6, textAlign: 'left' }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
