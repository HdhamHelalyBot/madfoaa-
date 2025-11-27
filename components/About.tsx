
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const About = () => {
  const { t } = useAppContext();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-yellow-400 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('about.content')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
