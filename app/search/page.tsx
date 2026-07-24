"use client";

import React, { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = query.length >= 2
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.material?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 text-center space-y-5">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">SEARCH LUXURY CATALOG</h1>
          <p className="text-sm text-slate-300">Search suits, shirts, kurtas, jeans, perfumes, shoes & more.</p>

          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search luxury menswear... e.g. Velvet Blazer, Kurta, Oud Perfume"
              className="w-full bg-surface border border-white/15 rounded-2xl pl-12 pr-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-chrome transition shadow-chrome-glow"
              autoFocus
            />
          </div>
        </div>

        {query.length >= 2 && (
          <div>
            <p className="text-xs text-slate-400 mb-5">
              Found <strong className="text-white">{results.length}</strong> result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>

            {results.length === 0 ? (
              <div className="text-center py-16 glass-panel rounded-3xl space-y-3">
                <SearchIcon className="w-12 h-12 text-slate-500 mx-auto" />
                <p className="text-sm font-bold text-white">No matches found</p>
                <p className="text-xs text-slate-400">Try searching for "Suit", "Shirt", "Perfume", or "Leather Jacket"</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}

        {query.length < 2 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {["Suit", "Shirt", "Kurta", "Jacket", "Perfume", "Jeans", "Shoes", "Polo"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="glass-panel p-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition font-semibold"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
