"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SplitHero.module.css';

const SplitHero: React.FC = () => {
    const { t } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/hero/hero1.webp",
        "/images/hero/hero2.webp"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={styles.hero}>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`${styles.bgImage} ${index === currentImage ? styles.active : ''}`}
                >
                    <Image
                        src={src}
                        alt="Hero Background"
                        fill
                        priority={index === 0}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.overlay}></div>
                </div>
            ))}

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>{t.hero.title}</span><br />
                        <span className={styles.highlight}>{t.hero.titleHighlight}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.hero.subtitle}
                    </p>
                    <p className={styles.subline}>
                        {t.hero.subline}
                    </p>

                    <div className={styles.trustPoints}>
                        {t.hero.trustPoints.map((point: string, idx: number) => (
                            <div key={idx} className={styles.trustItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span className={styles.trustText}>{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.pills}>
                        {t.hero.pills.map((pill: string, idx: number) => (
                            <span key={idx} className={styles.pill}>
                                {pill}
                            </span>
                        ))}
                    </div>

                    <a href="#philosophie" className={`btn btn-primary btn-lg ${styles.cta}`}>
                        {t.hero.sport.cta}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>


        </section>
    );
};

export default SplitHero;
