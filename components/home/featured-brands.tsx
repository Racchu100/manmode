"use client";

import React from "react";

export const FeaturedBrands = () => {
  const brands = [
    { name: "LOUIS VUITTON", code: "LV" },
    { name: "HUGO BOSS", code: "HB" },
    { name: "ARMANI EXCHANGE", code: "AX" },
    { name: "ZARA MAN", code: "ZR" },
    { name: "MAN MODE BESPOKE", code: "MM" },
    { name: "PLATINUM OUD", code: "PO" }
  ];

  return (
    <section className="py-10 bg-[#060608] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">
          DESIGN INSPIRATION & BOUTIQUE BRANDS
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {brands.map((b) => (
            <div
              key={b.name}
              className="p-4 glass-panel rounded-2xl border border-white/10 flex items-center justify-center gap-2 group hover:border-white/30 transition cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-white/10 text-white font-bold text-[10px] flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition">
                {b.code}
              </span>
              <span className="font-heading font-extrabold text-xs tracking-wider text-slate-300 group-hover:text-white transition">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
