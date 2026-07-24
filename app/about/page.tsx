import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Crown, Sparkles, Users, ArrowRight } from "lucide-react";
import { STORE_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MAN MODE – The Clothing Lounge | Padil, Mangaluru",
  description: "The story behind Mangaluru's most exclusive luxury menswear boutique. MAN MODE – The Clothing Lounge, Padil, Mangaluru.",
};

export default function AboutPage() {
  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        
        {/* Hero Text */}
        <div className="text-center space-y-3 sm:space-y-5 max-w-3xl mx-auto py-4 sm:py-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-chrome text-[10px] sm:text-xs font-bold border border-white/20">
            <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>SINCE 2020 • PADIL, MANGALURU</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-6xl text-white leading-tight">
            THE STORY OF <span className="text-chrome">MAN MODE</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
            Born from a singular vision — to bring the finest international luxury menswear experience to the heart of coastal Karnataka.
          </p>
        </div>

        {/* Story Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="relative w-full h-52 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/15">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
              alt="MAN MODE Luxury Lounge Interior"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-5">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              OUR PHILOSOPHY
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              MAN MODE was conceived as an antidote to fast fashion. We believe that every garment a man wears is a statement — about his taste, his ambition, and his identity. Our boutique in Padil was designed as a sanctuary for the discerning gentleman.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every piece in our curated collection is selected for its exceptional craftsmanship — from Italian velvet tuxedos with hand-sewn chrome buttons, to raw silk kurtas with hand-embroidered zari detailing, to Japanese selvedge denim with silver-plated hardware.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              {[
                { label: "Products", value: "200+" },
                { label: "Categories", value: "25+" },
                { label: "Happy Clients", value: "5000+" },
              ].map((s) => (
                <div key={s.label} className="p-3 glass-panel rounded-xl border border-white/10">
                  <p className="font-heading font-extrabold text-xl text-chrome">{s.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Man Mode */}
        <div className="space-y-6">
          <h2 className="font-heading font-extrabold text-2xl text-white text-center">WHY MAN MODE IS DIFFERENT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Crown, title: "Ultra-Luxury Curation", desc: "Every product is handpicked for exceptional quality. No mass-produced items." },
              { icon: Sparkles, title: "Chrome Metallic Aesthetic", desc: "Our brand identity — premium dark luxury with liquid chrome accents." },
              { icon: Users, title: "Exclusive Lounge Experience", desc: "Private fitting suite, dedicated stylists, and personalized consultations at Padil." },
              { icon: MapPin, title: "Padil Boutique Location", desc: "Conveniently located in Padil, Mangaluru, easily accessible from across coastal Karnataka." },
              { icon: Crown, title: "Store Pickup Model", desc: "Reserve online with zero payment. Try, approve, and pay in-store. Total freedom." },
              { icon: Sparkles, title: "Premium Materials Only", desc: "Italian velvet, Egyptian Giza cotton, raw silk, Japanese selvedge — the finest fabrics." },
            ].map((f) => (
              <div key={f.title} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3 hover:border-white/25 transition">
                <div className="p-2.5 w-fit rounded-xl bg-white/10 border border-white/15">
                  <f.icon className="w-5 h-5 text-chrome" />
                </div>
                <h3 className="font-heading font-bold text-sm text-white">{f.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className="glass-panel p-10 rounded-3xl border-2 border-slate-300/40 text-center space-y-5 shadow-chrome-glow">
          <h2 className="font-heading font-extrabold text-3xl text-white">VISIT THE LOUNGE IN PADIL</h2>
          <p className="text-sm text-slate-300">
            {STORE_INFO.address} • {STORE_INFO.hours}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/shop" className="px-8 py-4 btn-chrome text-xs font-bold text-black shadow-chrome-glow flex items-center gap-2">
              RESERVE ITEMS ONLINE
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-4 btn-chrome-outline text-xs font-bold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-chrome" />
              GET DIRECTIONS
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
