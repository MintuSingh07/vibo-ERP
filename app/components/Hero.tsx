"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // Slows down video to 40% speed
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
          className="object-cover scale-115 "
          style={{ objectPosition: "center -100px" }} // Tweak the -100px to move it up (negative) or down (positive)
          priority
        />

        {/* White Grid Pattern (on top of SVG, under dark layer) */}
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

        {/* Dark layer with dynamic hover light effect */}
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

      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Badge / Small Trust Text */}
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
        <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent md:text-7xl">
          Modern Cloud ERP for Accounting, Billing & Inventory Management.
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

        {/* Dashboard Image with Aura Glow */}
        <div className="relative mx-auto mt-20 max-w-6xl px-4 md:px-0 group">
          {/* Ambient Soft Glow Behind the dashboard */}
          <div className="absolute -inset-x-6 -top-4 h-[400px] bg-gradient-to-r from-teal-400 via-white to-violet-500 opacity-60 blur-[80px] mix-blend-screen" />

          <div className="relative rounded-2xl shadow-2xl">
            {/* Fading Hard Light Border */}
            <div
              className="absolute -inset-[2px] rounded-[18px] bg-gradient-to-r from-teal-400 via-white to-violet-500"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 10%, transparent 70%)",
              }}
            />

            {/* Inner Dashboard Container */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-zinc-950 border border-white/5">
              {/* Additional Top Edge Highlight inside the image */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/50 z-20" />
              <Image
                src="/MainDashboard.svg"
                alt="Vibo ERP Dashboard"
                width={1200}
                height={800}
                className="w-full object-cover"
                priority
              />
              {/* Subtle Gradient Overlay on the image to blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Background radial lines (optional decorative element from reference) */}
      <div className="absolute top-1/2 left-1/2 -z-20 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full stroke-zinc-800 fill-none"
        >
          <circle cx="50" cy="50" r="10" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="20" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="30" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="50" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Bottom Black Fade to blend dashboard into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none" />
    </section>
  );
};

export default Hero;
