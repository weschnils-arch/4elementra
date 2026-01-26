"use client";

import React, { useState } from 'react';
import styles from './Products.module.css';

interface Product {
    name: string;
    description: string;
    applications: string[];
    category: 'sport' | 'golf' | 'both';
}

const Products: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'golf'>('all');

    const products: Product[] = [
        {
            name: 'Nitrogena 16',
            description: 'Stickstoff-Blattdünger für intensive Grünfärbung und gesundes Wachstum.',
            applications: ['Rasenstart', 'Wachstumsphase', 'Regeneration'],
            category: 'both'
        },
        {
            name: 'Phosphor 20',
            description: 'Fördert Wurzelbildung und Energiestoffwechsel für robuste Pflanzen.',
            applications: ['Neuansaat', 'Wurzelstärkung', 'Stressresistenz'],
            category: 'both'
        },
        {
            name: 'PK 20-20',
            description: 'Ausgewogene Phosphor-Kalium-Kombination für optimale Entwicklung.',
            applications: ['Herbstvorbereitung', 'Winterhärte', 'Regeneration'],
            category: 'both'
        },
        {
            name: 'Kalium',
            description: 'Stärkt Zellwände und erhöht Widerstandsfähigkeit gegen Stress.',
            applications: ['Trockenheitsschutz', 'Winterhärte', 'Spielbelastung'],
            category: 'sport'
        },
        {
            name: 'Kalzium 880',
            description: 'Verbessert Bodenstruktur und Nährstoffverfügbarkeit.',
            applications: ['Bodenverbesserung', 'pH-Regulierung', 'Zellstabilität'],
            category: 'golf'
        },
        {
            name: 'Eisen',
            description: 'Intensive Grünfärbung ohne übermäßiges Wachstum.',
            applications: ['Farbe', 'Chlorophyll', 'Photosynthese'],
            category: 'both'
        },
        {
            name: 'Mikroelemente',
            description: 'Komplexe Spurenelement-Mischung für vollständige Versorgung.',
            applications: ['Mangelausgleich', 'Vitalität', 'Immunsystem'],
            category: 'both'
        },
        {
            name: 'Fulvic 40',
            description: 'Natürlicher Bodenkonditionierer mit hohem Fulvinsäure-Gehalt.',
            applications: ['Nährstofftransport', 'Bodenaktivierung', 'Wurzelgesundheit'],
            category: 'both'
        },
        {
            name: 'Universal',
            description: 'Allround-Lösung für regelmäßige Anwendung und Basisversorgung.',
            applications: ['Grunddüngung', 'Erhaltung', 'Balance'],
            category: 'both'
        },
        {
            name: 'Universal Resist',
            description: 'Verstärkte Formel für erhöhte Stressresistenz und Belastbarkeit.',
            applications: ['Spielbelastung', 'Extrembedingungen', 'Regeneration'],
            category: 'sport'
        }
    ];

    const filteredProducts = products.filter(product =>
        activeFilter === 'all' || product.category === activeFilter || product.category === 'both'
    );

    return (
        <section id="produkte" className={`section ${styles.products}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Produktpalette</span>
                    <h2 className={styles.title}>
                        Organische <span className={styles.highlight}>Präzisionslösungen</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Maßgeschneiderte Düngemittel für professionelle Anforderungen –
                        entwickelt mit Fokus auf Wirksamkeit und Nachhaltigkeit.
                    </p>
                </div>

                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        Alle Produkte
                    </button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'sport' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('sport')}
                    >
                        Sportrasen
                    </button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'golf' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('golf')}
                    >
                        Golfrasen
                    </button>
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map((product) => (
                        <div key={product.name} className={styles.productCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <span className={`${styles.categoryBadge} ${styles[product.category]}`}>
                                    {product.category === 'both' ? 'Universell' :
                                        product.category === 'sport' ? 'Sport' : 'Golf'}
                                </span>
                            </div>
                            <p className={styles.productDescription}>{product.description}</p>
                            <div className={styles.applications}>
                                {product.applications.map((app) => (
                                    <span key={app} className={styles.appTag}>{app}</span>
                                ))}
                            </div>
                            <div className={styles.cardActions}>
                                <button className={styles.detailsBtn}>
                                    Produktdetails
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button className={styles.qrBtn} title="QR-Code für Produktdatenblatt">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" />
                                        <rect x="14" y="14" width="3" height="3" />
                                        <path d="M17 17h4v4h-4z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        Benötigen Sie eine individuelle Beratung zu unseren Produkten?
                    </p>
                    <a href="#kontakt" className="btn btn-primary">
                        Expertenberatung anfragen
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
