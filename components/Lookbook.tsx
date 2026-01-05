
import React from 'react';

const Lookbook: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="w-full md:w-1/3 reveal">
        <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] mb-6 block">The Editorial</span>
        <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
          Modern <br/><span className="italic">Renaissance</span>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
          Captured in the historic villas of Lake Como, our latest collection explores the tension between classic royalty and contemporary minimalism.
        </p>
        <button className="text-xs uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-2 hover:border-[#C5A059] transition-all">
          View Full Lookbook
        </button>
      </div>

      <div className="w-full md:w-2/3 flex gap-8 overflow-x-auto pb-12 scrollbar-hide no-scrollbar reveal">
        <div className="min-w-[300px] md:min-w-[450px] aspect-[4/5] bg-neutral-800">
          <img 
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" 
            alt="Look 1" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="min-w-[300px] md:min-w-[450px] aspect-[4/5] bg-neutral-800 translate-y-12">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
            alt="Look 2" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="min-w-[300px] md:min-w-[450px] aspect-[4/5] bg-neutral-800">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop" 
            alt="Look 3" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
