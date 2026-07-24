"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, 
  Store, MapPin, Clock, ArrowLeft, Package 
} from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { PickupSlotPicker } from "@/components/cart/pickup-slot-picker";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const router = useRouter();

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
          <div>
            <h1 className="font-heading font-extrabold text-xl sm:text-3xl text-white">STORE PICKUP CART</h1>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Items reserved for in-store collection at Padil, Mangaluru</p>
          </div>
          <Link href="/shop" className="text-[10px] sm:text-xs text-slate-400 hover:text-white transition flex items-center gap-1">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Continue Shopping</span>
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12 sm:py-24 glass-panel rounded-2xl sm:rounded-3xl border border-white/10 space-y-4">
            <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 sm:w-10 sm:h-10 text-slate-500" />
            </div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">Your Pickup Cart is Empty</h2>
            <p className="text-xs sm:text-sm text-slate-400">Reserve luxury items to collect at our Padil boutique.</p>
            <Link href="/shop" className="inline-block px-6 py-3 sm:px-8 sm:py-4 btn-chrome text-xs font-bold text-black">
              EXPLORE LUXURY CATALOG
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 glass-panel rounded-2xl border border-white/10 text-xs flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-chrome shrink-0" />
                <p className="text-slate-200">
                  <strong className="text-white">No Online Payment Required.</strong>{" "}
                  Items are reserved. Pay in-person when collecting at Padil Lounge.
                </p>
              </div>

              {cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.size}-${idx}`}
                  className="flex gap-4 p-5 glass-panel rounded-2xl border border-white/10 hover:border-white/20 transition"
                >
                  <div className="relative w-28 h-36 rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                    <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[11px] font-bold text-chrome uppercase tracking-wider">
                          {item.product.category}
                        </span>
                        <h3 className="font-heading font-bold text-base text-white mt-0.5">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Size: <strong className="text-white">{item.size}</strong>
                          {" • "}
                          Color: <strong className="text-white">{item.color}</strong>
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                        className="p-2 text-slate-500 hover:text-red-400 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center gap-3 bg-surface px-3 py-2 rounded-xl border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-white w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-heading font-extrabold text-lg text-white">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary + Pickup Slot */}
            <div className="lg:col-span-5 space-y-5">
              <PickupSlotPicker />

              <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4">
                <h2 className="font-heading font-bold text-sm text-white border-b border-white/10 pb-3">
                  RESERVATION SUMMARY
                </h2>
                
                <div className="space-y-2 text-xs text-slate-300">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="line-clamp-1 pr-2">{item.product.name} × {item.quantity}</span>
                      <span className="font-bold text-white">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between font-heading font-extrabold text-lg text-white">
                  <span>Reservation Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                
                <p className="text-[11px] text-slate-400">
                  The above amount is payable in-person at the Padil boutique upon collection.
                </p>

                <Link
                  href="/checkout"
                  className="w-full py-4 btn-chrome text-xs font-bold flex items-center justify-center gap-2 text-black shadow-chrome-glow"
                >
                  <Package className="w-4 h-4 text-black" />
                  CONFIRM PICKUP RESERVATION
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-400 text-center">
                  <div className="p-2 bg-white/5 rounded-xl">
                    <Store className="w-4 h-4 text-chrome mx-auto mb-1" />
                    <span>Padil, Mangaluru</span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-chrome mx-auto mb-1" />
                    <span>No Online Payment</span>
                  </div>
                  <div className="p-2 bg-white/5 rounded-xl">
                    <Clock className="w-4 h-4 text-chrome mx-auto mb-1" />
                    <span>48hr Hold</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
