import React from 'react';

const FeaturedProducts = ({ onAddToCart }) => {
  const products = [
    { 
      id: 1, 
      name: 'Midnight Elegance', 
      price: '$89', 
      originalPrice: '$110',
      bestseller: true,
      category: 'Eau de Parfum',
      description: 'A sophisticated blend of bergamot and black vanilla',
      image: '/images/p1.jpeg'
    },
    { 
      id: 2, 
      name: 'Golden Dawn', 
      price: '$95', 
      bestseller: false,
      category: 'Eau de Toilette',
      description: 'Fresh citrus notes with warm amber undertones',
      image: '/images/p2.jpeg'
    },
    { 
      id: 3, 
      name: 'Velvet Dreams', 
      price: '$78', 
      originalPrice: '$95',
      bestseller: true,
      category: 'Eau de Parfum',
      description: 'Luxurious rose and sandalwood harmony',
      image: '/images/p3.jpeg'
    },
    { 
      id: 4, 
      name: 'Ocean Breeze', 
      price: '$82', 
      bestseller: false,
      category: 'Eau Fraiche',
      description: 'Refreshing marine accord with white musk',
      image: '/images/p4.jpeg'
    }
  ];

  return (
    <section className="featured-products">
      <div className="container">
        <h2>Signature Collection</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              {product.bestseller && <span className="bestseller-badge">Bestseller</span>}
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="price-container">
                  <span className="price">{product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
                <button 
                  className="add-to-cart"
                  onClick={() => onAddToCart(product)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"/>
                  </svg>
                  Add to Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;