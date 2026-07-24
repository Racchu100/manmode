import React from "react";
import Link from "next/link";
import { Store, ShieldCheck, MapPin, Clock, Navigation, Package, QrCode, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { STORE_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store Pickup – How It Works | MAN MODE THE CLOTHING LOUNGE Padil, Mangaluru",
  description: "Learn how our exclusive Store Pickup model works. Reserve luxury menswear online and collect at our Padil boutique in Mangaluru. No online payment required.",
};

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Browse & Add to Pickup Cart",
    description: "Explore our luxury menswear catalog. Select sizes, colors, and quantities. Add items to your Store Pickup Cart — no payment required at this stage.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Choose Your Pickup Slot",
    description: "Select your preferred pickup date (up to 5 days ahead) and a convenient time window that fits your schedule at our Padil boutique.",
  },
  {
    number: "03",
    icon: QrCode,
    title: "Receive Your Digital Pickup Pass",
    description: "Instantly receive your confirmation with a unique Order ID, scannable QR Code, and Barcode. Save it on your phone — no printing needed.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Visit, Try On & Collect",
    description: "Present your Pickup Pass at our Padil lounge. Our stylists will escort you to your reserved items. Try them on in our private fitting suite and pay in-person.",
  },
];

export default function StorePickupPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero */}
        <div className="glass-panel p-10 sm:p-16 rounded-3xl border-2 border-slate-300/40 text-center space-y-5 shadow-chrome-glow relative overflow-hidden bg-gradient-to-b from-[#0A0A0D] to-surface">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-chrome-glow blur-3xl opacity-30" />
          
          <div className="relative z-10 space-y-5">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border-2 border-slate-300/50 flex items-center justify-center shadow-chrome-glow">
              <Store className="w-8 h-8 text-chrome" />
            </div>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white">
              STORE PICKUP ONLY
            </h1>
            <p className="text-base text-slate-200 max-w-xl mx-auto leading-relaxed font-light">
              MAN MODE operates on an exclusive <strong className="text-white">Online Reservation → In-Store Pickup</strong> model. Reserve your luxury items online and collect them at our Padil, Mangaluru boutique.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              ZERO ONLINE PAYMENT • PAY IN-PERSON AT PADIL LOUNGE
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="space-y-6">
          <h2 className="font-heading font-extrabold text-2xl text-white text-center">THE 4-STEP LUXURY PICKUP EXPERIENCE</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4 hover:border-white/30 transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-heading font-extrabold text-3xl text-chrome/40 group-hover:text-chrome transition">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    <step.icon className="w-5 h-5 text-chrome" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Boutique Location Card */}
        <div className="glass-panel p-8 rounded-3xl border border-white/15 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-white">OUR PADIL BOUTIQUE</h2>
            
            <div className="space-y-3 text-xs">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Address</span>
                  <span className="text-slate-300">{STORE_INFO.address}</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Lounge Hours</span>
                  <span className="text-slate-300">{STORE_INFO.hours}</span>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/?q=Padil+Mangaluru+Karnataka+575007`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 btn-chrome text-xs font-bold text-black w-fit shadow-chrome-glow"
            >
              <Navigation className="w-4 h-4" />
              GET DIRECTIONS
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm text-white">WHAT TO EXPECT</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {[
                "Private fitting suite with dedicated stylist assistance",
                "Reserved items steam-pressed & ready in display",
                "Free alteration consultation for suits & shirts",
                "Complimentary espresso & welcome refreshments",
                "Secure payment at our boutique counter (Cash/UPI/Card)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-chrome shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="font-heading font-bold text-xl text-white">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-3">
            {[
              { q: "Is there any booking fee or advance payment required?", a: "Absolutely none. Our online system is a pure reservation tool. No payment of any kind is collected online." },
              { q: "What if an item doesn't fit or I change my mind?", a: "No worries. You are under no obligation to purchase after trying items. Simply inform our in-store stylist and your reservation will be released." },
              { q: "How many items can I reserve?", a: "There is no limit. Reserve as many items as you'd like and try them all in our fitting suite." },
              { q: "Can someone else collect on my behalf?", a: "Yes. Provide them with your Digital Pickup Pass (Order ID + QR Code) along with a copy of your ID. Our team will verify and release the items." },
            ].map((faq) => (
              <details key={faq.q} className="glass-panel rounded-2xl border border-white/10 group cursor-pointer">
                <summary className="p-5 font-bold text-sm text-white flex items-center justify-between list-none hover:text-chrome transition">
                  {faq.q}
                  <span className="text-chrome group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Link href="/shop" className="inline-flex items-center gap-2 px-10 py-4 btn-chrome text-xs font-bold text-black shadow-chrome-glow">
            START BROWSING LUXURY CATALOG
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
