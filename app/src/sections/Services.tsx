import { useEffect, useRef, useState } from 'react';

interface Service {
  number: string;
  title: string;
  description: string;
  skills: string[];
  resume: string;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      "React, Node.js, Express on one end. PostgreSQL, REST APIs, and clean architecture on the other. I've built and shipped complete apps solo - JobQuest and InsightScribe both started as just an idea.",
    skills: ['React, Node.js, Express.js', 'REST APIs, PostgreSQL, MongoDB, Supabase', 'Git, GitHub, Jira, Modular Architecture'],
    resume: '/Resume_SE.pdf',
  },
  {
    number: '02',
    title: 'AI / ML Engineering',
    description:
      'I integrate LLMs, build NLP pipelines, and connect AI models to real software. Not just wrappers - actual systems with Whisper, LangChain, OpenAI, and HuggingFace doing meaningful work.',
    skills: ['LangChain, OpenAI, Whisper, HuggingFace', 'Python, TensorFlow, Scikit-learn, CNNs, LSTMs', 'Python, REST APIs, Model Optimization'],
    resume: '/Resume_ML.pdf',
  },
  {
    number: '03',
    title: 'Data & Analytics',
    description:
      "I've analyzed churn, built dashboards, and turned raw datasets into decisions. Whether it's EDA in Python or a Power BI report for leadership, I make data readable.",
    skills: ['Python, Pandas, NumPy, SQL, R', 'Tableau, Power BI, Jupyter', 'EDA, Feature Engineering, Predictive Modeling, Data Pipelines'],
    resume: '/Resume_DS.pdf',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '-40px' }
    );

    const items = sectionRef.current?.querySelectorAll('.service-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative rounded-t-3xl bg-[var(--color-secondary-400)] py-24 text-[var(--color-text-bg)] md:py-32 lg:py-40"
    >
      <div className="section-pad w-full">
        <div className="mb-16 grid grid-cols-1 gap-6 md:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-500)]">
              (EXPERTISE)
            </span>
            <h2 className="section-title font-display max-w-[9ch] font-semibold uppercase text-[var(--color-accent-400)]">
              WHAT I DO /
            </h2>
          </div>
          <p className="max-w-[40ch] text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] leading-snug text-[var(--color-secondary-100)] lg:col-span-5 lg:col-start-8">
            I build full-stack apps, AI pipelines, and data systems. 
            Some of it came from coursework, most of it came from running into a problem and deciding to fix it. 
            JobQuest started because tracking job applications in a spreadsheet was painful. 
            InsightScribe started because audio data deserved better than manual notes. That's usually how it goes.
          </p>
        </div>

        <div className="space-y-0 border-t border-[var(--color-secondary-200)]">
          {services.map((service, index) => (
            <div
              key={service.number}
              data-index={index}
              className={`service-item grid grid-cols-1 gap-6 border-b border-[var(--color-secondary-200)] py-10 transition-all duration-700 ease-smooth md:grid-cols-12 md:gap-8 ${
                visibleItems.has(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="md:col-span-2">
                <span className="service-index font-mono text-xl text-[var(--color-accent-400)] md:text-2xl">
                  ({service.number})
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-[var(--color-accent-200)] md:text-4xl">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="max-w-2xl text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] leading-snug text-[var(--color-secondary-100)]">
                  {service.description}
                </p>

                <div className="mt-8 space-y-0">
                  {service.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-5 border-t border-[var(--color-secondary-200)] py-4"
                    >
                      <span className="font-mono text-xs text-[var(--color-secondary-75)]">
                        0{skillIndex + 1}
                      </span>
                      <span className="text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] text-[var(--color-accent-200)]">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={service.resume}
                    download
                    className="inline-flex items-center justify-center border border-[var(--color-accent-500)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-300)] transition-all duration-300 ease-smooth hover:-translate-y-[2px] hover:bg-[var(--color-accent-400)] hover:text-[var(--color-secondary-400)]"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
