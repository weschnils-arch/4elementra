"use client";

import React from 'react';
import styles from './Philosophy.module.css';

const Philosophy: React.FC = () => {
    const elements = [
        {
            name: 'Erde',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12 32C14 28 18 26 24 26C30 26 34 28 36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 26V16M20 20L24 16L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: 'Organische Basis, Nährstoffspeicherung und strukturelle Stabilität für gesundes Wurzelwachstum.',
            color: '#8B4513'
        },
        {
            name: 'Wasser',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8C24 8 12 20 12 28C12 34.6274 17.3726 40 24 40C30.6274 40 36 34.6274 36 28C36 20 24 8 24 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M20 28C20 30.2091 21.7909 32 24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Lebensessenz und Transport von Wirkstoffen direkt in die Pflanzenfasern – für optimale Versorgung.',
            color: '#1E90FF'
        },
        {
            name: 'Luft',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 20H28C31.3137 20 34 17.3137 34 14C34 10.6863 31.3137 8 28 8C25.8 8 23.9 9.2 22.8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 28H36C39.3137 28 42 30.6863 42 34C42 37.3137 39.3137 40 36 40C33.2 40 30.8 38.2 30 35.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 36H16C18.2091 36 20 34.2091 20 32C20 29.7909 18.2091 28 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            description: 'Zirkulation im Boden und Wurzelatmung – essenziell für einen lebendigen, aktiven Boden.',
            color: '#87CEEB'
        },
        {
            name: 'Energie',
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6L28 20H38L30 30L34 44L24 34L14 44L18 30L10 20H20L24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            ),
            description: 'Die innere Urkraft – symbolisiert durch Magenta. Antrieb für Stoffwechsel und Regeneration.',
            color: '#E20074'
        }
    ];

    return (
        <section id="philosophie" className={`section ${styles.philosophy}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Unsere Philosophie</span>
                    <h2 className={styles.title}>
                        Die Kraft der <span className={styles.highlight}>vier Elemente</span>
                    </h2>
                    <div className={styles.divider}></div>
                    <p className={styles.subtitle}>
                        4ELEMENTRA basiert auf der zeitlosen Balance der vier Elemente.
                        Wir nutzen natürliche Kreisläufe statt chemischer Eingriffe –
                        für Ergebnisse, die überzeugen.
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
                            "100% Natur, 0% Chemie – Nicht nur möglich, sondern
                            <span className={styles.quoteHighlight}> erfolgreicher als herkömmliche Methoden.</span>"
                        </blockquote>
                        <p className={styles.messageText}>
                            Rückkehr zu den Wurzeln. Ganzheitliche Lösungen statt isolierter Wirkstoffe.
                            Bewiesene Wirksamkeit in professionellen Umgebungen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
