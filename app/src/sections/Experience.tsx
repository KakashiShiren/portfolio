import { useEffect, useRef, useState } from 'react';

interface ExperienceItem {
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    number: '01',
    role: 'Co-Founder / Founding Engineer',
    company: 'InsightScribe',
    period: 'In Development',
    location: 'Startup',
    description:
      'Co-founded an audio intelligence platform with a friend. We wanted something that could turn raw recordings into something actually useful — transcripts, summaries, searchable insights. I handle the frontend in React/Next.js, the AI pipeline using Whisper and HuggingFace, and most of the product decisions along the way.',
    highlights: [
      'Built the full frontend from wireframe to working UI - every screen, every interaction.',
      'Engineered the transcription and insight pipeline using Whisper, OpenAI, and HuggingFace.',
      'Shaped product direction, prioritized features, and kept the build moving in a two-person founding team.',
    ],
  },
  {
    number: '02',
    role: 'Teaching Assistant',
    company: 'Clark University',
    period: '2025 – Present',
    location: 'Worcester, MA',
    description:
      "Taught three different things - React/Node.js labs, Usability Engineering, and Generative AI. In the labs I'd debug broken Node servers, port conflicts, and npm issues live with 40+ students. For UE I helped with user research methods and interface evaluation. For GenAI I walked students through LLM fundamentals, prompt engineering, and building with APIs.",
    highlights: [
      'Led hands-on labs in React and Node.js for 40+ grad students - debugging servers, APIs, and broken environments in real time.',
      'Taught Usability Engineering concepts including user research, interface design, and evaluation methods.',
      'Supported Generative AI coursework, helping students understand LLM fundamentals, prompt design, Agentic RAG models, and applied use cases.',
    ],
  },
  {
    number: '03',
    role: 'AI / ML Intern',
    company: 'IMAI Innovations',
    period: '2023 – 2024',
    location: 'Abu Dhabi, UAE',
    description:
      'Interned remotely with an AI lab in Abu Dhabi, working on applied ML projects that needed to actually function in production. Learned a lot about the gap between a model that works in a notebook and one that holds up in a real system.',
    highlights: [
      'Optimized model training workflows, reducing training time by 20% while keeping inference accuracy intact.',
      'Built ML pipelines across the full cycle — data preprocessing, feature engineering, model training, and evaluation.',
      'Shipped AI features via REST APIs that plugged directly into production platforms used by real clients.',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-dark py-24 text-cream md:py-32 lg:py-40"
    >
      <div className="section-pad w-full">
        <div className="mb-16 grid grid-cols-1 gap-6 md:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-cream/45">
              (Experience)
            </span>
            <h2 className="section-title font-semibold">WORK EXPERIENCE /</h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-cream/62 md:text-base lg:col-span-5 lg:col-start-8">
            I like roles where I get to build, not just observe. 
            Each of these pushed me to think across engineering, AI, and communication at the same time.
          </p>
        </div>

        <div className="space-y-0 border-t border-white/12">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.number}-${experience.role}`}
              className={`experience-item grid grid-cols-1 gap-8 border-b border-white/12 py-10 transition-all duration-700 ease-smooth lg:grid-cols-12 lg:gap-10 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="lg:col-span-2">
                <span className="project-number mega-number text-white/18">
                  {experience.number}
                </span>
              </div>

              <div className="lg:col-span-4">
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cream/40">
                  ({experience.number})
                </div>

                <h3 className="text-2xl font-medium tracking-[-0.05em] md:text-4xl">
                  {experience.role}
                </h3>

                <p className="mt-3 text-base text-cream/72 md:text-lg">
                  {experience.company}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream/55">
                    {experience.period}
                  </span>
                  <span className="border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream/55">
                    {experience.location}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <p className="max-w-2xl text-sm leading-7 text-cream/72 md:text-[15px]">
                  {experience.description}
                </p>

                <div className="mt-8 space-y-4">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex gap-4 border-t border-white/8 pt-4"
                    >
                      <span className="font-mono text-xs text-cream/35">
                        0{highlightIndex + 1}
                      </span>
                      <p className="text-sm leading-7 text-cream/64 md:text-[15px]">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
