import { useEffect, useRef, useState } from 'react';

type ProjectVisualVariant = 'clinical' | 'financial' | 'healthcare' | 'platform';

interface Project {
  number: string;
  title: string;
  organization: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  technologies: string[];
  visualVariant: ProjectVisualVariant;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Clinical Knowledge & Summarization Platform',
    organization: 'Johnson & Johnson',
    category: 'Generative AI / Healthcare',
    status: 'Enterprise Project',
    description:
      'Contributed to production-grade Generative AI and retrieval-augmented generation workflows for clinical knowledge retrieval, document summarization, and intelligent information extraction. Worked on LLM integration, retrieval quality, API services, deployment, monitoring, and responsible AI capabilities within secure enterprise environments.',
    highlights: [
      'Built and enhanced RAG workflows for clinical knowledge retrieval and summarization.',
      'Integrated LLM services with vector search and backend APIs.',
      'Supported model evaluation, observability, deployment, and production reliability.',
      'Worked with healthcare data while following enterprise security and compliance requirements.',
    ],
    technologies: [
      'Python',
      'OpenAI',
      'Azure OpenAI',
      'LangChain',
      'RAG',
      'FAISS',
      'Pinecone',
      'FastAPI',
      'PyTorch',
      'TensorFlow',
      'Docker',
      'Kubernetes',
      'Azure AKS',
      'MLflow',
    ],
    visualVariant: 'clinical',
  },
  {
    number: '02',
    title: 'Enterprise Financial AI Assistant',
    organization: 'JPMorgan Chase',
    category: 'Generative AI / Financial Services',
    status: 'Enterprise Project',
    description:
      'Contributed to enterprise AI assistant capabilities supporting document analysis, research, compliance-oriented workflows, and financial information processing. Worked on prompt engineering, LLM orchestration, financial NLP, backend APIs, deployment automation, and scalable cloud infrastructure.',
    highlights: [
      'Developed components for enterprise LLM-assisted workflows.',
      'Worked on prompt design, orchestration, and response quality.',
      'Built or enhanced backend services using Python, FastAPI, and Django.',
      'Supported CI/CD, containerization, cloud deployment, and production operations.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Django',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'OpenAI',
      'NLP',
      'Sentiment Analysis',
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Ansible',
    ],
    visualVariant: 'financial',
  },
  {
    number: '03',
    title: 'Healthcare NLP & Automation Platform',
    organization: 'Fortis Healthcare',
    category: 'Machine Learning / Healthcare',
    status: 'Enterprise Project',
    description:
      'Developed and supported Python-based healthcare applications and NLP workflows for text processing, summarization, intent classification, predictive analytics, and operational automation. Contributed to backend services, model integration, cloud deployment, and scalable data-processing workflows.',
    highlights: [
      'Developed Python microservices and REST APIs.',
      'Worked on NLP pipelines for classification and summarization.',
      'Supported model deployment and cloud-based machine learning workflows.',
      'Used explainability and monitoring techniques to improve model transparency.',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'BERT',
      'Transformers',
      'NLP',
      'AWS',
      'SageMaker',
      'Docker',
      'Kubernetes',
      'FastAPI',
      'SHAP',
      'LIME',
    ],
    visualVariant: 'healthcare',
  },
  {
    number: '04',
    title: 'Production AI Platform Engineering',
    organization: 'Cross-Enterprise Experience',
    category: 'MLOps / Cloud AI',
    status: 'Engineering Capability',
    description:
      'Designed and supported reusable production patterns for deploying, monitoring, and scaling AI and machine learning services across cloud environments. This work included API-based inference, containerized workloads, orchestration, CI/CD, model lifecycle management, observability, and automated retraining workflows.',
    highlights: [
      'Built API-based inference services and cloud-native deployment patterns.',
      'Used Docker and Kubernetes for scalable model serving.',
      'Supported model tracking, monitoring, CI/CD, and release automation.',
      'Worked across AWS, Azure, and Google Cloud environments.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Docker',
      'Kubernetes',
      'MLflow',
      'Jenkins',
      'CI/CD',
      'AWS',
      'Azure',
      'Google Cloud',
      'PySpark',
      'Kafka',
      'Airflow',
    ],
    visualVariant: 'platform',
  },
];

const visualThemes: Record<
  ProjectVisualVariant,
  {
    glow: string;
    node: string;
    ring: string;
    line: string;
  }
