"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        type: 'sport',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                type: 'sport',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="kontakt" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Content */}
                    <div className={styles.content}>
                        <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
                        <h2 className={styles.title}>
                            {t.contact.title}
                            <span className={styles.highlight}> {t.contact.titleHighlight}</span>
                        </h2>
                        <p className={styles.description}>
                            {t.contact.desc}
                        </p>

                        {/* Contact Image */}
                        <div className={styles.contactImageWrapper}>
                            <Image
                                src="/images/contact-image.jpg"
                                alt="Greenkeeper bei der Rasenanalyse"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className={styles.formWrapper}>
                        {isSubmitted ? (
                            <div className={styles.successMessage}>
                                <div className={styles.successIcon}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3>{t.contact.success.title}</h3>
                                <p>{t.contact.success.desc}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>{t.contact.labels.name}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        placeholder={t.contact.placeholders.name}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>{t.contact.labels.email}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        placeholder={t.contact.placeholders.email}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company" className={styles.label}>{t.contact.labels.company}</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder={t.contact.placeholders.company}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="type" className={styles.label}>{t.contact.labels.type}</label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                        className={styles.select}
                                    >
                                        <option value="sport">{t.contact.options.sport}</option>
                                        <option value="golf">{t.contact.options.golf}</option>
                                        <option value="both">{t.contact.options.both}</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>{t.contact.labels.message}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className={styles.textarea}
                                        placeholder={t.contact.placeholders.message}
                                        rows={5}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-primary ${styles.submitBtn}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className={styles.spinner}></span>
                                            {t.contact.sending}
                                        </>
                                    ) : (
                                        <>
                                            {t.contact.btn}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
