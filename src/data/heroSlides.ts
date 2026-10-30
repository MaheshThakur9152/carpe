export interface HeroSlideData {
  id: number;
  image: string;
  alt: string;
  title?: string;
  description?: string;
  statement?: string;
  position?: 'lower-left' | 'lower-right' | 'center';
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    image: '/Homepage-1.jpg',
    alt: 'The World of Carpe Diam',
    statement: 'A closer look at the world of Carpe Diam,\nits inspirations, latest creations and the\npeople and process behind the pieces.',
    position: 'center'
  },
  {
    id: 2,
    image: '/Homepage-2.png',
    alt: 'The Meher Necklace',
    title: 'THE MEHER NECKLACE',
    description: 'Emerald, pearls, diamonds,\nonyx in 14kt Gold',
    position: 'lower-left'
  },
  {
    id: 3,
    image: '/Homepage-3.png',
    alt: 'Polki Fresco Earrings',
    title: 'POLKI FRESCO EARRINGS',
    description: 'Uncut diamonds, diamonds,\nenamel work in 14kt gold',
    position: 'lower-right'
  },
  {
    id: 4,
    image: '/Homepage-4.png',
    alt: 'Meher Pearl Earrings',
    title: 'MEHER PEARL EARRINGS',
    description: 'Emerald, ruby, pearls,\ndiamonds, onyx in 14kt Gold',
    position: 'lower-left'
  },
  {
    id: 5,
    image: '/Homepage-5.png',
    alt: 'Florence Ring',
    title: 'FLORENCE RING',
    description: 'Carved tanzanite, ruby,\ndiamonds in 14kt Gold',
    position: 'lower-right'
  },
  {
    id: 6,
    image: '/Homepage-6.png',
    alt: 'Emerald Saber Pendant',
    title: 'EMERALD SABER PENDANT',
    description: 'Emerald, ruby, diamonds,\nonyx in 14kt Gold',
    position: 'lower-left'
  },
  {
    id: 7,
    image: '/Homepage-7.png',
    alt: 'The Gajratna Kada',
    title: 'THE GAJRATNA KADA',
    description: 'Uncut diamonds, ruby, emerald,\ndiamonds in 14kt Gold',
    position: 'lower-right'
  },
  {
    id: 8,
    image: '/Homepage-8.png',
    alt: 'Rosette Polki Studs',
    title: 'ROSETTE POLKI STUDS',
    description: 'Uncut diamonds,\ndiamonds in 14kt Gold',
    position: 'lower-left'
  },
  {
    id: 9,
    image: '/Homepage-9.png',
    alt: 'Bee Tanzanite Earrings',
    title: 'BEE TANZANITE EARRINGS',
    description: 'Carved tanzanite, ruby,\ndiamonds in 14kt Gold',
    position: 'lower-right'
  }
];
