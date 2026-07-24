"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, MessageSquare } from "lucide-react";
import { STORE_INFO } from "@/lib/data";

export const StoreLocation = () => {
  return (
    <section className="py-20 bg-background relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-chrome text-xs font-bold border border-white/20">
            <MapPin className="w-4 h-4" />
            <span>VISIT OUR LUXURY BOUTIQUE LOUNGE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            LOCATED IN PADIL, MANGALURU
          </h2>
          <p className="text-xs text-slate-300">
            Experience our bespoke fitting suite, high-end menswear lounge, and dedicated store pickup concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            <div className="glass-panel p-6 rounded-3xl border border-white/15 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white border-b border-white/10 pb-3">
                Lounge Metadata
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Physical Location</span>
                    <span className="text-slate-300">{STORE_INFO.address}</span>
                    <span className="text-slate-400 block text-[11px] mt-0.5">{STORE_INFO.locationLandmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours</span>
                    <span className="text-slate-300">{STORE_INFO.hours}</span>
                    <span className="text-emerald-400 font-bold block text-[11px] mt-0.5">● Open Today for Pickup</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Hotline & Reservations</span>
                    <span className="text-slate-300">{STORE_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-chrome shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Concierge Email</span>
                    <span className="text-slate-300">{STORE_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map Directions CTA */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-surface-card via-surface to-surface-card border border-white/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Navigation className="w-4 h-4 text-chrome" />
                <span>Navigating to Padil Lounge</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Located near Padil Highway Junction, easily accessible from central Mangaluru & Udupi. Free customer valet parking available.
              </p>
              <a
                href="https://maps.google.com/?q=Padil+Mangaluru+Karnataka+575007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 btn-chrome text-xs font-bold flex items-center justify-center gap-2 text-black shadow-chrome-glow"
              >
                OPEN GOOGLE MAPS DIRECTIONS
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Google Maps Embed iframe */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-white/15 min-h-[400px] relative">
            <iframe
              title="MAN MODE Padil Mangaluru Store Location"
              src={STORE_INFO.googleMapEmbedUrl}
              className="w-full h-full min-h-[400px] border-0 filter grayscale invert contrast-125 opacity-90"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
