import React from "react";
import { COLLECTIONS } from "../constants";
import Image from "next/image";

interface CollectionsProps {
  onNavigate: (link: string) => void;
}

const Collections: React.FC<CollectionsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-400 mx-auto px-6 md:px-12">
      <div className="reveal">
        <div className="text-center mb-24">
          <span className="text-royal text-[10px] uppercase tracking-[0.7em] mb-12 block font-black">
            The Maison Ethos
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-light text-navy mb-12 leading-[1.1] max-w-5xl mx-auto tracking-tighter">
            Where <span className="italic font-normal">Sovereignty</span> Meets{" "}
            <br className="hidden md:block" /> African Heritage.
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.4em] max-w-2xl mx-auto leading-relaxed">
            Bridging ancestral roots with global sophistication for the modern
            monarch.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {COLLECTIONS.map((col, idx) => (
          <div
            key={col.id}
            onClick={() => onNavigate(col.link)}
            className={`group relative aspect-3/4 overflow-hidden cursor-pointer reveal ${
              idx % 2 === 0 ? "" : "md:translate-y-24"
            }`}
          >
            <Image
              src={col.imageUrl}
              alt={col.title}
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="text-white/70 text-[10px] uppercase tracking-[0.4em] mb-3">{col.subtitle}</span>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8 font-light tracking-wide">{col.title}</h3>
              <div className="inline-flex items-center text-white text-[10px] uppercase tracking-[0.3em] font-bold group/btn">
                Discover
                <span className="ml-4 w-10 h-px bg-white transition-all duration-500 group-hover/btn:w-16"></span>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
