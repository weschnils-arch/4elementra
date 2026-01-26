import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
    title: 'Datenschutz | 4ELEMENTRA',
    description: 'Datenschutzerklärung von 4ELEMENTRA.',
};

export default function Datenschutz() {
    return (
        <>
            <Header />
            <main className="legalContent">
                <div className="container">
                    <h1>Datenschutzerklärung</h1>

                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                        wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3>Datenerfassung auf dieser Website</h3>
                    <p>
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                        Impressum dieser Website entnehmen.
                    </p>

                    <h2>2. Hosting</h2>
                    <p>
                        Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Hoster). Personenbezogene Daten, die auf dieser Website
                        erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
                        Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website
                        generiert werden, handeln.
                    </p>

                    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3>Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                        vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    <h3>Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <p>
                        4ELEMENTRA<br />
                        CL DOÑA CARMEN, FASE IV 0 Pta.F16<br />
                        (P.I. ALHAURIN DE LA TORRE)<br />
                        29130 ALHAURÍN DE LA TORRE<br />
                        MALAGA, Spanien
                    </p>
                    <p>
                        E-Mail: <a href="mailto:office@4elementra.com">office@4elementra.com</a>
                    </p>

                    <h2>4. Datenerfassung auf dieser Website</h2>
                    <h3>Kontaktformular</h3>
                    <p>
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
                        von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                        Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>

                    <h3>Anfragen per E-Mail, Telefon oder Telefax</h3>
                    <p>
                        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
                        personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                        Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
