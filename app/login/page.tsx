"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, Store, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useStore } from "@/lib/store";

export default function LoginPage() {
  const { loginDemo } = useStore();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginDemo("CUSTOMER");
    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12">
      <div className="w-full max-w-md space-y-4 sm:space-y-6">
        
        {/* Brand Logo */}
        <div className="text-center space-y-3 sm:space-y-4">
          <Link href="/">
            <div className="mx-auto w-fit px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-slate-300/60 sm:border-2 bg-gradient-to-b from-[#1E2024] via-[#090A0D] to-[#121318] shadow-chrome-glow">
              <p className="font-heading font-extrabold text-lg sm:text-2xl tracking-widest text-chrome leading-tight">MAN MODE</p>
              <p className="text-[7px] sm:text-[10px] font-accent tracking-widest text-slate-300 uppercase">THE CLOTHING LOUNGE</p>
            </div>
          </Link>
          <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-white">WELCOME BACK</h1>
          <p className="text-[10px] sm:text-xs text-slate-400">Access your reservations and Pickup Passes</p>
        </div>

        {/* Login Form */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/15 space-y-4 sm:space-y-5">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-chrome" />
                Email Address
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
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-chrome" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full bg-surface border border-white/15 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-white"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 btn-chrome text-xs font-bold text-black shadow-chrome-glow flex items-center justify-center gap-2"
            >
              LOGIN TO LOUNGE ACCOUNT
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative text-center text-xs text-slate-500 bg-surface-card px-3 mx-auto w-fit">or demo</div>
          </div>

          {/* Demo Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => { loginDemo("CUSTOMER"); router.push("/account"); }}
              className="py-3 btn-chrome-outline text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-chrome" />
              Demo Customer
            </button>
            <button
              onClick={() => { loginDemo("ADMIN"); router.push("/admin"); }}
              className="py-3 btn-chrome text-xs font-bold flex items-center justify-center gap-1.5 text-black"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Demo Admin
            </button>
          </div>

          <div className="text-center text-xs text-slate-400">
            New to MAN MODE Lounge?{" "}
            <Link href="/register" className="text-chrome hover:underline font-bold">
              Create Account
            </Link>
          </div>
        </div>

        {/* Pickup Notice */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3 text-xs text-slate-300">
          <Store className="w-5 h-5 text-chrome shrink-0" />
          <span>Logged-in customers receive priority Pickup Passes and early access to new drops at Padil Lounge.</span>
        </div>

      </div>
    </div>
  );
}
