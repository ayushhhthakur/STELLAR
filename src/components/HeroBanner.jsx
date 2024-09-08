import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import backgroundImage from '../assets/images/background.jpg';
import background from '../assets/images/background2.jpg';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className='content'>
        <img src={backgroundImage} alt="Example" className='background-image' />

        <h1 className='h1tag'>
          Explore the Universe with STELLAR
        </h1>
      </div>
      <p className='p' >At STELLAR, we believe in the magic of the universe's plan for each individual. Our mission is to help you discover your true self, embrace your life's purpose, and navigate the infinite possibilities that lie ahead through the art of Tarot Reading and Numerology.</p>
      <div className='buttons flex flex-col items-center gap-2 md:flex-row md:items-start'>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Subscribe to the newsletter →
        </button>
        

        <Link id="booking-btn" to="/BookingForm">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mb-2"
          >
            SCHEDULE NOW
          </button>
        </Link>
      </div>

      <img src={background} alt="Example2" className='background-image2' />
    </div>

  );
}

export default HeroBanner;
