
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface CatalogProps {
  onProductClick: (product: Product) => void;
}

const CATEGORIES = ['All', 'Outerwear', 'Suiting', 'Occasion', 'Accessories', 'Essentials'];

const Catalog: React.FC<CatalogProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-royal block mb-6 font-bold">Store Index</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight text-navy">The Collection</h1>
          </div>
          
          <div className="flex flex-wrap gap-x-10 gap-y-6 border-b border-gray-100 pb-8 md:pb-4 w-full md:w-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all relative group ${
                  activeCategory === cat ? 'text-navy' : 'text-gray-400 hover:text-navy'
                }`}
              >
                {cat}
                <span className={`absolute -bottom-4 left-0 h-[2px] bg-navy transition-all duration-500 ${
                  activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id} 
              onClick={() => onProductClick(product)}
              className="group cursor-pointer animate-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-soft-white group">
                <img 
                  src={product.imageUrl.src} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/[0.05] transition-colors duration-700"></div>
                
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white text-navy text-[8px] uppercase tracking-widest px-3 py-1.5 font-bold shadow-lg">New Season</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-bold tracking-[0.05em] uppercase text-navy group-hover:text-royal transition-colors">{product.name}</h3>
                  <span className="text-sm font-light text-gray-500 tracking-tighter">${product.price.toLocaleString()}</span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-medium">{product.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center border-t border-gray-50 mt-20">
            <p className="text-gray-400 font-serif italic text-2xl tracking-wide">Archiving the next chapter...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
