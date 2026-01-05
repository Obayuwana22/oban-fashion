"use client";

// import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Philosophy from "@/components/Philosophy";
import ProductList from "@/components/ProductList";
import Lookbook from "@/components/Lookbook";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Catalog from "@/components/Catalog";
import ProductDetail from "@/components/ProductDetail";
import CartDrawer from "@/components/CartDrawer";
import { Product, CartItem, View } from "@/types";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 100) {
          reveal.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const navigateTo = (view: View, product?: Product) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentView(view);
    if (product) setSelectedProduct(product);
  };

  const addToCart = (product: Product, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
  };

  useEffect(() => {
     if (currentView === "product-detail" && !selectedProduct) {
    // Defer the state change to next tick
    setTimeout(() => navigateTo("home"), 0);
  }
  }, [currentView, selectedProduct]);

  const renderContent = () => {
    switch (currentView) {
      case "catalog":
        return (
          <Catalog onProductClick={(p) => navigateTo("product-detail", p)} />
        );
      case "product-detail":
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => navigateTo("catalog")}
            onAddToCart={addToCart}
          />
        ) : null;
      default:
        return (
          <>
            <Hero onCtaClick={() => navigateTo("catalog")} />
            <section id="collections" className="py-24 bg-soft-white">
              <Collections onNavigate={(link) => navigateTo(link as View)} />
            </section>
            <section id="philosophy" className="py-32 bg-white">
              <Philosophy />
            </section>
            <section id="shop" className="py-24 bg-soft-white">
              <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <header className="mb-20 text-center reveal">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-royal mb-4 block font-semibold">
                    The Essential Edit
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif font-light text-navy">
                    Curated Excellence
                  </h2>
                </header>
                <ProductList
                  onProductClick={(p) => navigateTo("product-detail", p)}
                  limit={4}
                />
                <div className="mt-20 text-center reveal">
                  <button
                    onClick={() => navigateTo("catalog")}
                    className="px-12 py-5 border border-navy text-[10px] uppercase tracking-[0.3em] font-bold text-navy hover:bg-navy hover:text-white transition-all duration-500"
                  >
                    View All Categories
                  </button>
                </div>
              </div>
            </section>
            <section
              id="lookbook"
              className="py-24 bg-navy text-white overflow-hidden"
            >
              <Lookbook />
            </section>
            <section id="testimonials" className="py-32 bg-white">
              <Testimonials />
            </section>
          </>
        );
    }
  };
  return (
    <div className="min-h-screen relative selection:bg-royal selection:text-white">
      <Navbar
        isScrolled={isScrolled}
        onNavigate={(view) => navigateTo(view as View)}
        currentView={currentView}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="animate-in">{renderContent()}</main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-0 left-0 w-full h-0.5 z-[100] bg-gray-100">
        <div
          className="h-full bg-navy transition-all duration-300"
          // style={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
