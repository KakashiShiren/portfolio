import { useEffect, useRef, useState } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'R'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'AI / ML',
    skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'CNNs', 'NLP', 'Computer Vision'],
  },
  {
    title: 'LLMs & AI Tools',
    skills: ['LangChain', 'OpenAI', 'Whisper', 'HuggingFace', 'Groq', 'Claude', 'Prompt Engineering'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Pandas', 'NumPy', 'Tableau', 'Power BI'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Git'],
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
        <div id="skills" className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              className={`section-title transition-all duration-700 ease-smooth ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              ENGINEER
              <br />
              FOUNDER
              <br />
              CREATOR/
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
                src="/asset_6.jpg"
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
              I am a CS grad student who co-founded a startup,
              taught AI to other grad students, and still finds time to build things nobody asked for.
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
                I&apos;m Tarun - full-stack engineer, AI builder, and occasional founder. I&apos;m finishing my Master&apos;s in Computer Science at Clark University while building InsightScribe on the side with a co-founder.
                Before that I interned at an AI lab in Abu Dhabi, which sounds more glamorous than it was - mostly pipelines, model eval, and a lot of debugging.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/60">
                I work across the whole stack. Frontend, backend, ML, data - I pick whatever the problem needs.
                Most of my best projects started because I got annoyed at something that didn&apos;t exist yet.
                JobQuest was one. EnterpriseIQ was another.
                PerfectDate was me procrastinating on something else entirely.
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
