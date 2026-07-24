import React from "react";
import Link from "next/link";
import { Home, Search, ShoppingBag, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found | MAN MODE THE CLOTHING LOUNGE",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg">
        
        {/* Large 404 */}
        <div className="relative">
          <p className="font-heading font-black text-[120px] sm:text-[160px] text-chrome/10 leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-5 py-2 rounded-full border-2 border-slate-300/60 bg-gradient-to-b from-[#1E2024] via-[#090A0D] to-[#121318] shadow-chrome-glow">
              <p className="font-heading font-extrabold text-xl tracking-widest text-chrome">MAN MODE</p>
              <p className="text-[8px] font-accent tracking-widest text-slate-300 uppercase -mt-1 text-center">THE CLOTHING LOUNGE</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-heading font-extrabold text-3xl text-white">PAGE NOT FOUND</h1>
          <p className="text-sm text-slate-300">
            The page you're looking for doesn't exist or may have moved. 
            But our Padil boutique is always open with fresh luxury arrivals!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="flex items-center gap-2 px-7 py-3.5 btn-chrome text-xs font-bold text-black shadow-chrome-glow">
            <Home className="w-4 h-4" />
            BACK TO HOME
          </Link>
          <Link href="/shop" className="flex items-center gap-2 px-7 py-3.5 btn-chrome-outline text-xs font-bold">
            <ShoppingBag className="w-4 h-4 text-chrome" />
            BROWSE CATALOG
          </Link>
          <Link href="/search" className="flex items-center gap-2 px-7 py-3.5 btn-chrome-outline text-xs font-bold">
            <Search className="w-4 h-4 text-chrome" />
            SEARCH
          </Link>
        </div>

      </div>
    </div>
  );
}
