a8c0c9d4-64a8-46a0-ba77-f8df0de4ca81

# MAN MODE – THE CLOTHING LOUNGE
## Ultra-Luxury Men's Fashion Boutique | Padil, Mangaluru, Karnataka 575007

---

## Getting Started

### 1. Install Dependencies
```bash
cd "d:\Rakshith\Graphitex Digitals\Business\24-07-2026 Man Mode The Clothing Lounge\Man Mode The Clothing Lounge"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Website Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Collections, Trending, Reviews, Map |
| Shop | `/shop` | Full catalog with filters |
| Product Detail | `/product/[slug]` | Gallery, variants, pickup option |
| Category | `/category/[slug]` | Category product grid |
| Collections | `/collections` | Editorial collections overview |
| New Arrivals | `/new-arrivals` | Latest fashion drops |
| Best Sellers | `/best-sellers` | Most popular items |
| Search | `/search` | Live catalog search |
| About | `/about` | Brand story & philosophy |
| Contact | `/contact` | Map, store hours, WhatsApp |
| Store Pickup | `/store-pickup` | Pickup workflow guide |
| Cart | `/cart` | Pickup cart + slot selector |
| Checkout | `/checkout` | Reservation form |
| Order Success | `/order-success/[id]` | Digital Pickup Pass |
| Login | `/login` | Customer & Admin login |
| Register | `/register` | New account creation |
| Account | `/account` | Customer dashboard |
| Privacy | `/privacy` | Privacy Policy |
| Refund | `/refund` | Refund & Exchange Policy |
| Terms | `/terms` | Terms & Conditions |
| 404 | `/not-found` | Custom error page |
| Admin | `/admin` | Admin Dashboard |

---

## Admin Access
Demo admin login available from the Navbar user menu or Login page.
- **Admin Email**: admin@manmodelounge.com
- **Role**: Full Admin Panel access

## Customer Access
- **Customer Demo**: Auto-populated on login

---

## Store Pickup Workflow
1. Customer browses catalog and adds items to "Store Pickup Cart"
2. Customer selects pickup date & time slot
3. Customer fills contact details at Checkout (NO online payment)
4. System generates Digital Pickup Pass with Order ID, QR Code & Barcode
5. Customer visits Padil boutique, presents Pass, tries items, pays in-person

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 (Chrome metallic dark design system)
- **State**: React Context (lib/store.tsx)
- **Charts**: Recharts (Admin Dashboard)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk + Sora + Inter (Google Fonts)
- **Database Ready**: Prisma ORM + SQLite (prisma/schema.prisma)

---

## Design System
- **Background**: `#030303` (Pitch Black)
- **Surface**: `#0A0A0C` / `#121215`
- **Chrome Silver**: `#C0C0C0`
- **Typography**: Space Grotesk (headings), Inter (body), Sora (accents)
- **Border Radius**: 16px standard
- **Glassmorphism**: `.glass-panel` utility class
- **Chrome Text**: `.text-chrome` utility class

---

## Store Information
- **Name**: MAN MODE – THE CLOTHING LOUNGE
- **Address**: Padil, Mangaluru, Karnataka 575007
- **Hours**: Monday – Sunday: 10:00 AM – 9:30 PM
- **Model**: Store Pickup Only (No Delivery / No Online Payment)
