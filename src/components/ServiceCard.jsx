import React from "react";
import image1 from '../assets/png/eye.png';
import image2 from '../assets/png/eye2.png';
import image3 from '../assets/png/diamond.png';
import image4 from '../assets/png/magic.png';
import image5 from '../assets/png/tarot-card.png';
import image6 from '../assets/png/tarot.png';
import Navbar from "./Navbar";

const Service = ({ title, details, icon }) => {
  return (
    <>
    
     <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-lg bg-white p-10 shadow-lg dark:bg-dark-2">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-body-color dark:text-dark-6">
          {details}
        </p>
      </div>
    </div>
    </>
   
  );
};

const ServiceCard = () => {
  return (
    <>
    <Navbar />
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Explore our range of services, meticulously crafted to meet your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <Service
            title="Mystical Insights"
            details="Gain deep insights into your life with our tarot reading services."
            icon={<img src={image1} alt="Mystical Insights Icon" className="h-12 w-12" />}
          />
          <Service
            title="Astrological Guidance"
            details="Receive guidance based on your astrological chart."
            icon={<img src={image2} alt="Astrological Guidance Icon" className="h-12 w-12" />}
          />
          <Service
            title="Crystal Healing"
            details="Heal and rejuvenate with our handpicked crystals."
            icon={<img src={image3} alt="Crystal Healing Icon" className="h-12 w-12" />}
          />
          <Service
            title="Spiritual Coaching"
            details="Achieve spiritual growth with personalized coaching."
            icon={<img src={image4} alt="Spiritual Coaching Icon" className="h-12 w-12" />}
          />
          <Service
            title="Tarot Reading"
            details="Unveil your future with our expert tarot readers."
            icon={<img src={image5} alt="Tarot Reading Icon" className="h-12 w-12" />}
          />
          <Service
            title="Intuitive Sessions"
            details="Connect with your inner self in our intuitive sessions."
            icon={<img src={image6} alt="Intuitive Sessions Icon" className="h-12 w-12" />}
          />
        </div>
      </div>
    </section>
    </>
    
  );
};

export default ServiceCard;
