"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Philosophy.module.css';

const Philosophy: React.FC = () => {
    const { t } = useLanguage();

    const elements = [
        {
            name: t.philosophy.elements.earth.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12 32C14 28 18 26 24 26C30 26 34 28 36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 26V16M20 20L24 16L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: t.philosophy.elements.earth.desc,
            color: '#8B4513'
        },
        {
            name: t.philosophy.elements.water.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8C24 8 12 20 12 28C12 34.6274 17.3726 40 24 40C30.6274 40 36 34.6274 36 28C36 20 24 8 24 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M20 28C20 30.2091 21.7909 32 24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: t.philosophy.elements.water.desc,
            color: '#1E90FF'
        },
        {
            name: t.philosophy.elements.air.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20H28C31.3137 20 34 17.3137 34 14C34 10.6863 31.3137 8 28 8C25.8 8 23.9 9.2 22.8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 28H36C39.3137 28 42 30.6863 42 34C42 37.3137 39.3137 40 36 40C33.2 40 30.8 38.2 30 35.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 36H16C18.2091 36 20 34.2091 20 32C20 29.7909 18.2091 28 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: t.philosophy.elements.air.desc,
            color: '#87CEEB'
        },
        {
            name: t.philosophy.elements.energy.name,
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6L28 20H38L30 30L34 44L24 34L14 44L18 30L10 20H20L24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            ),
            description: t.philosophy.elements.energy.desc,
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
