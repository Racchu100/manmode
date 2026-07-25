"use client";

import React, { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { ProductCard } from "@/components/shop/product-card";
import { SlidersHorizontal, Search, Sparkles, X, ChevronDown } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const resetFilters = () => {
    setSelectedCategory("ALL");
    setSearchQuery("");
    setMaxPrice(30000);
    setSortBy("featured");
  };

  const activeFilterCount = [
    selectedCategory !== "ALL",
    searchQuery !== "",
    maxPrice !== 30000,
    sortBy !== "featured",
  ].filter(Boolean).length;

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

  // The filter panel contents (shared between sidebar & bottom sheet)
  const FilterContents = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <h2 className="font-heading font-bold text-sm text-white flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-chrome" />
          FILTER CATALOG
        </h2>
        <button
          onClick={resetFilters}
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
        <div className="space-y-1 max-h-52 overflow-y-auto pr-1">
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

      {/* Sort (inside filter on mobile) */}
      <div>
        <label className="text-xs font-bold text-slate-200 block mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-surface-card border border-white/15 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-chrome"
        >
          <option value="featured">Featured First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Apply button on mobile */}
      <button
        onClick={() => setIsFilterOpen(false)}
        className="lg:hidden w-full py-3 btn-chrome text-xs font-bold text-black rounded-xl mt-2"
      >
        SHOW {filtered.length} RESULTS
      </button>
    </div>
  );

  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">

        {/* Header */}
        <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-white/15 bg-gradient-to-r from-surface via-surface-card to-surface space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-[10px] sm:text-xs font-bold border border-white/20">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>2026 MAN MODE BOUTIQUE CATALOG</span>
          </div>
          <h1 className="font-heading font-extrabold text-xl sm:text-5xl text-white">
            LUXURY MENSWEAR COLLECTION
          </h1>
          <p className="text-xs text-slate-300 max-w-xl">
            Explore 25+ categories of tailored Italian blazers, Egyptian cotton shirts, raw silk kurtas, selvedge denim, and platinum oud perfumes.
          </p>
        </div>

        {/* Mobile: Filter + Sort bar */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Filter Toggle Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 glass-panel border border-white/15 rounded-xl text-xs font-bold text-white hover:border-white/30 transition relative"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-chrome" />
            Filter
            {activeFilterCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-white text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort dropdown inline on mobile */}
          <div className="relative flex-1">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-surface-card border border-white/15 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-chrome appearance-none pr-7"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Result count */}
          <span className="text-[10px] text-slate-400 whitespace-nowrap">
            {filtered.length} items
          </span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 sm:gap-8">

          {/* Desktop Sidebar — always visible on lg+ */}
          <div className="hidden lg:block glass-panel p-6 rounded-3xl border border-white/10 h-fit">
            <FilterContents />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">

            {/* Desktop sort bar */}
            <div className="hidden lg:flex items-center justify-between gap-4 glass-panel px-6 py-4 rounded-2xl border border-white/10 text-xs">
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
              <div className="text-center py-16 glass-panel rounded-2xl space-y-3">
                <p className="text-sm font-bold text-white">No luxury pieces match your filters.</p>
                <button onClick={resetFilters} className="px-4 py-2 btn-chrome text-xs font-bold">
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

      {/* Mobile Filter Bottom Sheet */}
      {isFilterOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Sheet */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D10] border-t border-white/15 rounded-t-3xl px-4 pt-4 pb-8 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            {/* Drag handle */}
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />

            {/* Close button */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <FilterContents />
          </div>
        </>
      )}
    </div>
  );
}
