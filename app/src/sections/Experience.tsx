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
    role: 'Senior AI/ML Engineer',
    company: 'Johnson & Johnson',
    period: 'OCT 2025 — PRESENT',
    location: 'HEALTHCARE',
    description:
      'Building production-grade Generative AI and machine learning solutions for healthcare use cases, including clinical document summarization, knowledge extraction, patient-risk analysis, and medical text classification. My work combines LLMs, NLP, scalable APIs, cloud infrastructure, and MLOps practices while maintaining strict healthcare security and compliance standards.',
    highlights: [
      'Developed RAG-based applications using OpenAI, Azure OpenAI, FAISS, and Pinecone to improve contextual accuracy across clinical workflows.',
      'Built and deployed NLP and predictive models using PyTorch, TensorFlow, Scikit-learn, BERT, and GPT-based architectures.',
      'Deployed real-time AI services using FastAPI, Docker, Kubernetes, Azure AKS, and GCP Cloud Run with automated monitoring and CI/CD.',
    ],
  },
  {
    number: '02',
    role: 'Python / AI-ML Engineer',
    company: 'JPMorgan Chase & Co.',
    period: 'DEC 2024 — OCT 2025',
    location: 'FINANCIAL SERVICES',
    description:
      "Engineered enterprise AI and machine learning solutions for financial operations, compliance, research, and market intelligence. Developed reusable LLM orchestration services, secure microservices, sentiment models, and production MLOps pipelines within a highly regulated environment.",
    highlights: [
      'Built reusable GenAI orchestration services supporting multiple foundation models, prompt validation, response governance, and secure integrations.',
      'Developed financial NLP and sentiment-analysis systems using news, earnings calls, market signals, and central-bank communications.',
      'Implemented secure FastAPI and Django microservices, asynchronous APIs, and CI/CD workflows using AWS, Jenkins, Ansible, Docker, and Kubernetes.',
    ],
  },
  {
    number: '03',
    role: 'Python Engineer',
    company: 'Fortis Healthcare',
    period: 'JAN 2022 — JUL 2024',
    location: 'HEALTHCARE TECHNOLOGY',
    description:
      'Developed Python-based healthcare systems, machine learning services, and cloud-native microservices. Contributed to legacy modernization, NLP automation, model explainability, real-time monitoring, and AWS deployment for applications supporting healthcare operations.',
    highlights: [
      'Migrated legacy applications to Python microservices, improving system scalability, maintainability, and deployment flexibility.',
      'Built NLP pipelines for intent classification, entity extraction, and transformer-based call summarization integrated with CRM workflows.',
      'Deployed containerized services on AWS using Docker, Kubernetes, and SageMaker while supporting model monitoring and explainability with SHAP and LIME.',
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
