import { useEffect, useRef, useState } from 'react';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Generative AI',
    skills: [
      'LLMs',
      'RAG Pipelines',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'Prompt Engineering',
      'OpenAI',
      'Azure OpenAI',
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'NLP',
      'Transformers',
      'BERT',
      'Predictive Modeling',
      'Sentiment Analysis',
    ],
  },
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'Shell Scripting', 'JavaScript'],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'FastAPI',
      'Django',
      'Flask',
      'REST APIs',
      'Microservices',
      'Async Processing',
    ],
  },
  {
    title: 'Cloud',
    skills: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'SageMaker',
      'Azure AKS',
      'Vertex AI',
    ],
  },
  {
    title: 'MLOps & DevOps',
    skills: [
      'Docker',
      'Kubernetes',
      'MLflow',
      'Jenkins',
      'Ansible',
      'CI/CD',
      'Model Monitoring',
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      'PySpark',
      'Kafka',
      'Airflow',
      'Pandas',
      'NumPy',
      'ETL / ELT',
      'Data Pipelines',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Oracle', 'Hive', 'Redis', 'FAISS', 'Pinecone'],
  },
];

const About = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-dark py-24 text-cream md:py-32 lg:py-40"
    >
      <div className="section-pad w-full">
        <div
          id="skills"
          className="mb-24 grid grid-cols-1 gap-12 border-b border-white/10 pb-20 md:mb-32 md:pb-24 lg:mb-36 lg:grid-cols-12 lg:gap-16 lg:pb-28"
        >
          <div className="lg:col-span-5">
            <h2
              className={`section-title transition-all duration-700 ease-smooth ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              BUILD
              <br />
              SOLVE
              <br />
              DEPLOY/
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3
              className={`mb-10 text-2xl font-medium tracking-[-0.05em] transition-all duration-700 ease-smooth delay-100 md:text-4xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {skillCategories.map((category, catIndex) => (
                <div
                  key={category.title}
                  className={`transition-all duration-700 ease-smooth ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(catIndex + 2) * 100}ms` }}
                >
                  <h4 className="mb-4 text-[11px] uppercase tracking-[0.18em] text-cream/45">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="border-b border-white/8 pb-2 text-sm text-cream/72 transition-colors duration-200 hover:text-cream"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="about-me" className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div
            className={`lg:col-span-4 transition-all duration-700 ease-smooth delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="overflow-hidden bg-white/5">
              <img
                src={asset('asset_6.jpg')}
                alt="Interior with tapestry"
                className="h-[320px] w-full object-cover transition-transform duration-700 ease-smooth hover:scale-[1.03] md:h-[420px]"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p
              className={`mb-8 text-xl leading-relaxed text-cream/82 transition-all duration-700 ease-smooth delay-400 md:text-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Senior AI/ML and Generative AI Engineer with 4+ years of experience designing and deploying production-grade intelligent systems across healthcare and financial services.
            </p>

            <div
              className={`transition-all duration-700 ease-smooth delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="mb-4 block text-[11px] uppercase tracking-[0.18em] text-cream/40">
                (About Me)
              </span>
              <p className="max-w-xl text-base leading-relaxed text-cream/60">
                I&apos;m Tarun, I specialize in building scalable Generative AI, machine learning, and cloud-native solutions for complex enterprise environments. My experience covers the complete AI lifecycle—from data processing and model development to API integration, containerized deployment, monitoring, and automated retraining.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60">
                Across Johnson & Johnson, JPMorgan Chase, and Fortis Healthcare, I have worked on RAG architectures, enterprise assistants, clinical NLP, predictive analytics, financial sentiment modeling, and real-time inference systems. I build with Python, PyTorch, TensorFlow, LangChain, FastAPI, Spark, Docker, Kubernetes, and major cloud platforms. I focus on creating AI systems that are not only accurate in development but also secure, scalable, observable, and reliable in production.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60">
                When I&apos;m not coding I&apos;m behind a camera. I shoot a lot - mostly architecture, light, and whatever catches my eye.
                You can see some of it below. I&apos;m originally from India, open to opportunities anywhere,
                and I will absolutely spend 40 minutes making a loading animation feel right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
