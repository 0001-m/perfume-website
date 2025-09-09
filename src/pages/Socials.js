import React from 'react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaPinterest 
} from 'react-icons/fa';
import { FaXTwitter, FaSnapchat } from 'react-icons/fa6';

const SocialsPage = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      description: 'Follow us for daily fragrance tips and behind-the-scenes content from our luxury collection.',
      buttonText: 'Follow on Facebook',
      url: 'https://facebook.com/auraperfumes',
      color: '#1877F2',
      followers: '12K+'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      description: 'Discover our latest collections, customer stories, and exclusive fragrance photography.',
      buttonText: 'Follow on Instagram',
      url: 'https://instagram.com/luxeaura',
      color: '#E4405F',
      followers: '25K+'
    },

    {
      name: 'Pinterest',
      icon: <FaPinterest />,
      description: 'Find inspiration with our curated boards of fragrance pairings and luxury lifestyle.',
      buttonText: 'Follow on Pinterest',
      url: 'https://pinterest.com/luxeaura',
      color: '#BD081C',
      followers: '15K+'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      description: 'Watch exclusive fragrance reviews, tutorials, and behind-the-scenes content.',
      buttonText: 'Subscribe on YouTube',
      url: 'https://youtube.com/@luxeaura',
      color: '#FF0000',
      followers: '18K+'
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="socials-page">
      <div className="container">
        <h1>Connect With AURA PERFUMES</h1>
        <p className="socials-subtitle">
          Join our community and stay updated with the latest fragrance trends, 
          exclusive launches, and behind-the-scenes content
        </p>
        
        <div className="social-grid">
          {socialPlatforms.map((platform, index) => (
            <div 
              key={index} 
              className="social-card"
              style={{ '--platform-color': platform.color }}
            >
              <div className="social-card-header">
                <div className="social-icon-wrapper">
                  {platform.icon}
                </div>
                <div className="social-info">
                  <h2>{platform.name}</h2>
                  <span className="follower-count">{platform.followers} followers</span>
                </div>
              </div>
              
              <p className="social-description">{platform.description}</p>
              
              <button 
                className="social-button"
                onClick={() => handleSocialClick(platform.url)}
                aria-label={`${platform.buttonText} - Opens in new tab`}
              >
                <span>{platform.buttonText}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="social-cta-section">
          <h3>Stay Connected</h3>
          <p>Don't miss out on exclusive content, early access to new fragrances, and special community perks.</p>
          <div className="social-stats">
            <div className="stat-item">
              <strong>50K+</strong>
              <span>Total Followers</span>
            </div>
            <div className="stat-item">
              <strong>Daily</strong>
              <span>Updates</span>
            </div>
            <div className="stat-item">
              <strong>Exclusive</strong>
              <span>Content</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsPage