import React, { useRef, useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    { name: 'Simon Kerr', rating: 5, text: 'Very happy with the service and final product. The team was very patient with me and accommodated all my requests. Looking forward to continuing the relationship', initials: 'SK' },
    { name: 'Selvi Rajain', rating: 5, text: 'Good communication and fast reply excellent service. I recommend everyone. Thanks for your excellent service.', initials: 'SR' },
    { name: 'Sean', rating: 4, text: 'Great to work with from start to finish. Will be working with them again on future projects.', initials: 'S' },
    { name: 'Beau Harich', rating: 5, text: 'Great communication through the entire process which made the website production a smooth and timely process. Very happy with the result and will be definitely using them again in the future.', initials: 'BH' },
    { name: 'Raja Arshad', rating: 5, text: "I recently hired X-Strategy for my business website and I am beyond satisfied. If you're searching for a best designer they are the team to go with. Thank you so much for transforming my online presence.", initials: 'RA' },
    { name: 'Patel Car Rentals', rating: 5, text: "I'm using X-Strategy Services since 1 year and very good customer service. Team are always ready to help anytime with excellent service. Thanks very much for your help building my car rental website. I would recommend this business for digital marketing and website development.", initials: 'PC' },
    { name: 'Maya Nujam', rating: 4, text: 'Very professional and great final result. I was satisfied working with them!', initials: 'MN' },
    { name: 'Doobi Nathan', rating: 5, text: 'Great service, thanks very much. Excellent rankings.', initials: 'DN' },
  ];

  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const posRef = useRef(0);
  const isPausedRef = useRef(false);
  const [cardWidth, setCardWidth] = useState(0);
  const SPEED = 0.6; // px per frame — adjust for faster/slower

  // Duplicate cards: original + clone for seamless loop
  const allCards = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateCardWidth = () => {
      const firstCard = track.querySelector('.t-card');
      if (firstCard) {
        const gap = 24;
        setCardWidth(firstCard.offsetWidth + gap);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  useEffect(() => {
    if (!cardWidth) return;
    const track = trackRef.current;
    const totalOriginalWidth = cardWidth * testimonials.length;

    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current += SPEED;
        // When we've scrolled through all original cards, jump back silently
        if (posRef.current >= totalOriginalWidth) {
          posRef.current -= totalOriginalWidth;
        }
        if (track) {
          track.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [cardWidth, testimonials.length]);

  const StarRating = ({ rating }) => (
    <div style={{ display: 'flex', gap: 4 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: '#ff6600', fontSize: 18 }}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-h2">
            What Our <span className="orange">Client's Say</span> About Us
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#ff6600', fontSize: '22px' }}>★</span>
              ))}
            </div>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>4.8</span>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a' }}>/ 5 Rating</span>
          </div>
        </div>

        {/* Outer wrapper clips overflow */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          {/* Track holds original + cloned cards side by side */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: 24,
              willChange: 'transform',
              width: 'max-content',
            }}
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
          >
            {allCards.map((t, i) => (
              <div
                key={i}
                className="t-card"
                style={{
                  flexShrink: 0,
                  width: 'min(340px, 80vw)',
                  background: 'white',
                  border: '2px solid #ddd',
                  borderRadius: 20,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#ff6600';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,102,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Avatar */}
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#ff6600,#ff9933)',
                  color: 'white', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontWeight: 700, fontSize: 16,
                  boxShadow: '0 4px 12px rgba(255,102,0,0.3)',
                }}>
                  {t.initials}
                </div>

                <StarRating rating={t.rating} />

                <p style={{ fontWeight: 700, fontSize: 16, color: '#1a1a1a', margin: 0, textAlign: 'left' }}>
                  {t.name}
                </p>
                <p style={{ fontSize: 16, color: '#444', lineHeight: 1.65, margin: 0, fontWeight: 400, textAlign: 'left' }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
