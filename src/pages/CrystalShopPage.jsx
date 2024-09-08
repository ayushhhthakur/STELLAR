import React from 'react';
import image1 from '../assets/images/image1.jpg';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';

const CrystalShopPage = () => {
  return (
    <div>
      <Navbar />
      <ProductCard shop_title='Shop Now!'/>
    </div>
  );
};

export default CrystalShopPage;
