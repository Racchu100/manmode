import React from "react";
import { Hero } from "@/components/home/hero";
import { FeaturedBrands } from "@/components/home/featured-brands";
import { LuxuryCategories } from "@/components/home/luxury-categories";
import { TrendingProducts } from "@/components/home/trending-products";
import { OfferBanner } from "@/components/home/offer-banner";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { CustomerReviews } from "@/components/home/customer-reviews";
import { StoreLocation } from "@/components/home/store-location";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedBrands />
      <LuxuryCategories />
      <TrendingProducts />
      <OfferBanner />
      <CustomerReviews />
      <InstagramFeed />
      <StoreLocation />
    </div>
  );
}
