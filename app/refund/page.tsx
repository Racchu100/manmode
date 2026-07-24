import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Exchange Policy – MAN MODE THE CLOTHING LOUNGE",
};

export default function RefundPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/15 space-y-3">
          <h1 className="font-heading font-extrabold text-3xl text-white">REFUND & EXCHANGE POLICY</h1>
          <p className="text-xs text-slate-400">Last Updated: July 24, 2026</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-slate-300 leading-relaxed">
          <div className="p-4 bg-chrome/10 rounded-xl border border-chrome/30 text-xs text-chrome font-semibold">
            Important: MAN MODE operates on a Store Pickup Only model. No online payments are collected. All purchases are made in-person at our Padil boutique.
          </div>
          
          {[
            {
              title: "1. Pre-Purchase Trial Guarantee",
              content: "Every customer is entitled to try on all reserved items in our private fitting suite before completing any purchase. You are under absolutely no obligation to purchase an item that does not meet your expectations. Simply inform our in-store stylist and your reservation will be immediately released."
            },
            {
              title: "2. In-Store Exchanges",
              content: "If a purchased item has a manufacturing defect, incorrect sizing, or quality issue, you may exchange it within 7 days of purchase with the original receipt. The item must be unworn, unwashed, and in its original packaging with all tags intact."
            },
            {
              title: "3. Non-Returnable Items",
              content: "Due to hygiene and luxury regulations, the following items cannot be exchanged or returned: Innerwear & undergarments, Fragrances & Perfumes (once opened), Custom-tailored or altered garments, Sale/clearance items marked as Final Sale."
            },
            {
              title: "4. Reservation Cancellation",
              content: "Online reservations carry no financial commitment and may be cancelled at any time through My Account → My Orders → Cancel. Cancellations do not incur any fee or penalty."
            },
            {
              title: "5. Contact For Exchange Assistance",
              content: "To initiate an exchange, visit our boutique at Padil, Mangaluru, or contact our concierge at concierge@manmodelounge.com or +91 98765 43210."
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
