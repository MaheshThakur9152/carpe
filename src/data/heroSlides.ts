export interface HeroSlideData {
  id: number;
  slug?: string;
  image: string;
  alt: string;
  title?: string;
  description?: string;
  statement?: string;
  position?: 'lower-left' | 'lower-right' | 'center';
  details?: {
    gold: string;
    gemstones: string;
    diamonds: string;
    origin: string;
    description: string;
  };
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    image: '/Homepage-1.webp',
    alt: 'The World of Carpe Diam',
    statement: 'A closer look at the world of Carpe Diam,\nits inspirations, latest creations and the\npeople and process behind the pieces.',
    position: 'center'
  },
  {
    id: 2,
    slug: 'the-meher-necklace',
    image: '/Homepage-2.webp',
    alt: 'The Meher Necklace',
    title: 'THE MEHER NECKLACE',
    description: 'Emerald, pearls, diamonds,\nonyx in 14kt Gold',
    position: 'lower-left',
    details: {
      gold: 'Handcrafted in 14kt Yellow Gold',
      gemstones: 'Carved natural emerald centerpiece, fine drop pearls, black onyx accents',
      diamonds: 'Brilliant cut diamonds pavé setting',
      origin: 'Bombay Atelier',
      description: 'A sovereign statement of coastal Mughal luxury. Anchored by an intricately hand-fluted Colombian emerald framed in black onyx and suspended with lustrous drop pearls along a rigid torque gold collar.'
    }
  },
  {
    id: 3,
    slug: 'polki-fresco-earrings',
    image: '/Homepage-3.webp',
    alt: 'Polki Fresco Earrings',
    title: 'POLKI FRESCO EARRINGS',
    description: 'Uncut diamonds, diamonds,\nenamel work in 14kt gold',
    position: 'lower-right',
    details: {
      gold: '14kt Hand-hammered Yellow Gold',
      gemstones: 'Hand-painted miniature Meenakari enamel in emerald green and blush pink',
      diamonds: 'Uncut polki diamonds with micro-pavé halos',
      origin: 'Bombay Atelier',
      description: 'Inspired by classical fresco murals of historic Bombay mansions. These cascade earrings celebrate antique uncut polki diamonds set within meticulous pastel vitreous enamel frameworks.'
    }
  },
  {
    id: 4,
    slug: 'meher-pearl-earrings',
    image: '/Homepage-4.webp',
    alt: 'Meher Pearl Earrings',
    title: 'MEHER PEARL EARRINGS',
    description: 'Emerald, ruby, pearls,\ndiamonds, onyx in 14kt Gold',
    position: 'lower-left',
    details: {
      gold: '14kt Yellow Gold framework',
      gemstones: 'Carved emerald surmounts, pigeon blood rubies, natural basra-style pearls',
      diamonds: 'Round brilliant diamond pavé',
      origin: 'Bombay Atelier',
      description: 'The companion earrings to the Meher suite. Fluted emerald rosettes crown three architectural vertical drops adorned with onyx, rubies, and tiered pearl drops.'
    }
  },
  {
    id: 5,
    slug: 'florence-ring',
    image: '/Homepage-5.webp',
    alt: 'Florence Ring',
    title: 'FLORENCE RING',
    description: 'Carved tanzanite, ruby,\ndiamonds in 14kt Gold',
    position: 'lower-right',
    details: {
      gold: '14kt Solid Yellow Gold with crowned gallery',
      gemstones: 'Royal violet carved tanzanite cabochon, faceted natural rubies',
      diamonds: 'Fine brilliant pavé accents',
      origin: 'Bombay Atelier',
      description: 'A monument of color and volume. A dramatic sugarloaf tanzanite carved with vintage intaglio motifs rises from an intricate basket entirely paved with vivid rubies and diamonds.'
    }
  },
  {
    id: 6,
    slug: 'emerald-saber-pendant',
    image: '/Homepage-6.webp',
    alt: 'Emerald Saber Pendant',
    title: 'EMERALD SABER PENDANT',
    description: 'Emerald, ruby, diamonds,\nonyx in 14kt Gold',
    position: 'lower-left',
    details: {
      gold: '14kt Yellow Gold sculptural scabbard',
      gemstones: 'Cabochon emeralds, faceted rubies, carved black onyx scabbard blade',
      diamonds: 'Continuous line of channel and pavé diamonds',
      origin: 'Bombay Atelier',
      description: 'A daring talismanic creation taking the silhouette of an ornate miniature ceremonial khanjar (saber). Hand-sculpted in gold with lush emeralds, rubies, and mirror-finished onyx.'
    }
  },
  {
    id: 7,
    slug: 'the-gajratna-kada',
    image: '/Homepage-7.webp',
    alt: 'The Gajratna Kada',
    title: 'THE GAJRATNA KADA',
    description: 'Uncut diamonds, ruby, emerald,\ndiamonds in 14kt Gold',
    position: 'lower-right',
    details: {
      gold: '14kt Heavy Cast & Chiseled Yellow Gold',
      gemstones: 'Royal blue and midnight enamel, natural rubies, emerald accents',
      diamonds: 'Uncut polki clusters and pavé brilliant diamonds',
      origin: 'Bombay Atelier',
      description: 'An architectural heirloom cuff honoring the regal elephant motif (Gajratna). Each miniature sculpted elephant is embellished with hand enamel work, alternating with diamond-encrusted urns.'
    }
  },
  {
    id: 8,
    slug: 'rosette-polki-studs',
    image: '/Homepage-8.webp',
    alt: 'Rosette Polki Studs',
    title: 'ROSETTE POLKI STUDS',
    description: 'Uncut diamonds,\ndiamonds in 14kt Gold',
    position: 'lower-left',
    details: {
      gold: '14kt Sculpted Yellow Gold petals',
      gemstones: 'Natural polki uncut diamond centers',
      diamonds: 'Full pavé brilliant-cut diamond floral petals',
      origin: 'Bombay Atelier',
      description: 'Effortless heirloom elegance. Contoured five-petal gold flowers blooming in pavé diamonds, each cradling a luminous natural uncut polki diamond in a bezel setting.'
    }
  },
  {
    id: 9,
    slug: 'bee-tanzanite-earrings',
    image: '/Homepage-9.webp',
    alt: 'Bee Tanzanite Earrings',
    title: 'BEE TANZANITE EARRINGS',
    description: 'Carved tanzanite, ruby,\ndiamonds in 14kt Gold',
    position: 'lower-right',
    details: {
      gold: '14kt Yellow Gold botanical mountings',
      gemstones: 'Carved leaf-motif tanzanite drops, natural cabochon rubies',
      diamonds: 'Fine diamond halos and winged motifs',
      origin: 'Bombay Atelier',
      description: 'Delicate yet commanding. Botanical drop earrings featuring intaglio-carved tanzanites suspended beneath diamond-encrusted insect wings and ruby collars.'
    }
  }
];
