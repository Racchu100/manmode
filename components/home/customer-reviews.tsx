"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS } from "@/lib/data";

export const CustomerReviews = () => {
  return (
    <section className="py-20 bg-surface border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-xs font-bold border border-white/20">
            <Star className="w-4 h-4 fill-chrome text-chrome" />
            <span>LOUNGE EXPERIENCES & REVIEWS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            WHAT OUR GENTLEMEN SAY
          </h2>
          <p className="text-xs text-slate-300">
            Rated 4.9/5 stars by verified shoppers across Mangaluru & coastal Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-chrome/40" />
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-xs text-white">{rev.author}</h4>
                  <span className="text-[10px] text-slate-400">{rev.location}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Pickup
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
