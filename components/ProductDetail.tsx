
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="flex items-center text-[10px] uppercase tracking-[0.4em] font-bold text-royal hover:text-navy transition-colors mb-16 group"
        >
          <span className="mr-3 transition-transform group-hover:-translate-x-2">←</span> Back to Store
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 space-y-12">
            <div className="aspect-[3/4] bg-soft-white overflow-hidden shadow-sm animate-in">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-12">
               <div className="aspect-square bg-soft-white overflow-hidden reveal active">
                  <img src={product.imageUrl} className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-[1.5s]" alt="Detail Focus" />
               </div>
               <div className="aspect-square bg-soft-white overflow-hidden reveal active" style={{ transitionDelay: '0.2s' }}>
                  <img src={product.imageUrl} className="w-full h-full object-cover scale-[1.8] origin-center opacity-90" alt="Material Texture" />
               </div>
            </div>
          </div>

          {/* Commerce & Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-16">
            <header>
              <span className="text-[10px] uppercase tracking-[0.6em] text-royal block mb-6 font-bold">{product.category}</span>
              <h1 className="text-5xl md:text-7xl font-serif font-light text-navy mb-8 leading-[0.95] tracking-tight">{product.name}</h1>
              <p className="text-3xl font-light text-navy/70 tracking-tighter mb-12">${product.price.toLocaleString()}</p>
              <div className="w-16 h-[1px] bg-royal mb-12"></div>
              <p className="text-gray-500 leading-[1.8] text-sm max-w-lg mb-12 font-medium">
                {product.description}
              </p>
            </header>

            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-baseline mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-navy">Size Index</h4>
                  <button className="text-[9px] uppercase tracking-widest text-royal underline underline-offset-4">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['38', '40', '42', '44', '46', '48'].map(size => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 border text-[11px] font-bold flex items-center justify-center transition-all duration-500 ${
                        selectedSize === size ? 'bg-navy text-white border-navy scale-110 shadow-lg' : 'bg-transparent border-gray-100 text-gray-400 hover:border-navy hover:text-navy'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => selectedSize && onAddToCart(product, selectedSize)}
                disabled={!selectedSize}
                className="w-full bg-navy text-white py-7 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-royal transition-all duration-700 shadow-2xl disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed group"
              >
                {selectedSize ? 'Add to Shopping Bag' : 'Select a Measurement'}
                <span className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500">→</span>
              </button>
            </div>

            <div className="pt-16 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-navy mb-6 underline underline-offset-8 decoration-royal">Maison Details</h4>
                <ul className="space-y-4">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center">
                      <span className="w-1 h-1 bg-royal mr-4 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-soft-white p-8 space-y-4">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-navy mb-2">Provenance</h4>
                 <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                   Responsibly sourced mulberry silk and virgin wool from heritage mills in the Piedmont region.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
