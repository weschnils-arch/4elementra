"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <a href="#" className={styles.logo}>
                            <Image
                                src="/images/logo.png"
                                alt="4ELEMENTRA Logo"
                                width={160}
                                height={36}
                            />
                        </a>
                        <p className={styles.tagline}>
                            {t.footer.tagline}
                        </p>
                        <div className={styles.socials}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>{t.footer.headings.nav}</h4>
                        <ul className={styles.linksList}>
                            {t.header.items.map((link: any) => (
                                <li key={link.href}>
                                    <a href={link.href} className={styles.link}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.contactColumn}>
                        <h4 className={styles.columnTitle}>{t.footer.headings.contact}</h4>
                        <div className={styles.contactInfo}>
                            <a href="mailto:office@4elementra.com" className={styles.contactLink}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                office@4elementra.com
                            </a>
                            <address className={styles.address}>
                                CL DOÑA CARMEN, FASE IV 0 Pta.F16<br />
                                29130 ALHAURÍN DE LA TORRE<br />
                                MALAGA, {t.contact.labels.address ? 'Spain' : 'Spanien'}
                            </address>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className={styles.newsletterColumn}>
                        <h4 className={styles.columnTitle}>{t.footer.headings.newsletter}</h4>
                        <p className={styles.newsletterText}>
                            {t.footer.newsletterText}
                        </p>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder={t.footer.newsletterPlaceholder}
                                className={styles.newsletterInput}
                            />
                            <button type="submit" className={styles.newsletterBtn}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        © {currentYear} 4ELEMENTRA. {t.footer.rights}
                    </div>
                    <div className={styles.legalLinks}>
                        <a href="/impressum" className={styles.legalLink}>Impressum</a>
                        <span className={styles.separator}>|</span>
                        <a href="/datenschutz" className={styles.legalLink}>Datenschutz</a>
                        <span className={styles.separator}>|</span>
                        <a href="/agb" className={styles.legalLink}>AGB</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
