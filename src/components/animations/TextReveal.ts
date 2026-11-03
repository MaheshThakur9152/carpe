import { gsap } from 'gsap';
import { isReducedMotion, animationConfig } from './animationConfig';

export function initTextReveals(): void {
  if (typeof window === 'undefined') return;

  const groups = document.querySelectorAll<HTMLElement>('[data-reveal-text-group], .stagger-text-group');
  if (!groups.length) return;

  if (isReducedMotion()) {
    groups.forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>('[data-reveal-item], .editorial-reveal-item');
      items.forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'none';
      });
    });
    return;
  }

  groups.forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-reveal-item], .editorial-reveal-item');
    if (!items.length) return;

    gsap.set(items, {
      opacity: 0,
      y: animationConfig.movement.standard
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration.normal,
      stagger: animationConfig.stagger.standard,
      ease: animationConfig.ease.luxury,
      scrollTrigger: {
        trigger: group,
        start: 'top 88%',
        once: true
      }
    });
  });
}
