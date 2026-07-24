import type { Metadata } from "next";
import { Inter, Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { QuickViewModal } from "@/components/shop/quick-view-modal";
import { Toast } from "@/components/ui/toast";
import { STORE_INFO } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "MAN MODE – THE CLOTHING LOUNGE | Luxury Men's Store in Padil, Mangaluru",
  description: "Ultra-luxury men's fashion boutique in Padil, Mangaluru, Karnataka 575007. Bespoke suits, Egyptian cotton shirts, raw silk kurtas, selvedge denim & platinum oud fragrances. Reserve online for Store Pickup.",
  keywords: ["Man Mode", "Clothing Lounge", "Mangaluru Men's Store", "Padil Menswear", "Luxury Suits Mangaluru", "Store Pickup Menswear"],
  openGraph: {
    title: "MAN MODE – THE CLOTHING LOUNGE",
    description: "Luxury • Premium • Modern • Fashion Boutique in Padil, Mangaluru.",
    url: "https://manmodelounge.com",
    siteName: "MAN MODE THE CLOTHING LOUNGE",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable} bg-background text-slate-100 antialiased selection:bg-white selection:text-black`}>
        <StoreProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
