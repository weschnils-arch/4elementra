import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
    title: 'Impressum | 4ELEMENTRA',
    description: 'Impressum und rechtliche Informationen zu 4ELEMENTRA.',
};

export default function Impressum() {
    return (
        <>
            <Header />
            <main className="legalContent">
                <div className="container">
                    <h1>Impressum</h1>

                    <h2>Angaben gemäß Informationspflicht</h2>
                    <p>
                        <strong>4ELEMENTRA</strong><br />
                        CL DOÑA CARMEN, FASE IV 0 Pta.F16<br />
                        (P.I. ALHAURIN DE LA TORRE)<br />
                        29130 ALHAURÍN DE LA TORRE<br />
                        MALAGA, Spanien
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        E-Mail: <a href="mailto:office@4elementra.com">office@4elementra.com</a>
                    </p>

                    <h2>Umsatzsteuer-ID / NIF</h2>
                    <p>B75931493</p>

                    <h2>Haftung für Inhalte</h2>
                    <p>
                        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>

                    <h2>Haftung für Links</h2>
                    <p>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>

                    <h2>Urheberrecht</h2>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht.
                        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
