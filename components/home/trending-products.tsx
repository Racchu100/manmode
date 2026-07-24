"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "../shop/product-card";

export const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const filterTabs = [
    { label: "ALL TRENDING", key: "ALL" },
    { label: "SUITS & BLAZERS", key: "Suits & Blazers" },
    { label: "LUXURY SHIRTS", key: "Shirts" },
    { label: "ETHNIC WEAR", key: "Ethnic & Festive" },
    { label: "PERFUMES", key: "Perfumes & Fragrances" },
  ];

  const filteredProducts = activeTab === "ALL" 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-chrome text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>HANDPICKED FOR MAN MODE GENTLEMEN</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-wide">
              TRENDING LOUNGE ESSENTIALS
            </h2>
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition whitespace-nowrap border ${
                  activeTab === tab.key
                    ? "bg-white text-black border-white shadow-chrome-glow"
                    : "bg-surface-card border-white/10 text-slate-300 hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 btn-chrome-outline text-xs font-bold uppercase tracking-wider"
          >
            EXPLORE FULL 2026 CATALOG
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
