export function initHeaderAnimation(): void {
  if (typeof window === 'undefined') return;

  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;

  let lastKnownScrollPosition = 0;
  let ticking = false;
  const threshold = 36;

  function onScroll() {
    lastKnownScrollPosition = window.scrollY || window.pageYOffset;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastKnownScrollPosition > threshold) {
          header?.classList.add('is-scrolled');
        } else {
          header?.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  // Initial check
  onScroll();

  if ((window as any).__cd_header_onscroll) {
    window.removeEventListener('scroll', (window as any).__cd_header_onscroll);
  }
  (window as any).__cd_header_onscroll = onScroll;
  window.addEventListener('scroll', onScroll, { passive: true });
}
