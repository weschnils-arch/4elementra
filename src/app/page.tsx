import Header from '@/components/Header';
import SplitHero from '@/components/SplitHero';
import Philosophy from '@/components/Philosophy';
import CaseStudy from '@/components/CaseStudy';
import Benefits from '@/components/Benefits';
import Products from '@/components/Products';
import ICETechnology from '@/components/ICETechnology';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SplitHero />
        <Philosophy />
        <CaseStudy />
        <Benefits />
        <Products />
        <ICETechnology />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
