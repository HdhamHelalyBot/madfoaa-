
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const Footer = () => {
  const { t, setPage } = useAppContext();

  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, page: 'privacy' | 'terms') => {
    e.preventDefault();
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-800 mb-2">Madfoaa</h3>
            <p className="max-w-md">{t('footer.about')}</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-yellow-400">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-800 dark:hover:text-yellow-500 transition-colors">{t('nav.services')}</a></li>
              <li><a href="#features" className="hover:text-blue-800 dark:hover:text-yellow-500 transition-colors">{t('nav.features')}</a></li>
              <li><a href="#about" className="hover:text-blue-800 dark:hover:text-yellow-500 transition-colors">{t('nav.about')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-800 dark:text-yellow-400">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-blue-800 dark:hover:text-yellow-500 transition-colors text-left">
                  {t('footer.privacy')}
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-blue-800 dark:hover:text-yellow-500 transition-colors text-left">
                  {t('footer.terms')}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm">
          <p className="mb-2">{t('footer.address')}</p>
          <p>&copy; {new Date().getFullYear()} Madfoaa. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
