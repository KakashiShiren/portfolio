import { useEffect, useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { scrollToSelector } from '../lib/scroll';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const translateY = window.scrollY * 0.16;
        imageRef.current.style.transform = `translateY(${translateY}px) scale(1.04)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    scrollToSelector('#contact', 32);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="section-pad w-full">
        <div className="mb-10 overflow-hidden md:mb-14">
          <div className="reveal is-visible">
            <div className="font-display hidden text-[clamp(3.5rem,2.3571rem+5.5143vw,10.5rem)] font-semibold uppercase leading-[80%] tracking-[-0.045em] text-[var(--color-secondary-400)] md:block">
              TARUN REDDY
            </div>

            <div className="font-display flex flex-col text-[clamp(4rem,1.203rem+10.0714vw,10.25rem)] font-semibold uppercase leading-[80%] tracking-[-0.05em] text-[var(--color-secondary-400)] md:hidden">
              <span>TARUN</span>
              <span>REDDY</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="reveal is-visible flex flex-col justify-between gap-8 pt-3 lg:col-span-4">
            <div className="hidden overflow-hidden md:block">
              <ArrowDownRight size={26} className="text-[var(--color-accent-600)]" />
            </div>

            <p className="max-w-[32ch] text-balance text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] font-medium leading-snug text-[var(--color-secondary-100)] xl:text-[clamp(1rem,0.8571rem+0.7143vw,1.5rem)]">
              CS Grad Student |
              I build AI products and data systems that actually ship.
            </p>

            <button
              onClick={scrollToContact}
              className="roll-button inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-secondary-300)] px-7 py-3 text-[var(--text-base-small)] font-bold uppercase tracking-wide text-[#f1f0ed] sm:py-4"
            >
              <span className="roll-button-label">
                <span>CONTACT ?</span>
                <span aria-hidden="true">CONTACT ?</span>
              </span>
            </button>
          </div>

          <div className="lg:col-span-4">
            <div className="hero-image-shell reveal is-visible relative overflow-hidden rounded-md">
              <img
                ref={imageRef}
                src="/photo_21.jpg"
                alt="Photography highlight"
                className="h-[15vh] max-w-lg object-cover object-center grayscale transition-transform duration-700 ease-smooth md:h-[50vh] md:w-full"
              />
            </div>
          </div>

          <div className="reveal is-visible mt-auto flex flex-col items-end justify-end lg:col-span-4">
            <span className="mb-2 max-w-[15ch] text-right font-mono text-[1rem] font-medium uppercase leading-snug tracking-[0.08em] text-[var(--color-secondary-100)]">
              Available for work
            </span>
            <span className="font-display text-[clamp(1.9531rem,1.496rem+2.2854vw,3.5529rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-[var(--color-secondary-300)] sm:text-[clamp(3rem,2.25rem+3.75vw,5.625rem)]">
              May&apos;26
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
