export default function FAQSection({ openFAQ, toggleFAQ }) {
  const faqItems = [
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "AEO is the process of optimizing your content so that AI-powered search engines and chatbots (like ChatGPT, Claude, and Google Gemini) can easily understand and recommend your brand as the primary answer to user queries."
    },
    {
      question: "How long does it take to see ROI?",
      answer: "While SEO is a long-term play, our precision framework typically yields measurable 'leading indicators' within the first 45-60 days, with substantial lead volume increases appearing around the 4-month mark."
    },
    {
      question: "Do you handle technical implementation?",
      answer: "Yes. Unlike agencies that just provide a PDF of 'recommendations,' our tech team works directly with your developers (or handles it ourselves) to ensure fixes are actually deployed."
    }
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-h2">Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {faqItems.slice(0, 2).map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-toggle" onClick={() => toggleFAQ(i)}>
                  <span className="faq-question">{item.question}</span>
                  <span className={`faq-chevron ${openFAQ === i ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFAQ === i ? 'open' : ''}`}>
                  <div className="faq-answer-text">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-column">
            {faqItems.slice(2).map((item, i) => (
              <div key={i + 2} className="faq-item">
                <button className="faq-toggle" onClick={() => toggleFAQ(i + 2)}>
                  <span className="faq-question">{item.question}</span>
                  <span className={`faq-chevron ${openFAQ === i + 2 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFAQ === i + 2 ? 'open' : ''}`}>
                  <div className="faq-answer-text">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
