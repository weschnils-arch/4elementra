import Header from '@/components/Header';
import SplitHero from '@/components/SplitHero';
import Philosophy from '@/components/Philosophy';
import CaseStudy from '@/components/CaseStudy';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Programs from '@/components/Programs';
import ICETechnology from '@/components/ICETechnology';
import Products from '@/components/Products';
import TargetGroups from '@/components/TargetGroups';
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
        <Process />
        <Programs />
        <ICETechnology />
        <Products />
        <TargetGroups />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
