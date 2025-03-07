import React from 'react';
import config from './config/index.json';

const MainHero = ({ webData }) => {
  const mainHero = webData?.home || config.mainHero; // Use webData.home if available

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
        <span className="block xl:inline">{mainHero?.titulo}</span>{' '}
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {webData?.footer.slogan || "Descripcion o slogan"}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
      </div>
    </main>
  );
};

export default MainHero;
