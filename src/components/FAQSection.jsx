export default function FAQSection({ openFAQ, toggleFAQ }) {
  const faqItems = [
    {
      question: "What is ROI marketing?",
      answer: "ROI (Return on Investment) marketing focuses on generating measurable business results from your marketing efforts. Instead of tracking vanity metrics like impressions or clicks alone, ROI marketing measures revenue, leads, customer acquisition, and overall profitability."
    },
    {
      question: "How do you improve marketing ROI?",
      answer: "We improve marketing ROI through data-driven strategies, audience targeting, conversion rate optimization, performance tracking, and continuous campaign refinement. Every decision is based on measurable outcomes rather than assumptions."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on your industry, competition, and marketing channels. Paid advertising can generate leads within days, while SEO typically requires 3–6 months to build sustainable organic growth."
    },
    {
      question: "Which marketing channels deliver the highest ROI?",
      answer: "The best-performing channels depend on your business goals. Common high-ROI channels include SEO, Google Ads, email marketing, content marketing, social media advertising, and conversion optimization."
    },
    {
      question: "How do you measure ROI?",
      answer: "ROI is calculated by comparing the revenue generated from marketing activities against the cost of those activities. We track key metrics such as leads, conversions, customer acquisition cost (CAC), and revenue growth."
    },
    {
      question: "Is SEO still worth investing in?",
      answer: "Yes. SEO remains one of the most cost-effective long-term marketing strategies because it generates qualified organic traffic, increases brand visibility, and reduces dependence on paid advertising over time."
    },
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer: "AEO is the process of optimizing your content so that AI-powered search engines and chatbots (like ChatGPT, Claude, and Google Gemini) can easily understand and recommend your brand as the primary answer to user queries."
    },
    {
      question: "Can you work with businesses of all sizes?",
      answer: "Yes. We work with startups, small businesses, growing companies, and established enterprises. Our strategies are customized based on your goals, budget, and market opportunities."
    },
    {
      question: "Do you provide ongoing reporting?",
      answer: "Absolutely. We provide transparent reporting and performance insights so you can clearly understand campaign progress, ROI, and opportunities for further growth."
    },
    {
      question: "How much should I invest in marketing?",
      answer: "The ideal budget depends on your goals, industry competitiveness, and growth targets. We help determine a budget that aligns with your expected return and business objectives."
    },
    {
      question: "What makes your approach different?",
      answer: "Our approach combines analytics, customer insights, conversion optimization, and performance marketing to create sustainable business growth rather than short-term wins."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple. Schedule a consultation, discuss your goals, and we'll create a customized strategy designed to maximize your marketing ROI."
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-h3">Questions? <span className="italic-orange">Answers.</span></h2>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {faqItems.slice(0, 6).map((item, i) => (
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
            {faqItems.slice(6).map((item, i) => (
              <div key={i + 6} className="faq-item">
                <button className="faq-toggle" onClick={() => toggleFAQ(i + 6)}>
                  <span className="faq-question">{item.question}</span>
                  <span className={`faq-chevron ${openFAQ === i + 6 ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFAQ === i + 6 ? 'open' : ''}`}>
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
