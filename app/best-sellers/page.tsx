import React from "react";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";
import { Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sellers – MAN MODE THE CLOTHING LOUNGE | Padil Mangaluru",
  description: "Shop Mangaluru's most loved luxury men's fashion pieces. Best selling suits, shirts, fragrances, and ethnic wear at MAN MODE.",
};

export default function BestSellersPage() {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="glass-panel p-10 rounded-3xl border border-white/15 bg-gradient-to-r from-surface via-surface-card to-surface text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chrome/20 text-chrome text-xs font-bold border border-chrome/30">
            <Award className="w-3.5 h-3.5" />
            <span>MOST LOVED BY MANGALURU GENTLEMEN</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">BEST SELLERS</h1>
          <p className="text-sm text-slate-300">Our most popular luxury menswear — tried, trusted and collected at Padil Lounge.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {(bestSellers.length > 0 ? bestSellers : PRODUCTS).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
