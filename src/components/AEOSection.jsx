import { MessageCircle, Sparkles, Brain } from 'lucide-react';
import CountUp from './CountUp';

export default function AEOSection() {
  const aeoItems = [
    { icon: <MessageCircle size={22} color="#ff6600" />, title: 'ChatGPT Optimization', desc: 'Ensuring your brand is the primary recommendation for conversational AI.' },
    { icon: <Sparkles size={22} color="#ff6600" />, title: 'SGE Visibility', desc: "Dominating Google's Search Generative Experience AI snapshots." },
    { icon: <Brain size={22} color="#ff6600" />, title: 'Semantic Authority', desc: 'Building the knowledge graph connections that modern LLMs use.' }
  ];

  return (
    <section className="aeo">
      <div className="aeo-container">
        <div className="aeo-grid">
          <div className="aeo-left">
            <h2 className="aeo-h2">
              Why SEO Alone Is <span className="italic-orange">No<br />Longer Enough</span>
            </h2>
            <p className="aeo-p">
              We are entering the era of Answer Engine Optimization. Users are moving away from traditional lists of links and towards direct answers provided by platforms like ChatGPT, Gemini, and Perplexity.
            </p>
            <div className="stat-grid">
              <div className="stat-box">
                <div className="stat-num"><CountUp target={40} suffix="%" /></div>
                <div className="stat-label">Decrease in Traditional CTR</div>
              </div>
              <div className="stat-box">
                <div className="stat-num"><CountUp target={65} suffix="%" /></div>
                <div className="stat-label">Users Trust AI Answers</div>
              </div>
            </div>
          </div>

          <div className="aeo-items">
            {aeoItems.map((item, i) => (
              <div key={i} className="aeo-item">
                <div className="aeo-icon">{item.icon}</div>
                <div className="aeo-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
