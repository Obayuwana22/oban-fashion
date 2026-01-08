
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="reveal">
        <div className="text-center mb-24">
          <span className="text-royal text-[10px] uppercase tracking-[0.7em] mb-12 block font-black">The Maison Ethos</span>
          <h2 className="text-5xl md:text-8xl font-serif font-light text-navy mb-12 leading-[1.1] max-w-5xl mx-auto tracking-tighter">
            Where <span className="italic font-normal">Sovereignty</span> Meets <br className="hidden md:block"/> African Heritage.
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed">
            Bridging ancestral roots with global sophistication for the modern monarch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 text-left">
          {/* Regality */}
          <div className="reveal space-y-6" style={{ transitionDelay: '0.1s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Regality</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Every design reflects authority and noble bearing. We don&apos;t just dress bodies; we drape identities in a mantle of respect.</p>
          </div>
          
          {/* Craftsmanship */}
          <div className="reveal space-y-6" style={{ transitionDelay: '0.2s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Craftsmanship</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Precision tailoring meets master finishing. Our artisans employ techniques that turn premium fabrics into architectural masterpieces.</p>
          </div>

          {/* Heritage */}
          <div className="reveal space-y-6" style={{ transitionDelay: '0.3s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Heritage</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Rooted in African tradition, polished by global standards. A celebration of lineage and the continuous thread of excellence.</p>
          </div>

          {/* Exclusivity */}
          <div className="reveal space-y-6" style={{ transitionDelay: '0.4s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Exclusivity</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Limited pieces and bespoke experiences. We cater to the few who understand that true luxury is found in rarity.</p>
          </div>

          {/* Timelessness */}
          <div className="reveal space-y-6" style={{ transitionDelay: '0.5s' }}>
            <div className="w-12 h-[1px] bg-royal"></div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-navy">Timelessness</h4>
            <p className="text-gray-500 leading-loose text-xs uppercase tracking-widest font-medium">Designs that transcend trends. An AURELIA piece is a legacy item, crafted to retain its significance across generations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
