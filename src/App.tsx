import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import gsap from 'gsap';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import Stats from '@/components/Stats';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';

const VideoShowcase = lazy(() => import('@/components/VideoShowcase'));
const ServicesPricing = lazy(() => import('@/components/ServicesPricing'));
const Stylists = lazy(() => import('@/components/Stylists'));
const BookingCTA = lazy(() => import('@/components/BookingCTA'));
const Reviews = lazy(() => import('@/components/Reviews'));
const MapSection = lazy(() => import('@/components/MapSection'));
const Faq = lazy(() => import('@/components/Faq'));

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [heroContentVisible] = useState(true);

  useEffect(() => {
    if (!heroContentVisible || !floatingRef.current) return;

    const el = floatingRef.current;
    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      gsap.to(el, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power2.out',
      });
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('mousemove', reveal);
      window.removeEventListener('click', reveal);
      window.removeEventListener('touchstart', reveal);
      window.removeEventListener('touchmove', reveal);
      window.removeEventListener('wheel', reveal);
      window.removeEventListener('keydown', reveal);
    };

    const opts: AddEventListenerOptions = { passive: true };

    window.addEventListener('scroll', reveal, opts);
    window.addEventListener('mousemove', reveal, opts);
    window.addEventListener('click', reveal, opts);
    window.addEventListener('touchstart', reveal, opts);
    window.addEventListener('touchmove', reveal, opts);
    window.addEventListener('wheel', reveal, opts);
    window.addEventListener('keydown', reveal, opts);

    return cleanup;
  }, [heroContentVisible]);

  return (
    <div className="relative min-h-screen bg-[#F8F5F0] text-[#34282D]">
      <Nav heroRef={heroRef} visible={heroContentVisible} />

      <main className="relative z-[1] bg-[#F8F5F0]">
        <Hero ref={heroRef} visible={heroContentVisible} />
        <ImageGallery />
        <Stats />
        <Suspense fallback={<div className="min-h-[50vh] bg-[#F8F5F0]" />}>
          <VideoShowcase />
        </Suspense>
        <Suspense fallback={<div className="min-h-[50vh] bg-[#F8F5F0]" />}>
          <ServicesPricing />
          <Stylists />
          <BookingCTA />
          <Reviews />
          <MapSection />
          <Faq />
        </Suspense>
      </main>

      <Footer />

      <FloatingContact ref={floatingRef} />
    </div>
  );
}

export default App;
