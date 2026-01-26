"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ICETechnology.module.css';

const ICETechnology: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="ice" className={`section ${styles.iceTech}`}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Content */}
                    <div className={styles.content}>
                        <span className={styles.eyebrow}>{t.ice.eyebrow}</span>
                        <h2 className={styles.title}>
                            {t.ice.title}
                            <span className={styles.highlight}> {t.ice.titleHighlight}</span>
                        </h2>
                        <p className={styles.description} dangerouslySetInnerHTML={{ __html: t.ice.desc.replace('Intercellular Cytoplasmic Exchange', '<strong>Intercellular Cytoplasmic Exchange</strong>') }}>
                        </p>

                        <div className={styles.featuresGrid}>
                            {t.ice.features.map((feature: any, index: number) => (
                                <div key={index} className={styles.featureItem}>
                                    <div className={styles.featureNumber}>{String(index + 1).padStart(2, '0')}</div>
                                    <div className={styles.featureContent}>
                                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                                        <p className={styles.featureDesc}>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Diagram */}
                    <div className={styles.diagram}>
                        {/* New Flex Container for Labels + Graphic */}
                        <div className={styles.diagramLayout}>

                            {/* Labels on the Left */}
                            <div className={styles.diagramLabels}>
                                <div className={styles.label}>
                                    <span className={styles.labelDot}></span>
                                    {t.ice.diagram.label1}
                                </div>
                                <div className={styles.label}>
                                    <span className={`${styles.labelDot} ${styles.labelDotMagenta}`}></span>
                                    {t.ice.diagram.label2}
                                </div>
                            </div>

                            {/* Graphic on the Right */}
                            <div className={styles.graphicWrapper}>
                                <div className={styles.cell}>
                                    <div className={styles.cellNucleus}></div>
                                    <div className={styles.cellMembrane}></div>

                                    {/* Nutrient particles */}
                                    <div className={`${styles.particle} ${styles.particle1}`}>
                                        <span>N</span>
                                    </div>
                                    <div className={`${styles.particle} ${styles.particle2}`}>
                                        <span>P</span>
                                    </div>
                                    <div className={`${styles.particle} ${styles.particle3}`}>
                                        <span>K</span>
                                    </div>
                                    <div className={`${styles.particle} ${styles.particle4}`}>
                                        <span>Fe</span>
                                    </div>

                                    {/* Arrows */}
                                    <div className={styles.arrows}>
                                        <div className={`${styles.arrow} ${styles.arrow1}`}></div>
                                        <div className={`${styles.arrow} ${styles.arrow2}`}></div>
                                        <div className={`${styles.arrow} ${styles.arrow3}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>95%</span>
                                <span className={styles.statLabel}>{t.ice.stats.absorption}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>3x</span>
                                <span className={styles.statLabel}>{t.ice.stats.speed}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>0%</span>
                                <span className={styles.statLabel}>{t.ice.stats.loss}</span>
                            </div>
                        </div>

                        <a href="#produkte" className={`btn btn-primary btn-lg ${styles.ctaButton}`}>
                            Mehr erfahren
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ICETechnology;
