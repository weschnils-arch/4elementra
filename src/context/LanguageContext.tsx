"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'de' | 'en';
type Translations = typeof translations.de;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('de');

    useEffect(() => {
        // Check localStorage or browser preference on mount
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
            setLanguageState(savedLang);
        } else {
            const browserLang = navigator.language.startsWith('de') ? 'de' : 'en';
            setLanguageState(browserLang as Language);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
