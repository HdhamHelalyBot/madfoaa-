
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useAppContext();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="font-bold text-sm text-gray-800 dark:text-yellow-400 bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
