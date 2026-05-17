"use client";

import React, { useState, useEffect } from "react";

interface InvoiceItem {
  id: number;
  name: string;
  weight: number; // in kg
  rate: number; // per kg
}

const CTA = () => {
  const [activeTab, setActiveTab] = useState<"sales" | "purchase" | "receipt">("sales");
  
  // Interactive Simulator State
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, name: "Premium Steel Coil", weight: 2450, rate: 12.8 },
    { id: 2, name: "Aluminum Ingots", weight: 1200, rate: 8.5 },
  ]);

  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);
  const [sendSuccess, setSendSuccess] = useState(false);

  // Dynamically update items based on selected voucher type
  useEffect(() => {
    if (activeTab === "sales") {
      setItems([
        { id: 1, name: "Premium Steel Coil", weight: 2450, rate: 12.8 },
        { id: 2, name: "Aluminum Ingots", weight: 1200, rate: 8.5 },
      ]);
    } else if (activeTab === "purchase") {
      setItems([
        { id: 1, name: "Raw Scrap Copper", weight: 4100, rate: 6.2 },
        { id: 2, name: "Zinc Billets", weight: 1500, rate: 9.4 },
      ]);
    } else {
      setItems([
        { id: 1, name: "Advance Payment - Steel", weight: 0, rate: 15000 },
        { id: 2, name: "Logistics Clearance", weight: 0, rate: 2400 },
      ]);
    }
    setSendSuccess(false);
    setIsSending(false);
  }, [activeTab]);

  // Adjust item weights dynamically via UI clickers
  const adjustWeight = (id: number, amount: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newWeight = Math.max(0, item.weight + amount);
          return { ...item, weight: newWeight };
        }
        return item;
      })
    );
  };

  // Adjust item rate dynamically via UI clickers
  const adjustRate = (id: number, amount: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newRate = Math.max(0, Number((item.rate + amount).toFixed(2)));
          return { ...item, rate: newRate };
        }
        return item;
      })
    );
  };

  // Calculated totals
  const totalAmount = items.reduce((sum, item) => {
    if (item.weight === 0) return sum + item.rate; // Flat rate for receipts
    return sum + item.weight * item.rate;
  }, 0);

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

  // Trigger WhatsApp Sending Animation
  const handleSendWhatsApp = () => {
    if (isSending || sendSuccess) return;
    setIsSending(true);
    setSendProgress(0);

    const interval = setInterval(() => {
      setSendProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSending(false);
          setSendSuccess(true);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <section id="vouchers" className="relative w-full bg-black py-14 md:py-28 overflow-hidden border-t border-white/5">
      {/* ── BACKGROUND AMBIENT NEON LIGHTS ── */}
      <div className="absolute top-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-[380px] w-[380px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-cyan-900/5 blur-[140px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Responsive Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: TYPOGRAPHY & CONVERSION ── */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.25em] font-mono block">
              Interactive Preview
            </span>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.02em] mt-3 leading-[1.15] text-white">
              Test-drive Vibo ERP <br className="hidden sm:inline" /> in <span className="font-cursive text-emerald-400 font-normal lowercase tracking-normal text-[1.12em] inline-block transform translate-y-0.5 select-none">real-time</span>.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-5 leading-relaxed font-light tracking-wide">
              Toggle voucher types, adjust weights or rates, and experience our instant one-click WhatsApp automation right here on this page. No forms, no waiting.
            </p>

            {/* Simulated Live Stats (Premium SVG Profiles instead of initials/emojis) */}
            <div className="flex items-center gap-5 mt-9 py-5 border-y border-white/5">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-950 flex items-center justify-center text-zinc-500 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-950 flex items-center justify-center text-zinc-500 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-950 flex items-center justify-center text-zinc-500 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-[9px] text-emerald-400 font-mono font-bold block uppercase tracking-[0.2em] leading-none">LIVE ACTIVITY</span>
                <span className="text-zinc-500 text-xs font-light block mt-1 tracking-wide">381 teams are simulating vouchers today.</span>
              </div>
            </div>

            {/* Direct CTA Buttons below features (Clean modern SVGs with nice tracking-wider font) */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button 
                type="button"
                className="group/btn px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Claim Free Trial</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button 
                type="button"
                className="px-8 py-4 rounded-full border border-white/10 bg-zinc-950/40 hover:bg-zinc-950/80 hover:border-white/20 text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 transform active:scale-95"
              >
                Book Expert Demo
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: HIGHLY INTERACTIVE SIMULATOR CARD ── */}
          <div className="lg:col-span-7 w-full">
            <div className="
              relative w-full rounded-3xl border border-white/10 bg-zinc-900/35 backdrop-blur-md p-6 sm:p-8 
              shadow-3xl overflow-hidden transition-all duration-500 hover:border-white/20
            ">
              {/* Inner ambient light shine */}
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-emerald-500/10 blur-[60px] pointer-events-none" />
              
              {/* Simulator Header / Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-zinc-400 font-mono uppercase tracking-[0.2em] font-semibold">Interactive Console</span>
                </div>
                
                {/* Switch Tabs */}
                <div className="flex bg-zinc-950/80 border border-white/5 rounded-xl p-1 gap-0.5 sm:gap-1">
                  {(["sales", "purchase", "receipt"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`
                        px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300
                        ${activeTab === tab 
                          ? "bg-emerald-500 text-zinc-950 shadow-[0_2px_10px_rgba(16,185,129,0.25)]" 
                          : "text-zinc-500 hover:text-zinc-300"
                        }
                      `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* LIVE DYNAMIC VOUCHER SHEET */}
              <div className="mt-6 bg-zinc-950/70 border border-white/5 rounded-2xl p-4 sm:p-5 relative">
                
                {/* Meta details */}
                <div className="flex justify-between text-[9px] text-zinc-500 font-mono pb-4 border-b border-white/5 tracking-wider">
                  <span>REF: VIBO-{activeTab.toUpperCase()}-2029</span>
                  <span>STATUS: DRAFT</span>
                </div>

                {/* Items list with adjustments */}
                <div className="mt-4 flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
                      <div className="text-left">
                        <h4 className="text-xs font-bold text-white tracking-tight leading-snug">{item.name}</h4>
                        <span className="text-[9.5px] text-zinc-500 font-mono tracking-wide block mt-1">
                          {item.weight > 0 ? `${item.weight.toLocaleString()} kg @ $${item.rate.toFixed(2)}/kg` : `Flat Service Fee`}
                        </span>
                      </div>

                      {/* Micro-adjusters for Weights and Rates */}
                      <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto border-t border-white/5 sm:border-t-0 pt-2.5 sm:pt-0">
                        {item.weight > 0 && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] text-zinc-500 font-mono mr-1 tracking-wider">WT:</span>
                            <button
                              type="button"
                              onClick={() => adjustWeight(item.id, -250)}
                              className="w-5 h-5 rounded-md bg-zinc-950 hover:bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                            >
                              <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              onClick={() => adjustWeight(item.id, 250)}
                              className="w-5 h-5 rounded-md bg-zinc-950 hover:bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                            >
                              <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </button>
                          </div>
                        )}

                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-zinc-500 font-mono mr-1 tracking-wider">{item.weight > 0 ? "RATE:" : "AMOUNT:"}</span>
                          <button
                            type="button"
                            onClick={() => adjustRate(item.id, item.weight > 0 ? -0.5 : -1000)}
                            className="w-5 h-5 rounded-md bg-zinc-950 hover:bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                          >
                            <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => adjustRate(item.id, item.weight > 0 ? 0.5 : 1000)}
                            className="w-5 h-5 rounded-md bg-zinc-950 hover:bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                          >
                            <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                          </button>
                        </div>

                        {/* Computed Row Total */}
                        <div className="text-right min-w-[80px] font-mono text-xs font-bold text-white tracking-tight">
                          ${(item.weight > 0 ? item.weight * item.rate : item.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Voucher Summary block */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-zinc-500 font-mono block tracking-wider">TOTAL NET WEIGHT</span>
                    <span className="text-sm font-bold text-white font-mono mt-1 block tracking-wide">
                      {totalWeight > 0 ? `${totalWeight.toLocaleString()} kg` : "N/A"}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-zinc-500 font-mono block tracking-wider">TOTAL VOUCHER VALUE</span>
                    <span className="text-base font-bold text-emerald-400 font-mono mt-1 block tracking-tight">
                      ${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* ── WhatsApp Instant Dispatcher Bar ── */}
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-col gap-3.5">
                  <div className="flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between text-[9px] text-zinc-500 font-mono tracking-wider text-left sm:text-right">
                    <span>DISPATCH TARGET:</span>
                    <span className="text-zinc-300 font-semibold tracking-wide">+1 (555) 019-3240 (Matthew Smith)</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={isSending || sendSuccess}
                    className={`
                      w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2
                      ${sendSuccess 
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 cursor-default" 
                        : "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md hover:shadow-lg transform active:scale-[0.99]"
                      }
                    `}
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2 tracking-widest font-mono text-[10px]">
                        <svg className="animate-spin h-3.5 w-3.5 text-zinc-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        SENDING VIA WHATSAPP ({sendProgress}%)
                      </span>
                    ) : sendSuccess ? (
                      <span className="flex items-center gap-1.5 tracking-widest font-mono text-[10px]">
                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        DELIVERED SUCCESSFULLY
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 tracking-wider">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.031 2c-5.514 0-9.99 4.477-9.99 9.99 0 1.84.5 3.565 1.374 5.053L2 22l5.12-1.339a9.924 9.924 0 0 0 4.911 1.306c5.513 0 9.99-4.476 9.99-9.99 0-5.513-4.477-9.99-9.99-9.99zm5.344 14.004c-.23.649-1.328 1.196-1.848 1.25-.419.043-.967.062-1.579-.13a7.35 7.35 0 0 1-3.23-1.921 8.212 8.212 0 0 1-2.228-3.18c-.279-.586-.566-1.267-.566-1.947 0-1.28.649-1.905.892-2.164.24-.26.533-.326.711-.326.178 0 .356.002.51.01.162.008.384-.06.602.474.223.546.76 1.859.825 1.993.065.133.109.289.02.466-.089.178-.134.289-.267.444-.133.155-.281.344-.4.488-.133.162-.271.339-.118.6.152.261.678 1.114 1.454 1.807.999.893 1.84 1.168 2.101 1.298.26.13.411.109.566-.067.155-.178.666-.776.843-1.041.178-.266.356-.222.6-.133.244.09 1.554.733 1.821.866.266.133.444.2.51.31.066.111.066.643-.164 1.292z"/>
                        </svg>
                        1-Click Share via WhatsApp
                      </span>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
