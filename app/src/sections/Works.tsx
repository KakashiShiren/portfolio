import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'InsightScribe',
    subtitle: 'AI · Full-Stack',
    description:
      'An audio intelligence platform I co-founded. Upload a recording, get back structured transcripts, summaries, and searchable insights. Built on React/Next.js, Node.js, OpenAI Whisper, and HuggingFace. This one is a real product, not a side project.',
    tags: ['In Progress', '2026'],
    image: asset('project_1.jpg'),
    link: 'https://github.com/KakashiShiren/insightscribe-frontend',
  },
  {
    number: '02',
    title: 'EnterpriseIQ',
    subtitle: 'AI · Data',
    description:
      'A natural language SQL agent that lets anyone query a database in plain English. No SQL needed — it handles multi-table joins, aggregations, and complex business questions on its own. Built with LangChain and LLaMA-3.3-70b.',
    tags: ['Development', '2025'],
    image: asset('project_2.jpg'),
    link: 'https://github.com/KakashiShiren/enterpriseiq',
  },
  {
    number: '03',
    title: 'JobQuest',
    subtitle: 'Full-Stack SaaS',
    description:
      'Built this because job tracking in spreadsheets was driving me crazy. Pulls real listings from the USAJobs API, normalizes the data, and tracks application timelines. Cut my manual tracking effort by 70%. Solo project, end to end. Built with React, Node.js, Express, and PostgreSQL.',
    tags: ['Development', '2024'],
    image: asset('project_3.jpg'),
    link: 'https://github.com/KakashiShiren/job-app-tracker-frontend',
  },
  {
    number: '04',
    title: 'PerfectDate',
    subtitle: 'AI · Full-Stack',
    description:
      "An AI-powered date planner that generates full personalized itineraries based on your budget, location, vibe, and occasion. Answer a few questions, get a complete plan back instantly. Built with React and Groq's API — and yes, it's actually deployed and working.",
    tags: ['Development', '2025'],
    image: asset('project_4.jpg'),
    link: 'https://perfect-date-two.vercel.app/',
  },
  {
    number: '05',
    title: 'Real-Time Facial Emotion & Age Detection',
    subtitle: 'ML · Computer Vision',
    description:
      'A live computer vision app that detects emotions and predicts age from a webcam feed in real time. Built with OpenCV, DeepFace, and a custom CNN. Optimized for low latency - no frame drops during live inference.',
    tags: ['Development', '2025'],
    image: asset('project_5.jpg'),
    link: 'https://github.com/KakashiShiren/facial-emotion-age-detection',
  },
];

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
          <div className="lg:col-span-5">
            <span className="mb-5 block text-[11px] uppercase tracking-[0.24em] text-cream/45">
              (Projects)
            </span>
            <h2 className="section-title font-semibold">SELECTED WORKS /</h2>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-cream/62 md:text-base lg:col-span-5 lg:col-start-8">
            I co-founded a startup, interned at an AI lab in Abu Dhabi, and kept building things on the side because I
            couldn't stop. These five projects span the full range - LLM agents, audio intelligence, computer vision,
            full-stack apps, and an AI date planner I built just because the idea was fun. Each one solved something
            real. I built them because I needed them to exist or because the problem was too interesting to ignore.
          </p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {projects.map((project, index) => (
            <a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-index={index}
              className={`project-item project-card block border-t border-white/12 pt-8 transition-all duration-700 ease-smooth ${
                visibleItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-2">
                  <span className="project-number mega-number text-white/18">{project.number}</span>
                </div>

                <div className="lg:col-span-4">
                  <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cream/40">
                    ({project.number})
                  </div>

                  <h3 className="flex items-start gap-3 text-2xl font-medium tracking-[-0.05em] md:text-4xl">
                    <span>{project.title}</span>
                    <ArrowUpRight size={20} className="mt-1 shrink-0 opacity-60" />
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.08em] text-cream/50 md:text-[15px]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-cream/72 md:text-[15px]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="border border-white/12 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="project-media project-image-shell relative overflow-hidden bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[280px] w-full object-cover md:h-[420px] lg:h-[500px]"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
