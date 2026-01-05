
import { Product, Collection, Testimonial } from './types';
import img1 from "@/public/assets/oban 1.png";
import img2 from "@/public/assets/oban 3.png"
import img5 from "@/public/assets/5.png"
import img6 from "@/public/assets/6.png";
import img7 from "@/public/assets/7.png"
import img8 from "@/public/assets/2.png"
// import img9 from "@/public/assets/1.png"
import img9 from "@/public/assets/3.png"
import img10 from "@/public/assets/4.png"

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sovereign Wool Overcoat',
    price: 1850,
    category: 'Outerwear',
    imageUrl: img5,
    description: 'A masterpiece of tailoring, crafted from the finest double-faced cashmere wool blend. Designed for the discerning individual who values both warmth and weightless elegance.',
    details: ['100% Virgin Wool', 'Silk Lined', 'Hand-stitched Lapels', 'Internal Pocket for Timepiece']
  },
  {
    id: '2',
    name: 'Ivory Silk Column Gown',
    price: 2400,
    category: 'Occasion',
    imageUrl: img6,
    description: 'Minimalism redefined. A fluid silhouette crafted from heavyweight mulberry silk that catches the light with every movement.',
    details: ['100% Mulberry Silk', 'Invisible Back Zip', 'Floor Length', 'Internal Corsetry']
  },
  {
    id: '3',
    name: 'Monolith Leather Tote',
    price: 950,
    category: 'Accessories',
    imageUrl:img7,
    description: 'Structured elegance for the modern professional. Italian vegetable-tanned leather that develops a unique patina over time.',
    details: ['Grained Calfskin', 'Gold-plated Hardware', 'Internal Suede Lining', 'Hand-painted Edges']
  },
  {
    id: '4',
    name: 'Nocturnal Evening Blazer',
    price: 1200,
    category: 'Suiting',
    imageUrl: img8,
    description: 'Defined shoulders and a cinched waist create a powerful, royal silhouette for evening affairs.',
    details: ['Wool Crepe', 'Satin Peak Lapels', 'Working Cuffs', 'Bemberg Lining']
  },
  {
    id: '5',
    name: 'Alabaster Silk Blouse',
    price: 680,
    category: 'Essentials',
    imageUrl: img9,
    description: 'The foundation of a premium wardrobe. Cut with a relaxed yet intentional drape.',
    details: ['Sand-washed Silk', 'Mother of Pearl Buttons', 'Relaxed Fit']
  },
  {
    id: '6',
    name: 'Onyx Tapered Trousers',
    price: 820,
    category: 'Suiting',
    imageUrl: img10,
    description: 'High-waisted with a sharp break. Crafted from high-twist wool for wrinkle resistance.',
    details: ['100% High-Twist Wool', 'Side Adjusters', 'Unfinished Hem for Custom Tailoring']
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'winter-24',
    title: 'The Winter Solstice',
    subtitle: 'Architectural silhouettes meeting raw textures.',
    imageUrl: img1,
    link: 'catalog'
  },
  {
    id: 'heritage',
    title: 'Heritage Monarchy',
    subtitle: 'Celebrating the timeless art of bespoke tailoring.',
    imageUrl: img2,
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
