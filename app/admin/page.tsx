"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, Package, Users, ShoppingBag, BarChart3, 
  Settings, Store, ChevronRight, TrendingUp, TrendingDown,
  CheckCircle2, Clock, AlertCircle, XCircle, ChevronDown
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend
} from "recharts";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { PRODUCTS } from "@/lib/data";

const salesData = [
  { month: "Jan", reservations: 34, value: 342000 },
  { month: "Feb", reservations: 48, value: 485000 },
  { month: "Mar", reservations: 52, value: 520000 },
  { month: "Apr", reservations: 61, value: 630000 },
  { month: "May", reservations: 57, value: 590000 },
  { month: "Jun", reservations: 72, value: 745000 },
  { month: "Jul", reservations: 84, value: 893000 },
];

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  CONFIRMED: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  READY_FOR_PICKUP: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  COLLECTED: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  CANCELLED: "bg-red-500/20 text-red-400 border-red-500/30",
};

type OrderStatus = 'PENDING' | 'CONFIRMED' | 'READY_FOR_PICKUP' | 'COLLECTED' | 'CANCELLED';

export default function AdminDashboard() {
  const { orders, updateOrderStatus, user } = useStore();
  const [activeSection, setActiveSection] = useState<'dashboard' | 'orders' | 'products' | 'customers'>('dashboard');

  if (!user || user.role !== 'ADMIN') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-center px-4 space-y-5 flex-col">
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto" />
        <h1 className="font-heading font-bold text-2xl text-white">Admin Access Required</h1>
        <p className="text-sm text-slate-400">Please login with admin credentials to access the dashboard.</p>
        <Link href="/login" className="px-8 py-4 btn-chrome text-xs font-bold text-black">LOGIN AS ADMIN</Link>
      </div>
    );
  }

  const totalValue = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const pendingOrders = orders.filter(o => o.status === 'PENDING').length;
  const readyOrders = orders.filter(o => o.status === 'READY_FOR_PICKUP').length;
  const collectedOrders = orders.filter(o => o.status === 'COLLECTED').length;

  const navItems = [
    { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { key: 'orders', icon: Package, label: 'Pickup Orders' },
    { key: 'products', icon: ShoppingBag, label: 'Products' },
    { key: 'customers', icon: Users, label: 'Customers' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Admin Header */}
        <div className="glass-panel p-5 rounded-3xl border border-white/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/20">
              <LayoutDashboard className="w-5 h-5 text-chrome" />
            </div>
            <div>
              <h1 className="font-heading font-extrabold text-xl text-white">LOUNGE ADMIN PANEL</h1>
              <p className="text-xs text-slate-400">MAN MODE • Padil, Mangaluru • {user.name}</p>
            </div>
          </div>
          <Link href="/" className="text-xs text-slate-400 hover:text-white transition">
            ← Back to Storefront
          </Link>
        </div>

        {/* Section Nav Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap border transition ${
                activeSection === item.key
                  ? "bg-white text-black border-white shadow-chrome-glow"
                  : "bg-surface-card border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* =================== DASHBOARD =================== */}
        {activeSection === 'dashboard' && (
          <div className="space-y-8">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: "Total Reservations", value: orders.length, icon: Package, delta: "+12%", up: true, color: "text-blue-400" },
                { label: "Pending Pickups", value: pendingOrders, icon: Clock, delta: `${pendingOrders} awaiting`, up: false, color: "text-amber-400" },
                { label: "Ready for Pickup", value: readyOrders, icon: Store, delta: "Notify customers", up: true, color: "text-purple-400" },
                { label: "Total Revenue Reserved", value: formatPrice(totalValue), icon: TrendingUp, delta: "+18% this month", up: true, color: "text-emerald-400" },
              ].map((kpi) => (
                <div key={kpi.label} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      kpi.up ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {kpi.delta}
                    </span>
                  </div>
                  <p className="font-heading font-extrabold text-xl sm:text-2xl text-white">{kpi.value}</p>
                  <p className="text-[11px] text-slate-400">{kpi.label}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Reservations Bar Chart */}
              <div className="glass-panel p-6 rounded-3xl border border-white/15">
                <h2 className="font-heading font-bold text-sm text-white mb-5">Monthly Reservations (2026)</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={11} />
                    <YAxis stroke="#64748B" fontSize={11} />
                    <Tooltip
                      contentStyle={{ background: "#0A0A0C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "11px" }}
                    />
                    <Bar dataKey="reservations" fill="#CBD5E1" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Line Chart */}
              <div className="glass-panel p-6 rounded-3xl border border-white/15">
                <h2 className="font-heading font-bold text-sm text-white mb-5">Monthly Revenue Value (₹)</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={11} />
                    <YAxis stroke="#64748B" fontSize={11} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                    <Tooltip
                      contentStyle={{ background: "#0A0A0C", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "11px" }}
                      formatter={(v: any) => [`₹${Number(v).toLocaleString('en-IN')}`, "Revenue"]}
                    />
                    <Line type="monotone" dataKey="value" stroke="#E2E8F0" strokeWidth={2} dot={{ fill: "#fff", r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Orders Quick View */}
            <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-heading font-bold text-sm text-white">RECENT PICKUP ORDERS</h2>
                <button onClick={() => setActiveSection('orders')} className="text-xs text-chrome hover:underline">
                  View All Orders →
                </button>
              </div>
              <div className="space-y-3">
                {orders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition text-xs border border-white/5">
                    <div>
                      <p className="font-bold text-white">{order.orderNumber}</p>
                      <p className="text-slate-400">{order.customerName} • {order.pickupDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-white">{formatPrice(order.totalAmount)}</span>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${statusColors[order.status]}`}>
                        {order.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* =================== ORDERS MANAGEMENT =================== */}
        {activeSection === 'orders' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-xl text-white">ALL PICKUP ORDERS</h2>
              <span className="text-xs text-slate-400">{orders.length} total reservations</span>
            </div>

            <div className="space-y-3">
              {orders.map((order) => (
                <div key={order.id} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">{order.orderNumber}</h3>
                      <p className="text-xs text-slate-400">{order.customerName} • {order.customerPhone}</p>
                      <p className="text-xs text-slate-400">Pickup: {order.pickupDate} • {order.pickupTimeSlot}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <span className="font-bold text-white text-sm">{formatPrice(order.totalAmount)}</span>
                      
                      {/* Status Dropdown */}
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-xl border cursor-pointer focus:outline-none ${statusColors[order.status]} bg-transparent`}
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="CONFIRMED">CONFIRMED</option>
                        <option value="READY_FOR_PICKUP">READY FOR PICKUP</option>
                        <option value="COLLECTED">COLLECTED</option>
                        <option value="CANCELLED">CANCELLED</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>{order.items.length} item(s) reserved</span>
                    <Link href={`/order-success/${order.id}`} className="text-chrome hover:underline font-semibold">
                      View Pickup Pass →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =================== PRODUCTS MANAGEMENT =================== */}
        {activeSection === 'products' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-xl text-white">PRODUCT CATALOG MANAGER</h2>
              <button className="px-4 py-2.5 btn-chrome text-xs font-bold text-black">+ ADD PRODUCT</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider">
                    <th className="py-3 pr-4">Product</th>
                    <th className="py-3 pr-4">Category</th>
                    <th className="py-3 pr-4">SKU</th>
                    <th className="py-3 pr-4">Price</th>
                    <th className="py-3 pr-4">Stock</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {PRODUCTS.map((product) => (
                    <tr key={product.id} className="hover:bg-white/5 transition">
                      <td className="py-4 pr-4 font-bold text-white line-clamp-1 max-w-[200px]">{product.name}</td>
                      <td className="py-4 pr-4 text-slate-300">{product.category}</td>
                      <td className="py-4 pr-4 font-mono text-slate-400">{product.sku}</td>
                      <td className="py-4 pr-4 font-bold text-white">{formatPrice(product.price)}</td>
                      <td className="py-4 pr-4">
                        <span className={`font-bold px-2 py-0.5 rounded-full ${product.stock < 5 ? 'text-red-400 bg-red-500/10' : 'text-emerald-400 bg-emerald-500/10'}`}>
                          {product.stock} left
                        </span>
                      </td>
                      <td className="py-4 flex gap-1.5">
                        {product.isNew && <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold">NEW</span>}
                        {product.isBestSeller && <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold">BESTSELLER</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =================== CUSTOMERS =================== */}
        {activeSection === 'customers' && (
          <div className="space-y-5">
            <h2 className="font-heading font-bold text-xl text-white">CUSTOMER DIRECTORY</h2>
            <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-3">
              {Array.from(new Set(orders.map(o => o.customerEmail))).map((email) => {
                const custOrders = orders.filter(o => o.customerEmail === email);
                const lastOrder = custOrders[0];
                return (
                  <div key={email} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 text-xs">
                    <div>
                      <p className="font-bold text-white">{lastOrder.customerName}</p>
                      <p className="text-slate-400">{lastOrder.customerEmail}</p>
                      <p className="text-slate-400">{lastOrder.customerPhone}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">{custOrders.length} Reservations</p>
                      <p className="text-slate-400">{formatPrice(custOrders.reduce((s, o) => s + o.totalAmount, 0))} total</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
