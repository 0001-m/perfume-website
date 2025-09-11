import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaPaperPlane,
  FaUser,
  FaComments
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'auraperfumes@gmail.com',
      subContent: 'We typically respond within 24 hours'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 (555) 123-4567',
      subContent: 'Available during business hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: '123 Fragrance Avenue',
      subContent: 'Mumbai, MH 110001'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      content: 'Monday - Friday: 9AM - 6PM',
      subContent: 'Saturday - Sunday: 10AM - 4PM'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-header">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of the following channels</p>
            </div>
            
            <div className="contact-items">
              {contactItems.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <strong>{item.title}</strong>
                    <p className="main-content">{item.content}</p>
                    <p className="sub-content">{item.subContent}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-image">
              <img src="/images/p8.jpeg" alt="Luxury perfume collection" />
              <div className="image-overlay">
                <h4 style={{ color: "white" }}>Visit Our Showroom</h4>

                <p>Experience our full collection in person</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-header">
              <FaComments className="form-icon" />
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input 
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={formData.name ? 'filled' : ''}
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={formData.email ? 'filled' : ''}
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <FaComments className="input-icon textarea-icon" />
                <textarea 
                  placeholder="Tell us about your inquiry, questions, or feedback..."
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={formData.message ? 'filled' : ''}
                ></textarea>
              </div>
            </div>
            
            <button 
              onClick={handleSubmit} 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
            
            <div className="form-footer">
              <p>We respect your privacy. Your information will never be shared.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;