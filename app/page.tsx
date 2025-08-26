import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <LiveChat />
      <ScrollToTop />
    </>
  );
}