> = {
  clinical: {
    glow: 'bg-emerald-200/20',
    node: 'bg-emerald-200',
    ring: 'border-emerald-200/25',
    line: 'from-emerald-200/0 via-emerald-200/45 to-emerald-200/0',
  },
  financial: {
    glow: 'bg-sky-200/20',
    node: 'bg-sky-200',
    ring: 'border-sky-200/25',
    line: 'from-sky-200/0 via-sky-200/45 to-sky-200/0',
  },
  healthcare: {
    glow: 'bg-violet-200/20',
    node: 'bg-violet-200',
    ring: 'border-violet-200/25',
    line: 'from-violet-200/0 via-violet-200/45 to-violet-200/0',
  },
  platform: {
    glow: 'bg-amber-200/20',
    node: 'bg-amber-200',
    ring: 'border-amber-200/25',
    line: 'from-amber-200/0 via-amber-200/45 to-amber-200/0',
  },
};

const ProjectVisualPanel = ({ variant }: { variant: ProjectVisualVariant }) => {
  const theme = visualThemes[variant];

  return (
    <div
      className="project-media project-image-shell relative h-56 overflow-hidden border border-white/10 bg-white/[0.035] md:h-64"
      aria-hidden="true"
    >
      <div className="project-visual-core absolute inset-0">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(232,230,225,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(232,230,225,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className={`absolute left-6 top-6 h-32 w-32 rounded-full blur-3xl ${theme.glow}`} />
        <div className={`absolute bottom-4 right-6 h-40 w-40 rounded-full blur-3xl ${theme.glow}`} />
        <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-white/15" />
        <div className={`absolute left-[16%] right-[18%] top-[34%] h-px bg-gradient-to-r ${theme.line}`} />
        <div className={`absolute left-[20%] right-[12%] top-[66%] h-px bg-gradient-to-r ${theme.line}`} />
        <div className={`absolute left-[18%] top-[28%] h-24 w-24 rounded-full border ${theme.ring}`} />
        <div className={`absolute right-[16%] top-[42%] h-32 w-32 rounded-full border ${theme.ring}`} />
        <div className={`absolute left-[31%] top-[48%] h-2.5 w-2.5 rounded-full ${theme.node}`} />
        <div className={`absolute right-[27%] top-[33%] h-2 w-2 rounded-full ${theme.node}`} />
        <div className={`absolute bottom-[24%] left-[54%] h-2 w-2 rounded-full ${theme.node}`} />
      </div>
    </div>
  );
};

const Works = () => {
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
      { threshold: 0.2, rootMargin: '-5% 0px -10% 0px' }
    );

    const items = sectionRef.current?.querySelectorAll('.project-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative bg-dark py-24 text-cream md:py-32 lg:py-40"
    >
      <div className="section-pad w-full">
        <div className="mb-16 grid grid-cols-1 gap-6 md:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-cream/45">
              (Featured AI Systems)
            </span>
            <h2 className="section-title font-semibold">FEATURED AI SYSTEMS /</h2>
          </div>

          <div className="max-w-2xl lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-relaxed text-cream/62 md:text-base">
              Selected enterprise AI and machine learning systems I contributed to across healthcare and financial
              services.
            </p>
            <p className="mt-6 border-l border-white/14 pl-4 text-xs leading-6 text-cream/45 md:text-sm">
              Selected work is described at a high level to respect employer confidentiality and proprietary
              information.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-index={index}
              className={`project-item project-card flex h-full min-w-0 flex-col border-t border-white/12 pt-8 transition-all duration-700 ease-smooth ${
                visibleItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-7 flex items-start justify-between gap-6">
                <span className="project-number font-display text-[clamp(4rem,8vw,7.5rem)] leading-[0.84] tracking-[-0.08em] text-white/18">
                  {project.number}
                </span>
                <span className="mt-2 inline-flex cursor-default border border-white/12 px-3 py-1 text-right text-[10px] uppercase tracking-[0.18em] text-cream/58">
                  {project.status}
                </span>
              </div>

              <ProjectVisualPanel variant={project.visualVariant} />

              <div className="mt-8 flex flex-1 flex-col">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cream/45">
                    {project.organization}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-cream/30" aria-hidden="true" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cream/45">
                    {project.category}
                  </span>
                </div>

                <h3 className="max-w-xl text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-cream/72 md:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-[11px] uppercase tracking-[0.18em] text-cream/45">
                    Contribution highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-cream/62">
                        <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-cream/45" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full break-words border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-cream/58"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
