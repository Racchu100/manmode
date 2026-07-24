"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  CheckCircle2, MapPin, Calendar, Clock, 
  Store, ShieldCheck, Navigation, Download, Package,
  QrCode, Barcode
} from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice, formatDate } from "@/lib/utils";
import { STORE_INFO } from "@/lib/data";

export default function OrderSuccessPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const { orders } = useStore();

  const order = orders.find((o) => o.id === orderId || o.orderNumber === orderId) || orders[0];

  if (!order) {
    return (
      <div className="py-24 text-center min-h-screen bg-background">
        <h1 className="font-heading font-bold text-2xl text-white">Order Not Found</h1>
        <Link href="/" className="mt-4 inline-block px-6 py-3 btn-chrome text-xs font-bold text-black">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Success Header */}
        <div className="text-center space-y-4 py-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-slate-300/60 flex items-center justify-center shadow-chrome-glow animate-pulse-glow">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            RESERVATION CONFIRMED!
          </h1>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Your luxury items have been reserved at the MAN MODE Padil Boutique. 
            Please present this Pickup Pass when you arrive at our lounge.
          </p>
        </div>

        {/* === DIGITAL PICKUP PASS CARD === */}
        <div className="relative glass-panel rounded-3xl border-2 border-slate-300/60 overflow-hidden shadow-chrome-glow-lg" id="pickup-pass">
          
          {/* Chrome shimmer top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-80" />

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Pass Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex flex-col px-5 py-1.5 rounded-full border-2 border-slate-300/60 bg-gradient-to-b from-[#1E2024] via-[#0A0B0D] to-[#121318] w-fit mb-2">
                  <span className="font-heading font-extrabold text-lg tracking-widest text-chrome">MAN MODE</span>
                  <span className="text-[9px] font-accent font-bold tracking-widest text-slate-300 uppercase -mt-1">THE CLOTHING LOUNGE</span>
                </div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">DIGITAL PICKUP PASS</p>
              </div>

              <div className="text-right space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Order Number</p>
                <p className="font-heading font-extrabold text-lg text-white">{order.orderNumber}</p>
                <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                  order.status === 'COLLECTED' 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : order.status === 'READY_FOR_PICKUP'
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : order.status === 'CANCELLED'
                    ? 'bg-red-500/20 text-red-400 border-red-500/30'
                    : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                }`}>
                  {order.status.replace(/_/g, ' ')}
                </span>
              </div>
            </div>

            {/* QR Code + Barcode Visual */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 p-6 rounded-2xl border border-white/10">
              
              {/* QR Code Placeholder */}
              <div className="shrink-0">
                <div className="w-32 h-32 bg-white rounded-2xl p-3 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Crect x=%225%22 y=%225%22 width=%2220%22 height=%2220%22 fill=%22%23000%22/%3E%3Crect x=%2275%22 y=%225%22 width=%2220%22 height=%2220%22 fill=%22%23000%22/%3E%3Crect x=%225%22 y=%2275%22 width=%2220%22 height=%2220%22 fill=%22%23000%22/%3E%3Crect x=%228%22 y=%228%22 width=%2214%22 height=%2214%22 fill=%22white%22/%3E%3Crect x=%2278%22 y=%228%22 width=%2214%22 height=%2214%22 fill=%22white%22/%3E%3Crect x=%228%22 y=%2278%22 width=%2214%22 height=%2214%22 fill=%22white%22/%3E%3Crect x=%2230%22 y=%225%22 width=%2240%22 height=%228%22 fill=%22%23000%22/%3E%3Crect x=%2235%22 y=%2245%22 width=%2220%22 height=%228%22 fill=%22%23000%22/%3E%3Crect x=%2250%22 y=%2230%22 width=%228%22 height=%2235%22 fill=%22%23000%22/%3E%3Crect x=%2275%22 y=%2230%22 width=%228%22 height=%2218%22 fill=%22%23000%22/%3E%3Crect x=%2230%22 y=%2265%22 width=%2235%22 height=%228%22 fill=%22%23000%22/%3E%3Crect x=%2230%22 y=%2230%22 width=%228%22 height=%2220%22 fill=%22%23000%22/%3E%3C/svg%3E')] bg-cover"
                  />
                </div>
                <p className="text-center text-[10px] text-slate-400 mt-1.5 font-bold">SCAN QR CODE</p>
              </div>

              {/* Barcode Visual */}
              <div className="flex-1 text-center">
                <div className="bg-white rounded-xl p-3 mb-2 overflow-hidden">
                  <div className="flex items-end gap-[1px] h-12 justify-center">
                    {Array.from({ length: 50 }, (_, i) => (
                      <div
                        key={i}
                        style={{ height: `${Math.random() * 60 + 40}%`, width: `${i % 3 === 0 ? 3 : 1.5}px` }}
                        className="bg-black"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-mono font-bold text-slate-300 tracking-wider">{order.orderNumber}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Present at Padil Boutique Counter</p>
              </div>
            </div>

            {/* Pickup Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                <h3 className="font-bold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-chrome" />
                  Pickup Boutique
                </h3>
                <p className="text-white font-bold">{STORE_INFO.name}</p>
                <p className="text-slate-300">{STORE_INFO.address}</p>
                <p className="text-slate-400 text-[11px]">{STORE_INFO.hours}</p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                <h3 className="font-bold text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-chrome" />
                  Your Pickup Slot
                </h3>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-chrome" />
                  <span className="font-bold text-white">{order.pickupDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-chrome" />
                  <span className="font-bold text-white">{order.pickupTimeSlot}</span>
                </div>
              </div>
            </div>

            {/* Customer + Order Items */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider border-b border-white/10 pb-2">
                Reserved Items
              </h3>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs bg-white/5 p-3 rounded-xl border border-white/10">
                    <div>
                      <p className="font-bold text-white">{item.productName}</p>
                      <p className="text-slate-400">{item.size} • {item.color} • Qty {item.quantity}</p>
                    </div>
                    <span className="font-bold text-white">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between font-heading font-extrabold text-base text-white border-t border-white/10 pt-3">
                <span>TOTAL PAYABLE AT PICKUP:</span>
                <span>{formatPrice(order.totalAmount)}</span>
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                No online payment required. Payment collected in-person at Padil lounge.
              </p>
            </div>

          </div>

          {/* Chrome shimmer bottom bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-80" />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={`https://maps.google.com/?q=Padil+Mangaluru+Karnataka+575007`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 px-5 btn-chrome text-xs font-bold text-black shadow-chrome-glow"
          >
            <Navigation className="w-4 h-4 text-black" />
            GET DIRECTIONS TO LOUNGE
          </a>

          <Link
            href="/account/orders"
            className="flex items-center justify-center gap-2 py-3.5 px-5 btn-chrome-outline text-xs font-bold"
          >
            <Package className="w-4 h-4 text-chrome" />
            VIEW MY ORDERS
          </Link>

          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 py-3.5 px-5 btn-chrome-outline text-xs font-bold"
          >
            CONTINUE SHOPPING
          </Link>
        </div>

      </div>
    </div>
  );
}
