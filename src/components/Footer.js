import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>LUXE AURA</h3>
          <p>Crafting luxury fragrances since 2020</p>
          <div className="social-links">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>About Us</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>FAQ</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Returns</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📧 hello@luxeaura.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 New York, NY</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Luxe Aura. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;