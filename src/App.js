import React, { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import SocialsPage from './pages/Socials';
import ContactPage from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    alert(`${product.name} added to cart!`);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'shop':
        return <ShopPage onAddToCart={handleAddToCart} />;
      case 'socials':
        return <SocialsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;