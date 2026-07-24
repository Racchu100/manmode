"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Store } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { PickupSlotPicker } from "./pickup-slot-picker";

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useStore();

  if (!isCartOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-white/10 text-slate-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-surface-card">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/10 border border-white/20">
                <Store className="w-5 h-5 text-chrome" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-base text-white tracking-wide">
                  STORE PICKUP CART
                </h2>
                <p className="text-[11px] text-slate-400">Padil, Mangaluru Lounge • Reserve Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            
            {/* Banner */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-surface-card to-surface border border-white/15 text-xs flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-chrome shrink-0" />
              <p className="text-slate-300">
                <span className="font-bold text-white block">No Online Payment Required</span>
                Reserve items now, inspect & pay at the boutique upon pickup.
              </p>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">Your Pickup Cart is Empty</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Explore our luxury menswear catalog and reserve items for in-store pickup at Padil.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block px-6 py-3 btn-chrome text-xs font-bold"
                >
                  EXPLORE BOUTIQUE
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  {cart.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                      className="flex gap-3 p-3 glass-panel rounded-2xl border border-white/10 hover:border-white/20 transition"
                    >
                      <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-white line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                              className="text-slate-500 hover:text-red-400 transition p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Size: <span className="text-white font-semibold">{item.size}</span> • Color: <span className="text-white font-semibold">{item.color}</span>
                          </p>
                          <p className="text-xs font-bold text-chrome mt-1">
                            {formatPrice(item.product.price)}
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <div className="flex items-center gap-2 bg-surface-card px-2 py-1 rounded-xl border border-white/10">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                              className="text-slate-400 hover:text-white transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-white w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                              className="text-slate-400 hover:text-white transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-xs font-extrabold text-white">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pickup Slot Scheduler */}
                <PickupSlotPicker />
              </>
            )}

          </div>

          {/* Footer Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-white/10 bg-surface-card space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-slate-300">Total Pickup Reservation:</span>
                <span className="text-lg text-white font-heading">{formatPrice(totalAmount)}</span>
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                Payment collected in-person upon pickup at Padil Lounge.
              </p>

              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3.5 btn-chrome text-xs font-bold flex items-center justify-center gap-2 text-black shadow-chrome-glow"
              >
                PROCEED TO PICKUP RESERVATION
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
