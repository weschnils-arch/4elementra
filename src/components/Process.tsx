"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Process.module.css';

const Process: React.FC = () => {
    const { t } = useLanguage();

    const icons = [
        (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        )
    ];

    return (
        <section id="prozess" className={`section ${styles.process}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.process.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.process.title} <span className={styles.highlight}>{t.process.titleHighlight}</span>
                    </h2>
                </div>

                <div className={styles.stepsGrid}>
                    {t.process.items.map((step: any, index: number) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.iconWrapper}>
                                {icons[index]}
                                <div className={styles.stepNumber}>{index + 1}</div>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                            {index < 2 && (
                                <div className={styles.connector}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
