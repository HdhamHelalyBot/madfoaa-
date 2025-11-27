
import React, { createContext, useState, ReactNode } from 'react';
import { translations } from '../lib/translations';

type Theme = 'light' | 'dark';
type Language = 'en' | 'ar';
type Page = 'home' | 'privacy' | 'terms';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
  page: Page;
  setPage: (page: Page) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
  }
  return 'dark'; // Default to dark theme
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());
  const [language, setLanguage] = useState<Language>('ar');
  const [page, setPage] = useState<Page>('home');

  const setTheme = (theme: Theme) => {
    setThemeState(theme);
    localStorage.setItem('theme', theme);
  };

  const t = (keyString: string) => {
    const keys = keyString.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      result = result[key];
      if (result === undefined) {
        return keyString;
      }
    }
    return result;
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};