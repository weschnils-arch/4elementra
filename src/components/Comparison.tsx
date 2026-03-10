"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Comparison.module.css';

const Comparison: React.FC = () => {
    const { t } = useLanguage();

    const naturalBenefits = t.comparison.natural.items;
    const chemicalDrawbacks = t.comparison.chemical.items;

    return (
        <section id="vergleich" className={`section ${styles.comparison}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.comparison.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.comparison.title} <span className={styles.highlight}>{t.comparison.titleHighlight}</span>
                    </h2>
                    <p className={styles.subtitle}>
                        {t.comparison.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Natural Column */}
                    <div className={`${styles.column} ${styles.columnNatural}`}>
                        <div className={styles.columnHeader}>
                            <span className={styles.badge}>{t.comparison.natural.badge}</span>
                            <h3 className={styles.columnTitle}>{t.comparison.natural.title}</h3>
                        </div>

                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/comparison-natural.jpg"
                                alt={t.comparison.natural.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.imageOverlayNatural}></div>
                        </div>

                        <ul className={styles.benefitsList}>
                            {naturalBenefits.map((benefit: string, index: number) => (
                                <li key={index} className={styles.benefitItem}>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Chemical Column */}
                    <div className={`${styles.column} ${styles.columnChemical}`}>
                        <div className={styles.columnHeader}>
                            <span className={`${styles.badge} ${styles.badgeChemical}`}>{t.comparison.chemical.badge}</span>
                            <h3 className={styles.columnTitle}>{t.comparison.chemical.title}</h3>
                        </div>

                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/comparison-chemical.jpg"
                                alt={t.comparison.chemical.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.imageOverlayChemical}></div>
                        </div>

                        <ul className={styles.drawbacksList}>
                            {chemicalDrawbacks.map((drawback: string, index: number) => (
                                <li key={index} className={styles.drawbackItem}>
                                    <span className={styles.crossIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </span>
                                    <span>{drawback}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <a href="#kontakt" className={`btn btn-primary btn-lg ${styles.ctaButton}`}>
                        {t.comparison.cta}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <div className={styles.divider}></div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
