
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 text-center py-20">
      <div className="reveal">
        <span className="text-royal text-[10px] uppercase tracking-[0.7em] mb-12 block font-black">The Maison Ethos</span>
        <h2 className="text-5xl md:text-8xl font-serif font-light text-navy mb-20 leading-[1.1] max-w-5xl mx-auto tracking-tighter">
          Where <span className="italic font-normal">Sovereignty</span> Meets <br className="hidden md:block"/> Sustainable Luxury.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mt-20 text-left">
          <div className="reveal space-y-6" style={{ transitionDelay: '0.1s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Mastery</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Every piece is hand-finished by our master tailors, ensuring a silhouette that commands the room with effortless poise.</p>
          </div>
          <div className="reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Curation</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">We release only 48 intentional pieces per year. A commitment to quality that transcends the ephemeral nature of fashion cycles.</p>
          </div>
          <div className="reveal space-y-6" style={{ transitionDelay: '0.3s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Lineage</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Materials sourced from ancestral mills across Europe, preserving techniques passed down through seven generations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
