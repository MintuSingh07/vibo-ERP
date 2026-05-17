"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 w-full">
      
      {/* Main Navbar Pill */}
      <div className="glass-capsule flex w-full max-w-5xl items-center justify-between px-6 py-3.5 relative z-50">
        
        {/* Left: Brand Name */}
        <div className="text-xl font-bold tracking-tight text-white select-none">
          Vibo ERP
        </div>

        {/* Middle: Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
          >
            Reviews
          </a>
          <a
            href="#vouchers"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
          >
            Voucher Simulator
          </a>
        </div>

        {/* Right: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-block rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 active:scale-95 duration-200">
            Get Started
          </button>
          
          {/* Hamburger trigger button */}
          <button 
            onClick={toggleMenu}
            type="button"
            className="flex md:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white focus:outline-none hover:bg-white/10 active:scale-90 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center w-5 h-5 relative">
              <span className={`h-0.5 w-4 bg-white rounded-full transition-transform duration-300 absolute ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1"}`} />
              <span className={`h-0.5 w-4 bg-white rounded-full transition-transform duration-300 absolute ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1"}`} />
            </div>
          </button>
        </div>

      </div>

      {/* Collapsible Mobile Menu Drawer */}
      <div 
        className={`
          w-full max-w-5xl mt-3 overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/90 backdrop-blur-xl 
          transition-all duration-300 ease-in-out md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          ${isOpen ? "max-h-[300px] opacity-100 py-6 px-6" : "max-h-0 opacity-0 py-0 px-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-5 text-left">
          <a
            href="#"
            onClick={closeMenu}
            className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={closeMenu}
            className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Reviews
          </a>
          <a
            href="#vouchers"
            onClick={closeMenu}
            className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Voucher Simulator
          </a>
          
          <button 
            onClick={closeMenu}
            className="w-full sm:hidden mt-2 rounded-full bg-white py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200"
          >
            Get Started
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
