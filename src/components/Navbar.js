import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage, cartCount }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'Shop', key: 'shop', hasDropdown: true },
    { name: 'Socials', key: 'socials' },
    { name: 'Contact', key: 'contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => setCurrentPage('home')}>
          LUXE AURA
        </div>
        
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.key} className="nav-item">
              {item.hasDropdown ? (
                <div 
                  className="dropdown"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span 
                    className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
                    onClick={() => setCurrentPage(item.key)}
                  >
                    {item.name} ▼
                  </span>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <a href="#" onClick={(e) => e.preventDefault()}>Men</a>
                      <a href="#" onClick={(e) => e.preventDefault()}>Women</a>
                      <a href="#" onClick={(e) => e.preventDefault()}>Unisex</a>
                      <a href="#" onClick={(e) => e.preventDefault()}>Gift Sets</a>
                    </div>
                  )}
                </div>
              ) : (
                <span 
                  className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
                  onClick={() => setCurrentPage(item.key)}
                >
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <span className="cart-icon">
            🛍️ <span className="cart-count">{cartCount}</span>
          </span>
          <span className="account-icon">👤</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;