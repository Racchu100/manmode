"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Store, ShieldCheck, MapPin } from "lucide-react";
import { STORE_INFO } from "@/lib/data";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black py-12 sm:py-20">
      
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000"
          alt="MAN MODE Luxury Fashion Banner"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]" />
      </div>

      {/* Floating Chrome Reflections & Glow Particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-chrome-glow blur-[120px] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-5 sm:space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-white/20 text-[10px] sm:text-xs font-bold text-slate-200 shadow-chrome-glow">
          <Sparkles className="w-3.5 h-3.5 text-chrome" />
          <span>MANGALURU'S PREMIER MEN'S FASHION LOUNGE</span>
        </div>

        {/* Liquid Chrome Emblem & Hero Headline */}
        <div className="space-y-3 sm:space-y-4">
          
          <div className="mx-auto w-fit px-5 py-2 sm:px-8 sm:py-3 rounded-full border-2 border-slate-300/80 bg-gradient-to-b from-[#22252C] via-[#090A0D] to-[#14161C] shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-border-shimmer">
            <h1 className="font-heading font-black text-3xl sm:text-6xl lg:text-7xl tracking-widest text-chrome uppercase drop-shadow-[0_4px_25px_rgba(255,255,255,0.5)]">
              MAN MODE
            </h1>
            <p className="text-[10px] sm:text-sm font-accent font-bold tracking-[0.3em] text-slate-200 uppercase -mt-0.5">
              THE CLOTHING LOUNGE
            </p>
          </div>

          <p className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Redefining masculine luxury in Padil, Mangaluru. Tailored Italian tuxedos, Egyptian cotton shirts, raw silk ethnic kurtas & signature oud fragrances.
          </p>

        </div>

        {/* Store Pickup Banner Tag */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-xs text-slate-200">
          <Store className="w-3.5 h-3.5 text-chrome" />
          <span className="font-bold text-white">ONLINE RESERVATION • STORE PICKUP ONLY</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">Padil, Mangaluru, Karnataka 575007</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 btn-chrome text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-chrome-glow text-black"
          >
            SHOP LUXURY COLLECTION
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/new-arrivals"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 btn-chrome-outline text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-chrome" />
            NEW SEASON DROPS
          </Link>
        </div>

        {/* Key Feature Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 pt-6 sm:pt-10 border-t border-white/10 max-w-4xl mx-auto text-left">
          <div className="p-2.5 sm:p-3 glass-panel rounded-xl">
            <p className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold">Boutique Location</p>
            <p className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Padil, Mangaluru</p>
          </div>
          <div className="p-2.5 sm:p-3 glass-panel rounded-xl">
            <p className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold">Ordering Model</p>
            <p className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Store Pickup Only</p>
          </div>
          <div className="p-2.5 sm:p-3 glass-panel rounded-xl">
            <p className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold">Online Payment</p>
            <p className="text-[11px] sm:text-xs font-bold text-emerald-400 mt-0.5">Zero Online Payment</p>
          </div>
          <div className="p-2.5 sm:p-3 glass-panel rounded-xl">
            <p className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold">Fitting Experience</p>
            <p className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Private Lounge Trial</p>
          </div>
        </div>

      </div>
    </section>
  );
};
