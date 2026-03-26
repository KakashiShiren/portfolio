import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSelector, scrollToTop } from '../lib/scroll';

const menuLinks = [
  { href: '#', label: 'Home' },
  { href: '#services', label: 'Expertise' },
  { href: '#works', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about-me', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/tarun-reddy-952a77359/', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/tarunnn_2811/', label: 'Instagram' },
  { href: 'https://github.com/kakashishiren', label: 'GitHub' },
];

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/New_York',
      });
      setCurrentTime(`${timeString}, New York`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[var(--color-accent-200)] py-16 text-[var(--color-secondary-100)] md:py-24">
      <div className="section-pad w-full">
        <div className="mb-16 grid grid-cols-1 gap-12 pt-10 md:grid-cols-2 md:gap-16">
          <div>
            <h4 className="mb-6 flex border-b-[1.5px] border-[var(--color-accent-500)] pb-2 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--color-secondary-300)]">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => (link.href === '#' ? scrollToTop() : scrollToSelector(link.href, 32))}
                    className="flip-link leading-[132.5%]"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 flex border-b-[1.5px] border-[var(--color-accent-500)] pb-2 text-[11px] font-bold uppercase tracking-[0.04em] text-[var(--color-secondary-300)]">
              Socials
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flip-link inline-flex leading-[132.5%]"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <div className="text-center md:text-left">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-secondary-300)]">
              New York time
            </span>
            <span className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-[var(--color-secondary-100)]">
              {currentTime}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group relative hidden w-fit items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent-500)] p-5 transition-transform duration-500 hover:scale-90 md:flex"
            aria-label="Scroll to top"
          >
            <span className="absolute flex transition-all duration-500 group-hover:-translate-y-20">
              <ArrowUpRight size={22} className="rotate-[-45deg]" />
            </span>
            <span className="flex translate-y-20 transition-all duration-500 group-hover:translate-y-0">
              <ArrowUpRight size={22} className="rotate-[-45deg]" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
