"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const categoryInfo = CATEGORIES.find((c) => c.slug === slug) || {
    name: slug ? slug.replace("-", " ").toUpperCase() : "Category",
    description: "Luxury menswear collection.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=1200",
  };

  const categoryProducts = PRODUCTS.filter(
    (p) => p.categorySlug === slug || p.category.toLowerCase().includes(slug?.replace("-", " "))
  );

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Categories
        </Link>

        {/* Category Header Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 border border-white/15 bg-surface-card">
          <div className="relative z-10 space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATEGORY CATALOG</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              {categoryInfo.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              {categoryInfo.description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading font-bold text-lg text-white">
              Available Items ({categoryProducts.length > 0 ? categoryProducts.length : PRODUCTS.length})
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {(categoryProducts.length > 0 ? categoryProducts : PRODUCTS).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
