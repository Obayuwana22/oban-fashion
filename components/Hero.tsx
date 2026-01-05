
import Image from 'next/image';
import React from 'react';
import img2 from "@/public/assets/5.png"

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        {/* <Image
          src={img2} 
          alt="Hero Editorial" 
          // className="w-full h-full object-cover scale-105 opacity-60 animate-[kenburns_30s_ease_infinite]"
        /> */}

        <Image
          src={img2} 
          // width={500}
          // height={500}
          alt="Hero Editorial" 
          className="w-full h-full object-cover xl:w-1/2 opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/40 via-transparent to-navy/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/70 mb-8 font-bold reveal active">
          The Royal Navy Collection 2024
        </span>
        <h1 className="text-7xl md:text-9xl font-serif font-extralight text-white mb-10 tracking-tighter reveal active" style={{ transitionDelay: '0.2s' }}>
          Stately <br/><span className="italic font-normal">Symmetry</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 reveal active" style={{ transitionDelay: '0.4s' }}>
          <button 
            onClick={onCtaClick}
            className="group relative px-14 py-6 bg-white text-navy text-[10px] uppercase tracking-[0.4em] font-bold overflow-hidden transition-all duration-700 hover:bg-royal hover:text-white"
          >
            Enter The Store
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-royal transition-all duration-700 group-hover:w-full"></div>
          </button>
          <button 
            className="px-14 py-6 border border-white/20 text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white/5 transition-all duration-500 backdrop-blur-md"
          >
            The Anthology
          </button>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white mb-4">Scroll to Discover</span>
        <div className="w-px h-16 bg-linear-to-b from-white to-transparent"></div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.15) rotate(1deg); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
