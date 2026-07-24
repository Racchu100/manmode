"use client";

import React, { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";
import { Filter, SlidersHorizontal, Search, Sparkles } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(30000);

  // Filter products logic
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "ALL" || p.categorySlug === selectedCategory || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.isFeatured ? 1 : -1;
  });

  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
        
        {/* Header */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-white/15 bg-gradient-to-r from-surface via-surface-card to-surface space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-[10px] sm:text-xs font-bold border border-white/20">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>2026 MAN MODE BOUTIQUE CATALOG</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-5xl text-white">
            LUXURY MENSWEAR COLLECTION
          </h1>
          <p className="text-xs text-slate-300 max-w-xl">
            Explore 25+ categories of tailored Italian blazers, Egyptian cotton shirts, raw silk kurtas, selvedge denim, and platinum oud perfumes.
          </p>
        </div>

        {/* Filters & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-8">
          
          {/* Sidebar Filter Controls */}
          <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 space-y-4 sm:space-y-6 h-fit">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-chrome" />
                FILTER CATALOG
              </h2>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                  setMaxPrice(30000);
                  setSortBy("featured");
                }}
                className="text-[11px] text-chrome hover:underline font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Search Input */}
            <div>
              <label className="text-xs font-bold text-slate-200 block mb-2">Search Items</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Velvet Blazer, Silk Kurta..."
                  className="w-full bg-surface-card border border-white/15 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-chrome"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            {/* Category Selectors */}
            <div>
              <label className="text-xs font-bold text-slate-200 block mb-2">Categories</label>
              <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory("ALL")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition ${
                    selectedCategory === "ALL"
                      ? "bg-white text-black font-bold"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  All Categories ({PRODUCTS.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center justify-between ${
                      selectedCategory === cat.slug
                        ? "bg-white text-black font-bold"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">({cat.itemCount})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                <span>Max Price:</span>
                <span className="text-chrome">₹{maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={30000}
                step={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-white bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Sorting Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel px-6 py-4 rounded-2xl border border-white/10 text-xs">
              <span className="text-slate-300 font-medium">
                Showing <strong className="text-white">{filtered.length}</strong> luxury pieces
              </span>

              <div className="flex items-center gap-2">
                <span className="text-slate-400">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-surface-card border border-white/15 text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-chrome"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 glass-panel rounded-3xl space-y-3">
                <p className="text-sm font-bold text-white">No luxury pieces match your filter parameters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("ALL");
                    setSearchQuery("");
                    setMaxPrice(30000);
                  }}
                  className="px-4 py-2 btn-chrome text-xs font-bold"
                >
                  CLEAR FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
