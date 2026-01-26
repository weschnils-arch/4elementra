"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SplitHero.module.css';

const SplitHero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            {/* Left Side - Sportrasen */}
            <div className={styles.side}>
                <div className={styles.bgImage}>
                    <Image
                        src="/images/stadium/hero.jpg"
                        alt="Professioneller Sportrasen im Stadion"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.overlay}></div>
                </div>
                <div className={styles.content}>
                    <span className={styles.badge}>{t.hero.sport.badge}</span>
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>{t.hero.sport.title}</span><br />
                        <span className={styles.highlight}>{t.hero.sport.titleHighlight}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.hero.sport.subtitle}
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>2+</span>
                            <span className={styles.statLabel}>{t.hero.stats.years}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>{t.hero.stats.organic}</span>
                        </div>
                    </div>
                    <a href="#kontakt" className={`btn btn-primary btn-lg ${styles.cta}`}>
                        {t.hero.sport.cta}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className={styles.divider}>
                <div className={styles.dividerLine}></div>
                <span className={styles.dividerText}>{t.hero.divider}</span>
                <div className={styles.dividerLine}></div>
            </div>

            {/* Right Side - Golfrasen */}
            <div className={styles.side}>
                <div className={styles.bgImage}>
                    <Image
                        src="/images/golf/hero.webp"
                        alt="Perfekter Golfrasen auf einem Green"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={`${styles.overlay} ${styles.overlayGolf}`}></div>
                </div>
                <div className={styles.content}>
                    <span className={styles.badge}>{t.hero.golf.badge}</span>
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>{t.hero.golf.title}</span><br />
                        <span className={styles.highlight}>{t.hero.golf.titleHighlight}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.hero.golf.subtitle}
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Premium</span>
                            <span className={styles.statLabel}>{t.hero.stats.quality}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>0%</span>
                            <span className={styles.statLabel}>{t.hero.stats.chemistry}</span>
                        </div>
                    </div>
                    <a href="#kontakt" className={`btn btn-primary btn-lg ${styles.cta}`}>
                        {t.hero.golf.cta}
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
