import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah M.", rating: 5, text: "Absolutely love this fragrance! It lasts all day and I get compliments everywhere I go." },
    { name: "Michael R.", rating: 5, text: "The quality is exceptional. You can really smell the premium ingredients." },
    { name: "Emma L.", rating: 4, text: "Beautiful packaging and an even more beautiful scent. Highly recommend!" }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p>"{testimonial.text}"</p>
              <span className="customer-name">- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;