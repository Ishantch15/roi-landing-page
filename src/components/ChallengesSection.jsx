import { Search, Bot, Zap, BarChart2, Settings, Brain } from 'lucide-react';

export default function ChallengesSection() {
  const challenges = [
    { icon: <Search size={28} />, title: 'Visibility Gap', desc: "92% of users don't scroll past page 1 of Google results." },
    { icon: <Bot size={28} />, title: 'AI Erosion', desc: 'AI Search now answers 40% of queries directly, bypassing your site.' },
    { icon: <Zap size={28} />, title: 'Conversion Leak', desc: 'Poor UX kills conversion faster than low traffic volume ever could.' },
    { icon: <BarChart2 size={28} />, title: 'Legacy Tracking', desc: 'Relying on vanity metrics like "clicks" instead of actual pipeline revenue.' },
    { icon: <Settings size={28} />, title: 'Technical Debt', desc: 'Slow page speeds and mobile friction hurting your organic authority.' },
    { icon: <Brain size={28} />, title: 'Semantic Discord', desc: 'Content that fails to answer the user intent that modern LLMs prioritize.' },
  ];

  return (
    <section className="challenges">
      <div className="challenges-container">
        <div className="section-header">
          <h2 className="section-h2">Is Your Website <span className="orange">Costing You</span> Customers?</h2>
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
  );
}
