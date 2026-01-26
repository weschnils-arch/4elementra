"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
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
                        <span className={styles.eyebrow}>Kontakt</span>
                        <h2 className={styles.title}>
                            Lassen Sie sich von unseren
                            <span className={styles.highlight}> Experten beraten</span>
                        </h2>
                        <p className={styles.description}>
                            Unser Team unterstützt Sie bei der Auswahl der richtigen Produkte
                            für Ihre spezifischen Anforderungen. Vereinbaren Sie ein unverbindliches
                            Beratungsgespräch.
                        </p>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>E-Mail</span>
                                    <a href="mailto:office@4elementra.com" className={styles.infoValue}>
                                        office@4elementra.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>Adresse</span>
                                    <address className={styles.infoValue}>
                                        CL DOÑA CARMEN, FASE IV 0 Pta.F16<br />
                                        29130 ALHAURÍN DE LA TORRE, MALAGA<br />
                                        Spanien
                                    </address>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                        <line x1="8" y1="21" x2="16" y2="21" />
                                        <line x1="12" y1="17" x2="12" y2="21" />
                                    </svg>
                                </div>
                                <div className={styles.infoContent}>
                                    <span className={styles.infoLabel}>NIF</span>
                                    <span className={styles.infoValue}>B75931493</span>
                                </div>
                            </div>
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
                                <h3>Nachricht gesendet!</h3>
                                <p>Wir melden uns schnellstmöglich bei Ihnen.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        placeholder="Ihr vollständiger Name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>E-Mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                        placeholder="ihre.email@beispiel.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company" className={styles.label}>Unternehmen / Einrichtung</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="z.B. Golfclub, Stadion, etc."
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="type" className={styles.label}>Interessenbereich *</label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                        className={styles.select}
                                    >
                                        <option value="sport">Sportrasen</option>
                                        <option value="golf">Golfrasen</option>
                                        <option value="both">Beides</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Nachricht *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className={styles.textarea}
                                        placeholder="Beschreiben Sie Ihre Anforderungen..."
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
                                            Wird gesendet...
                                        </>
                                    ) : (
                                        <>
                                            Nachricht senden
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
