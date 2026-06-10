import { Bot, Eye, Users, Zap, CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { icon: <Bot size={32} color="#ff6600" />, title: 'AI Recommendations', desc: 'Proprietary tools for AEO optimization.' },
    { icon: <Eye size={32} color="#ff6600" />, title: 'Total Transparency', desc: 'Real-time access to every task and metric.' },
    { icon: <Users size={32} color="#ff6600" />, title: 'Senior Expertise', desc: 'No juniors. Senior-only account strategy.' },
    { icon: <Zap size={32} color="#ff6600" />, title: 'Execution Velocity', desc: 'Rapid changes that impact ROI faster.' },
    { icon: <CheckCircle size={32} color="#ff6600" />, title: 'Guaranteed Results', desc: 'We tie our success to your growth.' }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-h2" style={{ marginTop: '-55px' }}>What Makes <span className="orange">ROI Spectrum</span> Different?</h2>
        </div>

        <div className="grid-5">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-h4">{feature.title}</h4>
              <p className="feature-p">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
