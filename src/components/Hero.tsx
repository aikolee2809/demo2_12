import { forwardRef, useEffect, useState } from 'react';

const HERO_VIDEO = 'https://res.cloudinary.com/ll6thxdy/video/upload/v1786169753/hero_edited_vrnxwh.mp4';

interface HeroProps {
  visible: boolean;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ visible }, ref) => {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHasEntered(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const contentVisible = visible && hasEntered;

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#1c1612]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Không gian salon Triệu Salon"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
        aria-hidden="true"
      />

      <div className="hero-stack pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1
          className={`hero-title select-none whitespace-nowrap text-white transition-opacity duration-700 ease-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 6vw, 6rem)',
            letterSpacing: '-0.045em',
            lineHeight: 0.95,
            mixBlendMode: 'difference',
            WebkitTextStroke: '0.5px rgba(255,255,255,0.2)',
          }}
          aria-hidden={!contentVisible}
        >
          Triệu Salon
        </h1>

        <div
          className={`hero-normal-content transition-opacity duration-700 ease-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={!contentVisible}
        >
          <p
            className="hero-subtitle mt-5 text-white/80"
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Salon Tóc Tại Lái Thiêu
          </p>

          <div className="hero-cta-row pointer-events-auto mt-8 flex items-center gap-3 md:gap-4">
            <a
              href="https://zalo.me/0942777009"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-white px-6 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c1612] transition-colors duration-300 hover:bg-white/90 active:scale-95 md:px-8 md:text-[12px] md:tracking-[0.15em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Đặt Lịch Hẹn
            </a>
            <a
              href="#services-pricing"
              className="whitespace-nowrap border border-white/60 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10 active:scale-95 md:px-8 md:text-[12px] md:tracking-[0.15em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Dịch Vụ &amp; Giá
            </a>
          </div>
        </div>
      </div>

      <div
        id="hero-scroll"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-white/40"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Cuộn Xuống
        </span>
        <div className="h-12 w-px overflow-hidden bg-white/20">
          <div className="scroll-line h-1/2 w-full bg-white" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
