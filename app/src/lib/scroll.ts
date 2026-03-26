import type Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function scrollToSelector(selector: string, offset = 24) {
  const element = document.querySelector(selector);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  if (window.__lenis) {
    window.__lenis.scrollTo(top, { duration: 1.1 });
    return;
  }

  window.scrollTo({ top, behavior: 'smooth' });
}

export function scrollToTop() {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { duration: 1 });
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
