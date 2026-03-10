"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Philosophy.module.css';

const Philosophy: React.FC = () => {
    const { t } = useLanguage();

    const elements = [
        {
            name: t.philosophy.elements.soil.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 10v4" />
                    <path d="M12 18v4" />
                    <path d="M12 2v4" />
                    <path d="M22 12h-4" />
                    <path d="M6 12H2" />
                    <circle cx="12" cy="12" r="7" />
                </svg>
            ),
            description: t.philosophy.elements.soil.desc,
            color: '#8B4513'
        },
        {
            name: t.philosophy.elements.plant.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20a7 7 0 0 1-7-7c0-3.87 3.13-7 7-7 2.1 0 3.97 1 5.2 2.53a7.51 7.51 0 0 1 3.8 6.47c0 4.14-3.36 7.5-7.5 7.5-1.5 0-2.88-.44-4.04-1.2A7.51 7.51 0 0 0 11 20z" />
                    <path d="M11 13V22" />
                </svg>
            ),
            description: t.philosophy.elements.plant.desc,
            color: '#228B22'
        },
        {
            name: t.philosophy.elements.maintenance.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            ),
            description: t.philosophy.elements.maintenance.desc,
            color: '#E20074'
        }
    ];

    return (
        <section id="philosophie" className={`section ${styles.philosophy}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.philosophy.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.philosophy.title} <span className={styles.highlight}>{t.philosophy.titleHighlight}</span>
                    </h2>
                    <div className={styles.divider}></div>
                    <p className={styles.subtitle}>
                        {t.philosophy.subtitle}
                    </p>
                </div>

                <div className={styles.elementsGrid}>
                    {elements.map((element, index) => (
                        <div
                            key={element.name}
                            className={styles.elementCard}
                            style={{ '--element-color': element.color } as React.CSSProperties}
                        >
                            <div className={styles.iconWrapper}>
                                {element.icon}
                            </div>
                            <h3 className={styles.elementName}>{element.name}</h3>
                            <p className={styles.elementDesc}>{element.description}</p>
                            <div className={styles.cardNumber}>0{index + 1}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.coreMessage}>
                    <div className={styles.messageInner}>
                        <blockquote className={styles.quote}>
                            {t.philosophy.quote}
                            <span className={styles.quoteHighlight}> {t.philosophy.quoteHighlight}</span>
                        </blockquote>
                        <p className={styles.messageText}>
                            {t.philosophy.quoteSub}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
