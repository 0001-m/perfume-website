import React from 'react';

const ShopPage = ({ onAddToCart }) => {
  const allProducts = [
    { id: 1, name: 'Midnight Elegance', price: '$89', category: 'Women' },
    { id: 2, name: 'Golden Dawn', price: '$95', category: 'Unisex' },
    { id: 3, name: 'Velvet Dreams', price: '$78', category: 'Women' },
    { id: 4, name: 'Ocean Breeze', price: '$82', category: 'Men' },
    { id: 5, name: 'Royal Oud', price: '$120', category: 'Unisex' },
    { id: 6, name: 'Fresh Morning', price: '$65', category: 'Men' },
    { id: 7, name: 'Rose Paradise', price: '$98', category: 'Women' },
    { id: 8, name: 'Black Diamond', price: '$135', category: 'Unisex' }
  ];

  return (
    <div className="shop-page">
      <div className="container">
        <h1>Our Complete Collection</h1>
        <p className="shop-subtitle">Discover your perfect fragrance from our curated selection</p>
        
        <div className="products-grid">
          {allProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src="/images/p8.jpeg" alt={product.name} />
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
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
    </div>
  );
};

export default ShopPage;