import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: StaticImageData;
  description: string;
  details: string[];
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: StaticImageData;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}

/**
 * Represents the available view states in the application.
 */
export type View = 'home' | 'catalog' | 'product-detail';
