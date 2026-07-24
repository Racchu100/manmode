"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Check, 
  Share2, 
  Truck, 
  Ruler, 
  ArrowLeft,
  Sparkles,
  Award
} from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import { ProductCard } from "@/components/shop/product-card";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const { addToCart, toggleWishlist, isInWishlist, setIsCartOpen, showToast } = useStore();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.variants[0]?.size || "M");
  const [selectedColor, setSelectedColor] = useState(product.variants[0]?.color || "Default");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'pickup'>('desc');

  const inWishlist = isInWishlist(product.id);

  const handleReserve = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsCartOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Product link copied to clipboard!");
    }
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb / Back */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <Link href="/shop" className="hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
          <div className="flex items-center gap-2">
            <span>Shop</span> / <span>{product.category}</span> / <span className="text-white font-bold">{product.name}</span>
          </div>
        </div>

        {/* Main Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Multi-Angle Gallery */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 bg-slate-950">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md">
                  SKU: {product.sku}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-24 rounded-2xl overflow-hidden border-2 transition ${
                      selectedImage === idx 
                        ? "border-white shadow-chrome-glow" 
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="thumb" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Product Specs & Store Pickup Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-chrome uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  {product.category}
                </span>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-surface border border-white/10"
                  title="Share Product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                </div>
                <span>•</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Available for Pickup in Padil
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-heading font-extrabold text-3xl text-white">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-slate-500 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Store Pickup Notice Box */}
            <div className="p-4 glass-panel rounded-2xl border border-white/15 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-200">
                <ShieldCheck className="w-5 h-5 text-chrome shrink-0" />
                <div>
                  <span className="font-bold text-white block">Store Pickup Only</span>
                  <span className="text-slate-300">No online payment required. Pay upon collection at Padil, Mangaluru.</span>
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>Select Size:</span>
                <span className="text-chrome flex items-center gap-1 cursor-pointer hover:underline">
                  <Ruler className="w-3.5 h-3.5" />
                  Size Guide
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      setSelectedSize(v.size);
                      setSelectedColor(v.color);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition ${
                      selectedSize === v.size
                        ? "bg-white text-black border-white shadow-chrome-glow"
                        : "bg-surface border-white/10 text-slate-300 hover:border-white/30"
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-200 block">Quantity:</label>
              <div className="flex items-center gap-3 w-fit bg-surface px-3 py-1.5 rounded-xl border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-slate-400 hover:text-white text-sm font-bold w-6"
                >
                  -
                </button>
                <span className="text-xs font-bold text-white w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-slate-400 hover:text-white text-sm font-bold w-6"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={handleReserve}
                className="flex-1 py-4 btn-chrome text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-black shadow-chrome-glow"
              >
                <ShoppingBag className="w-4 h-4 text-black" />
                RESERVE FOR STORE PICKUP
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 rounded-xl border transition ${
                  inWishlist
                    ? "bg-red-500/20 border-red-500/50 text-red-400"
                    : "bg-surface border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? "fill-red-400" : ""}`} />
              </button>
            </div>

            {/* Tabs for Fabric Details / Specs */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex border-b border-white/10 gap-6 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`pb-2 border-b-2 transition ${
                    activeTab === 'desc' ? "border-white text-white" : "border-transparent text-slate-400"
                  }`}
                >
                  Overview & Fit
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 border-b-2 transition ${
                    activeTab === 'specs' ? "border-white text-white" : "border-transparent text-slate-400"
                  }`}
                >
                  Materials & Care
                </button>
                <button
                  onClick={() => setActiveTab('pickup')}
                  className={`pb-2 border-b-2 transition ${
                    activeTab === 'pickup' ? "border-white text-white" : "border-transparent text-slate-400"
                  }`}
                >
                  Pickup Guarantee
                </button>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed min-h-[80px]">
                {activeTab === 'desc' && <p>{product.description}</p>}
                {activeTab === 'specs' && <p>{product.details}</p>}
                {activeTab === 'pickup' && (
                  <p>
                    Every reserved piece is inspected, steam-pressed, and set aside in our Padil VIP holding room for 48 hours. Try on in our private lounge suite before completing your payment.
                  </p>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products */}
        <div className="pt-12 border-t border-white/10 space-y-6">
          <h2 className="font-heading font-extrabold text-xl text-white">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
