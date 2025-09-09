import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Sarah Mitchell", 
      rating: 5, 
      text: "The craftsmanship in every bottle is extraordinary. Midnight Elegance has become my signature scent - I receive compliments everywhere I go.",
      location: "New York, NY",
      verified: true
    },
    { 
      name: "Michael Rodriguez", 
      rating: 5, 
      text: "As someone who collects fine fragrances, I can confidently say  AURA PERFUMES rivals the most prestigious houses. The quality is unmatched.",
      location: "Los Angeles, CA",
      verified: true
    },
    { 
      name: "Emma Laurent", 
      rating: 5, 
      text: "Not only does it smell divine, but the packaging is absolutely stunning. It's luxury you can see, smell, and feel. Worth every penny!",
      location: "Paris, France",
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Loved by Connoisseurs</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {renderStars(testimonial.rating)}
              <p>"{testimonial.text}"</p>
              <div className="customer-info">
                <span className="customer-name">— {testimonial.name}</span>
                {testimonial.verified && (
                  <div className="verified-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2L13.09,8.26L22,9L17.5,13.74L18.18,21L12,17.77L5.82,21L6.5,13.74L2,9L10.91,8.26L12,2Z" />
                    </svg>
                    Verified Purchase
                  </div>
                )}
                <span className="customer-location">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <p>Join thousands of satisfied customers</p>
          <button className="cta-secondary">
            Read More Reviews
            <svg style={{ marginLeft: '8px' }} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;