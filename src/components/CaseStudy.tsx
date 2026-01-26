"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CaseStudy.module.css';

const CaseStudy: React.FC = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const stats = [
        { value: '4', label: 'Spiele in 6 Tagen', suffix: '' },
        { value: '2+', label: 'Jahre ohne Chemie', suffix: '' },
        { value: '100', label: 'Organisch', suffix: '%' },
        { value: '0', label: 'Chemische Rückstände', suffix: '' },
    ];

    return (
        <section id="casestudy" className={`section ${styles.caseStudy}`}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Content */}
                    <div className={styles.content}>
                        <span className={styles.eyebrow}>Case Study</span>
                        <h2 className={styles.title}>
                            Bundesliga-Arena: Organische Rasenbetreuung
                            <span className={styles.highlight}> auf höchstem Niveau</span>
                        </h2>
                        <p className={styles.description}>
                            Seit über zwei Jahren betreuen wir ein österreichisches Bundesliga-Stadion
                            ausschließlich mit organischen Düngemitteln – unter extremer Belastung mit
                            mehreren Spielen pro Woche.
                        </p>

                        <div className={styles.statsGrid}>
                            {stats.map((stat) => (
                                <div key={stat.label} className={styles.statItem}>
                                    <span className={styles.statValue}>
                                        {stat.value}
                                        <span className={styles.statSuffix}>{stat.suffix}</span>
                                    </span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.testimonial}>
                            <div className={styles.quoteIcon}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                            </div>
                            <blockquote className={styles.quote}>
                                "Nach mehreren Jahren konsequenter, nachhaltiger Pflege kann ich sagen:
                                Es funktioniert – und zwar besser als alles, was ich mit Chemie erlebt habe."
                            </blockquote>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <span className={styles.authorName}>Harry Faldner</span>
                                    <span className={styles.authorRole}>Head of Grounds</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Media */}
                    <div className={styles.media}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/stadium/hero.jpg"
                                alt="Professioneller Stadionrasen"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.imageOverlay}></div>

                            {!isVideoPlaying && (
                                <button
                                    className={styles.playButton}
                                    onClick={() => setIsVideoPlaying(true)}
                                    aria-label="Video abspielen"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {isVideoPlaying && (
                            <div className={styles.videoWrapper}>
                                <video
                                    autoPlay
                                    controls
                                    className={styles.video}
                                    onEnded={() => setIsVideoPlaying(false)}
                                >
                                    <source src="/videos/stadium.mp4" type="video/mp4" />
                                </video>
                                <button
                                    className={styles.closeVideo}
                                    onClick={() => setIsVideoPlaying(false)}
                                    aria-label="Video schließen"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        <div className={styles.featureBadges}>
                            <div className={styles.badge}>
                                <span className={styles.badgeIcon}>✓</span>
                                Extreme Belastbarkeit
                            </div>
                            <div className={styles.badge}>
                                <span className={styles.badgeIcon}>✓</span>
                                Schnelle Regeneration
                            </div>
                            <div className={styles.badge}>
                                <span className={styles.badgeIcon}>✓</span>
                                Nachhaltige Methode
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
