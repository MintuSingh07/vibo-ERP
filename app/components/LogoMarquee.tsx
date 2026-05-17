"use client";

import React from "react";

const logos = [
  { name: "Acme Corp", icon: "❖" },
  { name: "Globex", icon: "✦" },
  { name: "Soylent", icon: "◒" },
  { name: "Initech", icon: "◩" },
  { name: "Umbrella", icon: "⎈" },
  { name: "Massive Dynamic", icon: "☍" },
  { name: "Stark Ind.", icon: "✧" },
  { name: "Cyberdyne", icon: "⌬" },
];

const LogoMarquee = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-black py-20">
      <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Trusted by innovative teams worldwide
      </p>

      {/* Marquee Wrapper */}
      <div className="relative flex w-full max-w-7xl overflow-hidden">
        {/* Left/Right fading gradients to hide the hard edges of the scroll */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-40 bg-gradient-to-l from-black to-transparent" />

        {/* Scrolling content */}
        <div className="flex w-fit animate-marquee items-center text-white">
          {[...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              className="flex w-[250px] shrink-0 items-center justify-center gap-3 text-2xl font-bold tracking-tighter opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
            >
              <span className="text-3xl text-zinc-300">{logo.icon}</span>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
