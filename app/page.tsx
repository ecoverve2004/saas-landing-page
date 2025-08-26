import Header from '@/components/Header';
import CountdownTimer from '@/components/CountdownTimer';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Features from '@/components/Features';
import VideoDemo from '@/components/VideoDemo';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';
import ScrollToTop from '@/components/ScrollToTop';
import PopupModal from '@/components/PopupModal';

export default function Home() {
  return (
    <>
      <CountdownTimer />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <TrustBadges />
        <Features />
        <VideoDemo />
        <SocialProof />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <LiveChat />
      <ScrollToTop />
      <PopupModal />
    </>
  );
}