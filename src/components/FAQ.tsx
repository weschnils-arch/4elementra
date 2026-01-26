"use client";

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: 'Warum organische Düngemittel statt Chemie?',
            answer: 'Organische Düngemittel arbeiten mit der Natur, nicht gegen sie. Sie fördern ein gesundes Bodenleben, verbessern die Bodenstruktur langfristig und hinterlassen keine schädlichen Rückstände. Unsere Erfahrung im Bundesliga-Stadion zeigt: Organisch erreicht nicht nur die gleichen, sondern sogar bessere Ergebnisse als chemische Methoden – bei niedrigeren Gesamtkosten.'
        },
        {
            question: 'Wie schnell sehe ich Ergebnisse?',
            answer: 'Dank unserer I.C.E. Technology (Intercellular Cytoplasmic Exchange) sind erste Effekte oft bereits nach 24-48 Stunden sichtbar. Für nachhaltige Ergebnisse und einen lebendigen Boden empfehlen wir eine konsequente Anwendung über mindestens eine Saison. Die langfristigen Vorteile – wie verbessertes Wurzelwachstum und erhöhte Stressresistenz – entwickeln sich kontinuierlich.'
        },
        {
            question: 'Funktioniert es auch unter extremer Belastung?',
            answer: 'Absolut. Unser bekanntestes Referenzprojekt ist ein österreichisches Bundesliga-Stadion mit bis zu 4 Spielen in 6 Tagen. Seit über 2 Jahren wird der Rasen ausschließlich organisch betreut – mit exzellenten Ergebnissen bei Dichte, Grünheit und Regenerationsfähigkeit. Professionelle Belastung ist genau das Umfeld, für das unsere Produkte entwickelt wurden.'
        },
        {
            question: 'Welche Produkte sind für meine Situation geeignet?',
            answer: 'Das hängt von mehreren Faktoren ab: Art der Rasenfläche (Sportrasen/Golfrasen), aktuelle Bodenqualität, Belastungsintensität und spezifische Herausforderungen. Wir bieten eine kostenlose Erstberatung, bei der wir gemeinsam eine maßgeschneiderte Produktkombination für Ihre Anforderungen entwickeln. Kontaktieren Sie uns für eine individuelle Empfehlung.'
        },
        {
            question: 'Wie wird die Anwendung durchgeführt?',
            answer: 'Unsere Produkte werden in der Regel als Blattdünger appliziert – entweder mit handelsüblichen Sprühgeräten oder über die bestehende Beregnungsanlage. Die Anwendung ist unkompliziert und erfordert kein spezielles Equipment. Zu jedem Produkt liefern wir detaillierte Anwendungsempfehlungen, inklusive Dosierung und optimaler Zeitpunkte.'
        },
        {
            question: 'Sind die Produkte für Golfplätze geeignet?',
            answer: 'Ja, wir haben spezifische Produktlinien für Golfrasen entwickelt. Diese berücksichtigen die besonderen Anforderungen von Greens, Fairways und Tees – insbesondere hinsichtlich Spielqualität, Ball-Roll und Konsistenz. Mehrere Golfplätze in Europa arbeiten bereits erfolgreich mit unseren organischen Lösungen.'
        }
    ];

    return (
        <section id="faq" className={`section ${styles.faq}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <span className={styles.eyebrow}>Häufige Fragen</span>
                        <h2 className={styles.title}>
                            Ihre Fragen, <span className={styles.highlight}>unsere Antworten</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Alles, was Sie über organische Rasenpflege wissen müssen.
                        </p>
                    </div>

                    <div className={styles.accordion}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={styles.questionText}>{faq.question}</span>
                                    <span className={styles.icon}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={styles.answerWrapper}>
                                    <div className={styles.answer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cta}>
                        <p className={styles.ctaText}>Haben Sie weitere Fragen?</p>
                        <a href="#kontakt" className="btn btn-primary">
                            Kontakt aufnehmen
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
