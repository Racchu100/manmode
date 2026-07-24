"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Star, ShoppingBag, Heart, Check, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist, setIsCartOpen } = useStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!quickViewProduct) return null;

  const initialSize = selectedSize || (quickViewProduct.variants[0]?.size || "Standard");
  const initialColor = selectedColor || (quickViewProduct.variants[0]?.color || "Default");
  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, initialSize, initialColor, 1);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-surface-card">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/20 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Gallery */}
          <div className="relative p-6 bg-black/40 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src={quickViewProduct.images[selectedImageIndex] || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Thumbnail Strip */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-14 h-16 rounded-xl overflow-hidden border-2 transition ${
                      selectedImageIndex === idx ? "border-white shadow-chrome-glow" : "border-white/10 opacity-60"
                    }`}
                  >
                    <Image src={img} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info & Options */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-chrome uppercase tracking-wider">
                  {quickViewProduct.category}
                </span>
                {quickViewProduct.isNew && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    NEW ARRIVAL
                  </span>
                )}
              </div>

              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                {quickViewProduct.name}
              </h2>

              {/* Rating & Stock */}
              <div className="flex items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{quickViewProduct.rating}</span>
                  <span className="text-slate-400">({quickViewProduct.reviewsCount} reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>In Stock at Padil Boutique ({quickViewProduct.stock} left)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-heading font-extrabold text-2xl text-white">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.compareAtPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    {formatPrice(quickViewProduct.compareAtPrice)}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Variant Selectors */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-xs font-bold text-slate-200 block mb-1.5">
                    Select Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          setSelectedSize(v.size);
                          setSelectedColor(v.color);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                          initialSize === v.size
                            ? "bg-white text-black border-white shadow-chrome-glow font-bold"
                            : "bg-surface border-white/10 text-slate-300 hover:border-white/30"
                        }`}
                      >
                        {v.size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pickup Note */}
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-chrome shrink-0" />
                <span>Store Pickup Only at Padil, Mangaluru. Reserve now & pay in-store.</span>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 btn-chrome text-xs font-bold flex items-center justify-center gap-2 shadow-chrome-glow"
                >
                  <ShoppingBag className="w-4 h-4 text-black" />
                  RESERVE FOR STORE PICKUP
                </button>
                
                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`p-3.5 rounded-xl border transition ${
                    inWishlist 
                      ? "bg-red-500/20 border-red-500/50 text-red-400" 
                      : "bg-surface border-white/10 text-slate-300 hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? "fill-red-400" : ""}`} />
                </button>
              </div>

              <Link
                href={`/product/${quickViewProduct.slug}`}
                onClick={() => setQuickViewProduct(null)}
                className="block text-center text-xs text-slate-400 hover:text-white transition pt-1 flex items-center justify-center gap-1"
              >
                View Full Product Specs & Materials
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
