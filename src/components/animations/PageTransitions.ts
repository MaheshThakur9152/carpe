import { gsap } from 'gsap';
import { isReducedMotion } from './animationConfig';

export function initPageTransitions(): void {
  if (typeof window === 'undefined') return;

  const main = document.querySelector<HTMLElement>('main');
  if (!main) return;

  if (!isReducedMotion()) {
    // Elegant entrance on page load
    gsap.fromTo(
      main,
      { opacity: 0.82 },
      { opacity: 1, duration: 0.38, ease: 'power2.out' }
    );

    // Reset visibility if restored from browser back-forward cache (bfcache)
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        gsap.set(main, { opacity: 1, y: 0 });
      }
    });
  }

  // Intercept internal link clicks for smooth editorial exit transition
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');
  links.forEach((link) => {
    // Avoid re-binding if already attached
    if (link.dataset.transitionBound) return;
    link.dataset.transitionBound = 'true';

    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // Ignore anchors with hash on same page, download, target _blank, or keyboard modifiers
      if (
        !href ||
        href.startsWith('#') ||
        link.target === '_blank' ||
        link.hasAttribute('download') ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // If already on this path (normalized for trailing slash), don't re-transition
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const targetPath = href.replace(/\/$/, '') || '/';
      if (targetPath === currentPath) return;

      if (isReducedMotion()) return;

      e.preventDefault();

      // Safety timeout: restore visibility if page navigation stalls
      const safetyReset = setTimeout(() => {
        gsap.set(main, { opacity: 1, y: 0 });
      }, 750);

      gsap.to(main, {
        opacity: 0,
        y: -6,
        duration: 0.22,
        ease: 'power1.inOut',
        onComplete: () => {
          clearTimeout(safetyReset);
          window.location.href = href;
        }
      });
    });
  });
}
