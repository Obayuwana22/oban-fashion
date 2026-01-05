
import React from 'react';
import { CartItem } from '../types';
import Image from 'next/image';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, size: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-navy/60 backdrop-blur-sm z-[100] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-screen w-full md:w-[480px] bg-white z-[101] transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full px-8 md:px-12 py-10">
          <header className="flex justify-between items-center mb-16">
            <h2 className="text-xl font-serif tracking-[0.2em] uppercase text-navy">Shopping Bag</h2>
            <button 
              onClick={onClose}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-navy transition-colors"
            >
              Close
            </button>
          </header>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-10">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <p className="font-serif italic text-gray-400 mb-8">Your bag is empty.</p>
                <button 
                  onClick={onClose}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-navy pb-2"
                >
                  Return to Store
                </button>
              </div>
            ) : (
              items.map((item, i) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-8 group">
                  <div className="w-24 aspect-[3/4] bg-soft-white overflow-hidden">
                    <Image src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy">{item.product.name}</h4>
                        <button 
                          onClick={() => onRemove(item.product.id, item.size)}
                          className="text-[8px] text-gray-300 hover:text-navy uppercase font-bold tracking-widest"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Size {item.size}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold">QTY: {item.quantity}</span>
                      <span className="text-sm font-light text-navy">${(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <footer className="mt-12 pt-10 border-t border-gray-100">
            <div className="flex justify-between items-center mb-10">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Subtotal</span>
              <span className="text-xl font-serif tracking-tight text-navy">${subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-navy text-white py-6 text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-royal transition-all duration-500 shadow-xl disabled:bg-gray-200 disabled:text-gray-400" disabled={items.length === 0}>
              Proceed to Checkout
            </button>
            <p className="text-center text-[8px] text-gray-400 uppercase tracking-widest mt-6">
              Complimentary White Glove Delivery on all orders
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
