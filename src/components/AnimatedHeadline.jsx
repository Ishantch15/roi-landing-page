export default function AnimatedHeadline() {
  const words1 = ["Get", "More", "Leads", "From", "Google,"];
  const words2 = ["ChatGPT", "&", "AI", "Search"];

  return (
    <span style={{ display: 'block' }}>
      {/* Line 1 - white words */}
      <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
        {words1.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `letterReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.3 + i * 0.1}s forwards`,
              marginRight: '0.22em',
            }}
          >
            {word}
          </span>
        ))}
      </span>

      {/* Line 2 - orange italic words */}
      <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
        {words2.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `letterReveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.3 + (words1.length + i) * 0.1}s forwards`,
              marginRight: i < words2.length - 1 ? '0.22em' : '0',
              color: '#ff6600',
              fontStyle: 'italic',
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
