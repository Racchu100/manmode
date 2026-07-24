import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – MAN MODE THE CLOTHING LOUNGE",
};

export default function TermsPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/15 space-y-3">
          <h1 className="font-heading font-extrabold text-3xl text-white">TERMS & CONDITIONS</h1>
          <p className="text-xs text-slate-400">Last Updated: July 24, 2026</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing the MAN MODE website and placing a store pickup reservation, you agree to these Terms and Conditions in full. If you disagree with any part of these terms, please refrain from using our reservation system."
            },
            {
              title: "2. Store Pickup Reservation Agreement",
              content: "The MAN MODE online system is a reservation platform only. No financial transaction occurs online. A reservation constitutes your intent to visit our Padil boutique, inspect the reserved items, and potentially complete a purchase in-person. Reserved items are held for 48 hours from your selected pickup window."
            },
            {
              title: "3. Item Availability",
              content: "All items displayed on our website are subject to in-store availability. While we endeavour to maintain accurate stock levels, items may become unavailable between the time of reservation and pickup. Our team will notify you promptly if any reserved item is no longer available."
            },
            {
              title: "4. User Accounts",
              content: "You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility. Notify us immediately of any unauthorized use at concierge@manmodelounge.com."
            },
            {
              title: "5. Intellectual Property",
              content: "All content on this website, including the MAN MODE chrome metallic logo, product photography, design elements, and written content, are the exclusive intellectual property of MAN MODE – The Clothing Lounge. Unauthorized use is strictly prohibited."
            },
            {
              title: "6. Governing Law",
              content: "These Terms shall be governed by the laws of Karnataka, India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mangaluru, Karnataka."
            }
          ].map((section) => (
            <div key={section.title} className="space-y-2">
              <h2 className="font-heading font-bold text-base text-white">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
