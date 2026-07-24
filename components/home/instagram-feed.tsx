"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Heart } from "lucide-react";
import { INSTAGRAM_POSTS } from "@/lib/data";

export const InstagramFeed = () => {
  return (
    <section className="py-16 bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-chrome text-xs font-bold uppercase tracking-wider mb-1">
              <Instagram className="w-4 h-4" />
              <span>@MANMODE_LOUNGE</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-white">
              INSTAGRAM GALLERY
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 btn-chrome-outline text-xs font-bold flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-chrome" />
            FOLLOW US ON INSTAGRAM
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10"
            >
              <Image
                src={post.image}
                alt="Instagram Fashion Post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>{post.likes}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
