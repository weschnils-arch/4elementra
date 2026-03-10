"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Benefits.module.css';

const Benefits: React.FC = () => {
    const { t } = useLanguage();

    // Icons array matching the order in translations
    const icons = [
        (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
            </svg>
        ),
        (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3c-1.5 0-3 1-3.5 2.5-2.5.5-4 2.5-4 5 0 4 4 6.5 7.5 8.5 3.5-2 7.5-4.5 7.5-8.5 0-2.5-1.5-4.5-4-5-.5-1.5-2-2.5-3.5-2.5z" />
            </svg>
        ),
        (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20M5.45 5.45l13.1 13.1M18.55 5.45L5.45 18.55" />
                <circle cx="12" cy="12" r="4" />
            </svg>
        ),
        (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        )
    ];

    return (
        <section id="vorteile" className={`section ${styles.benefits}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.benefits.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.benefits.title} <span className={styles.highlight}>4ELEMENTRA?</span>
                    </h2>
                    <p className={styles.subtitle}>
                        {t.benefits.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {t.benefits.items.map((benefit: any, index: number) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon}>
                                {icons[index]}
                            </div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardDescription}>{benefit.desc}</p>
                            <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
