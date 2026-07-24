"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/lib/data";

export const LuxuryCategories = () => {
  const featuredCategories = CATEGORIES.filter((c) => c.featured);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-chrome text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>CURATED COLLECTIONS</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-wide">
              LUXURY CATEGORIES
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition"
          >
            VIEW ALL 25+ CATEGORIES
            <ArrowUpRight className="w-4 h-4 text-chrome" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="group relative h-52 sm:h-64 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden glass-panel-interactive border border-white/10 flex flex-col justify-end p-3 sm:p-6"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Category Info */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-chrome border border-white/20 backdrop-blur-md">
                    {cat.itemCount} ITEMS
                  </span>
                  <div className="p-1 sm:p-2 rounded-full bg-black/60 border border-white/20 text-white group-hover:bg-white group-hover:text-black transition">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-sm sm:text-xl text-white group-hover:text-chrome transition leading-tight">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
