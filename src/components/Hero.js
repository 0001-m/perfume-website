import React from 'react';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">Unveil Your Signature</h1>
        <p className="hero-subtitle">Where luxury meets artistry in every drop</p>
        <button className="cta-button">
          Explore Collection
          <svg style={{ marginLeft: '8px' }} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </button>
      </div>
      <div className="hero-image">
        <img src="/images/p8.jpeg" alt="Luxury Perfume Collection" />
      </div>
    </div>
  </section>
);

export default Hero;