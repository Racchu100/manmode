"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Eye, EyeOff, Phone, ArrowRight, Sparkles } from "lucide-react";
import { useStore } from "@/lib/store";

export default function RegisterPage() {
  const { loginDemo, showToast } = useStore();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginDemo("CUSTOMER");
    showToast(`Welcome to MAN MODE Lounge, ${form.name}!`);
    router.push("/account");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        
        <div className="text-center space-y-4">
          <Link href="/">
            <div className="mx-auto w-fit px-6 py-2 rounded-full border-2 border-slate-300/60 bg-gradient-to-b from-[#1E2024] via-[#090A0D] to-[#121318] shadow-chrome-glow">
              <p className="font-heading font-extrabold text-2xl tracking-widest text-chrome">MAN MODE</p>
              <p className="text-[10px] font-accent tracking-widest text-slate-300 uppercase -mt-1">THE CLOTHING LOUNGE</p>
            </div>
          </Link>
          <h1 className="font-heading font-extrabold text-2xl text-white">JOIN THE LOUNGE</h1>
          <p className="text-xs text-slate-400">Create your VIP account for exclusive Padil boutique access</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/15 space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-chrome" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Rohan Shetty"
                className="w-full bg-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-chrome transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
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
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
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

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-chrome" />
                Create Password *
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Min 8 characters"
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
              <Sparkles className="w-4 h-4 text-black" />
              CREATE LOUNGE ACCOUNT
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center">
            By joining, you agree to our{" "}
            <Link href="/terms" className="text-chrome hover:underline">Terms</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-chrome hover:underline">Privacy Policy</Link>.
          </p>

          <div className="text-center text-xs text-slate-400">
            Already a member?{" "}
            <Link href="/login" className="text-chrome hover:underline font-bold">
              Login Here
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
