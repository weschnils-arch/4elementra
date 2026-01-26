"use client";

import React from 'react';
import styles from './Benefits.module.css';

const Benefits: React.FC = () => {
    const benefits = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            ),
            title: 'Extreme Belastbarkeit',
            description: 'Bewährte Leistung unter härtesten Bedingungen – 4 Spiele in 6 Tagen, ohne Qualitätsverlust.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 6l-9.5 9.5-5-5L1 18" />
                    <path d="M17 6h6v6" />
                </svg>
            ),
            title: 'Schnelle Regeneration',
            description: 'Natürliche Aktivierung der Selbstheilungskräfte für schnelle Erholung nach Belastung.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8l-4 4-2-2" />
                    <path d="M9 15h6" />
                </svg>
            ),
            title: 'Kostenersparnis',
            description: 'Weniger Dünger, weniger Arbeit, niedrigere Betriebskosten bei besseren Ergebnissen.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3c-1.5 0-3 1-3.5 2.5-2.5.5-4 2.5-4 5 0 4 4 6.5 7.5 8.5 3.5-2 7.5-4.5 7.5-8.5 0-2.5-1.5-4.5-4-5-.5-1.5-2-2.5-3.5-2.5z" />
                </svg>
            ),
            title: 'Nachhaltigkeit',
            description: 'Umweltschutz ohne Kompromisse. Gut für den Boden, gut für das Ökosystem.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18.36 6.64a9 9 0 11-12.73 0" />
                    <line x1="12" y1="2" x2="12" y2="12" />
                </svg>
            ),
            title: 'Keine Chemikalien',
            description: '100% organisch, keine Rückstände – sichere Spielflächen für Sportler und Besucher.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
            ),
            title: 'Langfristige Bodengesundheit',
            description: 'Aufbau eines lebendigen Bodens statt kurzfristiger Symptombekämpfung.'
        }
    ];

    return (
        <section id="vorteile" className={`section ${styles.benefits}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Vorteile</span>
                    <h2 className={styles.title}>
                        Warum <span className={styles.highlight}>4ELEMENTRA</span>?
                    </h2>
                    <p className={styles.subtitle}>
                        Organische Effizienz trifft professionelle Anforderungen –
                        mit messbaren Vorteilen für Ihren Rasen und Ihr Budget.
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={benefit.title} className={styles.card}>
                            <div className={styles.cardIcon}>
                                {benefit.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardDescription}>{benefit.description}</p>
                            <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
