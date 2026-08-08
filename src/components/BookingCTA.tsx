import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA_VIDEO = 'https://res.cloudinary.com/ll6thxdy/video/upload/v1786149755/1_3_zhtilw.mp4';

export default function BookingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    if (!section || !left) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        left.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
        },
      );
      gsap.fromTo(
        videoRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: { trigger: section, start: 'top 78%', once: true },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Booking call to action"
      className="bg-[#FAF8F5] py-12 md:py-20"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:min-h-[88vh] md:grid-cols-2">
          {/* LEFT — Typography + CTA */}
          <div
            ref={leftRef}
            className="flex flex-col items-center justify-center py-16 text-center md:py-24"
          >
            <span
              className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              ĐẶT LỊCH HỆN
            </span>
            <h2
  className="mt-8 text-[clamp(1.75rem,3.5vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#171513]"
>
  <span className="block">MÁI TÓC MỚI.</span>
  <span className="block">DIỆN MẠO MỚI.</span>

 <span className="mt-3 block font-display text-[clamp(0.9rem,1.5vw,1.4rem)] font-normal italic leading-[1.2] tracking-[-0.035em] text-[#4a433d]">
  <span className="block">Đã đến lúc</span>
  <span className="block">dành thời gian cho bạn.</span>
</span>
</h2>

<div className="mt-10">
              <a
                href="https://zalo.me/0942777009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block whitespace-nowrap bg-[#2a221c] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#3d2f24] active:scale-95 md:px-10 md:py-5 md:text-[12px] md:tracking-[0.15em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ĐẶT LỊCH HỆN
              </a>
            </div>
          </div>

          {/* RIGHT — Cinematic video */}
          <div className="relative min-h-[55vh] md:min-h-full">
            <video
              ref={videoRef}
              src={CTA_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Salon cinematic video"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
