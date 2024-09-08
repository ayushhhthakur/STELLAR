// src/pages/Homepage.jsx
import React from 'react';
import '../styles/components/Homepage.css';
import '../styles/components/HeroBanner.css';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import Content from '../components/Content';
import AboutPage from './AboutPage';
import ServiceCard from '../components/ServiceCard';


const Homepage = () => (
  <div className="homepage">
    <Navbar />
    <HeroBanner />
    <Content/>
    <ServiceCard/>
    <AboutPage />
    <Footer/>
  </div>
);

export default Homepage;
