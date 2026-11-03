import { gsap } from 'gsap';
import { isReducedMotion, animationConfig } from './animationConfig';

export function initScrollReveals(): void {
  if (typeof window === 'undefined') return;

  const sections = document.querySelectorAll<HTMLElement>('[data-reveal-section], .editorial-section-reveal');
  const parallaxImages = document.querySelectorAll<HTMLElement>('[data-parallax-image]');
  const galleryGrids = document.querySelectorAll<HTMLElement>('[data-editorial-gallery]');
  const progressBar = document.querySelector<HTMLElement>('.scroll-progress-line');

  // Scroll Progress Bar
  if (progressBar && !isReducedMotion()) {
    gsap.set(progressBar, { scaleX: 0, transformOrigin: '0% 50%' });
    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.15
      }
    });
  }

  // Section Entrance
  if (sections.length) {
    if (isReducedMotion()) {
      sections.forEach((sec) => {
        sec.style.opacity = '1';
        sec.style.transform = 'none';
      });
    } else {
      sections.forEach((sec) => {
        gsap.set(sec, { opacity: 0, y: animationConfig.movement.section });
        gsap.to(sec, {
          opacity: 1,
          y: 0,
          duration: animationConfig.duration.cinematic,
          ease: animationConfig.ease.luxury,
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            once: true
          }
        });
      });
    }
  }

  // Restrained Jewellery Parallax (2-4%)
  if (parallaxImages.length && !isReducedMotion() && window.innerWidth > 768) {
    parallaxImages.forEach((wrapper) => {
      const img = wrapper.querySelector<HTMLElement>('img');
      if (!img) return;

      gsap.fromTo(
        img,
        { yPercent: -2 },
        {
          yPercent: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6
          }
        }
      );
    });
  }

  // Complementary Creations / Gallery Grids
  if (galleryGrids.length) {
    galleryGrids.forEach((grid) => {
      const cards = grid.querySelectorAll<HTMLElement>('.editorial-gallery-item');
      if (!cards.length) return;

      if (isReducedMotion()) {
        cards.forEach((card) => {
          card.style.opacity = '1';
          card.style.transform = 'none';
        });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 22 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: animationConfig.duration.normal,
        stagger: animationConfig.stagger.gallery,
        ease: animationConfig.ease.luxury,
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          once: true
        }
      });
    });
  }
}
