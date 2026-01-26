"use client";

import React from 'react';
import Image from 'next/image';
import styles from './SplitHero.module.css';

const SplitHero: React.FC = () => {
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
                    <span className={styles.badge}>Sportrasen</span>
                    <h1 className={styles.title}>
                        Bundesliga-Qualität.<br />
                        <span className={styles.highlight}>100% Organisch.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Maximale Belastbarkeit für professionelle Spielstätten –
                        4 Spiele in 6 Tagen, kompromisslos nachhaltig.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>2+</span>
                            <span className={styles.statLabel}>Jahre ohne Chemie</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Organisch</span>
                        </div>
                    </div>
                    <a href="#sportrasen" className={`btn btn-primary btn-lg ${styles.cta}`}>
                        Sportrasen-Lösungen entdecken
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className={styles.divider}>
                <div className={styles.dividerLine}></div>
                <span className={styles.dividerText}>ODER</span>
                <div className={styles.dividerLine}></div>
            </div>

            {/* Right Side - Golfrasen */}
            <div className={styles.side}>
                <div className={styles.bgImage}>
                    <Image
                        src="/images/golf/hero.jpg"
                        alt="Perfekter Golfrasen auf einem Green"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                    <div className={`${styles.overlay} ${styles.overlayGolf}`}></div>
                </div>
                <div className={styles.content}>
                    <span className={styles.badge}>Golfrasen</span>
                    <h1 className={styles.title}>
                        Perfekte Spielqualität.<br />
                        <span className={styles.highlight}>Natürlich erreicht.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Gleichmäßige Greens, perfekter Ball-Roll und langfristige Bodengesundheit
                        für anspruchsvolle Golfplätze.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>Premium</span>
                            <span className={styles.statLabel}>Spielqualität</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>0%</span>
                            <span className={styles.statLabel}>Chemie</span>
                        </div>
                    </div>
                    <a href="#golfrasen" className={`btn btn-primary btn-lg ${styles.cta}`}>
                        Golfrasen-Lösungen entdecken
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span>Mehr entdecken</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </div>
        </section>
    );
};

export default SplitHero;
