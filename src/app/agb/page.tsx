import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
    title: 'AGB | 4ELEMENTRA',
    description: 'Allgemeine Geschäftsbedingungen von 4ELEMENTRA.',
};

export default function AGB() {
    return (
        <>
            <Header />
            <main className="legalContent">
                <div className="container">
                    <h1>Allgemeine Geschäftsbedingungen</h1>

                    <p>
                        Bitte fordern Sie unsere aktuellen Allgemeinen Geschäftsbedingungen (AGB) direkt per E-Mail an unter:
                        <br /><br />
                        <a href="mailto:office@4elementra.com">office@4elementra.com</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
