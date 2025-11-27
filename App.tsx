
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Legal from './components/Legal';
import { useAppContext } from './hooks/useAppContext';

export default function App() {
  const { theme, language, page, setPage } = useAppContext();

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [theme, language]);

  const renderPage = () => {
    switch(page) {
      case 'privacy':
        return <Legal type="privacy" />;
      case 'terms':
        return <Legal type="terms" />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services />
            <Features />
            <About />
          </>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-yellow-400 transition-colors duration-300">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
