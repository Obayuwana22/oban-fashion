
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {TESTIMONIALS.map((item) => (
          <div key={item.id} className="reveal">
            <div className="mb-6 flex justify-center">
              <span className="text-2xl text-[#C5A059]">"</span>
            </div>
            <p className="text-xl md:text-2xl font-serif font-light leading-relaxed text-[#1A1A1A] mb-8">
              {item.quote}
            </p>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.2em] font-bold block mb-1">{item.author}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
