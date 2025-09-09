import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';

const HomePage = ({ onAddToCart }) => (
  <div className="home-page">
    <Hero />
    <FeaturedProducts onAddToCart={onAddToCart} />
    <Testimonials />
  </div>
);

export default HomePage;