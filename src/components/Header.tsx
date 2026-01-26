"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="4ELEMENTRA Logo"
                        width={180}
                        height={40}
                        priority
                    />
                </a>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        {t.header.items.map((item: any) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={styles.navLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="lang-switch">
                        <button
                            className={`lang-btn ${language === 'de' ? 'active' : ''}`}
                            onClick={() => setLanguage('de')}
                        >
                            DE
                        </button>
                        <span className="lang-sep">|</span>
                        <button
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => setLanguage('en')}
                        >
                            ENG
                        </button>
                    </div>

                    <a href="#kontakt" className={`btn btn-primary ${styles.ctaBtn}`}>
                        {t.header.cta}
                    </a>
                </nav>

                <button
                    className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menü öffnen"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
