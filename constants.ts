
import { Product, Collection, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sovereign Wool Overcoat',
    price: 1850,
    category: 'Outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop',
    description: 'A masterpiece of tailoring, crafted from the finest double-faced cashmere wool blend. Designed for the discerning individual who values both warmth and weightless elegance.',
    details: ['100% Virgin Wool', 'Silk Lined', 'Hand-stitched Lapels', 'Internal Pocket for Timepiece']
  },
  {
    id: '2',
    name: 'Ivory Silk Column Gown',
    price: 2400,
    category: 'Occasion',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    description: 'Minimalism redefined. A fluid silhouette crafted from heavyweight mulberry silk that catches the light with every movement.',
    details: ['100% Mulberry Silk', 'Invisible Back Zip', 'Floor Length', 'Internal Corsetry']
  },
  {
    id: '3',
    name: 'Monolith Leather Tote',
    price: 950,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1584917033904-493bb3c3e15b?q=80&w=1000&auto=format&fit=crop',
    description: 'Structured elegance for the modern professional. Italian vegetable-tanned leather that develops a unique patina over time.',
    details: ['Grained Calfskin', 'Gold-plated Hardware', 'Internal Suede Lining', 'Hand-painted Edges']
  },
  {
    id: '4',
    name: 'Nocturnal Evening Blazer',
    price: 1200,
    category: 'Suiting',
    imageUrl: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f68e?q=80&w=1000&auto=format&fit=crop',
    description: 'Defined shoulders and a cinched waist create a powerful, royal silhouette for evening affairs.',
    details: ['Wool Crepe', 'Satin Peak Lapels', 'Working Cuffs', 'Bemberg Lining']
  },
  {
    id: '5',
    name: 'Alabaster Silk Blouse',
    price: 680,
    category: 'Essentials',
    imageUrl: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=1000&auto=format&fit=crop',
    description: 'The foundation of a premium wardrobe. Cut with a relaxed yet intentional drape.',
    details: ['Sand-washed Silk', 'Mother of Pearl Buttons', 'Relaxed Fit']
  },
  {
    id: '6',
    name: 'Onyx Tapered Trousers',
    price: 820,
    category: 'Suiting',
    imageUrl: 'https://images.unsplash.com/photo-1594633277343-bc0d5a67c14f?q=80&w=1000&auto=format&fit=crop',
    description: 'High-waisted with a sharp break. Crafted from high-twist wool for wrinkle resistance.',
    details: ['100% High-Twist Wool', 'Side Adjusters', 'Unfinished Hem for Custom Tailoring']
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'winter-24',
    title: 'The Winter Solstice',
    subtitle: 'Architectural silhouettes meeting raw textures.',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    link: 'catalog'
  },
  {
    id: 'heritage',
    title: 'Heritage Monarchy',
    subtitle: 'Celebrating the timeless art of bespoke tailoring.',
    imageUrl: 'https://images.unsplash.com/photo-1550995594-386249d2984d?q=80&w=1200&auto=format&fit=crop',
    link: 'catalog'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The quality of craftsmanship is unparalleled. It feels like wearing history and modernism all at once.",
    author: "Elena Vance",
    location: "London, UK"
  },
  {
    id: 't2',
    quote: "AURELIA represents the rare intersection of true luxury and wearable art.",
    author: "Marcus Aurelius",
    location: "Paris, France"
  }
];
