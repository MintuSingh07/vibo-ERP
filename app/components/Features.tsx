"use client";

import React, { useState, useEffect } from "react";

const ALL_PAYMENTS = [
  { id: "p1", name: "Marcus Vance", business: "Stripe Payment", amount: "+$1,250.00", time: "5m ago" },
  { id: "p2", name: "Elena Rostova", business: "Webflow Inc.", amount: "+$850.00", time: "1h ago" },
  { id: "p3", name: "Kofi Anan", business: "Shopify Store", amount: "+$2,100.00", time: "3h ago" },
  { id: "p4", name: "Sarah Jenkins", business: "Acme Corp", amount: "+$4,890.00", time: "Just now" },
  { id: "p5", name: "Alex Rivera", business: "DesignCo Inc.", amount: "+$3,420.00", time: "12s ago" },
  { id: "p6", name: "Chloe Dupont", business: "Vercel Hosting", amount: "+$199.00", time: "1m ago" },
  { id: "p7", name: "Hiroshi Tanaka", business: "Kyoto Imports", amount: "+$6,150.00", time: "4m ago" },
  { id: "p8", name: "Amara Diallo", business: "SaaS Rocket", amount: "+$9,200.00", time: "10m ago" },
];

const Features = () => {
  const [payments, setPayments] = useState(ALL_PAYMENTS.slice(0, 3));
  const [poolIndex, setPoolIndex] = useState(3);
  const [incomingId, setIncomingId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [paymentsHovered, setPaymentsHovered] = useState(false);
  const [hoveredReport, setHoveredReport] = useState<string | null>(null);

  useEffect(() => {
    if (incomingId) {
      const timer = setTimeout(() => {
        setActiveId(incomingId);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [incomingId]);

  const handleMouseEnter = () => {
    setPaymentsHovered(true);
    const nextPayment = ALL_PAYMENTS[poolIndex];
    // Reset activeId first so it mounts with the collapsed styling initially
    setActiveId(null);
    setIncomingId(nextPayment.id);
    setPayments((prev) => [nextPayment, ...prev].slice(0, 4));
    setPoolIndex((prev) => (prev + 1) % ALL_PAYMENTS.length);
  };
  return (
    <section id="features" className="relative w-full bg-black py-32 px-4 md:px-8 flex flex-col items-center overflow-hidden">
      {/* Subtle Grid Pattern background for card floating contrast */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Background glowing gradients for section depth */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-teal-600/5 blur-[100px] pointer-events-none" />

      {/* Container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Small label above heading */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Powerful Capabilities
        </p>

        {/* Main Heading */}
        <h2 className="max-w-3xl text-4xl font-light tracking-tight text-white md:text-6xl leading-[1.15]">
          Everything you need to run your business <span className="font-cursive text-emerald-400 font-normal lowercase tracking-normal text-[1.12em] inline-block transform translate-y-0.5 select-none">efficiently</span>.
        </h2>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed tracking-normal text-zinc-400 md:text-xl">
          Manage invoices, automate workflows, and get real-time insights with
          our comprehensive suite of ERP tools built for modern teams.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="mt-20 grid w-full max-w-7xl grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,_auto)] md:auto-rows-[minmax(320px,_auto)]">
        {/* Card 1: Comprehensive Annual Financial Reports (col-span-2) */}
        <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Left Text Column */}
          <div className="flex-1 max-w-xl text-left z-10">
            <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block">
              Financial Visibility
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-white mt-2">
              Comprehensive Annual Financial Reports
            </h3>
            <p className="text-zinc-400 text-sm font-light mt-3 leading-relaxed">
              Our ERP provides complete financial visibility at a yearly level with:
            </p>
            <ul className="mt-3.5 space-y-2.5">
              <li className="flex items-start gap-2.5 text-zinc-300 text-xs md:text-sm font-light leading-relaxed">
                <span className="text-violet-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Balance Sheet</strong> – Clear view of assets and liabilities</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-xs md:text-sm font-light leading-relaxed">
                <span className="text-violet-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Profit & Loss Statement</strong> – Business performance insights</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-xs md:text-sm font-light leading-relaxed">
                <span className="text-violet-500 font-bold shrink-0 mt-0.5">•</span>
                <span><strong>Pre-Auditing Reports</strong> – Audit-ready financial preparation</span>
              </li>
            </ul>
            <p className="text-zinc-400 text-xs md:text-sm font-light mt-4.5 pt-4 border-t border-white/5 leading-relaxed">
              These reports enable businesses to stay compliant, make strategic decisions, and present accurate financials to stakeholders.
            </p>
          </div>

          {/* Right Showcase: Interactive Document & Spreading Connection Wires (No border, no bg, fully organic integration!) */}
          <div className="relative w-full md:w-[240px] h-[220px] md:h-[240px] flex items-center justify-center shrink-0 z-10 select-none">
            {/* Embedded Custom CSS for the Flowing Wires Packets */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes flowPackets {
                to {
                  stroke-dashoffset: -20;
                }
              }
              .group:hover .wire-flow {
                animation: flowPackets 1s linear infinite;
              }
            `}} />

            {/* Background glowing concentric circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <div className="w-[100px] h-[100px] rounded-full border border-dashed border-violet-500/30 scale-100 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-violet-500/10 scale-100 group-hover:scale-105 transition-transform duration-700" />
            </div>

            {/* SVG Wire Lines (Connects Center (120, 120) to 8 outer user nodes with organic S-curved tentacles) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 240">
              <defs>
                {/* Neon Glow Filter */}
                <filter id="neonGlowViolet" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                {/* Glowing Purple-Fuchsia Gradient */}
                <linearGradient id="purpleGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#db2777" />
                </linearGradient>
              </defs>

              {/* Static Dark/Faded Curved Wires (Normal State) */}
              {/* Right & Left horizontal */}
              <path d="M 120 120 H 192" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              <path d="M 120 120 H 48" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              {/* Up & Down vertical */}
              <path d="M 120 120 V 48" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              <path d="M 120 120 V 192" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              {/* S-Curves for diagonals */}
              <path d="M 120 120 C 145 120, 145 171, 171 171" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              <path d="M 120 120 C 95 120, 95 171, 69 171" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              <path d="M 120 120 C 95 120, 95 69, 69 69" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />
              <path d="M 120 120 C 145 120, 145 69, 171 69" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" fill="none" />

              {/* Glowing Dynamic Flowing Curved Wires (Reveal on Hover) */}
              <path d="M 120 120 H 192" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              <path d="M 120 120 H 48" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              <path d="M 120 120 V 48" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              <path d="M 120 120 V 192" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              
              <path d="M 120 120 C 145 120, 145 171, 171 171" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              <path d="M 120 120 C 95 120, 95 171, 69 171" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              <path d="M 120 120 C 95 120, 95 69, 69 69" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
              <path d="M 120 120 C 145 120, 145 69, 171 69" stroke="url(#purpleGlowGrad)" strokeWidth="2.5" strokeDasharray="5, 5" className="wire-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" filter="url(#neonGlowViolet)" fill="none" />
            </svg>

            {/* Center Node: Document Icon (Scales down on hover) */}
            <div className="absolute z-20 flex items-center justify-center transition-all duration-700 ease-out transform scale-100 group-hover:scale-[0.55] filter drop-shadow-[0_0_15px_rgba(139,92,246,0.25)]">
              <div className="w-18 h-22 bg-zinc-950 border border-violet-500/35 rounded-xl p-3.5 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.6)] relative overflow-hidden">
                {/* Glowing Corner Foil */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-violet-500/20 border-b border-l border-violet-500/30 rounded-bl" />
                
                {/* File Lines */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="w-9 h-1 bg-violet-400/80 rounded" />
                  <div className="w-11 h-0.5 bg-zinc-600 rounded" />
                  <div className="w-8 h-0.5 bg-zinc-600 rounded" />
                  <div className="w-10 h-0.5 bg-zinc-600 rounded" />
                </div>
                
                {/* Mini Chart graphic inside document */}
                <div className="flex items-end gap-1 h-5 mt-2 border-b border-zinc-800 pb-0.5">
                  <div className="w-1.5 h-2 bg-violet-500/30 rounded-sm" />
                  <div className="w-1.5 h-4 bg-violet-500/50 rounded-sm" />
                  <div className="w-1.5 h-5 bg-violet-500 rounded-sm" />
                </div>
              </div>
            </div>

            {/* 8 User Nodes orbiting center */}
            {/* User 1: 0° Mid-Right */}
            <div className="absolute top-[106px] left-[178px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 delay-[100ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-violet-500/35 flex items-center justify-center text-violet-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 2: 45° Bottom-Right */}
            <div className="absolute top-[157px] left-[157px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 delay-[200ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 3: 90° Bottom-Middle */}
            <div className="absolute top-[178px] left-[106px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 delay-[300ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-pink-500/35 flex items-center justify-center text-pink-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 4: 135° Bottom-Left */}
            <div className="absolute top-[157px] left-[55px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 delay-[400ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-blue-500/35 flex items-center justify-center text-blue-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 5: 180° Mid-Left */}
            <div className="absolute top-[106px] left-[34px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 -translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 delay-[500ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-amber-500/35 flex items-center justify-center text-amber-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 6: 225° Top-Left */}
            <div className="absolute top-[55px] left-[55px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 -translate-x-1.5 -translate-y-1.5 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 delay-[600ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-violet-500/35 flex items-center justify-center text-violet-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 7: 270° Top-Middle */}
            <div className="absolute top-[34px] left-[106px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 -translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 delay-[700ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-emerald-500/35 flex items-center justify-center text-emerald-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* User 8: 315° Top-Right */}
            <div className="absolute top-[55px] left-[157px] z-22 transition-all duration-500 ease-out transform pointer-events-none
              opacity-0 scale-75 translate-x-1.5 -translate-y-1.5 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 delay-[800ms]">
              <div className="h-7 w-7 rounded-full bg-zinc-950/90 border border-pink-500/35 flex items-center justify-center text-pink-400 shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Secure Access & Payments (col-span-1) */}
        <div 
          onMouseEnter={handleMouseEnter}
          className="group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
        >
          {/* Ambient Glow (Stays active once hovered) */}
          <div className={`absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-opacity duration-500 pointer-events-none ${
            paymentsHovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`} />

          {/* Visual Showcase (3D Stack Card Visualizer - Top-Aligned) */}
          <div className="relative flex items-start justify-center h-[220px] w-full overflow-hidden mb-2 z-10">
            {/* Background Glow */}
            <div className="absolute top-0 z-0 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

            {/* Left Card (Faded/Rotated Smartphone Screen Backing) */}
            <div className="absolute z-0 w-[220px] h-[310px] bg-zinc-950 border-[5px] border-zinc-900 rounded-[32px] opacity-40 -rotate-[12deg] -translate-x-20 translate-y-6 scale-[0.75] origin-top pointer-events-none transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:scale-[0.7] group-hover:opacity-10" />

            {/* Right Card (Faded/Rotated Smartphone Screen Backing) */}
            <div className="absolute z-0 w-[220px] h-[310px] bg-zinc-950 border-[5px] border-zinc-900 rounded-[32px] opacity-40 rotate-[12deg] translate-x-20 translate-y-6 scale-[0.75] origin-top pointer-events-none transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:scale-[0.7] group-hover:opacity-10" />

            {/* Unified Phone Wrapper (Lifts, zooms, and scales on hover!) */}
            <div className="relative z-10 w-[290px] h-[390px] transition-all duration-500 ease-out origin-top translate-y-1 scale-[0.85] group-hover:translate-y-[-2px] group-hover:scale-[0.9] flex flex-col items-center">
              
              {/* Center Card (Custom Premium HTML/CSS Smartphone Screen Bezel - Big & static bottom cropped) */}
              <div className="absolute inset-0 rounded-[38px] border-[6px] border-zinc-800 bg-zinc-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden pointer-events-none select-none">
                {/* Phone Screen Wallpaper Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-900 z-0" />
                {/* Wallpaper Ambient Lights */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-violet-500/0 blur-3xl z-0" />
                <div className="absolute bottom-0 left-[-40px] w-44 h-44 bg-gradient-to-tr from-cyan-500/10 to-teal-500/0 blur-2xl z-0" />

                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full border border-white/5 z-30 flex items-center justify-end px-2">
                  {/* Tiny Green Camera Indicator */}
                  <div className="h-1 w-1 rounded-full bg-emerald-400 opacity-80" />
                </div>

                {/* Phone Status Bar */}
                <div className="absolute top-1.5 inset-x-0 px-6 flex justify-between items-center text-white/40 text-[9px] font-medium tracking-tight z-20">
                  {/* Time */}
                  <span>9:41</span>
                  {/* Status Icons */}
                  <div className="flex items-center gap-1">
                    {/* Signal bars */}
                    <svg viewBox="0 0 120 120" className="w-2.5 h-2.5 fill-current">
                      <rect x="10" y="80" width="15" height="30" rx="3" />
                      <rect x="35" y="60" width="15" height="50" rx="3" />
                      <rect x="60" y="40" width="15" height="70" rx="3" />
                      <rect x="85" y="20" width="15" height="90" rx="3" />
                    </svg>
                    {/* Wifi */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5">
                      <path d="M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01" strokeLinecap="round" />
                    </svg>
                    {/* Battery */}
                    <div className="w-4 h-2 rounded-[2px] border border-white/30 flex items-center p-[1px] relative">
                      <div className="h-full w-[80%] bg-white/70 rounded-[1px]" />
                      <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1px] h-1 bg-white/30 rounded-r-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Locked Screen Home Indicator Bar at the Bottom */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full z-30" />
              </div>

              {/* Floating Notification Stack (Nests inside the credit card bounds!) */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 w-[250px] flex flex-col pointer-events-none">
                {payments.map((payment, index) => {
                  const isIncoming = payment.id === incomingId;
                  const isActivated = activeId === incomingId;

                  let wrapperClass = "transition-all duration-700 origin-center";

                  if (isIncoming) {
                    if (!isActivated) {
                      // Apple collapsed state: 0 height, scaled down, translated up, blurry and invisible
                      wrapperClass += " max-h-0 opacity-0 scale-90 -translate-y-8 blur-md overflow-hidden";
                    } else {
                      // Apple bounce-in state: full height, scale, no blur, with beautiful springy timing
                      wrapperClass += " max-h-24 opacity-100 scale-100 translate-y-0 blur-none mb-2.5 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]";
                    }
                  } else {
                    // Shifting existing payments
                    wrapperClass += " [transition-timing-function:cubic-bezier(0.25,1,0.5,1)]";
                    if (index === 1) {
                      wrapperClass += " max-h-24 opacity-70 scale-[0.97] mb-2.5";
                    } else if (index === 2) {
                      wrapperClass += " max-h-24 opacity-40 scale-[0.94] mb-2.5";
                    } else {
                      // Exiting payment collapses completely
                      wrapperClass += " max-h-0 opacity-0 scale-[0.90] overflow-hidden";
                    }
                  }

                  return (
                    <div key={payment.id} className={wrapperClass}>
                      <div className="bg-zinc-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-xs font-semibold text-white">{payment.name}</span>
                            <span className="text-[10px] text-zinc-500">{payment.business}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-bold text-emerald-400 font-mono">{payment.amount}</span>
                          <span className="text-[9px] text-zinc-600 font-light">{payment.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card Content Footer (Cleanly aligned at the bottom) */}
          <div className="z-20 relative text-left w-full mt-auto pt-2.5 border-t border-white/5">
            <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider block">
              Voucher Lifecycle
            </span>
            <h3 className="text-base font-semibold tracking-tight text-white mt-0.5 leading-tight">
              End-to-End Voucher Lifecycle
            </h3>
            <p className="text-zinc-400 text-[10.5px] font-light mt-1 leading-normal">
              Track the complete journey from creation to final output. Structure, trace, and manage invoices and payments natively.
            </p>
            
            {/* Seamless Management Badges */}
            <div className="flex flex-wrap gap-1 mt-2">
              {["Purchase", "Sales", "Receipts", "Payments"].map((tag) => (
                <span key={tag} className="px-1.5 py-0.5 rounded-full text-[8.5px] bg-white/5 text-zinc-300 border border-white/5 font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: One-Click WhatsApp Automation (col-span-1) */}
        <div className="group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Visual Showcase (WhatsApp High-Fidelity Mockup) */}
          <div className="relative flex items-start justify-center h-[220px] w-full overflow-hidden mb-2 z-10">
            {/* Background Glow */}
            <div className="absolute top-0 z-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            {/* WhatsApp Screen Bezel Mockup */}
            <div className="relative z-10 w-[240px] h-[310px] rounded-2xl border-[5px] border-zinc-800 bg-[#0b141a] flex flex-col overflow-hidden pointer-events-none select-none translate-y-1.5 scale-[0.85] group-hover:translate-y-[-2px] group-hover:scale-[0.9] origin-top transition-all duration-500 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* WhatsApp Wallpaper Grid Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-0"
                style={{
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
                  backgroundSize: "12px 12px"
                }}
              />

              {/* WhatsApp Top Header Bar (Authentic Dark Mode #1f2c34 with Back Arrow & Menu) */}
              <div className="bg-[#1f2c34] px-2 py-1.5 flex items-center justify-between z-10 shadow-sm shrink-0">
                <div className="flex items-center gap-1">
                  {/* WhatsApp Back Arrow Icon */}
                  <svg className="w-2.5 h-2.5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  
                  {/* Left Chat Avatar */}
                  <div className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[7.5px] font-semibold shrink-0 shadow-inner">
                    LC
                  </div>
                  
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-[8.5px] font-semibold text-white truncate max-w-[80px] leading-tight">Liam Carter</span>
                    <span className="text-[6.5px] text-emerald-400 font-medium leading-none">online</span>
                  </div>
                </div>
                
                {/* Header Call & Menu Icons (Video, Phone, Vertical Dots) */}
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.003 1.003 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.82 4c0-.56-.45-1-1-1H4c-.56 0-1 .44-1 1 0 9.39 7.61 17 17 17 .56 0 1-.44 1-1v-3.59c0-.57-.45-1.03-1-1.03z" />
                  </svg>
                  <svg className="w-2.5 h-2.5 fill-current text-zinc-300" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>

               {/* Interactive Custom CSS Keyframes (Self-contained for this specific story!) */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes whatsappPointerStory {
                  0% {
                    right: 24px;
                    bottom: 24px;
                    transform: scale(1);
                    opacity: 1;
                  }
                  30% { /* Arrives at Send Invoice button */
                    right: 102px;
                    bottom: 140px;
                    transform: scale(1);
                    opacity: 1;
                  }
                  35% { /* Clicks down - physically shrinks! */
                    right: 102px;
                    bottom: 140px;
                    transform: scale(0.7);
                    opacity: 1;
                  }
                  40% { /* Releases click and fades out completely */
                    right: 102px;
                    bottom: 140px;
                    transform: scale(1);
                    opacity: 0;
                  }
                  100% {
                    right: 102px;
                    bottom: 140px;
                    transform: scale(1);
                    opacity: 0;
                  }
                }

                @keyframes whatsappButtonStory {
                  0%, 30% {
                    transform: scale(1);
                    background-color: rgb(16 185 129);
                    opacity: 1;
                  }
                  35% { /* Clicked down - scales down! */
                    transform: scale(0.92);
                    background-color: rgb(4 120 87);
                    opacity: 1;
                  }
                  40% { /* Dissolves away completely */
                    transform: scale(0.75);
                    opacity: 0;
                  }
                  100% {
                    transform: scale(0.75);
                    opacity: 0;
                  }
                }

                @keyframes whatsappRippleStory {
                  0%, 34% {
                    transform: scale(0) translate(-50%, -50%);
                    opacity: 0;
                  }
                  35% { /* Expands outwards at click! */
                    transform: scale(0.3) translate(-50%, -50%);
                    opacity: 0.8;
                  }
                  45% {
                    transform: scale(1.6) translate(-50%, -50%);
                    opacity: 0;
                  }
                  100% {
                    transform: scale(1.6) translate(-50%, -50%);
                    opacity: 0;
                  }
                }

                @keyframes whatsappClientMsgStory {
                  0%, 42% {
                    opacity: 0;
                    transform: translateY(12px) scale(0.95);
                  }
                  52% { /* Liam's message slides in beautifully */
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }

                @keyframes whatsappPdfMsgStory {
                  0%, 62% {
                    opacity: 0;
                    transform: translateY(12px) scale(0.95);
                  }
                  72% { /* Outgoing PDF Invoice slides in */
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }

                @keyframes whatsappCheckmarkStory {
                  0%, 78% {
                    color: #a1a1aa; /* zinc-400 */
                  }
                  88% { /* Glows blue! */
                    color: #53bdeb;
                  }
                  100% {
                    color: #53bdeb;
                  }
                }

                @keyframes whatsappBannerStory {
                  0%, 82% {
                    opacity: 0;
                    transform: translateY(-16px);
                  }
                  90% { /* Success banner drops down */
                    opacity: 1;
                    transform: translateY(0);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                /* Bind the animations strictly when parent is hovered */
                .group:hover .whatsapp-pointer {
                  animation: whatsappPointerStory 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
                }
                .group:hover .whatsapp-btn {
                  animation: whatsappButtonStory 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
                }
                .group:hover .whatsapp-ripple {
                  animation: whatsappRippleStory 4s ease-out infinite;
                }
                .group:hover .whatsapp-client-msg {
                  animation: whatsappClientMsgStory 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                }
                .group:hover .whatsapp-pdf-msg {
                  animation: whatsappPdfMsgStory 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                }
                .group:hover .whatsapp-checkmark {
                  animation: whatsappCheckmarkStory 4s ease-in-out infinite;
                }
                .group:hover .whatsapp-banner {
                  animation: whatsappBannerStory 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
                }
              `}} />

              {/* Top Success Banner Notification (Drops down on active animation state) */}
              <div className="whatsapp-banner absolute top-9 inset-x-2 bg-emerald-500/95 backdrop-blur-sm text-white text-[8px] font-semibold py-1 rounded shadow-lg flex items-center justify-center gap-1 z-35 -translate-y-4 opacity-0 pointer-events-none border border-emerald-400/20">
                <span className="text-[9px] font-bold">✓</span> Voucher Invoice Sent successfully!
              </div>

              {/* Chat Thread Messages */}
              <div className="flex-1 p-2 flex flex-col justify-start z-10">
                {/* Message 1 (Incoming Liam request - sharp speech bubble tail at top-left!) */}
                <div className="whatsapp-client-msg relative bg-[#202c33] text-white/90 text-[8.5px] p-2 rounded-r-lg rounded-bl-lg max-w-[170px] self-start text-left mb-3.5 shadow-sm leading-normal opacity-0 translate-y-4 scale-95
                  before:absolute before:top-0 before:left-[-5px] before:w-0 before:h-0 before:border-t-[6px] before:border-t-[#202c33] before:border-l-[5px] before:border-l-transparent">
                  Hi, could you please share the invoice for the latest voucher?
                  <span className="block text-[6px] text-white/40 text-right mt-0.5">12:44 PM</span>
                </div>

                {/* Message 2 (Outgoing PDF Invoice - sharp speech bubble tail at top-right!) */}
                <div className="whatsapp-pdf-msg relative bg-[#005c4b] text-white text-[8.5px] p-2 rounded-l-lg rounded-br-lg max-w-[185px] self-end text-left shadow-md opacity-0 translate-y-4 scale-95 flex flex-col
                  after:absolute after:top-0 after:right-[-5px] after:w-0 after:h-0 after:border-t-[6px] after:border-t-[#005c4b] after:border-r-[5px] after:border-r-transparent">
                  {/* File Attachment Widget */}
                  <div className="bg-[#025143] p-1.5 rounded flex items-center gap-1.5 mb-1.5 border border-[#046150]">
                    {/* PDF Icon */}
                    <div className="h-5 w-5 rounded bg-rose-600 flex items-center justify-center shrink-0 text-[7px] font-bold text-white tracking-tighter shadow-sm">
                      PDF
                    </div>
                    <div className="flex flex-col overflow-hidden text-left">
                      <span className="text-[7.5px] font-semibold truncate text-white">INV-2026-0042.pdf</span>
                      <span className="text-[6.5px] text-white/50">42 KB • Document</span>
                    </div>
                  </div>
                  <span className="leading-tight text-white/90">Here is your invoice for Voucher #V-8930. Thank you!</span>
                  <div className="flex items-center justify-end gap-0.5 mt-1 self-end">
                    <span className="text-[6px] text-white/50">12:45 PM</span>
                    {/* Blue/Green Checkmarks (Delivered -> Read Receipt delay at 78% keyframe) */}
                    <svg className="whatsapp-checkmark w-2.5 h-2.5 text-zinc-400 fill-current" viewBox="0 0 24 24">
                      <path d="M0.293 12.293a1 1 0 011.414 0L7 17.586 22.293 2.293a1 1 0 111.414 1.414l-16 16a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
                      <path d="M7.293 12.293a1 1 0 011.414 0L14 17.586 21.293 10.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Centered Interactive "Send Invoice" Button (Clicks down at 35%, vanishes at 40%) */}
              <div className="whatsapp-btn absolute top-[120px] left-1/2 -translate-x-1/2 z-20 flex justify-center pointer-events-none transition-all duration-300">
                <div className="bg-[#00a884] text-white font-semibold text-[9px] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,168,132,0.4)] border border-[#00c59b]/25">
                  {/* Send Icon */}
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  <span>Send Invoice</span>
                </div>
              </div>

              {/* Click Ripple Expanding Wave Indicator (Triggers exactly where the button is centered, at 35% keyframe) */}
              <div className="whatsapp-ripple absolute top-[134px] left-1/2 z-25 w-12 h-12 rounded-full bg-emerald-400/40 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0" />

              {/* Operating System Interactive Mouse Cursor (Slides to center, clicks down, disappears at 40%) */}
              <div className="whatsapp-pointer absolute right-6 bottom-6 w-5 h-5 z-30 pointer-events-none">
                <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-current stroke-black stroke-[1.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  <path d="M4.5 3.5l14 9.5-6.5 1.5 5 8-2.5 1.5-5-8-5 4z" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Bottom WhatsApp Input Area Mock (High-Fidelity Real Replica) */}
              <div className="bg-[#0b141a] px-2 py-2 flex items-center gap-1.5 z-10 border-t border-white/5 mt-auto shrink-0">
                <div className="bg-[#1f2c34] rounded-full px-2.5 py-1 flex items-center gap-2 flex-1">
                  {/* Smiley Emoji Icon */}
                  <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z" />
                  </svg>
                  
                  <span className="text-[7.5px] text-zinc-400 flex-1 text-left select-none">Type a message</span>
                  
                  {/* Paperclip Attachment Icon */}
                  <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0 rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l4.5-4.5a3 3 0 114.243 4.243l-4.5 4.5a1.5 1.5 0 11-2.122-2.122l4.5-4.5" />
                  </svg>

                  {/* Camera Icon */}
                  <svg className="w-3.5 h-3.5 text-zinc-400 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 12a3 3 0 100-6 3 3 0 000 6zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                
                {/* Signature Green Circular Voice Button */}
                <div className="h-5 w-5 rounded-full bg-[#00a884] flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card Content Footer (Cleanly aligned at the bottom) */}
          <div className="z-20 relative text-left w-full mt-auto pt-2.5 border-t border-white/5">
            <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider block">
              Workflow Automation
            </span>
            <h3 className="text-base font-semibold tracking-tight text-white mt-0.5 leading-tight">
              One-Click WhatsApp Automation
            </h3>
            <p className="text-zinc-400 text-[10.5px] font-light mt-1 leading-normal">
              Share invoices and vouchers directly with customers via WhatsApp. Eliminate manual sharing and follow-ups with instant delivery.
            </p>
            
            {/* Seamless Management Badges */}
            <div className="flex flex-wrap gap-1 mt-2">
              {["Instant Share", "PDF Delivery", "Auto Follow-Up"].map((tag) => (
                <span key={tag} className="px-1.5 py-0.5 rounded-full text-[8.5px] bg-white/5 text-zinc-300 border border-white/5 font-medium tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4: Comprehensive Business Reporting */}
        <div className="group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          {/* Ambient Glow */}
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-pink-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Visual Showcase Area */}
          <div className="relative flex items-center justify-center flex-1 w-full overflow-hidden z-10 select-none" style={{ minHeight: "245px" }}>
            
            {/* Custom CSS for Chart Bars & Card Spreading */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes progressGrow {
                from { stroke-dashoffset: 95; }
                to { stroke-dashoffset: 26; }
              }
              @keyframes dashboardScan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 0.8; }
                90% { opacity: 0.8; }
                100% { top: 100%; opacity: 0; }
              }
              .report-circle {
                stroke-dasharray: 95;
                stroke-dashoffset: 95;
              }
              .group:hover .report-circle {
                animation: progressGrow 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                animation-delay: 300ms;
              }
            `}} />

            {/* Isometric Container */}
            <div className="relative w-full h-[220px] flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
              
              {/* Sleek Isometric Coordinate Grid Floor (Fills whitespace beautifully when unhovered) */}
              <div className="
                absolute w-[230px] h-[170px] rounded-2xl border border-white/5 bg-zinc-950/20
                transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                [transform:rotateX(25deg)_rotateY(-15deg)_rotateZ(-5deg)_translateZ(-55px)]
                group-hover:[transform:rotateX(15deg)_rotateY(-5deg)_rotateZ(-8deg)_translateZ(-80px)]
                flex items-center justify-center overflow-hidden
                shadow-[inset_0_4px_24px_rgba(0,0,0,0.6)] pointer-events-none
              ">
                {/* Tech grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Glowing neon laser sweep line */}
                <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-pink-500/25 to-transparent top-0 animate-[dashboardScan_4s_linear_infinite]" />
              </div>

              {/* ── CARD 1: Bottom Layer (Ledger Statements & Aging) ── */}
              <div className="
                absolute w-[155px] h-[115px] rounded-xl 
                bg-zinc-900/80 border border-white/5 backdrop-blur-md p-3 
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                shadow-lg pointer-events-none
                [transform:rotateX(25deg)_rotateY(-15deg)_rotateZ(-5deg)_translateZ(-20px)]
                group-hover:[transform:rotateX(15deg)_rotateY(-5deg)_rotateZ(-10deg)_translateZ(-40px)_translateX(-56px)_translateY(36px)]
              ">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-amber-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <span className="text-[9px] font-bold text-amber-400/90 block uppercase tracking-wider">Ledger Statements</span>
                <div className="mt-2 space-y-1.5">
                  <div className="flex justify-between items-center text-[9px] border-b border-white/5 pb-0.5">
                    <span className="text-zinc-400">Sales Invoice</span>
                    <span className="text-emerald-400 font-semibold">+$2,450</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px] border-b border-white/5 pb-0.5">
                    <span className="text-zinc-400">TDS Deduction</span>
                    <span className="text-rose-400 font-semibold">-$120</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="text-zinc-500 font-light">Payable Aging</span>
                    <span className="text-amber-500 font-semibold">30 Days</span>
                  </div>
                </div>
              </div>

              {/* ── CARD 2: Middle Layer (Stock Reports & Tax TDS/TCS) ── */}
              <div className="
                absolute w-[155px] h-[115px] rounded-xl 
                bg-zinc-800/80 border border-white/10 backdrop-blur-md p-3 
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                shadow-xl pointer-events-none z-10
                [transform:rotateX(25deg)_rotateY(-15deg)_rotateZ(-5deg)]
                group-hover:[transform:rotateX(15deg)_rotateY(-5deg)_rotateZ(8deg)_translateZ(0px)_translateX(58px)_translateY(-12px)]
              ">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-emerald-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-emerald-400 block uppercase tracking-wider">Stock Level</span>
                    <span className="text-xs font-bold text-white block mt-0.5">9,240 Units</span>
                  </div>
                  {/* Progress Ring */}
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg className="w-8 h-8 transform -rotate-90">
                      <circle cx="16" cy="16" r="15" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" fill="none" />
                      <circle cx="16" cy="16" r="15" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" className="report-circle" />
                    </svg>
                    <span className="absolute text-[8px] text-emerald-400 font-bold">78%</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 flex justify-between text-[8px] text-zinc-400">
                  <span>TCS Collected</span>
                  <span className="text-zinc-200 font-bold">$3,120</span>
                </div>
              </div>

              {/* ── CARD 3: Top Layer (Sales, Purchase & Revenue) ── */}
              <div className="
                absolute w-[155px] h-[115px] rounded-xl 
                bg-zinc-700/80 border border-white/15 backdrop-blur-md p-3 
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                shadow-[0_15px_30px_rgba(0,0,0,0.3)] pointer-events-none z-20
                [transform:rotateX(25deg)_rotateY(-15deg)_rotateZ(-5deg)_translateZ(20px)]
                group-hover:[transform:rotateX(12deg)_rotateY(-5deg)_rotateZ(-4deg)_translateZ(50px)_translateX(-12px)_translateY(-54px)]
              ">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-pink-500/15 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="text-[9px] font-bold text-pink-400 block uppercase tracking-wider">Revenue Analytics</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-sm font-extrabold text-white">$48.6k</span>
                  <span className="text-[8px] text-emerald-400 font-bold">+14.2%</span>
                </div>
                {/* Micro Bar Chart */}
                <div className="flex items-end justify-between gap-1.5 h-[38px] mt-2.5">
                  <div className="w-full bg-white/5 rounded-sm h-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full bg-pink-500/80 rounded-sm transition-all duration-700 ease-out origin-bottom scale-y-30 group-hover:scale-y-[70%] h-full" />
                  </div>
                  <div className="w-full bg-white/5 rounded-sm h-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full bg-pink-500/80 rounded-sm transition-all duration-700 ease-out origin-bottom scale-y-40 group-hover:scale-y-[55%] h-full" style={{ transitionDelay: '50ms' }} />
                  </div>
                  <div className="w-full bg-white/5 rounded-sm h-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full bg-pink-500/80 rounded-sm transition-all duration-700 ease-out origin-bottom scale-y-20 group-hover:scale-y-[85%] h-full" style={{ transitionDelay: '100ms' }} />
                  </div>
                  <div className="w-full bg-white/5 rounded-sm h-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full bg-pink-500/80 rounded-sm transition-all duration-700 ease-out origin-bottom scale-y-60 group-hover:scale-y-[95%] h-full" style={{ transitionDelay: '150ms' }} />
                  </div>
                  <div className="w-full bg-white/5 rounded-sm h-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full bg-pink-500/80 rounded-sm transition-all duration-700 ease-out origin-bottom scale-y-50 group-hover:scale-y-[40%] h-full" style={{ transitionDelay: '200ms' }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Card Content Footer */}
          <div className="z-20 relative text-left w-full mt-auto pt-2.5 border-t border-white/5">
            <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider block">
              Reporting & Insights
            </span>
            <h3 className="text-base font-semibold tracking-tight text-white mt-0.5 leading-tight">
              Comprehensive Business Reporting
            </h3>
            <p className="text-zinc-400 text-[10.5px] font-light mt-1 leading-normal">
              Real-time Ledger, Sales, Stock, TDS/TCS, and aging metrics to make complete financial & operational audit a breeze.
            </p>
          </div>
        </div>

        {/* Card 5: User Hierarchy Tree */}
        <div className="group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Visual Showcase Area */}
          <div className="relative flex items-center justify-center flex-1 w-full z-10 select-none" style={{ minHeight: "220px" }}>

            {/* CSS styles to handle slow path drawing on hover */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes drawRootToMid {
                from {
                  stroke-dashoffset: 120;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
              @keyframes drawMidToBottom {
                from {
                  stroke-dashoffset: 70;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
              .line-root-mid {
                stroke-dasharray: 120;
                stroke-dashoffset: 120;
                transition: stroke-dashoffset 0.6s ease-in-out;
              }
              .line-mid-bottom {
                stroke-dasharray: 70;
                stroke-dashoffset: 70;
                transition: stroke-dashoffset 0.6s ease-in-out;
              }
              .group:hover .line-root-mid {
                animation: drawRootToMid 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                animation-delay: 350ms;
              }
              .group:hover .line-mid-bottom {
                animation: drawMidToBottom 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                animation-delay: 1400ms;
              }
            `}} />

            {/* ── SVG connector lines ── */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
              viewBox="0 0 260 220"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Root → Left-mid (Smooth S-curve) */}
              <path d="M 130 52 C 130 85, 72 85, 72 112" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" className="line-root-mid" />
              {/* Root → Right-mid (Smooth S-curve) */}
              <path d="M 130 52 C 130 85, 188 85, 188 112" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.25" strokeLinecap="round" strokeLinejoin="round" className="line-root-mid" />
              {/* Left-mid → Left-bottom (Smooth S-curve) */}
              <path d="M 72 140 C 72 155, 46 165, 46 180" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round" className="line-mid-bottom" />
              {/* Left-mid → Right-bottom of left branch (Smooth S-curve) */}
              <path d="M 72 140 C 72 155, 98 165, 98 180" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round" className="line-mid-bottom" />
              {/* Right-mid → Left-bottom of right branch (Smooth S-curve) */}
              <path d="M 188 140 C 188 155, 162 165, 162 180" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round" className="line-mid-bottom" />
              {/* Right-mid → Right-bottom (Smooth S-curve) */}
              <path d="M 188 140 C 188 155, 214 165, 214 180" stroke="white" strokeWidth="1" fill="none" strokeOpacity="0.18" strokeLinecap="round" strokeLinejoin="round" className="line-mid-bottom" />
            </svg>

            {/* Concentric high-tech orbital rings (Fills space elegantly with dashboard styling when unhovered) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-out group-hover:opacity-10 group-hover:scale-95">
              {/* Outer Ring */}
              <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-white/5 animate-[spin_60s_linear_infinite]" />
              {/* Mid Ring */}
              <div className="absolute w-[160px] h-[160px] rounded-full border border-violet-500/5" />
              {/* Tech Ring 3 */}
              <div className="absolute w-[110px] h-[110px] rounded-full border border-dashed border-cyan-500/5 animate-[spin_30s_linear_infinite]" style={{ animationDirection: 'reverse' }} />
            </div>

            {/* ── ROOT USER NODE ── */}
            {/* Normal: big & centered. Hover: scales down, floats to top */}
            <div className="
              absolute z-20
              transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              flex flex-col items-center gap-2
              left-1/2 -translate-x-1/2
              top-1/2 -translate-y-1/2
              scale-100
              group-hover:top-[26px]
              group-hover:translate-y-0
              group-hover:scale-[0.72]
            ">
              {/* Pulse ring (normal state only) */}
              <div className="absolute w-24 h-24 rounded-full border border-violet-500/20 animate-ping opacity-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none
                [animation-duration:2s]" />
              <div className="absolute w-32 h-32 rounded-full border border-violet-500/10 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Avatar circle */}
              <div className="relative w-16 h-16 rounded-full bg-violet-950/45 border-2 border-violet-500/50 flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.25)]">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-violet-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-8 h-8 text-violet-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* ── LEVEL 2 — two mid nodes ── */}
            {/* Left mid */}
            <div className="
              absolute z-20
              flex flex-col items-center
              transition-all duration-700 delay-100 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              opacity-[0.05] scale-90 translate-y-0
              group-hover:opacity-100 group-hover:scale-100
              left-[calc(50%-86px)] top-[112px]
            ">
              <div className="relative w-11 h-11 rounded-full bg-cyan-950/40 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-5 h-5 text-cyan-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            {/* Right mid */}
            <div className="
              absolute z-20
              flex flex-col items-center
              transition-all duration-700 delay-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              opacity-[0.05] scale-90 translate-y-0
              group-hover:opacity-100 group-hover:scale-100
              left-[calc(50%+47px)] top-[112px]
            ">
              <div className="relative w-11 h-11 rounded-full bg-cyan-950/40 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-5 h-5 text-cyan-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* ── LEVEL 3 — four leaf nodes ── */}
            {/* Leaf 1 (Emerald Department) */}
            <div className="
              absolute z-20
              transition-all duration-700 delay-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              opacity-[0.05] scale-90 translate-y-0
              group-hover:opacity-100 group-hover:scale-100
              left-[calc(50%-114px)] top-[180px]
            ">
              <div className="relative w-9 h-9 rounded-full bg-emerald-950/20 border border-emerald-500/40 flex items-center justify-center shadow-sm">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-emerald-500/20 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            {/* Leaf 2 (Fuchsia Department) */}
            <div className="
              absolute z-20
              transition-all duration-700 delay-[230ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              opacity-[0.05] scale-90 translate-y-0
              group-hover:opacity-100 group-hover:scale-100
              left-[calc(50%-62px)] top-[180px]
            ">
              <div className="relative w-9 h-9 rounded-full bg-fuchsia-950/20 border border-fuchsia-500/40 flex items-center justify-center shadow-sm">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-fuchsia-500/20 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-4 h-4 text-fuchsia-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            {/* Leaf 3 (Amber Department) */}
            <div className="
              absolute z-20
              transition-all duration-700 delay-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              opacity-[0.05] scale-90 translate-y-0
              group-hover:opacity-100 group-hover:scale-100
              left-[calc(50%+19px)] top-[180px]
            ">
              <div className="relative w-9 h-9 rounded-full bg-amber-950/20 border border-amber-500/40 flex items-center justify-center shadow-sm">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-amber-500/20 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            {/* Leaf 4 (Pink Department) */}
            <div className="
              absolute z-20
              transition-all duration-700 delay-[290ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
              opacity-[0.05] scale-90 translate-y-0
              group-hover:opacity-100 group-hover:scale-100
              left-[calc(50%+71px)] top-[180px]
            ">
              <div className="relative w-9 h-9 rounded-full bg-pink-950/20 border border-pink-500/40 flex items-center justify-center shadow-sm">
                {/* Dynamic Inner Glow */}
                <div className="absolute inset-0 -z-10 bg-pink-500/20 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <svg className="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card Content Footer */}
          <div className="z-20 relative text-left w-full mt-auto pt-2.5 border-t border-white/5">
            <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider block">
              Team Management
            </span>
            <h3 className="text-base font-semibold tracking-tight text-white mt-0.5 leading-tight">
              Role-Based Access Control
            </h3>
            <p className="text-zinc-400 text-[10.5px] font-light mt-1 leading-normal">
              Define user roles and permissions across your entire organisation with a structured hierarchy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
