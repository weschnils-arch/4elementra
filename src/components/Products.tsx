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
    composition?: string;
    specifications?: string;
}

type TabType = 'application' | 'composition' | 'specifications';

const Products: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'golf'>('all');
    const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
    const [activeTabs, setActiveTabs] = useState<Record<string, TabType>>({});
    const { t } = useLanguage();

    const handleFlip = (key: string, tab: TabType) => {
        setActiveTabs(prev => ({ ...prev, [key]: tab }));
        // Only flip if not already flipped, or just switch tab if flipped
        const newFlipped = new Set(flippedCards);
        if (!newFlipped.has(key)) {
            newFlipped.add(key);
            setFlippedCards(newFlipped);
        }
    };

    const closeCard = (key: string) => {
        const newFlipped = new Set(flippedCards);
        newFlipped.delete(key);
        setFlippedCards(newFlipped);
    };

    const imageMap: Record<string, string> = {
        nitrogena: '/images/products/Nitrogena16.png',
        nitrovita: '/images/products/Nitrogena16.png',
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

    const getBackContent = (key: string, product: ProductItem) => {
        const tab = activeTabs[key] || 'application';
        switch (tab) {
            case 'composition':
                return { title: t.products.links.comp, text: product.composition || 'N/A' };
            case 'specifications':
                return { title: t.products.links.spec, text: product.specifications || 'N/A' };
            case 'application':
            default:
                return { title: t.products.links.headline, text: product.application };
        }
    };

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
                        const backContent = getBackContent(key as string, product);

                        return (
                            <div
                                key={key}
                                className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
                            >
                                <div className={styles.cardInner}>
                                    {/* FRONT SIDE */}
                                    <div className={styles.cardFront}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.headerLeft}>
                                                <h3 className={styles.productName}>{product.name}</h3>
                                                <div className={styles.qrIcon} onClick={(e) => { e.stopPropagation(); console.log('QR Click'); }}>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="3" width="7" height="7"></rect>
                                                        <rect x="14" y="3" width="7" height="7"></rect>
                                                        <rect x="14" y="14" width="7" height="7"></rect>
                                                        <rect x="3" y="14" width="7" height="7"></rect>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className={`${styles.categoryBadge} ${styles[product.category]}`}>
                                                {/* @ts-ignore */}
                                                {t.products.categories[product.category]}
                                            </span>
                                        </div>

                                        <div className={styles.frontImageWrapper}>
                                            <Image
                                                src={imageMap[key as string] || '/images/products/UNIVERSAL.png'}
                                                alt={product.name}
                                                fill
                                                style={{ objectFit: 'contain', padding: '10px' }}
                                            />
                                        </div>

                                        <p className={styles.productDescription}>{product.desc}</p>

                                        <div className={styles.tags}>
                                            {product.tags && product.tags.map((tag, i) => (
                                                <span key={i} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>

                                        <div className={styles.ctaGroup}>
                                            <button className={styles.ctaSmall} onClick={() => handleFlip(key as string, 'application')}>
                                                {t.products.links.app}
                                            </button>
                                            <button className={styles.ctaSmall} onClick={() => handleFlip(key as string, 'composition')}>
                                                {t.products.links.comp}
                                            </button>
                                            <button className={styles.ctaSmall} onClick={() => handleFlip(key as string, 'specifications')}>
                                                {t.products.links.spec}
                                            </button>
                                        </div>
                                    </div>

                                    {/* BACK SIDE */}
                                    <div className={styles.cardBack}>
                                        <div className={styles.backNav}>
                                            <button className={styles.backLink} onClick={() => closeCard(key as string)}>
                                                ← {t.products.links.back}
                                            </button>
                                        </div>

                                        <div className={styles.backImageWrapper}>
                                            <Image
                                                src={imageMap[key as string] || '/images/products/UNIVERSAL.png'}
                                                alt={product.name}
                                                fill
                                                style={{ objectFit: 'contain', padding: '10px' }}
                                            />
                                        </div>

                                        <div className={styles.backContent}>
                                            <div className={styles.backHeader}>
                                                <h4 className={styles.backHeadline}>{backContent.title}</h4>
                                            </div>
                                            <p className={styles.backText}>{backContent.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Products;
