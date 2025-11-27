
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const { t, setPage } = useAppContext();

  const title = type === 'privacy' ? t('legal.privacyTitle') : t('legal.termsTitle');
  const content = type === 'privacy' ? t('legal.privacyContent') : t('legal.termsContent');

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-yellow-400 mb-8 text-center">{title}</h1>
        <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p>{content}</p>
        </div>
        <div className="text-center mt-12">
            <button
                onClick={() => setPage('home')}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
            >
                {t('legal.back')}
            </button>
        </div>
      </div>
    </section>
  );
};

export default Legal;
