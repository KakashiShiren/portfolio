import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    const mailtoLink = `mailto:tarunreddy2811@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-dark py-24 text-cream md:py-32 lg:py-40"
    >
      <div className="section-pad w-full">
        <div
          className={`mb-16 text-center transition-all duration-700 ease-smooth md:mb-24 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="section-title">
            LET&apos;S MAKE
            <br />
            IT HAPPEN
          </h2>
        </div>

        <div
          className={`mx-auto max-w-xl transition-all duration-700 ease-smooth delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="grain-card border border-white/10 p-8 md:p-12">
            <h3 className="mb-8 text-center text-lg font-medium md:text-xl">
              Reach out to me!
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="contact-input"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="contact-input"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows={4}
                  className="contact-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 bg-cream py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-dark transition-all duration-300 ease-smooth hover:-translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <>
                  Let&apos;s Connect
                  <ArrowUpRight size={16} />
                </>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
