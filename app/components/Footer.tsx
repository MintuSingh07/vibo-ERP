"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Ambient background light glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[200px] rounded-full bg-zinc-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP ROW: LOGO & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
          
          {/* LEFT: Brand Block */}
          <div className="md:col-span-5 text-left flex flex-col justify-between">
            <div>
              {/* Dot Matrix Constellation Logo (High-fidelity clean SVG mimicking the image) */}
              <div className="relative w-7 h-7 flex items-center justify-center select-none">
                <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                  {/* Grid of clean dots */}
                  <circle cx="6" cy="6" r="1.5" className="opacity-40 animate-pulse" />
                  <circle cx="12" cy="6" r="1.5" />
                  <circle cx="18" cy="6" r="1.5" className="opacity-40" />
                  
                  <circle cx="6" cy="12" r="1.5" />
                  <circle cx="12" cy="12" r="1.8" className="text-emerald-400" />
                  <circle cx="18" cy="12" r="1.5" />
                  
                  <circle cx="6" cy="18" r="1.5" className="opacity-40" />
                  <circle cx="12" cy="18" r="1.5" />
                  <circle cx="18" cy="18" r="1.5" className="opacity-40 animate-pulse" />
                </svg>
              </div>

              {/* Muted Premium Tagline */}
              <p className="text-zinc-400 text-sm md:text-base font-light mt-6 max-w-sm leading-relaxed tracking-wide">
                ViboERP is the financial home your business has been searching for.
              </p>
            </div>

            {/* Bottom-left floating design details */}
            <div className="hidden md:flex items-center gap-3 mt-10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-[0.2em]">Operational Excellence</span>
            </div>
          </div>

          {/* RIGHT: Staggered Column Links */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-left">
            
            {/* COLUMN 1: Useful */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[9px] text-zinc-500 font-mono tracking-[0.25em] uppercase font-bold">
                Useful
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#features" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#vouchers" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Vouchers
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: Legal */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[9px] text-zinc-500 font-mono tracking-[0.25em] uppercase font-bold">
                Legal
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#privacy" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Data Security
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: Updates */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[9px] text-zinc-500 font-mono tracking-[0.25em] uppercase font-bold">
                Updates
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#twitter" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#instagram" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#linkedin" className="text-zinc-400 hover:text-white font-light text-xs tracking-wide transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM ROW: MASSIVE VIEWPORT BRANDING (Matching Cosmos image exactly) */}
        <div className="relative pt-6 border-t border-white/5 select-none overflow-hidden">
          <div className="flex items-end justify-center w-full">
            <h1 className="
              text-[16vw] font-black tracking-[-0.04em] leading-none text-[#121212] uppercase 
              transition-colors duration-500 hover:text-[#181818] font-sans flex items-center justify-center
            ">
              Viboerp
            </h1>
          </div>

          {/* Floating theme mock switcher inside custom capsule at bottom-left, matching image */}
          <div className="absolute bottom-2 left-0 flex items-center">
            <button 
              type="button"
              className="
                w-8 h-8 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center 
                text-zinc-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md
              "
              aria-label="Toggle theme"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
