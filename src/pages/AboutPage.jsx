import React from 'react';
import image1 from '../assets/images/image1.jpg';
import image11 from '../assets/images/image11.jpg';
import Navbar from '../components/Navbar';
import "../styles/components/AboutPage.css"

const AboutPage = () => {
 
  return (
    <>
    <Navbar/>
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xxl lg:grid lg:grid-cols-2 lg:py-16 lg:px-8">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Story: Expert Tarot Readings and Curated Crystals</h2>
            <p id='text-center' className="mb-4">At STELLAR, we offer a profound and enlightening journey through our expert tarot card services. Our experienced readers provide insightful and personalized readings, helping you navigate life's questions and discover your true path. In addition to our tarot services, explore our exclusive collection of crystals, each selected for its unique energy and healing properties.</p>
            <p id='text-center'> Shop with us to enhance your spiritual practice and bring balance and clarity into your life with our carefully curated crystal offerings.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-20">
            <img className="w-full rounded-lg" src={image1} alt="office content 1"/>
            <img className="mt-7 w-full lg:mt-10 rounded-lg" src={image11} alt="office content 2"/>
        </div>
    </div>
</section>
    </>
   
  );
};

export default AboutPage;
