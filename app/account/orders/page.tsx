"use client";

import React from "react";
import Link from "next/link";
import { Package, Calendar, Clock, ArrowRight, ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  CONFIRMED: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  READY_FOR_PICKUP: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  COLLECTED: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  CANCELLED: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function MyOrdersPage() {
  const { orders } = useStore();

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="border-b border-white/10 pb-5">
          <h1 className="font-heading font-extrabold text-3xl text-white">MY PICKUP PASSES</h1>
          <p className="text-xs text-slate-400 mt-1">All your store pickup reservations with digital passes.</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-3xl space-y-4">
            <Package className="w-14 h-14 text-slate-500 mx-auto" />
            <h2 className="font-heading font-bold text-xl text-white">No Reservations Yet</h2>
            <Link href="/shop" className="inline-block px-6 py-3 btn-chrome text-xs font-bold text-black">SHOP NOW</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="font-heading font-bold text-lg text-white">{order.orderNumber}</h2>
                    <p className="text-xs text-slate-400">{new Date(order.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${statusColors[order.status]}`}>
                    {order.status.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-chrome mb-1" />
                    <span className="text-slate-400 block">Pickup Date</span>
                    <span className="font-bold text-white">{order.pickupDate}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <Clock className="w-3.5 h-3.5 text-chrome mb-1" />
                    <span className="text-slate-400 block">Time Slot</span>
                    <span className="font-bold text-white">{order.pickupTimeSlot}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <ShoppingBag className="w-3.5 h-3.5 text-chrome mb-1" />
                    <span className="text-slate-400 block">Total Payable</span>
                    <span className="font-bold text-white">{formatPrice(order.totalAmount)}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-400">{order.items.length} item(s) reserved</p>
                  <Link href={`/order-success/${order.id}`} className="flex items-center gap-1.5 text-xs font-bold text-chrome hover:underline">
                    VIEW PICKUP PASS <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
