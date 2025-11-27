
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { FeatureIcon } from './icons/FeatureIcons';

const Features = () => {
  const { t } = useAppContext();
  const features = t('features.items');

  return (
    <section id="features" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-yellow-400">
            {t('features.title')}
          </h2>
        </div>
        
        {features.map((feature: { title: string; description: string }, index: number) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                    <img src={`https://picsum.photos/600/400?random=${index + 10}`} alt={feature.title} className="rounded-lg shadow-2xl w-full" />
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                        <FeatureIcon index={index} />
                         <h3 className="text-2xl font-bold text-blue-900 dark:text-yellow-500">
                            {feature.title}
                        </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        ))}
        
        <div className="text-center mt-20">
            <h3 className="text-2xl font-semibold mb-6">{t('paymentMethods')}</h3>
            <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Old_Visa_Logo.svg" alt="Visa" className="h-8 md:h-10" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-10 md:h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Meza_Card.svg" alt="Meeza" className="h-10 md:h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-10 md:h-12" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
