
import Image from 'next/image';
import React from 'react';
import img6 from "@/public/assets/6.png";
import img7 from "@/public/assets/7.png"
import img8 from "@/public/assets/2.png"

const Lookbook: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 px-6 md:px-12 max-w-400 mx-auto">
      <div className="w-full md:w-1/3 reveal">
        <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] mb-6 block">The Editorial</span>
        <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
          OBÁN<br/><span className="italic">/Oba–King </span>
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
          OBÁN is a global bespoke luxury kaftan brand crafting regal garments for men who command presence.
          Every piece is tailored with precision, heritage, and quiet power. Est. in 2026, it seeks to position itself as Africa’s
          point of reference for bespoke regal attires for “kinsmen”.
        </p>
        <button className="text-xs uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-2 hover:border-[#C5A059] transition-all">
          View Full Lookbook
        </button>
      </div>

      <div className="w-full md:w-2/3 flex gap-8 overflow-x-auto pb-12 scrollbar-hide no-scrollbar reveal">
        <div className="min-w-75 md:min-w-112.5 aspect-4/5 bg-neutral-800">
          <Image 
            src={img6} 
            // width={500}
            // height={500}
            alt="Look 1" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="min-w-75 md:min-w-112.5 aspect-4/5 bg-neutral-800 translate-y-12">
          <Image 
            src={img7} 
            alt="Look 2" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="min-w-75 md:min-w-112.5 aspect-4/5 bg-neutral-800">
          <Image 
            src={img8} 
            alt="Look 3" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
