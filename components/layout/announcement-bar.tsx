"use client";

import React from "react";
import { Store, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-surface via-[#16161D] to-surface border-b border-white/10 py-1 sm:py-1.5 px-2 sm:px-4 text-slate-300 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1">

        {/* Left: badge */}
        <span className="flex items-center gap-1 bg-white/10 px-1.5 sm:px-2 py-0.5 rounded-full border border-white/20 shrink-0">
          <Store className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-200 shrink-0" />
          <span className="font-semibold text-[9px] sm:text-[10px] tracking-wide text-white whitespace-nowrap">STORE PICKUP ONLY</span>
        </span>

        {/* Right: links */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/store-pickup" className="hover:text-white transition flex items-center gap-0.5 sm:gap-1">
            <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-chrome shrink-0" />
            <span className="text-[9px] sm:text-[10px] underline underline-offset-2 whitespace-nowrap hidden xs:inline">How Pickup Works</span>
          </Link>
          <Link href="/contact" className="hover:text-white transition flex items-center gap-0.5 sm:gap-1">
            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-chrome shrink-0" />
            <span className="text-[9px] sm:text-[10px] whitespace-nowrap hidden xs:inline">Get Directions</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
