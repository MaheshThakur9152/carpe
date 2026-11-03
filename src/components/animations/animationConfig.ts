export const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const animationConfig = {
  ease: {
    luxury: 'power2.out',
    cinematic: 'power3.out',
    gentle: 'sine.out'
  },
  duration: {
    fast: 0.45,
    normal: 0.75,
    cinematic: 1.15,
    extended: 1.4
  },
  stagger: {
    micro: 0.08,
    standard: 0.12,
    gallery: 0.15
  },
  movement: {
    subtle: 12,
    standard: 18,
    section: 24
  }
} as const;
