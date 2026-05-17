import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass-capsule flex w-full max-w-5xl items-center justify-between px-6 py-3">
        {/* Left: Brand Name */}
        <div className="text-xl font-bold tracking-tight text-white">
          Vibo ERP
        </div>

        {/* Middle: Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            About
          </a>
        </div>

        {/* Right: CTA Button */}
        <div>
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-zinc-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
