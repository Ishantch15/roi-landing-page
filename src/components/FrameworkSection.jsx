import { Monitor, Target, Shield, MapPin } from 'lucide-react';

export default function FrameworkSection({ openModal }) {
  const cards = [
    {
      icon: <Monitor size={22} color="#ff6600" />,
      title: 'Advanced Technical SEO',
      items: [
        'Lightning-fast page speeds that Google loves',
        "Mobile-first architecture for today's users",
        'Schema markup that makes you stand out',
        'Core Web Vitals optimization',
      ]
    },
    {
      icon: <Target size={22} color="#ff6600" />,
      title: 'Content That Converts',
      items: [
        'AI-powered keyword research',
        'Intent-focused content strategies',
        'Topic clusters that dominate SERPs',
        'Engaging copy that drives action',
      ]
    },
    {
      icon: <Shield size={22} color="#ff6600" />,
      title: 'Authority Building',
      items: [
        'White-hat link-building campaigns',
        'Digital PR that amplifies your brand',
        'Strategic partnerships that matter',
        'Thought leadership positioning',
      ]
    },
    {
      icon: <MapPin size={22} color="#ff6600" />,
      title: 'Local Domination',
      items: [
        'Google Business Profile optimization',
        'Local citation management',
        'Review generation strategies',
        'Geo-targeted content creation',
      ]
    },
  ];

  return (
    <section className="framework">
      <div className="framework-container">
        <div className="section-header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          <div>
            <h2 className="section-h2" style={{ textAlign: 'left' }}>Our SEO Mastery <span className="italic-orange">in Action</span></h2>
            <p className="section-p" style={{ textAlign: 'left', marginTop: '8px', marginLeft: '4px' }}>Technical Excellence Meets Creative Strategy</p>
          </div>
          <button className="roi-btn roi-btn-primary" style={{ padding: '14px 28px', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0, marginBottom: '28px' }} onClick={openModal}>
            Start Your SEO Campaign
          </button>
        </div>

        <div className="framework-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {cards.map((card, i) => (
            <div key={i} className="phase-card" style={{ padding: '32px 28px' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px', width: '48px', height: '48px', background: 'rgba(255,102,0,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.icon}
              </div>
              <h4 className="phase-h4" style={{ marginBottom: '20px' }}>{card.title}</h4>
              <ul className="phase-list">
                {card.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: '#666', marginBottom: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ff6600', fontWeight: 700, marginTop: '1px' }}>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
