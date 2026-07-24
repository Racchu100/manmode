"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Store, Clock } from "lucide-react";

export const OfferBanner = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 border-2 border-slate-300/40 shadow-chrome-glow bg-gradient-to-r from-[#121318] via-[#090A0C] to-[#161820]">
          
          {/* Subtle Silver Radial Background */}
          <div className="absolute -top-24 right-0 w-96 h-96 bg-chrome-glow blur-3xl opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-chrome">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PADIL BOUTIQUE EXCLUSIVE</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight">
                RESERVE ONLINE, <br />
                <span className="text-chrome">EXPERIENCE IN LOUNGE</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                Step into our Padil boutique for a private fitting session. Enjoy zero online payment hassle, complimentary coffee & espresso, and tailored alteration assistance.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <Store className="w-4 h-4 text-chrome" />
                  <span>Padil, Mangaluru</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-chrome" />
                  <span>No Shipping / No Delivery</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-chrome" />
                  <span>Open 10:00 AM – 9:30 PM</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-chrome text-xs font-bold uppercase tracking-wider text-black shadow-chrome-glow"
                >
                  RESERVE YOUR ITEMS NOW
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Callout Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 text-xs">
              <h3 className="font-heading font-bold text-base text-white border-b border-white/10 pb-3 flex items-center justify-between">
                <span>HOW STORE PICKUP WORKS</span>
                <span className="text-chrome text-[11px]">4 EASY STEPS</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">1</span>
                  <div>
                    <span className="font-bold text-white block">Browse & Add to Pickup Cart</span>
                    <span className="text-slate-400">Select sizes, colors, and quantities online.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">2</span>
                  <div>
                    <span className="font-bold text-white block">Choose Pickup Date & Time Slot</span>
                    <span className="text-slate-400">Schedule your visit to our Padil lounge.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">3</span>
                  <div>
                    <span className="font-bold text-white block">Receive Digital Pickup Pass</span>
                    <span className="text-slate-400">Instant Order ID, QR Code & Barcode pass.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">4</span>
                  <div>
                    <span className="font-bold text-white block">Try-On & Collect In-Store</span>
                    <span className="text-slate-400">Inspect fabric, try fittings, and pay at counter.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
