import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { COLLECTIONS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Collections – MAN MODE THE CLOTHING LOUNGE | Padil Mangaluru",
  description: "Explore exclusive luxury menswear collections by MAN MODE. From platinum chrome fashion to royal silk ethnic wear.",
};

export default function CollectionsPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center space-y-3 py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-xs font-bold border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED EDITORIAL COLLECTIONS</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
            MAN MODE COLLECTIONS 2026
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Thematic luxury menswear drops designed for the discerning gentleman — from chrome platinum to royal festive heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {COLLECTIONS.map((col, idx) => (
            <Link
              key={col.id}
              href={`/collection/${col.slug}`}
              className={`group relative rounded-3xl overflow-hidden glass-panel border border-white/10 flex flex-col justify-end ${
                idx === 0 ? "lg:row-span-2 min-h-[500px]" : "min-h-[250px]"
              }`}
            >
              <Image
                src={col.image}
                alt={col.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="relative z-10 p-6 sm:p-8 space-y-3">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-chrome backdrop-blur-md">
                  {col.itemCount} PIECES
                </span>
                <h2 className={`font-heading font-extrabold text-white group-hover:text-chrome transition ${
                  idx === 0 ? "text-3xl sm:text-4xl" : "text-xl"
                }`}>
                  {col.name}
                </h2>
                <p className="text-xs text-slate-300">{col.subtitle}</p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-chrome">
                  Explore Collection
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
