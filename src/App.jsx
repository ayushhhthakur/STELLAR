import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Pricing from './pages/Pricing';
import BookingForm from './components/BookingForm';
import CrystalShopPage from './pages/CrystalShopPage';
import PagesBlogPage from './pages/PagesBlogPage';
import ServiceCard from './components/ServiceCard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="/crystal-shop" element={<CrystalShopPage />} />
      <Route path="/blogpage" element={<PagesBlogPage />} />
      <Route path="/services" element={<ServiceCard/>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
