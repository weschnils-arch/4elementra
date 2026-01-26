"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Products.module.css';

interface ProductDef {
    key: string;
    name: string;
    applications: string[];
    category: 'sport' | 'golf' | 'both';
}

const Products: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'golf'>('all');
    const { t } = useLanguage();

    const productDefs: ProductDef[] = [
        { key: 'nitrogena', name: 'Nitrogena 16', applications: ['Rasenstart', 'Wachstumsphase', 'Regeneration'], category: 'both' },
        { key: 'phosphor', name: 'Phosphor 20', applications: ['Neuansaat', 'Wurzelstärkung', 'Stressresistenz'], category: 'both' },
        { key: 'pk', name: 'PK 20-20', applications: ['Herbstvorbereitung', 'Winterhärte', 'Regeneration'], category: 'both' },
        { key: 'kalium', name: 'Kalium', applications: ['Trockenheitsschutz', 'Winterhärte', 'Spielbelastung'], category: 'sport' },
        { key: 'kalzium', name: 'Kalzium 880', applications: ['Bodenverbesserung', 'pH-Regulierung', 'Zellstabilität'], category: 'golf' },
        { key: 'eisen', name: 'Eisen', applications: ['Farbe', 'Chlorophyll', 'Photosynthese'], category: 'both' },
        { key: 'mikro', name: 'Mikroelemente', applications: ['Mangelausgleich', 'Vitalität', 'Immunsystem'], category: 'both' },
        { key: 'fulvic', name: 'Fulvic 40', applications: ['Nährstofftransport', 'Bodenaktivierung', 'Wurzelgesundheit'], category: 'both' },
        { key: 'universal', name: 'Universal', applications: ['Grunddüngung', 'Erhaltung', 'Balance'], category: 'both' },
        { key: 'resist', name: 'Universal Resist', applications: ['Spielbelastung', 'Extrembedingungen', 'Regeneration'], category: 'sport' }
    ];

    const filteredProducts = productDefs.filter(product =>
        activeFilter === 'all' || product.category === activeFilter || product.category === 'both'
    );

    return (
        <section id="produkte" className={`section ${styles.products}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.products.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.products.title} <span className={styles.highlight}>{t.products.titleHighlight}</span>
                    </h2>
                    <p className={styles.subtitle}>
                        {t.products.subtitle}
                    </p>
                </div>

                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        {t.products.filters.all}
                    </button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'sport' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('sport')}
                    >
                        {t.products.filters.sport}
                    </button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'golf' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('golf')}
                    >
                        {t.products.filters.golf}
                    </button>
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map((product) => (
                        <div key={product.key} className={styles.productCard}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <span className={`${styles.categoryBadge} ${styles[product.category]}`}>
                                    {/* @ts-ignore */}
                                    {t.products.categories[product.category]}
                                </span>
                            </div>
                            {/* @ts-ignore */}
                            <p className={styles.productDescription}>{t.products.items[product.key].desc}</p>
                            <div className={styles.applications}>
                                {product.applications.map((app) => (
                                    <span key={app} className={styles.appTag}>{app}</span>
                                ))}
                            </div>
                            <div className={styles.cardActions}>
                                <button className={styles.detailsBtn}>
                                    {t.products.details}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button className={styles.qrBtn} title="QR-Code">
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
                        {t.products.ctaText}
                    </p>
                    <a href="#kontakt" className="btn btn-primary">
                        {t.products.cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
