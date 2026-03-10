"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './TargetGroups.module.css';

const TargetGroups: React.FC = () => {
    const { t } = useLanguage();

    const handleCardClick = () => {
        const contactSection = document.getElementById('kontakt');
        const nameInput = document.getElementById('name');

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }

        if (nameInput) {
            nameInput.focus({ preventScroll: true });
        }
    };

    return (
        <section id="zielgruppen" className={`section ${styles.targetGroups}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.targetGroups.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.targetGroups.title} <span className={styles.highlight}>{t.targetGroups.titleHighlight}</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {t.targetGroups.items.map((group: any, index: number) => (
                        <div key={index} className={styles.card} onClick={handleCardClick}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={group.image}
                                    alt={group.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.overlay}></div>
                                <div className={styles.content}>
                                    <h3 className={styles.groupName}>{group.name}</h3>
                                    <div className={styles.btn}>
                                        Mehr erfahren
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetGroups;
