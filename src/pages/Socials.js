import React from 'react';

const SocialsPage = () => (
  <div className="socials-page">
    <div className="container">
      <h1>Connect With Us</h1>
      <p className="socials-subtitle">Join our community and stay updated with the latest fragrance trends</p>
      
      <div className="social-grid">
        <div className="social-card">
          <h2>📘 Facebook</h2>
          <p>Follow us for daily fragrance tips and behind-the-scenes content</p>
          <button className="social-button">Follow on Facebook</button>
        </div>
        <div className="social-card">
          <h2>📷 Instagram</h2>
          <p>Discover our latest collections and customer stories</p>
          <button className="social-button">Follow on Instagram</button>
        </div>
        <div className="social-card">
          <h2>🐦 Twitter</h2>
          <p>Get the latest updates and exclusive offers</p>
          <button className="social-button">Follow on Twitter</button>
        </div>
      </div>
      
      <div className="instagram-feed">
        <h2>From Our Instagram</h2>
        <div className="feed-grid">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="feed-item">
              <img src="/images/p8.jpeg" alt={`Instagram post ${i}`} />
              <div className="feed-overlay">
                <span>❤️ 234</span>
                <span>💬 12</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SocialsPage;