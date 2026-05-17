import React from "react";

const Features = () => {
  return (
    <section className="relative w-full bg-black py-32 px-4 md:px-8 flex flex-col items-center">
      {/* Container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Small label above heading */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Powerful Capabilities
        </p>
        
        {/* Main Heading */}
        <h2 className="max-w-3xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent md:text-6xl">
          Everything you need to run your business efficiently.
        </h2>
        
        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed tracking-normal text-zinc-400 md:text-xl">
          Manage invoices, automate workflows, and get real-time insights with our comprehensive suite of ERP tools built for modern teams.
        </p>
      </div>

      {/* Placeholder for future feature cards/grid */}
      <div className="mt-20 flex h-[400px] w-full max-w-7xl items-center justify-center rounded-3xl border border-white/5 bg-zinc-900/20">
        <p className="text-sm font-mono text-zinc-600">Feature Grid Coming Soon...</p>
      </div>
    </section>
  );
};

export default Features;
