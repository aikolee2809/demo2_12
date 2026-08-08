import { forwardRef, useEffect, useState, type RefObject } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'VIDEO', href: '#video' },
  { label: 'LOOKBOOK', href: '#lookbook' },
  { label: 'DỊCH VỤ', href: '#services-pricing' },
  { label: 'STYLIST', href: '#stylist' },
  { label: 'LIÊN HỆ', href: '#lien-he' },
];

interface NavProps {
  heroRef: RefObject<HTMLElement | null>;
  visible: boolean;
}

const Nav = forwardRef<HTMLElement, NavProps>(({ heroRef, visible }, ref) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insideHero, setInsideHero] = useState(true);
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInsideHero(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  const setNavRef = (node: HTMLElement | null) => {
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <>
      <nav
        ref={setNavRef}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className={`fixed left-0 top-0 z-[100] flex w-full items-center justify-between px-5 py-6 transition-opacity duration-700 md:px-16 ${visible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden={!visible}
      >
        <div
          className={`absolute inset-0 -z-10 border-b border-white/10 bg-[#1c1612]/80 backdrop-blur-xl transition-opacity duration-500 ${insideHero ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />

        <div className="relative">
          <a
            href="#"
            className="text-white tracking-tighter transition-opacity hover:opacity-80"
            style={{ fontFamily: "'Newsreader', serif", fontSize: '20px', lineHeight: '28px', fontWeight: 400 }}
          >
            TRIỆU TÓC ĐẸP
          </a>
        </div>

        <div className="relative hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded px-3 py-2 text-[12px] font-medium uppercase tracking-[0.05em] text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="relative hidden md:block">
          <a
            href="https://zalo.me/0942777009"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-[#1c1612] transition-colors duration-300 hover:bg-white/90 active:scale-95"
          >
            ĐẶT LỊCH
          </a>
        </div>

        <button
          className="relative text-white md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 bg-[#1c1612] pt-24">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[12px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-white"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
});

Nav.displayName = 'Nav';

export default Nav;
