"use client";

import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useStore } from "@/lib/store";

export const Toast = () => {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className="glass-panel border-2 border-slate-300/50 bg-[#0F1015] text-white px-5 py-3.5 rounded-2xl shadow-chrome-glow flex items-center gap-3">
        <div className="p-1.5 rounded-xl bg-white text-black font-bold">
          <CheckCircle2 className="w-4 h-4 text-black" />
        </div>
        <div>
          <p className="text-xs font-bold font-heading">{toastMessage}</p>
          <span className="text-[10px] text-slate-400">Padil Boutique Concierge</span>
        </div>
      </div>
    </div>
  );
};
