
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (view: string) => void;
  currentView: string;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, currentView, cartCount, onOpenCart }) => {
  const isAltTheme = isScrolled || currentView !== 'home';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex justify-between items-center ${
        isAltTheme ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold">
        <button 
          onClick={() => onNavigate('home')} 
          className={`transition-colors duration-300 ${isAltTheme ? 'text-navy hover:text-royal' : 'text-white/80 hover:text-white'}`}
        >
          Maison
        </button>
        <button 
          onClick={() => onNavigate('catalog')} 
          className={`transition-colors duration-300 ${isAltTheme ? 'text-navy hover:text-royal' : 'text-white/80 hover:text-white'}`}
        >
          Store
        </button>
        <button 
          onClick={() => onNavigate('home')} 
          className={`transition-colors duration-300 ${isAltTheme ? 'text-navy hover:text-royal' : 'text-white/80 hover:text-white'}`}
        >
          Editorial
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <button 
          onClick={() => onNavigate('home')}
          className={`text-2xl md:text-3xl font-serif tracking-[0.5em] transition-all duration-700 font-light ${
            isAltTheme ? 'text-navy' : 'text-white'
          }`}
        >
         OBÁN
        </button>
      </div>

      <div className="flex space-x-6 md:space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold items-center">
        <button className={`hidden sm:block transition-colors duration-300 ${isAltTheme ? 'text-navy hover:text-royal' : 'text-white/80 hover:text-white'}`}>
          Search
        </button>
        <button 
          onClick={onOpenCart}
          className={`relative transition-colors duration-300 group ${isAltTheme ? 'text-navy hover:text-royal' : 'text-white/80 hover:text-white'}`}
        >
          Cart
          {cartCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center w-5 h-5 bg-royal text-white rounded-full text-[8px] absolute -top-3 -right-4 animate-bounce">
              {cartCount}
            </span>
          )}
          <span className="block h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full mt-0.5"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
