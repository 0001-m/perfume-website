import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Get in Touch</h1>
        <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <strong>📧 Email:</strong>
              <p>hello@luxeaura.com</p>
            </div>
            <div className="contact-item">
              <strong>📞 Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <strong>📍 Address:</strong>
              <p>123 Fragrance Avenue<br/>New York, NY 10001</p>
            </div>
            <div className="contact-item">
              <strong>🕒 Hours:</strong>
              <p>Monday - Friday: 9AM - 6PM<br/>Saturday - Sunday: 10AM - 4PM</p>
            </div>

            <div className="contact-image">
              <img src="/images/p8.jpeg" alt="Contact us" />
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <div className="form-group">
              <input 
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="submit-button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;