
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const Hero = () => {
  const { t } = useAppContext();

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
       <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <img src="https://picsum.photos/1600/900?random=1" alt="Digital Payments" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8 drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
          {t('hero.cta')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
