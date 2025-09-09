import React from 'react';

const FeaturedProducts = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Midnight Elegance', price: '$89', bestseller: true },
    { id: 2, name: 'Golden Dawn', price: '$95', bestseller: false },
    { id: 3, name: 'Velvet Dreams', price: '$78', bestseller: true },
    { id: 4, name: 'Ocean Breeze', price: '$82', bestseller: false }
  ];

  return (
    <section className="featured-products">
      <div className="container">
        <h2>Our Bestsellers</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              {product.bestseller && <span className="bestseller-badge">Bestseller</span>}
              <img src="/images/p8.jpeg" alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button 
                className="add-to-cart"
                onClick={() => onAddToCart(product)}
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;