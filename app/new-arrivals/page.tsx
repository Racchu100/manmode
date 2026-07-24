import React from "react";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Arrivals 2026 – MAN MODE THE CLOTHING LOUNGE | Padil Mangaluru",
  description: "Explore the latest men's luxury fashion arrivals at MAN MODE. Suits, shirts, ethnic kurtas, and fragrances for 2026.",
};

export default function NewArrivalsPage() {
  const newProducts = PRODUCTS.filter((p) => p.isNew);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="glass-panel p-10 rounded-3xl border border-white/15 bg-gradient-to-r from-surface via-surface-card to-surface text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-xs font-bold border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JUST ARRIVED AT PADIL LOUNGE</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">NEW ARRIVALS 2026</h1>
          <p className="text-sm text-slate-300">Fresh drops from our new season luxury menswear collection.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {(newProducts.length > 0 ? newProducts : PRODUCTS).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
