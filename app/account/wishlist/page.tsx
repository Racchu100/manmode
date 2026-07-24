"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, setIsCartOpen } = useStore();

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="border-b border-white/10 pb-5">
          <h1 className="font-heading font-extrabold text-3xl text-white">MY WISHLIST</h1>
          <p className="text-xs text-slate-400 mt-1">Saved items for your next Padil boutique visit.</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24 glass-panel rounded-3xl space-y-5">
            <Heart className="w-16 h-16 text-slate-500 mx-auto" />
            <h2 className="font-heading font-bold text-2xl text-white">No Wishlist Items Yet</h2>
            <p className="text-sm text-slate-400">Browse our catalog and save items with the ❤ button.</p>
            <Link href="/shop" className="inline-block px-8 py-4 btn-chrome text-xs font-bold text-black">
              EXPLORE BOUTIQUE
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition group">
                <Link href={`/product/${product.slug}`} className="block relative w-full aspect-[3/4] bg-slate-950">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-4 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-chrome">{product.category}</span>
                    <h3 className="font-heading font-bold text-sm text-white line-clamp-1 mt-0.5">{product.name}</h3>
                    <p className="font-extrabold text-base text-white mt-1">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex gap-2 pt-2 border-t border-white/10">
                    <button
                      onClick={() => {
                        const size = product.variants[0]?.size || "M";
                        const color = product.variants[0]?.color || "Default";
                        addToCart(product, size, color, 1);
                        setIsCartOpen(true);
                      }}
                      className="flex-1 py-2.5 btn-chrome text-[10px] font-bold text-black flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      RESERVE
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition"
                    >
                      <Heart className="w-4 h-4 fill-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
