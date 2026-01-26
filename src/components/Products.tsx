"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Products.module.css';

interface ProductItem {
    name: string;
    category: 'universal' | 'sport' | 'golf';
    desc: string;
    tags: string[];
    application: string;
}

const Products: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'golf'>('all');
    const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
    const { t } = useLanguage();

    const toggleFlip = (key: string) => {
        const newFlipped = new Set(flippedCards);
        if (newFlipped.has(key)) {
            newFlipped.delete(key);
        } else {
            newFlipped.add(key);
        }
        setFlippedCards(newFlipped);
    };

    const imageMap: Record<string, string> = {
        nitrogena: '/images/products/Nitrogena16.png',
        nitrovita: '/images/products/UNIVERSAL.png', // Placeholder
        phosphor: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-PHOSPHORUS20.png',
        pk: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-PK2020.png',
        kalium: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-POTASSIUM.png',
        kalzium: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-CALCIUM880.png',
        eisen: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-IRON.png',
        mikro: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-MICROELEMENTS.png',
        fulvic: '/images/products/Fulvic40.png',
        universal: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-UNIVERSAL.png',
        resist: '/images/products/4E-PACKSHOTS-montagen-etikett-kanister-UNIVERSALRESIST.png'
    };

    const productKeys = Object.keys(t.products.items) as Array<keyof typeof t.products.items>;

    const filteredKeys = productKeys.filter(key => {
        const product = t.products.items[key] as ProductItem;
        return activeFilter === 'all' || product.category === activeFilter;
    });

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
                    {filteredKeys.map((key) => {
                        const product = t.products.items[key] as ProductItem;
                        const isFlipped = flippedCards.has(key as string);

                        return (
                            <div
                                key={key}
                                className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
                            >
                                <div className={styles.cardInner}>
                                    {/* FRONT SIDE */}
                                    <div className={styles.cardFront}>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.productName}>{product.name}</h3>
                                            <div className={styles.badgeGroup}>
                                                <div className={styles.qrIcon} onClick={() => console.log('QR Click')}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <rect x="3" y="3" width="7" height="7" />
                                                        <rect x="14" y="3" width="7" height="7" />
                                                        <rect x="3" y="14" width="7" height="7" />
                                                        <rect x="14" y="14" width="3" height="3" />
                                                        <path d="M17 17h4v4h-4z" />
                                                    </svg>
                                                </div>
                                                <span className={`${styles.categoryBadge} ${styles[product.category]}`}>
                                                    {/* @ts-ignore */}
                                                    {t.products.categories[product.category]}
                                                </span>
                                            </div>
                                        </div>

                                        <p className={styles.productDescription}>{product.desc}</p>

                                        <div className={styles.tags}>
                                            {product.tags && product.tags.map((tag, i) => (
                                                <span key={i} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>

                                        <div className={styles.links}>
                                            <button className={styles.textLink} onClick={() => toggleFlip(key as string)}>{t.products.links.app}</button>
                                            <button className={styles.textLink} onClick={() => toggleFlip(key as string)}>{t.products.links.comp}</button>
                                            <button className={styles.textLink} onClick={() => toggleFlip(key as string)}>{t.products.links.spec}</button>
                                        </div>
                                    </div>

                                    {/* BACK SIDE */}
                                    <div className={styles.cardBack}>
                                        <div className={styles.backNav}>
                                            <button className={styles.backLink} onClick={() => toggleFlip(key as string)}>
                                                ← {t.products.links.back}
                                            </button>
                                        </div>

                                        <div className={styles.backImageWrapper}>
                                            <Image
                                                src={imageMap[key as string] || '/images/products/UNIVERSAL.png'}
                                                alt={product.name}
                                                fill
                                                style={{ objectFit: 'contain', padding: '20px' }}
                                            />
                                        </div>

                                        <div className={styles.backContent}>
                                            <div className={styles.backHeader}>
                                                <h4 className={styles.backHeadline}>{t.products.links.headline}</h4>
                                            </div>
                                            <p className={styles.backText}>{product.application}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
