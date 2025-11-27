
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { ServiceIcon } from './icons/ServiceIcons';

const Services = () => {
  const { t } = useAppContext();
  const services = t('services.items');

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-yellow-400">
            {t('services.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: { title: string; description: string }, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <ServiceIcon index={index} />
              <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-yellow-500">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
