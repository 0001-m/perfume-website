import React from 'react';

const ShopPage = ({ onAddToCart }) => {
  const allProducts = [
    { id: 1, name: 'Midnight Elegance', price: '$89', category: 'Women', image: '/images/p5.jpeg' },
    { id: 2, name: 'Golden Dawn', price: '$95', category: 'Unisex', image: '/images/p6.jpeg' },
    { id: 3, name: 'Velvet Dreams', price: '$78', category: 'Women', image: '/images/p7.jpeg' },
    { id: 4, name: 'Ocean Breeze', price: '$82', category: 'Men', image: '/images/p9.jpeg' },
    { id: 5, name: 'Royal Oud', price: '$120', category: 'Unisex', image: '/images/p10.jpeg' },
    { id: 6, name: 'Fresh Morning', price: '$65', category: 'Men', image: '/images/p11.jpeg' },
    { id: 7, name: 'Rose Paradise', price: '$98', category: 'Women', image: '/images/p12.jpeg' },
    { id: 8, name: 'Black Diamond', price: '$135', category: 'Unisex', image: '/images/p13.jpeg' }
  ];

  return (
    <div className="shop-page">
      <div className="container">
        <h1>Our Complete Collection</h1>
        <p className="shop-subtitle">Discover your perfect fragrance from our curated selection</p>
        
        <div className="products-grid">
          {allProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
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