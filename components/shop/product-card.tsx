"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag, Star, Sparkles, Check } from "lucide-react";
import { Product } from "@/lib/data";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useStore();
  const inWishlist = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.variants[0]?.size || "M";
    const defaultColor = product.variants[0]?.color || "Default";
    addToCart(product, defaultSize, defaultColor, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="group glass-panel-interactive rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 relative">
      
      {/* Top Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.isNew && (
          <span className="text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-chrome/20 text-chrome border border-chrome/30 backdrop-blur-md">
            BESTSELLER
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-2 right-2 z-10 p-1.5 sm:p-2 rounded-full backdrop-blur-md border transition ${
          inWishlist
            ? "bg-red-500/20 border-red-500/50 text-red-400"
            : "bg-black/40 border-white/10 text-slate-300 hover:text-white hover:border-white/30"
        }`}
        aria-label="Wishlist"
      >
        <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${inWishlist ? "fill-red-400" : ""}`} />
      </button>

      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className="block relative w-full aspect-[3/4] overflow-hidden bg-slate-950">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        
        {/* Hover overlay with Quick View */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <button
            onClick={handleQuickView}
            className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold rounded-xl backdrop-blur-md flex items-center justify-center gap-2 transition"
          >
            <Eye className="w-4 h-4 text-chrome" />
            QUICK VIEW
          </button>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-slate-400 mb-0.5">
            <span className="uppercase tracking-wider font-semibold text-slate-400 truncate max-w-[70%]">{product.category}</span>
            <div className="flex items-center gap-0.5 text-amber-400 font-bold">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-heading font-bold text-[11px] sm:text-sm text-white line-clamp-1 group-hover:text-chrome transition">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Price & Action */}
        <div className="pt-1.5 sm:pt-2 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="font-heading font-extrabold text-[13px] sm:text-base text-white">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-[9px] sm:text-xs text-slate-500 line-through ml-1">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl btn-chrome hover:scale-105 transition shadow-chrome-glow"
            title="Reserve for Store Pickup"
          >
            <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
          </button>
        </div>

      </div>

    </div>
  );
};
