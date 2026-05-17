"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/bg_test.svg"
          alt="Background"
          fill
          className="object-cover scale-115"
          style={{ objectPosition: "center -100px" }}
          priority
        />

        {/* White Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "100px 60px",
          }}
        />

        {/* Dark radial spotlight following cursor */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.99) 100%)`,
          }}
        />
      </div>

      {/* Smoke Video Overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-60"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* Magnetic Glowing Circle — sits behind everything */}
      <MagneticCircle mousePos={mousePos} />

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-4 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-medium text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Cloud Based
          </span>
          <span className="h-3 w-[1px] bg-zinc-800" />
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Secure Access
          </span>
          <span className="h-3 w-[1px] bg-zinc-800" />
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            Real-Time Reporting
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-5xl text-5xl font-medium tracking-tight text-white md:text-7xl leading-[1.15]">
          Modern Cloud ERP for <span className="font-cursive text-white font-normal lowercase tracking-normal text-[1.12em] inline-block transform translate-y-0.5 select-none">Accounting</span>, Billing &amp; Inventory.
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light tracking-normal text-zinc-400 md:text-xl leading-relaxed">
          Manage invoices, inventory, reporting, and operations from one
          powerful platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-white px-8 py-4 text-sm font-normal tracking-tight text-black transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button className="rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 text-sm font-normal tracking-tight text-white backdrop-blur-sm transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95">
            Watch Demo
          </button>
        </div>

        {/* Dashboard Image */}
        <div className="relative mx-auto mt-20 max-w-6xl px-4 md:px-0 group">
          {/* Ambient Glow */}
          <div className="absolute -inset-x-6 -top-4 h-[400px] bg-gradient-to-r from-teal-400 via-white to-violet-500 opacity-60 blur-[80px] mix-blend-screen" />

          <div className="relative rounded-2xl shadow-2xl">
            {/* Fading Border */}
            <div
              className="absolute -inset-[2px] rounded-[18px] bg-gradient-to-r from-teal-400 via-white to-violet-500"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 70%)",
              }}
            />

            {/* Dashboard */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-zinc-950 border border-white/5">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/50 z-20" />
              <Image
                src="/MainDashboard.svg"
                alt="Vibo ERP Dashboard"
                width={1200}
                height={800}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none" />
    </section>
  );
};

// ─── Magnetic Circle ───────────────────────────────────────────────────────────
// The glowing concentric rings are drawn in an absolutely positioned div
// centred in the hero. A rAF loop lerps the current offset toward a target
// offset computed from the mouse position, giving a spring-like drag feel.
// Proximity to the centre intensifies the pull AND brightens the glow.
// ──────────────────────────────────────────────────────────────────────────────
const MagneticCircle = ({
  mousePos,
}: {
  mousePos: { x: number; y: number };
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  // All mutable animation state lives in refs so we never cause re-renders
  // from inside the rAF loop — keeping it silky smooth.
  const curPos = useRef({ x: 0, y: 0 });
  const tgtPos = useRef({ x: 0, y: 0 });
  const curScale = useRef(1);
  const tgtScale = useRef(1);
  const curGlow = useRef(0); // 0–1, drives glow intensity
  const tgtGlow = useRef(0);
  const rafId = useRef<number | null>(null);

  // ── Recompute magnetic target whenever the mouse moves ───────────────────
  useEffect(() => {
    const section = wrapRef.current?.parentElement;
    if (!section) return;
    if (mousePos.x === -1000) return; // cursor hasn't entered yet

    const { width, height } = section.getBoundingClientRect();
    const cx = width / 2;
    const cy = height / 2;

    const dx = mousePos.x - cx;
    const dy = mousePos.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    // Normalised distance: 0 = cursor at centre, 1 = cursor at edge
    const maxDist = Math.sqrt(cx * cx + cy * cy);
    const normDist = Math.min(1, dist / maxDist);

    // Strength peaks when cursor is near the centre (proximity effect)
    const proximity = 1 - normDist;           // 0 far away → 1 at centre
    const magnetStrength = proximity * proximity * 100; // px, eased quadratically

    // Direction unit vector scaled by strength
    const angle = Math.atan2(dy, dx);
    tgtPos.current = {
      x: Math.cos(angle) * magnetStrength,
      y: Math.sin(angle) * magnetStrength,
    };

    // Scale up slightly and glow brighter when drawn in
    tgtScale.current = 1 + proximity * 0.20;
    tgtGlow.current = proximity;             // 0–1
  }, [mousePos]);

  // ── rAF animation loop ───────────────────────────────────────────────────
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const DRAG   = 0.055;  // position ease — lower = more lag / springier
    const SDRAG  = 0.07;   // scale ease
    const GDRAG  = 0.07;   // glow ease

    const tick = () => {
      curPos.current.x   = lerp(curPos.current.x,   tgtPos.current.x,   DRAG);
      curPos.current.y   = lerp(curPos.current.y,   tgtPos.current.y,   DRAG);
      curScale.current   = lerp(curScale.current,   tgtScale.current,   SDRAG);
      curGlow.current    = lerp(curGlow.current,    tgtGlow.current,    GDRAG);

      if (wrapRef.current) {
        const s  = curScale.current;
        const g  = curGlow.current;              // 0–1

        // Glow radii and opacities ramp with proximity
        const violetBlur = 20 + g * 80;
        const tealBlur   = 40 + g * 140;
        const violetAlpha = 0.10 + g * 0.45;
        const tealAlpha   = 0.06 + g * 0.34;

        wrapRef.current.style.transform = `translate(calc(-50% + ${curPos.current.x}px), calc(-50% + ${curPos.current.y}px)) scale(${s})`;
        wrapRef.current.style.filter    = [
          `drop-shadow(0 0 ${violetBlur}px rgba(139,92,246,${violetAlpha}))`,
          `drop-shadow(0 0 ${tealBlur}px rgba(20,184,166,${tealAlpha}))`,
        ].join(" ");
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
      style={{ willChange: "transform, filter" }}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-[1000px] w-[1000px] fill-none"
      >
        {/* Rings — outer to inner, gradually brighter */}
        <circle cx="50" cy="50" r="50" stroke="rgba(139,92,246,0.06)"  strokeWidth="0.08" />
        <circle cx="50" cy="50" r="40" stroke="rgba(139,92,246,0.10)"  strokeWidth="0.09" />
        <circle cx="50" cy="50" r="30" stroke="rgba(139,92,246,0.16)"  strokeWidth="0.10" />
        <circle cx="50" cy="50" r="20" stroke="rgba(20,184,166,0.22)"  strokeWidth="0.12" />
        <circle cx="50" cy="50" r="10" stroke="rgba(20,184,166,0.36)"  strokeWidth="0.15" />
      </svg>
    </div>
  );
};

export default Hero;
