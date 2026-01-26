"use client";

import React from 'react';
import styles from './ICETechnology.module.css';

const ICETechnology: React.FC = () => {
    const features = [
        {
            title: 'Interzellulärer Transport',
            description: 'Nährstoffe werden direkt zwischen den Zellen transportiert, ohne Umwege über das Wurzelsystem.'
        },
        {
            title: 'Cytoplasmatischer Austausch',
            description: 'Natürliche Aufnahme in das Zellplasma für maximale Bioverfügbarkeit.'
        },
        {
            title: 'Sofortige Wirkung',
            description: 'Schnellere Nährstoffversorgung als bei herkömmlichen Bodendüngern.'
        },
        {
            title: '100% Aufnahme',
            description: 'Keine Verluste durch Auswaschung oder Fixierung im Boden.'
        }
    ];

    return (
        <section id="ice" className={`section ${styles.iceTech}`}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Content */}
                    <div className={styles.content}>
                        <span className={styles.eyebrow}>Technologie</span>
                        <h2 className={styles.title}>
                            I.C.E. Technology:
                            <span className={styles.highlight}> Die Zukunft der Rasenbetreuung</span>
                        </h2>
                        <p className={styles.description}>
                            <strong>I</strong>ntercellular <strong>C</strong>ytoplasmic <strong>E</strong>xchange –
                            unsere patentierte Technologie ermöglicht die direkte Aufnahme von Nährstoffen
                            in die Pflanzenzellen, ohne Verluste durch konventionelle Bodenprozesse.
                        </p>

                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <div key={feature.title} className={styles.featureItem}>
                                    <div className={styles.featureNumber}>{String(index + 1).padStart(2, '0')}</div>
                                    <div className={styles.featureContent}>
                                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                                        <p className={styles.featureDesc}>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Diagram */}
                    <div className={styles.diagram}>
                        <div className={styles.diagramWrapper}>
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

                            <div className={styles.diagramLabels}>
                                <div className={styles.label}>
                                    <span className={styles.labelDot}></span>
                                    Zelluläre Aufnahme
                                </div>
                                <div className={styles.label}>
                                    <span className={`${styles.labelDot} ${styles.labelDotMagenta}`}></span>
                                    4ELEMENTRA Nährstoffe
                                </div>
                            </div>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>95%</span>
                                <span className={styles.statLabel}>Höhere Absorption</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>3x</span>
                                <span className={styles.statLabel}>Schnellere Wirkung</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statValue}>0%</span>
                                <span className={styles.statLabel}>Auswaschungsverluste</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ICETechnology;
