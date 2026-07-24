"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown,
  LayoutDashboard,
  LogOut
} from "lucide-react";
import { useStore } from "@/lib/store";

export const Navbar = () => {
  const pathname = usePathname();
  const { cart, wishlist, setIsCartOpen, user, loginDemo, logout } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Collections", href: "/collections" },
    { name: "About Lounge", href: "/about" },
    { name: "Store Pickup", href: "/store-pickup" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 sm:p-1.5 text-slate-300 hover:text-white transition rounded-md bg-surface-card border border-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* Brand Logo — compact oval pill */}
          <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex flex-col items-center justify-center px-2.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full border border-slate-300/50 sm:border-2 bg-gradient-to-b from-[#1E2024] via-[#0A0B0D] to-[#121318] shadow-[0_0_10px_rgba(192,192,192,0.15)] sm:shadow-[0_0_16px_rgba(192,192,192,0.2)] group-hover:border-white transition-all duration-300">
              <span className="font-heading font-extrabold text-[11px] sm:text-sm tracking-widest text-chrome leading-tight">
                MAN MODE
              </span>
              <span className="text-[6px] sm:text-[8px] font-accent font-semibold tracking-[0.2em] text-slate-400 uppercase group-hover:text-white transition leading-tight">
                THE CLOTHING LOUNGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all rounded-xl ${
                    isActive
                      ? "text-white bg-white/10 border border-white/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons — right side */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Search */}
            <Link
              href="/search"
              className="p-1.5 sm:p-2 text-slate-300 hover:text-white bg-surface-card border border-white/10 rounded-md sm:rounded-lg transition"
              title="Search"
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>

            {/* Wishlist */}
            <Link
              href="/account/wishlist"
              className="relative p-1.5 sm:p-2 text-slate-300 hover:text-white bg-surface-card border border-white/10 rounded-md sm:rounded-lg transition"
              title="Wishlist"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white text-black text-[7px] sm:text-[8px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 btn-chrome text-[10px] sm:text-xs font-bold transition shadow-chrome-glow"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
              <span className="hidden sm:inline text-black text-xs">CART</span>
              {totalCartCount > 0 && (
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-black text-white text-[8px] sm:text-[9px] font-bold rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-0.5 p-1.5 sm:p-2 text-slate-300 hover:text-white bg-surface-card border border-white/10 rounded-md sm:rounded-lg transition"
              >
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-1 w-48 sm:w-56 glass-panel rounded-xl sm:rounded-2xl p-1.5 sm:p-2 z-50 shadow-2xl">
                  {user ? (
                    <>
                      <div className="px-2 py-1.5 border-b border-white/10 mb-1">
                        <p className="text-[11px] font-bold text-white truncate">{user.name}</p>
                        <p className="text-[9px] text-slate-400 truncate">{user.email}</p>
                        <span className="inline-block mt-0.5 text-[8px] px-1.5 py-0.5 rounded-full bg-chrome/20 text-chrome font-bold border border-chrome/30">
                          {user.role}
                        </span>
                      </div>

                      <Link href="/account" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition">
                        <User className="w-3 h-3" /> My Account
                      </Link>
                      <Link href="/account/orders" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition">
                        <ShoppingBag className="w-3 h-3" /> My Pickup Passes
                      </Link>
                      {user.role === 'ADMIN' && (
                        <Link href="/admin" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2 px-2 py-1.5 text-[11px] text-chrome font-bold hover:bg-white/10 rounded-lg transition">
                          <LayoutDashboard className="w-3 h-3 text-chrome" /> Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => { logout(); setIsUserMenuOpen(false); }}
                        className="w-full flex items-center gap-2 px-2 py-1.5 text-[11px] text-red-400 hover:bg-red-500/10 rounded-lg transition mt-0.5"
                      >
                        <LogOut className="w-3 h-3" /> Logout
                      </button>
                    </>
                  ) : (
                    <div className="space-y-1 p-0.5">
                      <Link href="/login" onClick={() => setIsUserMenuOpen(false)} className="block px-2 py-1.5 text-[11px] font-bold text-center text-black bg-white rounded-lg hover:bg-slate-200 transition">
                        Login
                      </Link>
                      <button
                        onClick={() => { loginDemo('ADMIN'); setIsUserMenuOpen(false); }}
                        className="w-full text-left px-2 py-1.5 text-[10px] text-chrome hover:bg-white/10 rounded-lg transition flex items-center justify-between"
                      >
                        <span>Demo Admin Login</span>
                        <Sparkles className="w-2.5 h-2.5 text-chrome" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-2 pt-1.5 pb-3 space-y-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-[11px] font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              {link.name}
            </Link>
          ))}
          {user?.role === 'ADMIN' && (
            <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-[11px] font-bold text-chrome bg-white/10 rounded-lg transition">
              👑 Admin Dashboard
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
