import { type MouseEvent, useEffect, useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { scrollToSelector } from '../lib/scroll';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const resumeUrl = asset('resume/Tarun.pdf');

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

  const scrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSelector('#contact', 32);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="section-pad w-full">
        <div className="mb-10 overflow-hidden md:mb-14">
          <div className="reveal is-visible">
            <h1 className="font-display hidden text-[clamp(3.5rem,2.3571rem+5.5143vw,10.5rem)] font-semibold uppercase leading-[80%] tracking-[-0.045em] text-[var(--color-secondary-400)] md:block">
              TARUN REDDY
            </h1>

            <h1 className="font-display flex flex-col text-[clamp(4rem,1.203rem+10.0714vw,10.25rem)] font-semibold uppercase leading-[80%] tracking-[-0.05em] text-[var(--color-secondary-400)] md:hidden">
              <span>TARUN</span>
              <span>REDDY</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="reveal is-visible flex flex-col justify-between gap-8 pt-3 lg:col-span-4">
            <div className="hidden overflow-hidden md:block">
              <ArrowDownRight size={26} className="text-[var(--color-accent-600)]" />
            </div>

            <div>
              <p className="max-w-[26ch] text-balance text-[clamp(1.125rem,0.9821rem+0.7143vw,1.625rem)] font-medium leading-snug text-[var(--color-secondary-100)]">
                <span className="whitespace-nowrap">SENIOR AI/ML &amp;</span>
                <br />
                <span className="whitespace-nowrap">GENERATIVE AI ENGINEER</span>
              </p>
              <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-[var(--color-secondary-75)] md:text-base">
                Building production-grade GenAI, machine learning, and cloud-native AI systems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={scrollToContact}
                aria-label="Scroll to contact section"
                className="roll-button inline-flex w-fit items-center justify-center rounded-full bg-[var(--color-secondary-300)] px-7 py-3 text-[var(--text-base-small)] font-bold uppercase tracking-wide text-[#f1f0ed] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-secondary-300)] sm:py-4"
              >
                <span className="roll-button-label">
                  <span>CONTACT</span>
                  <span aria-hidden="true">CONTACT</span>
                </span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Tarun Reddy resume in a new tab"
                className="roll-button inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-secondary-300)] px-7 py-3 text-[var(--text-base-small)] font-bold uppercase tracking-wide text-[var(--color-secondary-300)] transition-colors duration-300 hover:text-[#f1f0ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-secondary-300)] sm:py-4"
              >
                <span className="roll-button-label">
                  <span>RESUME</span>
                  <span aria-hidden="true">RESUME</span>
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="hero-image-shell reveal is-visible relative overflow-hidden rounded-md">
              <img
                ref={imageRef}
                src={asset('photo_21.jpg')}
                alt="Black-and-white architectural photograph featured in Tarun Reddy's portfolio"
                className="h-[15vh] w-full max-w-full object-cover object-center grayscale transition-transform duration-700 ease-smooth md:h-[50vh] md:max-w-lg"
              />
            </div>
          </div>

          <div className="reveal is-visible mt-auto flex flex-col items-start justify-end lg:col-span-4 lg:items-end">
            <div className="max-w-[18ch] text-left font-mono text-[1rem] font-medium uppercase leading-snug tracking-[0.08em] text-[var(--color-secondary-100)] lg:text-right">
              <span className="mb-2 block text-[0.75rem] tracking-[0.16em] text-[var(--color-secondary-75)]">
                SPECIALIZED IN
              </span>
              <span className="block">
                GENAI &middot; MLOPS &middot;
                <br />
                CLOUD AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
