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
           AURA PERFUMES
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
                    {item.name}
                  </span>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <a href="#" onClick={(e) => e.preventDefault()}>Men's Collection</a>
                      <a href="#" onClick={(e) => e.preventDefault()}>Women's Collection</a>
                      <a href="#" onClick={(e) => e.preventDefault()}>Unisex Fragrances</a>
                      <a href="#" onClick={(e) => e.preventDefault()}>Limited Edition</a>
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
          <div className="cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <div className="account-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;