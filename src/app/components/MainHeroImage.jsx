import React from 'react';
import config from './config/index.json';

const MainHeroImage = ({ webData }) => {
  const mainHero = webData?.home || config.mainHero; // Use webData if available, else fallback to config

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={mainHero.imagen || mainHero.img} // Fallback to a default image if none is provided
        alt="hero section image"
      />
    </div>
  );
};

export default MainHeroImage;
