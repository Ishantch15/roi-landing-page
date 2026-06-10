import heroVideo from '../assets/video.mp4';

export default function VideoSection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #e8e0f5 0%, #f5ede0 100%)',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* diagonal grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 60px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.15,
            letterSpacing: '-1px',
            fontFamily: "Arial,  sans-serif",
            marginTop: '-55px',
          }}>
            Smarter SEO. Real Results.
          </h2>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#ff6600',
            fontStyle: 'italic',
            lineHeight: 1.15,
            letterSpacing: '-1px',
            fontFamily: "Arial,  sans-serif",
          }}>
            See It in Action.
          </h2>
        </div>

        {/* Browser chrome video frame */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
        }}>
          {/* Browser top bar */}
          <div style={{
            background: '#f5f5f5',
            borderBottom: '1px solid #e8e8e8',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <div style={{ flex: 1, height: 24, background: '#e8e8e8', borderRadius: '6px', margin: '0 16px' }} />
            <div style={{ width: 28, height: 12, background: '#e0e0e0', borderRadius: '4px' }} />
            <div style={{ width: 20, height: 12, background: '#e0e0e0', borderRadius: '4px' }} />
            <div style={{ width: 24, height: 12, background: '#e0e0e0', borderRadius: '4px' }} />
          </div>

          {/* Video area */}
          <div style={{
            width: '100%',
            aspectRatio: '16/9',
            background: '#f9f9f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <video src={heroVideo} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
