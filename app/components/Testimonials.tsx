"use client";

import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [feedbackStars, setFeedbackStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // ── CONFETTI & RIBBON CANVAS ANIMATION EFFECT ──
  useEffect(() => {
    if (!showCelebration) return;

    const canvas = document.getElementById("celebration-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particles structure
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      type: "confetti" | "ribbon" | "glitter";
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      wavyOffset: number;
      wavySpeed: number;
    }

    const particles: Particle[] = [];
    const colors = [
      "#10B981", // Emerald
      "#3B82F6", // Blue
      "#8B5CF6", // Purple
      "#EC4899", // Pink
      "#F59E0B", // Gold/Amber
      "#06B6D4", // Cyan
    ];

    // Left Popper (firing up-right)
    for (let i = 0; i < 75; i++) {
      particles.push({
        x: 0,
        y: height - 20,
        vx: Math.random() * 16 + 6,
        vy: -(Math.random() * 22 + 12),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        type: Math.random() > 0.6 ? (Math.random() > 0.5 ? "ribbon" : "glitter") : "confetti",
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        opacity: 1.0,
        wavyOffset: Math.random() * 100,
        wavySpeed: Math.random() * 0.08 + 0.04,
      });
    }

    // Right Popper (firing up-left)
    for (let i = 0; i < 75; i++) {
      particles.push({
        x: width,
        y: height - 20,
        vx: -(Math.random() * 16 + 6),
        vy: -(Math.random() * 22 + 12),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        type: Math.random() > 0.6 ? (Math.random() > 0.5 ? "ribbon" : "glitter") : "confetti",
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        opacity: 1.0,
        wavyOffset: Math.random() * 100,
        wavySpeed: Math.random() * 0.08 + 0.04,
      });
    }

    // Star renderer for glitter stars
    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, fillStyle: string, opacity: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = fillStyle;
      ctx.fill();
      ctx.restore();
    };

    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Physics update
        p.vy += 0.32; // Gravity
        p.vx *= 0.985; // Air drag
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.0055; // Gentle fade

        if (p.opacity <= 0) return;

        // Render based on type
        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.type === "confetti") {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size, p.size, p.size * 1.6);
        } else if (p.type === "ribbon") {
          ctx.beginPath();
          ctx.lineWidth = p.size / 3;
          ctx.strokeStyle = p.color;
          ctx.moveTo(p.x, p.y);
          const length = p.size * 2.8;
          for (let i = 0; i < 5; i++) {
            const wx = p.x + Math.sin(p.wavyOffset + i * 0.9) * 7;
            const wy = p.y + i * (length / 5);
            ctx.lineTo(wx, wy);
          }
          ctx.stroke();
          p.wavyOffset += p.wavySpeed;
        } else if (p.type === "glitter") {
          ctx.restore();
          drawStar(p.x, p.y, 4, p.size * 1.3, p.size * 0.45, "#FFFFFF", p.opacity);
          return;
        }

        ctx.restore();
      });

      // Continue animating until particles fade
      const active = particles.some((p) => p.opacity > 0);
      if (active) {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    renderLoop();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showCelebration]);

  return (
    <section id="testimonials" className="relative w-full bg-black py-12 md:py-24 overflow-hidden border-t border-white/5">
      {/* ── BACKGROUND AMBIENT GLOWS ── */}
      <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-[450px] w-[450px] rounded-full bg-emerald-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 h-[350px] w-[350px] rounded-full bg-pink-600/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] block">
            Customer Success
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white mt-1.5 leading-tight">
            Loved by operations teams <span className="font-cursive text-emerald-400 font-normal lowercase tracking-normal text-[1.12em] inline-block transform translate-y-0.5 select-none">everywhere</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            See how operations and finance teams streamline calculations, reporting, and instant communications with Vibo ERP.
          </p>
        </div>

        {/* ── RESPONSIVE STAGGERED GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start [perspective:1000px]">

          {/* ── COLUMN 1 ── */}
          <div className="flex flex-col gap-6">
            
            {/* CARD A: Tall Card (Weight-wise calculation & Instant WhatsApp) */}
            <div className="
              w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md overflow-hidden 
              flex flex-col justify-between p-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/50 group/cardA
            ">
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent opacity-0 group-hover/cardA:opacity-100 transition-opacity duration-500" />
              
              <div>
                <div className="flex justify-between items-start">
                  <div className="flex gap-0.5 text-emerald-400 text-[9.5px]">★★★★★</div>
                  <button className="text-zinc-500 hover:text-white transition-colors text-xs">✕</button>
                </div>
                <h3 className="text-base font-bold text-white mt-4 tracking-tight leading-snug">Highly satisfied with the weight-wise invoicing!</h3>
                
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full">Weight-Wise</span>
                  <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full">WhatsApp Share</span>
                  <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-2.5 py-0.5 rounded-full">Automated</span>
                </div>
                <span className="text-zinc-500 text-[10px] block mt-4 font-mono">- @ArtfulHalward-</span>
              </div>

              {/* Bottom Tech Showcase */}
              <div className="relative w-full h-[160px] rounded-2xl bg-zinc-950/60 border border-white/5 overflow-hidden flex items-center justify-center mt-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover/cardA:scale-110 group-hover/cardA:rotate-3">
                    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[9.5px] text-zinc-400 font-mono tracking-wider">WEIGHT CALC ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD H: Bottom Row Leftmost Wide (Elizabeth Jones) */}
            <div className="
              w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-5 
              shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/50 group/cardH
            ">
              <div className="flex gap-0.5 text-emerald-400 text-[9px]">★★★★★</div>
              
              <p className="text-zinc-300 text-xs mt-3.5 leading-relaxed font-light">
                "One-click WhatsApp automation is brilliant. It bridges the gap between operations and customer communication, eliminating manual exports entirely."
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white text-[9px] font-bold border border-white/10">
                    EJ
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-white">Elizabeth Jones</h4>
                    <span className="text-zinc-500 text-[8.5px] block">Operations Manager</span>
                  </div>
                </div>
                <span className="text-[8.5px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">1-Click Share</span>
              </div>
            </div>

          </div>

          {/* ── COLUMN 2 ── */}
          <div className="flex flex-col gap-6 xl:translate-y-6">
            
            {/* CARD B: Sonia & Robert */}
            <div className="
              w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-5 
              shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/50 group/cardB
            ">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-500/5 via-transparent to-transparent opacity-0 group-hover/cardB:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center text-white text-[9.5px] font-extrabold border border-white/10">
                    SR
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Sonia & Robert</h4>
                    <span className="text-zinc-500 text-[8.5px] block mt-0.5">Finance Directors</span>
                  </div>
                </div>
                <span className="text-emerald-400 text-[10.5px] font-mono font-bold tracking-tight">★ 5.0/5.0</span>
              </div>
              
              <p className="text-zinc-300 text-xs mt-4 leading-relaxed font-light">
                "Vibo ERP covers the complete journey from voucher creation to output. Managing purchase/sales invoices, receipts, and payments is seamless, structured, and instantly auditable."
              </p>
              <span className="text-zinc-400 hover:text-white transition-colors text-[9.5px] block mt-3 font-semibold cursor-pointer">Read more ▾</span>
            </div>

            {/* CARD E: Matthew Smith (Main Central Block) */}
            <div className="
              w-full rounded-3xl border border-emerald-500/20 bg-zinc-900/60 backdrop-blur-md p-6 
              shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/35 hover:bg-zinc-900/70 group/cardE
            ">
              <div className="absolute inset-0 -z-10 bg-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover/cardE:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400/80 to-cyan-500/80 flex items-center justify-center text-zinc-950 font-black text-xs shadow-lg">
                    MS
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white tracking-tight">Matthew Smith</h4>
                    <span className="text-zinc-500 text-[9.5px] block mt-0.5">CEO of OptimaSphere Inc.</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 text-xs tracking-tighter">★★★★★</span>
                  <button className="text-zinc-600 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-6 tracking-tight leading-snug">
                "Ledger statements and aging reports are a absolute game changer!"
              </h3>
              <p className="text-zinc-400 text-xs mt-3 font-light leading-relaxed">
                Vibo ERP delivers powerful, real-time reports giving us complete financial and operational clarity. Stock tracking, receivable aging, and TDS/TCS entries update live with 100% accuracy.
              </p>
            </div>

            {/* CARD I: Star Rating Controller */}
            <div className="
              w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-5 
              shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/50 group/feedback
            ">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">Your Feedback</span>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] px-2.5 py-0.5 rounded-full font-mono font-bold uppercase transition-all duration-300">
                  {feedbackStars === 5 ? "Amazing 🚀" : 
                   feedbackStars === 4 ? "Great 🌟" : 
                   feedbackStars === 3 ? "Good 👍" : 
                   feedbackStars === 2 ? "Fair 😐" : "Poor 👎"}
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-4.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => {
                      setFeedbackStars(star);
                      if (star === 5) {
                        setShowCelebration(true);
                      }
                    }}
                    onMouseEnter={() => setHoverStars(star)}
                    onMouseLeave={() => setHoverStars(0)}
                    className="transition-all duration-200 transform active:scale-90 focus:outline-none"
                  >
                    <svg 
                      className={`w-7.5 h-7.5 transition-all duration-300 ${
                        star <= (hoverStars || feedbackStars) 
                          ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] scale-110" 
                          : "text-zinc-700 hover:text-zinc-500 hover:scale-105"
                      }`} 
                      fill={star <= (hoverStars || feedbackStars) ? "currentColor" : "none"}
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.427.77-.427.92 0l1.562 4.456a.75.75 0 00.718.52h4.708c.465 0 .657.6.282.88l-3.81 2.768a.75.75 0 00-.273.84l1.563 4.457c.148.428-.352.793-.703.528l-3.81-2.768a.75.75 0 00-.868 0l-3.81 2.768c-.35.265-.852-.1-.703-.528l1.563-4.457a.75.75 0 00-.273-.84l-3.81-2.768c-.375-.28-.183-.88.282-.88h4.708a.75.75 0 00.718-.52l1.562-4.456z" />
                    </svg>
                  </button>
                ))}
              </div>
              <span className="text-zinc-500 text-[8px] block mt-4.5 text-center font-mono tracking-wider">TAP TO RATE VIBO ERP</span>
            </div>

          </div>

          {/* ── COLUMN 3 ── */}
          <div className="flex flex-col gap-6">
            
            {/* CARD C: Top quote card */}
            <div className="
              w-full min-h-[145px] rounded-3xl 
              border border-white/10 bg-zinc-900/40 backdrop-blur-md p-5 flex flex-col justify-between relative
              shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/50 group/cardC
            ">
              <span className="absolute right-5 top-4 text-zinc-700/60 font-serif text-3xl font-bold leading-none select-none">“</span>
              
              <p className="text-zinc-300 text-xs leading-relaxed font-light pr-4">
                "Our year-end financial preparation used to take weeks of spreadsheet consolidation. With automated Profit & Loss statements and pre-auditing reports, compliance is now a single-click task."
              </p>
              
              <div className="flex justify-between items-center mt-4 pt-3.5 border-t border-white/5">
                <span className="text-emerald-400 text-[8px] font-mono font-bold">★★★★★ (5.0)</span>
                
                <div className="flex items-center gap-1.5">
                  <div className="text-right">
                    <h5 className="text-[8.5px] font-bold text-white leading-tight">Fanny Dodger</h5>
                    <span className="text-zinc-500 text-[7px] block leading-tight">Head of Auditing</span>
                  </div>
                  <div className="w-5.5 h-5.5 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white text-[7.5px] font-extrabold">
                    FD
                  </div>
                </div>
              </div>
            </div>

            {/* CARD F: Service Rating Button */}
            <div className="
              w-full h-[65px] rounded-2xl 
              border border-white/10 bg-zinc-900/40 backdrop-blur-md px-4 py-2.5 
              flex items-center justify-between shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/50 group/cardF
            ">
              <div>
                <span className="text-zinc-400 text-[9px] font-bold block uppercase tracking-wider">Service Rating</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-emerald-400 text-[9px]">★</span>
                  <span className="text-[9.5px] text-zinc-300 font-mono font-medium">(5/5) from 419 reviews</span>
                </div>
              </div>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8.5px] px-2 py-0.5 rounded-full font-bold">99+</span>
            </div>

            {/* CARD G: Search-look input bar */}
            <div className="
              w-full h-[46px] rounded-2xl 
              border border-white/10 bg-zinc-900/40 backdrop-blur-md px-4.5 
              flex items-center justify-between shadow-xl transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/50
            ">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-400 font-light">Client Reviews</span>
                <span className="text-[9px] text-zinc-650">✕</span>
              </div>
              <div className="w-7 h-7 rounded-lg bg-emerald-500/25 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs shadow-md">
                🔍
              </div>
            </div>

            {/* CARD J: John Doe vertical */}
            <div className="
              w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md p-5 
              shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/50 group/cardJ
            ">
              <div className="flex justify-between items-center text-zinc-500 text-[9px] font-mono">
                <span>@JohnDoe</span>
                <span>• 12h</span>
              </div>
              
              <h4 className="text-xs font-bold text-white mt-3.5 tracking-tight">Secure RBAC system</h4>
              <p className="text-zinc-400 text-xs mt-2.5 leading-relaxed font-light">
                Restricting sensitive financial operations at the company level has greatly enhanced our data integrity. Role-based access ensures complete accountability across all global branches.
              </p>
              
              <div className="flex flex-col gap-2 mt-6 pt-3.5 border-t border-white/5">
                <span className="text-emerald-400 text-[9.5px] font-mono">★★★★★ <span className="text-zinc-500 text-[8px] ml-1">(5.0)</span></span>
                <div className="flex justify-between items-center text-[7.5px] text-zinc-500">
                  <span>All Client Score</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

          </div>

          {/* ── COLUMN 4 ── */}
          <div className="flex flex-col gap-6 xl:translate-y-12">
            
            {/* CARD D: Incredible Service Hotline split */}
            <div className="
              w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md overflow-hidden 
              flex shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-zinc-900/50 group/cardD
            ">
              <div className="flex-1 p-5.5 flex flex-col justify-between">
                <div>
                  <span className="text-zinc-500 text-[8.5px] font-mono uppercase tracking-wider block">26 Mar 2029</span>
                  <h4 className="text-sm font-extrabold text-white mt-2 tracking-tight leading-tight">Incredible support</h4>
                  <p className="text-zinc-400 text-xs mt-3 leading-snug font-light">Weight calculations matched perfectly, highly professional agent.</p>
                </div>
                <div className="flex gap-0.5 text-emerald-400 text-[9px] mt-4">★★★★★</div>
              </div>
              
              <div className="w-[105px] bg-zinc-950/60 border-l border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_75%)]" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full border border-cyan-500/30 flex items-center justify-center bg-cyan-950/20 shadow-[0_0_12px_rgba(6,182,212,0.15)] animate-[pulse_2s_infinite]">
                    <svg className="w-5.5 h-5.5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6M9.75 14.25H4.5m5.25 0v4.5m0-4.5l-6 6m10.5-2.25a9 9 0 11-12.728 0 9 9 0 0112.728 0z" />
                    </svg>
                  </div>
                  <span className="text-[8px] text-cyan-400 font-bold block mt-3.5 uppercase tracking-wider font-mono">HOTLINE</span>
                  <span className="text-zinc-500 text-[7px] block mt-0.5">24/7 SUPPORT</span>
                </div>
              </div>
            </div>

            {/* CARD K: Green vertical card */}
            <div className="
              w-full rounded-3xl border border-emerald-500/20 bg-zinc-900/50 backdrop-blur-md p-5 
              shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/35 hover:bg-zinc-900/60 group/cardK
            ">
              <div className="absolute inset-0 -z-10 bg-emerald-500/5 rounded-3xl blur-xl opacity-0 group-hover/cardK:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <span className="text-emerald-400 text-[9px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">★ EXCELLENT</span>
                <button className="w-5 h-5 rounded-full bg-emerald-950/45 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-[8.5px] hover:bg-emerald-500 hover:text-zinc-950 transition-colors">
                  ✕
                </button>
              </div>

              <div className="flex flex-col items-center text-center mt-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 flex items-center justify-center text-zinc-950 font-black text-sm shadow-md border-2 border-emerald-500/40">
                  JD
                </div>
                <h4 className="text-xs font-bold text-white mt-3">Perfect Compliance!</h4>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed font-light">
                  TDS/TCS reports are tracked with 100% accuracy, and the bill print layout fits standard invoice templates out-of-the-box.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3.5 text-zinc-500 text-[9px] mt-6 pt-3.5 border-t border-white/5 font-mono">
                <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                  ♥ <span className="font-bold">1,914</span>
                </span>
                <span className="flex items-center gap-1">
                  👁 <span className="font-bold">21.7k</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── 5-STAR CELEBRATION MODAL OVERLAY ── */}
      {showCelebration && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300">
          {/* Particles Canvas */}
          <canvas id="celebration-canvas" className="absolute inset-0 pointer-events-none w-full h-full" />
          
          {/* Typographic Content (Floating directly with zero boxes/containers) */}
          <div className="relative z-10 max-w-xl w-full mx-4 text-center animate-[fadeIn_0.5s_ease-out]">
            
            {/* Celebration Icon (Clean Premium SVG badge instead of emoji) */}
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-6 select-none animate-bounce">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            
            <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
              You're <span className="font-cursive text-emerald-400 font-normal lowercase tracking-normal text-[1.12em] inline-block transform translate-y-0.5 select-none">Outstanding</span>!
            </h3>
            
            <p className="text-zinc-300 text-sm sm:text-base mt-4 max-w-md mx-auto leading-relaxed font-light">
              Thank you so much for the <span className="font-cursive text-emerald-400 font-normal lowercase tracking-normal text-[1.22em] inline-block transform translate-y-0.5 select-none">5-star rating</span>! Your support inspires us to continue building the ultimate modern ERP experience.
            </p>
            
            <div className="mt-9 flex flex-col items-center gap-4">
              <button 
                type="button"
                onClick={() => setShowCelebration(false)}
                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 transform active:scale-95"
              >
                Explore Vibo ERP Features
              </button>
              <button
                type="button"
                onClick={() => setShowCelebration(false)}
                className="text-zinc-500 hover:text-zinc-300 text-[10px] font-bold tracking-widest font-mono py-1.5 transition-colors uppercase"
              >
                DISMISS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
