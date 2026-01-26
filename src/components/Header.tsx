"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Philosophie', href: '#philosophie' },
        { label: 'Case Study', href: '#casestudy' },
        { label: 'Vorteile', href: '#vorteile' },
        { label: 'Produkte', href: '#produkte' },
        { label: 'I.C.E. Technologie', href: '#ice' },
        { label: 'Kontakt', href: '#kontakt' },
    ];

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
                        {navItems.map((item) => (
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
                    <a href="#kontakt" className={`btn btn-primary ${styles.ctaBtn}`}>
                        Beratung anfragen
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
