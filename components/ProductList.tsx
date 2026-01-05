
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductListProps {
  onProductClick?: (product: Product) => void;
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({ onProductClick, limit }) => {
  const displayProducts = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
      {displayProducts.map((product) => (
        <div 
          key={product.id} 
          onClick={() => onProductClick?.(product)}
          className="group cursor-pointer reveal"
        >
          <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#F3F2F0]">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-500"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
               <button className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-4 text-[10px] uppercase tracking-[0.3em] font-bold transform translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl">
                View Details
              </button>
            </div>
          </div>
          
          <div className="px-1">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                {product.name}
              </h3>
              <span className="text-xs font-light text-gray-500">
                ${product.price.toLocaleString()}
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">
              {product.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
