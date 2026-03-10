"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './FAQ.module.css';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useLanguage();

    return (
        <section id="faq" className={`section ${styles.faq}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <span className={styles.eyebrow}>{t.faq.eyebrow}</span>
                        <h2 className={styles.title}>
                            {t.faq.title} <span className={styles.highlight}>{t.faq.titleHighlight}</span>
                        </h2>
                        <p className={styles.subtitle}>
                            {t.faq.subtitle}
                        </p>
                    </div>

                    <div className={styles.accordion}>
                        {t.faq.items.map((faq: any, index: number) => (
                            <div
                                key={index}
                                className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={styles.questionText}>{faq.q}</span>
                                    <span className={styles.icon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={styles.answerWrapper}>
                                    <div className={styles.answer}>
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <p className={styles.ctaText}>{t.faq.ctaText}</p>
                        <a href="#kontakt" className="btn btn-primary">
                            {t.faq.cta}
                        </a>
                    </div>

                    <div className={styles.legalNotice}>
                        <p>{t.faq.legal}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
