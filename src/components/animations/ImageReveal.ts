import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion, animationConfig } from './animationConfig';

export function initImageReveals(): void {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal-image], .cinematic-image-wrapper');
  if (!elements.length) return;

  if (isReducedMotion()) {
    elements.forEach((el) => {
      const img = el.querySelector<HTMLElement>('img');
      el.style.clipPath = 'none';
      if (img) img.style.transform = 'none';
    });
    return;
  }

  elements.forEach((wrapper) => {
    const img = wrapper.querySelector<HTMLElement>('img');
    if (!img) return;

    // Set initial states
    gsap.set(wrapper, {
      clipPath: 'inset(0% 0% 100% 0%)',
      visibility: 'visible'
    });
    gsap.set(img, {
      scale: 1.045,
      transformOrigin: '50% 50%'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 88%',
        once: true
      }
    });

    tl.to(wrapper, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: animationConfig.duration.cinematic,
      ease: animationConfig.ease.cinematic
    }, 0);

    tl.to(img, {
      scale: 1.0,
      duration: animationConfig.duration.extended,
      ease: animationConfig.ease.luxury
    }, 0);
  });
}
