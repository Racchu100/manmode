"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Store, ShieldCheck, Calendar, Clock, MapPin, 
  User, Phone, Mail, StickyNote, ArrowRight, Check, Package
} from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { cart, user, selectedPickupDate, selectedPickupTimeSlot, createOrder } = useStore();
  const router = useRouter();

  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill in all required contact fields.");
      return;
    }
    setIsSubmitting(true);
    const order = createOrder(form);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/order-success/${order.id}`);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="py-24 text-center bg-background min-h-screen">
        <div className="max-w-lg mx-auto space-y-5 px-4">
          <Package className="w-16 h-16 text-slate-500 mx-auto" />
          <h1 className="font-heading font-extrabold text-2xl text-white">Your Cart is Empty</h1>
          <p className="text-sm text-slate-400">Add luxury items to your cart before completing a reservation.</p>
          <Link href="/shop" className="inline-block px-8 py-4 btn-chrome text-xs font-bold text-black">
            BROWSE BOUTIQUE CATALOG
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-5 sm:space-y-8">

        {/* Page Title */}
        <div className="border-b border-white/10 pb-4 sm:pb-6">
          <h1 className="font-heading font-extrabold text-xl sm:text-3xl text-white">PICKUP RESERVATION</h1>
          <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
            Complete your contact details to reserve items for Padil Lounge pickup. No online payment required.
          </p>
        </div>

        {/* Store Pickup Only Banner */}
        <div className="glass-panel p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-300/20 sm:border-2 sm:border-slate-300/30 flex items-center gap-3 sm:gap-4 shadow-chrome-glow">
          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 shrink-0">
            <Store className="w-4 h-4 sm:w-6 sm:h-6 text-chrome" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-xs sm:text-base text-white">STORE PICKUP ONLY – ZERO ONLINE PAYMENT</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              This is a reservation system. You will try, approve, and pay for your items in-person at our Padil boutique.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Form Fields */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Contact Information */}
              <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-5">
                <h2 className="font-heading font-bold text-sm text-white border-b border-white/10 pb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-chrome" />
                  CUSTOMER CONTACT DETAILS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Vikram Hegde"
                      className="w-full bg-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-chrome" />
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-chrome" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition"
                  />
                  <p className="text-[11px] text-slate-500">
                    Your digital Pickup Pass with QR Code will be sent to this email.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <StickyNote className="w-3.5 h-3.5 text-chrome" />
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. Please gift-wrap the blazer, or I need a fitting appointment..."
                    className="w-full bg-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition resize-none"
                  />
                </div>
              </div>

              {/* Selected Pickup Schedule Summary */}
              <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4">
                <h2 className="font-heading font-bold text-sm text-white border-b border-white/10 pb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-chrome" />
                  PICKUP SCHEDULE (SELECTED)
                </h2>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
                    <span className="text-slate-400 block">Pickup Date</span>
                    <span className="font-bold text-white">{selectedPickupDate}</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
                    <span className="text-slate-400 block">Time Window</span>
                    <span className="font-bold text-white">{selectedPickupTimeSlot}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-chrome shrink-0" />
                  <span><strong className="text-white">Boutique Location:</strong> Padil, Mangaluru, Karnataka 575007 • Open 10:00 AM – 9:30 PM</span>
                </div>

                <Link href="/cart" className="text-xs text-chrome hover:underline font-semibold">
                  ← Change pickup date & time slot
                </Link>
              </div>

            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5 space-y-5">
              <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-5">
                <h2 className="font-heading font-bold text-sm text-white border-b border-white/10 pb-3">
                  ORDER SUMMARY
                </h2>

                <div className="space-y-3">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs">
                      <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                        <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-white line-clamp-1">{item.product.name}</p>
                        <p className="text-slate-400">{item.size} • {item.color} • Qty {item.quantity}</p>
                      </div>
                      <span className="font-bold text-white">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & Delivery</span>
                    <span className="text-emerald-400 font-bold">NONE – Store Pickup</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Online Payment</span>
                    <span className="text-emerald-400 font-bold">₹0.00 – Pay In-Store</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-white font-heading font-extrabold text-xl">
                  <span>Total Payable at Pickup:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <button
                  type="submit"
                  form="checkout-form"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full py-4 btn-chrome text-xs font-bold flex items-center justify-center gap-2 text-black shadow-chrome-glow disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      GENERATING PICKUP PASS...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      CONFIRM & GET PICKUP PASS
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  By confirming, you agree to collect your reserved items within 48 hours of your selected pickup window.
                </p>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
