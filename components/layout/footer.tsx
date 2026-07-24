"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Store, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { STORE_INFO } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-[#050507] border-t border-white/10 text-slate-400 pt-10 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden">
      
      {/* Chrome Glow Decorative Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-chrome-glow blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          
          {/* Brand Identity & Location */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex flex-col px-3 py-1 sm:px-5 sm:py-2 rounded-full border border-slate-300/60 sm:border-2 bg-gradient-to-b from-[#1E2024] via-[#0A0B0D] to-[#121318] shadow-[0_0_12px_rgba(192,192,192,0.2)] w-fit">
                <span className="font-heading font-extrabold text-base sm:text-xl tracking-wider text-chrome leading-tight">
                  MAN MODE
                </span>
                <span className="text-[7px] sm:text-[10px] font-accent font-semibold tracking-widest text-slate-300 uppercase group-hover:text-white leading-tight">
                  THE CLOTHING LOUNGE
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Mangaluru's premier ultra-luxury menswear boutique. Experience high-fashion bespoke suits, Egyptian cotton shirts, raw silk ethnics, and signature oud perfumes in an exclusive lounge ambiance.
            </p>

            {/* Store Address Box */}
            <div className="p-4 glass-panel rounded-2xl space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Lounge Address:</span>
                  <span>{STORE_INFO.address}</span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">{STORE_INFO.locationLandmark}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-chrome shrink-0" />
                <span>{STORE_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Store Pickup Notice & Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <Store className="w-4 h-4 text-chrome" />
              Store Pickup
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/store-pickup" className="hover:text-white transition flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-chrome" />
                  How Pickup Works
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition">
                  Reserve Items Online
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="hover:text-white transition">
                  My Digital Pickup Pass
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Lounge Map & Directions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition">
                  Refund & Exchange Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Men's Fashion Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Boutique Collections
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/category/shirts" className="hover:text-white transition">Luxury Shirts</Link></li>
              <li><Link href="/category/suits-blazers" className="hover:text-white transition">Suits & Tuxedos</Link></li>
              <li><Link href="/category/ethnic-wear" className="hover:text-white transition">Royal Silk Kurtas</Link></li>
              <li><Link href="/category/t-shirts" className="hover:text-white transition">Heavyweight Polos</Link></li>
              <li><Link href="/category/jeans" className="hover:text-white transition">Selvedge Denim</Link></li>
              <li><Link href="/category/perfumes" className="hover:text-white transition">Platinum Oud Perfumes</Link></li>
              <li><Link href="/category/shoes" className="hover:text-white transition">Italian Footwear</Link></li>
            </ul>
          </div>

          {/* VIP Concierge Newsletter & WhatsApp */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              VIP Concierge
            </h3>
            <p className="text-xs text-slate-400">
              Receive private notifications when new luxury drops and bespoke suits arrive in Padil.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-surface-card border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 btn-chrome text-black rounded-lg"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <a
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-900/80 text-xs font-bold rounded-xl transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Lounge Assistant
            </a>
          </div>

        </div>

        {/* Bottom copyright & badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MAN MODE – THE CLOTHING LOUNGE. All Rights Reserved. Padil, Mangaluru, Karnataka 575007.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/refund" className="hover:text-white transition">Refunds</Link>
            <span className="text-chrome font-semibold">Store Pickup Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
