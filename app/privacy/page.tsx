import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – MAN MODE THE CLOTHING LOUNGE",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/15 space-y-3">
          <h1 className="font-heading font-extrabold text-3xl text-white">PRIVACY POLICY</h1>
          <p className="text-xs text-slate-400">Last Updated: July 24, 2026</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
          {[
            {
              title: "1. Information We Collect",
              content: "When you place a Store Pickup reservation at MAN MODE, we collect your name, email address, and mobile number for the purpose of creating your Digital Pickup Pass and communicating your reservation status. We do not collect any payment information, credit card details, or banking credentials as all payments occur in-person at our Padil boutique."
            },
            {
              title: "2. How We Use Your Information",
              content: "Your contact information is used exclusively to: (a) Generate and deliver your Digital Pickup Pass, (b) Send reservation status notifications, (c) Contact you if there are any changes to your pickup schedule. We do not use your information for unsolicited marketing without your explicit consent."
            },
            {
              title: "3. Data Storage & Security",
              content: "All reservation data is stored securely on our servers. We do not sell, trade, or share your personal information with third parties. Your data is retained only for the duration of your active reservations and legal compliance requirements."
            },
            {
              title: "4. Store Pickup Model & No Payment Data",
              content: "MAN MODE operates exclusively on a Store Pickup model. No online payments are processed through our website. As such, we never collect or store any financial or payment information from our customers."
            },
            {
              title: "5. Contact Us",
              content: "For any privacy-related queries, contact us at concierge@manmodelounge.com or visit our boutique at Padil, Mangaluru, Karnataka 575007."
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
