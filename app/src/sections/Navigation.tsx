import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSelector } from '../lib/scroll';

const navLinks = [
  { href: '#services', label: 'Expertise' },
  { href: '#works', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about-me', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    scrollToSelector(href, 32);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-smooth ${
          isScrolled
            ? 'bg-[var(--color-secondary-400)]/88 py-3 text-[var(--color-accent-200)] backdrop-blur-xl'
            : 'bg-transparent py-4 text-[var(--color-secondary-100)]'
        }`}
      >
        <div className="section-pad w-full">
          <div className="flex items-start justify-between gap-6 lg:grid lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="max-w-[14ch] text-balance text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] font-medium leading-snug">
                
              </div>
            </div>

            <nav className="hidden justify-end text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] md:flex lg:col-span-4">
              <ul className="flex items-center gap-4 font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="flip-link leading-snug"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`menu-dot flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 md:hidden ${
                isScrolled
                  ? 'bg-[var(--color-accent-400)] text-black'
                  : 'bg-[var(--color-accent-400)] text-black'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[var(--color-secondary-400)] text-[var(--color-accent-200)] transition-transform duration-500 ease-smooth md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-display text-3xl font-semibold uppercase tracking-[-0.03em] transition-opacity duration-200 hover:opacity-60"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
