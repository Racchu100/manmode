"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  User, Package, Heart, ShoppingBag, LogOut, 
  MapPin, Calendar, Clock, CheckCircle2, Store, ArrowRight
} from "lucide-react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export default function AccountPage() {
  const { user, orders, wishlist, toggleWishlist, logout } = useStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'wishlist'>('overview');

  if (!user) {
    return (
      <div className="py-24 text-center min-h-screen bg-background space-y-5">
        <User className="w-16 h-16 text-slate-500 mx-auto" />
        <h1 className="font-heading font-extrabold text-2xl text-white">Login to Access Your Account</h1>
        <Link href="/login" className="inline-block px-8 py-4 btn-chrome text-xs font-bold text-black">
          LOGIN TO LOUNGE ACCOUNT
        </Link>
      </div>
    );
  }

  const userOrders = orders.slice(0, 10);

  const statusColors: Record<string, string> = {
    PENDING: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    CONFIRMED: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    READY_FOR_PICKUP: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    COLLECTED: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    CANCELLED: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Account Header */}
        <div className="glass-panel p-6 rounded-3xl border border-white/15 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 border-2 border-slate-300/50 flex items-center justify-center shadow-chrome-glow shrink-0">
            <User className="w-10 h-10 text-black" />
          </div>
          <div className="flex-1 text-center sm:text-left space-y-1">
            <h1 className="font-heading font-extrabold text-2xl text-white">{user.name}</h1>
            <p className="text-xs text-slate-400">{user.email}</p>
            <p className="text-xs text-slate-400">{user.phone}</p>
            <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-chrome/20 text-chrome border border-chrome/30">
              {user.role} MEMBER
            </span>
          </div>
          <div className="flex gap-3">
            {user.role === 'ADMIN' && (
              <Link href="/admin" className="px-4 py-2.5 btn-chrome text-xs font-bold text-black">
                Admin Dashboard
              </Link>
            )}
            <button
              onClick={logout}
              className="px-4 py-2.5 btn-chrome-outline text-xs font-bold flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Reservations", value: userOrders.length, icon: Package, color: "text-blue-400" },
            { label: "Ready for Pickup", value: userOrders.filter(o => o.status === 'READY_FOR_PICKUP').length, icon: Store, color: "text-purple-400" },
            { label: "Collected Items", value: userOrders.filter(o => o.status === 'COLLECTED').length, icon: CheckCircle2, color: "text-emerald-400" },
            { label: "Wishlist Items", value: wishlist.length, icon: Heart, color: "text-red-400" },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <p className="font-heading font-extrabold text-2xl text-white">{stat.value}</p>
              <p className="text-[11px] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-white/10 text-xs font-bold">
          {(['overview', 'orders', 'wishlist'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 border-b-2 uppercase tracking-wider transition ${
                activeTab === tab ? "border-white text-white" : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab === 'overview' ? 'My Profile' : tab === 'orders' ? 'Pickup Passes' : 'Wishlist'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4">
              <h2 className="font-heading font-bold text-sm text-white">PROFILE DETAILS</h2>
              <div className="space-y-3 text-xs">
                <div className="flex gap-3 p-3 bg-white/5 rounded-xl"><User className="w-4 h-4 text-chrome" /><div><span className="text-slate-400 block">Full Name</span><span className="font-bold text-white">{user.name}</span></div></div>
                <div className="flex gap-3 p-3 bg-white/5 rounded-xl"><MapPin className="w-4 h-4 text-chrome" /><div><span className="text-slate-400 block">Preferred Boutique</span><span className="font-bold text-white">Padil, Mangaluru 575007</span></div></div>
                <div className="flex gap-3 p-3 bg-white/5 rounded-xl"><Store className="w-4 h-4 text-chrome" /><div><span className="text-slate-400 block">Pickup Model</span><span className="font-bold text-white">Store Pickup Only</span></div></div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4">
              <h2 className="font-heading font-bold text-sm text-white">QUICK ACTIONS</h2>
              <div className="space-y-2">
                <Link href="/shop" className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition text-xs text-slate-300 hover:text-white">
                  <span className="flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-chrome" /> Browse Luxury Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/cart" className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition text-xs text-slate-300 hover:text-white">
                  <span className="flex items-center gap-2"><Package className="w-4 h-4 text-chrome" /> My Pickup Cart</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/store-pickup" className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition text-xs text-slate-300 hover:text-white">
                  <span className="flex items-center gap-2"><Store className="w-4 h-4 text-chrome" /> How Pickup Works</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-4">
            {userOrders.length === 0 ? (
              <div className="text-center py-16 glass-panel rounded-3xl space-y-4">
                <Package className="w-12 h-12 text-slate-500 mx-auto" />
                <p className="text-sm font-bold text-white">No reservations yet</p>
                <Link href="/shop" className="inline-block px-6 py-3 btn-chrome text-xs font-bold text-black">SHOP NOW</Link>
              </div>
            ) : (
              userOrders.map((order) => (
                <div key={order.id} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-base text-white">{order.orderNumber}</p>
                      <p className="text-xs text-slate-400">Reserved {new Date(order.createdAt).toLocaleDateString('en-IN')}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${statusColors[order.status]}`}>
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-2.5 bg-white/5 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 text-chrome mb-1" />
                      <span className="text-slate-400 block">Pickup Date</span>
                      <span className="font-bold text-white">{order.pickupDate}</span>
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-xl">
                      <Clock className="w-3.5 h-3.5 text-chrome mb-1" />
                      <span className="text-slate-400 block">Time Slot</span>
                      <span className="font-bold text-white">{order.pickupTimeSlot}</span>
                    </div>
                    <div className="p-2.5 bg-white/5 rounded-xl">
                      <ShoppingBag className="w-3.5 h-3.5 text-chrome mb-1" />
                      <span className="text-slate-400 block">Total</span>
                      <span className="font-bold text-white">{formatPrice(order.totalAmount)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <p className="text-[11px] text-slate-400">{order.items.length} item(s) reserved</p>
                    <Link
                      href={`/order-success/${order.id}`}
                      className="text-xs font-bold text-chrome hover:underline flex items-center gap-1"
                    >
                      View Pickup Pass <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {wishlist.length === 0 ? (
              <div className="col-span-full text-center py-16 glass-panel rounded-3xl space-y-4">
                <Heart className="w-12 h-12 text-slate-500 mx-auto" />
                <p className="text-sm font-bold text-white">Your wishlist is empty</p>
                <Link href="/shop" className="inline-block px-6 py-3 btn-chrome text-xs font-bold text-black">EXPLORE CATALOG</Link>
              </div>
            ) : (
              wishlist.map((product) => (
                <div key={product.id} className="glass-panel rounded-2xl overflow-hidden border border-white/10">
                  <div className="relative w-full aspect-square bg-slate-900">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="font-bold text-xs text-white line-clamp-1">{product.name}</p>
                    <p className="font-extrabold text-sm text-white">{formatPrice(product.price)}</p>
                    <div className="flex gap-2">
                      <Link href={`/product/${product.slug}`} className="flex-1 py-2 btn-chrome text-[10px] font-bold text-black text-center">
                        VIEW ITEM
                      </Link>
                      <button onClick={() => toggleWishlist(product)} className="p-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                        <Heart className="w-3.5 h-3.5 fill-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}
