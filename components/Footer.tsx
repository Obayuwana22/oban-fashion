
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-32 pb-16 px-6 md:px-12 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif tracking-[0.6em] mb-10 font-light">OBÁN</h2>
            <p className="text-[10px] text-white/50 leading-loose uppercase tracking-[0.3em] max-w-sm">
              The pinnacle of royal craftsmanship. Dedicated to those who move with intention and command with silence.
            </p>
          </div>
          
          {/* <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-royal">Maison</h4>
            <ul className="space-y-5 text-[10px] text-white/60 uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Anthology</a></li>
            </ul>
          </div> */}

          {/* <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-royal">Assistance</h4>
            <ul className="space-y-5 text-[10px] text-white/60 uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bespoke Fitting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
            </ul>
          </div> */}

          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-royal">The Inner Circle</h4>
            <p className="text-[10px] text-white/40 mb-10 uppercase tracking-[0.25em] leading-relaxed">Secure your place in the future of the Maison. Receive private previews and bespoke invitations.</p>
            <div className="flex border-b border-white/20 pb-4 group focus-within:border-white transition-all">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent border-none w-full text-[10px] tracking-[0.4em] outline-none placeholder:text-white/20"
              />
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-royal transition-colors">Submit</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap justify-center gap-10 text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">
            <span>© 2026 OBÁN/Oba–King</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-white/40">
            <a href="#" className="hover:text-royal transition-all hover:-translate-y-1">Instagram</a>
            <a href="#" className="hover:text-royal transition-all hover:-translate-y-1">LinkedIn</a>
            <a href="#" className="hover:text-royal transition-all hover:-translate-y-1">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
