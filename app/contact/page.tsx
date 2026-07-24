import React from "react";
import { MapPin, Phone, Mail, Clock, Store, Navigation, MessageSquare } from "lucide-react";
import { STORE_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Directions – MAN MODE THE CLOTHING LOUNGE | Padil Mangaluru",
  description: "Visit MAN MODE luxury boutique at Padil, Mangaluru. Get directions, contact number, WhatsApp, and store timings.",
};

export default function ContactPage() {
  return (
    <div className="py-6 sm:py-10 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-5 sm:space-y-10">

        {/* Hero */}
        <div className="glass-panel p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-r from-surface via-surface-card to-surface text-center space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-chrome text-[10px] sm:text-xs font-bold border border-white/20">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>FIND US IN PADIL, MANGALURU</span>
          </div>
          <h1 className="font-heading font-extrabold text-xl sm:text-5xl text-white">
            VISIT THE LOUNGE
          </h1>
          <p className="text-[11px] sm:text-sm text-slate-300 max-w-xl mx-auto">
            Experience a private luxury consultation at our boutique in Padil, Mangaluru. No appointments needed for general browsing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            <div className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/15 space-y-4 sm:space-y-5">
              <h2 className="font-heading font-bold text-sm sm:text-base text-white border-b border-white/10 pb-2 sm:pb-3">LOUNGE CONTACT</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 shrink-0">
                    <MapPin className="w-4 h-4 text-chrome" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Boutique Address</p>
                    <p className="text-slate-300 text-xs mt-0.5">{STORE_INFO.address}</p>
                    <p className="text-slate-400 text-[11px]">{STORE_INFO.locationLandmark}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 shrink-0">
                    <Clock className="w-4 h-4 text-chrome" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Operating Hours</p>
                    <p className="text-slate-300 text-xs mt-0.5">{STORE_INFO.hours}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold text-emerald-400">● Lounge Open Today</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 shrink-0">
                    <Phone className="w-4 h-4 text-chrome" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Hotline</p>
                    <a href={`tel:${STORE_INFO.phone}`} className="text-chrome hover:underline text-xs">{STORE_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 shrink-0">
                    <Mail className="w-4 h-4 text-chrome" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Concierge Email</p>
                    <a href={`mailto:${STORE_INFO.email}`} className="text-chrome hover:underline text-xs">{STORE_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:text-white rounded-2xl text-xs font-bold transition text-center"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                WhatsApp Us
              </a>
              <a
                href={`https://maps.google.com/?q=Padil+Mangaluru+Karnataka+575007`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 btn-chrome-outline rounded-2xl text-xs font-bold transition text-center"
              >
                <Navigation className="w-5 h-5 text-chrome" />
                Get Directions
              </a>
            </div>

            {/* Store Pickup Reminder */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-3 text-xs text-slate-300">
              <Store className="w-5 h-5 text-chrome shrink-0 mt-0.5" />
              <p>
                <strong className="text-white block">Exclusively Store Pickup</strong>
                We do not offer online delivery or home shipping. All items must be collected in-person at our Padil boutique.
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-white/15 min-h-[500px]">
            <iframe
              title="MAN MODE Padil Mangaluru Boutique Location"
              src={STORE_INFO.googleMapEmbedUrl}
              className="w-full h-full min-h-[500px] border-0 filter grayscale invert contrast-125"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* FAQ Quick Picks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { q: "Do I need to pay online?", a: "No. We operate on a Store Pickup model. You pay in-person at our Padil Lounge after trying items." },
            { q: "How long are items reserved?", a: "Items are held exclusively for you for 48 hours after your selected pickup window." },
            { q: "Can I cancel a reservation?", a: "Yes. You can cancel anytime before your pickup window via My Account → Orders → Cancel." },
          ].map((faq) => (
            <div key={faq.q} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2 text-xs">
              <p className="font-bold text-white">{faq.q}</p>
              <p className="text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
