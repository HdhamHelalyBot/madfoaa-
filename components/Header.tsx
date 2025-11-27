
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t, setPage } = useAppContext();

  const navLinks = [
    { key: 'nav.services', href: '#services' },
    { key: 'nav.features', href: '#features' },
    { key: 'nav.about', href: '#about' },
  ];

  return (
    <header className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setPage('home')} className="text-3xl font-bold text-blue-900 dark:text-blue-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Madfoaa
        </button>
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.key} href={link.href} onClick={(e) => {e.preventDefault(); setPage('home'); setTimeout(() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }), 0);}} className="text-gray-600 dark:text-yellow-300 hover:text-blue-800 dark:hover:text-yellow-500 transition-colors">
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
