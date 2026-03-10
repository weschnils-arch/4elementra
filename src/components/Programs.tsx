"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Programs.module.css';

const Programs: React.FC = () => {
    const { t } = useLanguage();

    const seasons = ['FRÜHJAHR', 'WACHSTUM', 'STRESS', 'REGENERATION', 'HERBST'];

    return (
        <section id="programme" className={`section ${styles.programs}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.eyebrow}>{t.programs.eyebrow}</span>
                    <h2 className={styles.title}>
                        {t.programs.title} <span className={styles.highlight}>{t.programs.titleHighlight}</span>
                    </h2>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.line}></div>
                    <div className={styles.itemsGrid}>
                        {t.programs.items.map((program: any, index: number) => (
                            <div key={index} className={styles.programItem}>
                                <div className={styles.marker}>
                                    <div className={styles.dot}></div>
                                    <span className={styles.seasonLabel}>{seasons[index]}</span>
                                </div>
                                <div className={styles.card}>
                                    <h3 className={styles.programName}>{program.name}</h3>
                                    <p className={styles.programDesc}>{program.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
