export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  colorHex: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  details: string;
  material: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  stock: number;
  category: string;
  categorySlug: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  collection?: string;
  images: string[];
  variants: ProductVariant[];
  rating: number;
  reviewsCount: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  featured?: boolean;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupDate: string;
  pickupTimeSlot: string;
  notes?: string;
  totalAmount: number;
  status: 'PENDING' | 'CONFIRMED' | 'READY_FOR_PICKUP' | 'COLLECTED' | 'CANCELLED';
  createdAt: string;
  items: OrderItem[];
}

export const STORE_INFO = {
  name: "MAN MODE – THE CLOTHING LOUNGE",
  tagline: "Luxury • Premium • Modern • Fashion Boutique",
  address: "Padil, Mangaluru, Karnataka 575007",
  locationLandmark: "Near Highway Junction, Padil Main Road",
  city: "Mangaluru",
  state: "Karnataka",
  pincode: "575007",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "concierge@manmodelounge.com",
  hours: "Monday – Sunday: 10:00 AM – 9:30 PM",
  pickupType: "Store Pickup Only (No Online Delivery / No Payment Gateway Required)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5428619623864!2d74.8789512!3d12.8727584!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a74df617df9%3A0x8673a5a40a5a0c9!2sPadil%2C%20Mangaluru%2C%20Karnataka%20575007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Shirts",
    slug: "shirts",
    description: "Tailored Italian cotton & satin formal and casual luxury shirts.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
    itemCount: 42,
    featured: true
  },
  {
    id: "cat-2",
    name: "Suits & Blazers",
    slug: "suits-blazers",
    description: "Bespoke tuxedo blazers and 3-piece luxury wool suits.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    itemCount: 28,
    featured: true
  },
  {
    id: "cat-3",
    name: "Ethnic & Festive",
    slug: "ethnic-wear",
    description: "Royal Silk Kurtas, Bandhgala jackets & ceremonial menswear.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800",
    itemCount: 35,
    featured: true
  },
  {
    id: "cat-4",
    name: "T-Shirts & Polos",
    slug: "t-shirts",
    description: "Pima cotton, metallic accented, and heavy-weight streetwear polom.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    itemCount: 50,
    featured: true
  },
  {
    id: "cat-5",
    name: "Jeans & Denim",
    slug: "jeans",
    description: "Selvedge denim, distressed chrome-accented dark wash jeans.",
    image: "https://images.unsplash.com/photo-1542272604-780c36856d61?auto=format&fit=crop&q=80&w=800",
    itemCount: 30,
    featured: true
  },
  {
    id: "cat-6",
    name: "Jackets & Hoodies",
    slug: "jackets",
    description: "Leather outerwear, puffer coats, and chrome detailed hoodies.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
    itemCount: 24,
    featured: true
  },
  {
    id: "cat-7",
    name: "Perfumes & Fragrances",
    slug: "perfumes",
    description: "Signature Oud, Amber, and Platinum Chrome Eau de Parfum.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    itemCount: 15,
    featured: true
  },
  {
    id: "cat-8",
    name: "Luxury Footwear",
    slug: "shoes",
    description: "Handcrafted leather loafers, oxford shoes, and designer sneakers.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    itemCount: 20,
    featured: true
  },
  { id: "cat-9", name: "Formal Pants", slug: "formal-pants", description: "Slim-fit trousers", image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=600", itemCount: 18 },
  { id: "cat-10", name: "Casual Pants & Cargo", slug: "cargo", description: "Tactical streetwear cargo", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600", itemCount: 15 },
  { id: "cat-11", name: "Accessories", slug: "accessories", description: "Belts, Wallets & Caps", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600", itemCount: 25 },
  { id: "cat-12", name: "Shorts", slug: "shorts", description: "Bespoke linen shorts", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600", itemCount: 12 }
];

export const COLLECTIONS = [
  {
    id: "col-1",
    name: "Platinum Chrome Edition",
    slug: "platinum-chrome",
    subtitle: "Liquid metallic finishes & modern slim silhouettes",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    itemCount: 18
  },
  {
    id: "col-2",
    name: "Royal Festive '26",
    slug: "festival-collection",
    subtitle: "Opulent silk kurtas and hand-embroidered jackets",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1200",
    itemCount: 22
  },
  {
    id: "col-3",
    name: "Bespoke Lounge Suits",
    slug: "suits",
    subtitle: "Double-breasted Italian wool & velvet tuxedos",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1200",
    itemCount: 14
  },
  {
    id: "col-4",
    name: "Urban Nightlife Streetwear",
    slug: "winter-collection",
    subtitle: "Heavyweight hoodies, leather aviators & cargo pants",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=1200",
    itemCount: 16
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Imperial Chrome Velvet Tuxedo Blazer",
    slug: "imperial-chrome-velvet-tuxedo-blazer",
    description: "Exquisite deep black velvet blazer featuring satin peak lapels and custom chrome silver crested buttons. Hand-crafted for high-profile galas and evening lounge soirees.",
    details: "100% Premium Italian Velvet, Silk Satin Lapels, Dual Internal Pockets, Custom Chrome Buttons, Made in Italy.",
    material: "Italian Velvet & Satin Silk",
    price: 18999,
    compareAtPrice: 24999,
    sku: "MM-SUIT-001",
    stock: 6,
    category: "Suits & Blazers",
    categorySlug: "suits-blazers",
    isNew: true,
    isFeatured: true,
    isBestSeller: true,
    collection: "Platinum Chrome Edition",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v1-38", size: "38R", color: "Obsidian Black", colorHex: "#000000", stock: 2 },
      { id: "v1-40", size: "40R", color: "Obsidian Black", colorHex: "#000000", stock: 2 },
      { id: "v1-42", size: "42R", color: "Obsidian Black", colorHex: "#000000", stock: 2 }
    ],
    rating: 4.9,
    reviewsCount: 18
  },
  {
    id: "prod-2",
    name: "Liquid Silver Egyptian Cotton Formal Shirt",
    slug: "liquid-silver-egyptian-cotton-formal-shirt",
    description: "Ultra-crisp 200s 2-ply Egyptian Giza cotton shirt with a metallic sheen collar stay and silver monogram cuff buttons. Tailored fit for maximum elegance.",
    details: "100% Giza Cotton, Hidden Placket, French Cuffs, Stain Resistant Finish.",
    material: "100% Egyptian Giza Cotton",
    price: 4999,
    compareAtPrice: 6599,
    sku: "MM-SHIRT-002",
    stock: 15,
    category: "Shirts",
    categorySlug: "shirts",
    isNew: true,
    isFeatured: true,
    isBestSeller: true,
    collection: "Platinum Chrome Edition",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v2-s", size: "S", color: "Pure White", colorHex: "#FFFFFF", stock: 4 },
      { id: "v2-m", size: "M", color: "Pure White", colorHex: "#FFFFFF", stock: 5 },
      { id: "v2-l", size: "L", color: "Pure White", colorHex: "#FFFFFF", stock: 4 },
      { id: "v2-xl", size: "XL", color: "Pure White", colorHex: "#FFFFFF", stock: 2 }
    ],
    rating: 5.0,
    reviewsCount: 24
  },
  {
    id: "prod-3",
    name: "Royal Heritage Raw Silk Kurta Set",
    slug: "royal-heritage-raw-silk-kurta-set",
    description: "Regal raw silk kurta paired with tailored churidar. Accentuated with hand-carved silver metallic embroidery around the mandarin collar and placket.",
    details: "Pure Raw Silk Kurta, Dupion Silk Bottom, Intricate Zari Work, Dry Clean Only.",
    material: "Raw Silk & Zari Threading",
    price: 12499,
    compareAtPrice: 15999,
    sku: "MM-ETH-003",
    stock: 8,
    category: "Ethnic & Festive",
    categorySlug: "ethnic-wear",
    isNew: false,
    isFeatured: true,
    isBestSeller: true,
    collection: "Royal Festive '26",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v3-m", size: "M", color: "Midnight Navy", colorHex: "#0B192C", stock: 3 },
      { id: "v3-l", size: "L", color: "Midnight Navy", colorHex: "#0B192C", stock: 3 },
      { id: "v3-xl", size: "XL", color: "Midnight Navy", colorHex: "#0B192C", stock: 2 }
    ],
    rating: 4.8,
    reviewsCount: 15
  },
  {
    id: "prod-4",
    name: "Man Mode Metallic Emblem Heavyweight Tee",
    slug: "man-mode-metallic-emblem-heavyweight-tee",
    description: "300 GSM combed organic cotton t-shirt with a high-definition 3D liquid chrome 'MAN MODE' logo print across the chest.",
    details: "300 GSM Heavyweight Cotton, Drop Shoulder Oversized Fit, Metallic Screen Print, Ribbed Crewneck.",
    material: "100% Organic Heavyweight Cotton",
    price: 2499,
    compareAtPrice: 3299,
    sku: "MM-TEE-004",
    stock: 25,
    category: "T-Shirts & Polos",
    categorySlug: "t-shirts",
    isNew: true,
    isFeatured: true,
    isBestSeller: false,
    collection: "Urban Nightlife Streetwear",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v4-s", size: "S", color: "Pitch Black", colorHex: "#000000", stock: 6 },
      { id: "v4-m", size: "M", color: "Pitch Black", colorHex: "#000000", stock: 8 },
      { id: "v4-l", size: "L", color: "Pitch Black", colorHex: "#000000", stock: 7 },
      { id: "v4-xl", size: "XL", color: "Pitch Black", colorHex: "#000000", stock: 4 }
    ],
    rating: 4.9,
    reviewsCount: 31
  },
  {
    id: "prod-5",
    name: "Selvedge Chrome-Riveted Slim Fit Jeans",
    slug: "selvedge-chrome-riveted-slim-fit-jeans",
    description: "14.5 oz Japanese selvedge denim in deep indigo with custom chrome-plated hardware and silver metallic stitching.",
    details: "14.5 oz Japanese Selvedge Denim, Silver Chrome Hardware, Leather Back Patch, Button Fly.",
    material: "100% Cotton Japanese Selvedge",
    price: 6999,
    compareAtPrice: 8999,
    sku: "MM-JEAN-005",
    stock: 12,
    category: "Jeans & Denim",
    categorySlug: "jeans",
    isNew: false,
    isFeatured: true,
    isBestSeller: true,
    images: [
      "https://images.unsplash.com/photo-1542272604-780c36856d61?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v5-30", size: "30W", color: "Deep Indigo", colorHex: "#1E293B", stock: 3 },
      { id: "v5-32", size: "32W", color: "Deep Indigo", colorHex: "#1E293B", stock: 4 },
      { id: "v5-34", size: "34W", color: "Deep Indigo", colorHex: "#1E293B", stock: 3 },
      { id: "v5-36", size: "36W", color: "Deep Indigo", colorHex: "#1E293B", stock: 2 }
    ],
    rating: 4.7,
    reviewsCount: 19
  },
  {
    id: "prod-6",
    name: "Noir Platinum Oud Eau De Parfum (100ml)",
    slug: "noir-platinum-oud-eau-de-parfum",
    description: "An intoxicating blend of rare Cambodian Oud, smoky amber, silver birch, and bergamot housed in a solid metallic chrome flask bottle.",
    details: "100ml / 3.4 fl oz EDP, Top Notes: Bergamot & Cardamom; Heart Notes: Smoked Birch & Rose; Base Notes: Cambodian Oud & Silver Amber.",
    material: "Extrait De Parfum (30% Concentration)",
    price: 8499,
    compareAtPrice: 10999,
    sku: "MM-PERF-006",
    stock: 10,
    category: "Perfumes & Fragrances",
    categorySlug: "perfumes",
    isNew: true,
    isFeatured: true,
    isBestSeller: true,
    collection: "Platinum Chrome Edition",
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v6-100", size: "100 ml", color: "Chrome Bottle", colorHex: "#C0C0C0", stock: 10 }
    ],
    rating: 5.0,
    reviewsCount: 42
  },
  {
    id: "prod-7",
    name: "Monaco Handcrafted Italian Leather Loafers",
    slug: "monaco-handcrafted-italian-leather-loafers",
    description: "Supple Italian calfskin leather Penny loafers with hand-burnished chrome horsebit hardware and leather soles.",
    details: "100% Genuine Italian Calf Leather, Hand-Burnished Finish, Silver Metal Horsebit Buckle, Goodyear Welted.",
    material: "Calfskin Leather",
    price: 13999,
    compareAtPrice: 17999,
    sku: "MM-SHOE-007",
    stock: 7,
    category: "Luxury Footwear",
    categorySlug: "shoes",
    isNew: true,
    isFeatured: true,
    isBestSeller: false,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v7-41", size: "UK 7 / EU 41", color: "Charcoal Black", colorHex: "#111111", stock: 2 },
      { id: "v7-42", size: "UK 8 / EU 42", color: "Charcoal Black", colorHex: "#111111", stock: 3 },
      { id: "v7-43", size: "UK 9 / EU 43", color: "Charcoal Black", colorHex: "#111111", stock: 2 }
    ],
    rating: 4.9,
    reviewsCount: 16
  },
  {
    id: "prod-8",
    name: "Apex Biker Leather Jacket with Chrome Zippers",
    slug: "apex-biker-leather-jacket-with-chrome-zippers",
    description: "Full-grain lambskin leather biker jacket featuring heavy-duty silver YKK chrome zippers and quilted shoulder panels.",
    details: "100% Lambskin Leather, Satin Lining, Heavy Duty Metal Hardware, Asymmetrical Front Closure.",
    material: "Full-Grain Lambskin Leather",
    price: 21999,
    compareAtPrice: 28999,
    sku: "MM-JKT-008",
    stock: 5,
    category: "Jackets & Hoodies",
    categorySlug: "jackets",
    isNew: true,
    isFeatured: true,
    isBestSeller: true,
    collection: "Urban Nightlife Streetwear",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=1000"
    ],
    variants: [
      { id: "v8-m", size: "M", color: "Jet Black", colorHex: "#050505", stock: 2 },
      { id: "v8-l", size: "L", color: "Jet Black", colorHex: "#050505", stock: 2 },
      { id: "v8-xl", size: "XL", color: "Jet Black", colorHex: "#050505", stock: 1 }
    ],
    rating: 5.0,
    reviewsCount: 28
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: "ord-101",
    orderNumber: "MM-9482-1001",
    customerName: "Vikram Hegde",
    customerEmail: "vikram.h@gmail.com",
    customerPhone: "+91 98450 12345",
    pickupDate: "2026-07-25",
    pickupTimeSlot: "11:00 AM – 1:00 PM",
    notes: "Please keep item boxed in luxury gift wrap.",
    totalAmount: 23998,
    status: "READY_FOR_PICKUP",
    createdAt: "2026-07-24T14:20:00Z",
    items: [
      {
        id: "item-1",
        productId: "prod-1",
        productName: "Imperial Chrome Velvet Tuxedo Blazer",
        productImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600",
        size: "40R",
        color: "Obsidian Black",
        quantity: 1,
        price: 18999
      },
      {
        id: "item-2",
        productId: "prod-2",
        productName: "Liquid Silver Egyptian Cotton Formal Shirt",
        productImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600",
        size: "L",
        color: "Pure White",
        quantity: 1,
        price: 4999
      }
    ]
  },
  {
    id: "ord-102",
    orderNumber: "MM-8831-2045",
    customerName: "Rohan Shetty",
    customerEmail: "rohan.shetty@outlook.com",
    customerPhone: "+91 99001 88776",
    pickupDate: "2026-07-26",
    pickupTimeSlot: "4:00 PM – 6:00 PM",
    totalAmount: 8499,
    status: "CONFIRMED",
    createdAt: "2026-07-24T16:05:00Z",
    items: [
      {
        id: "item-3",
        productId: "prod-6",
        productName: "Noir Platinum Oud Eau De Parfum (100ml)",
        productImage: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600",
        size: "100 ml",
        color: "Chrome Bottle",
        quantity: 1,
        price: 8499
      }
    ]
  }
];

export const INSTAGRAM_POSTS = [
  { id: "ig-1", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600", likes: 1420 },
  { id: "ig-2", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600", likes: 2150 },
  { id: "ig-3", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600", likes: 1890 },
  { id: "ig-4", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600", likes: 3100 }
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Aditya Rai",
    location: "Mangaluru",
    rating: 5,
    comment: "The Store Pickup experience at Padil is unmatched! I reserved my tuxedo blazer online, visited the lounge, tried it on in their private fitting suit, and paid at the counter. Truly Louis Vuitton standards in Mangaluru.",
    date: "July 20, 2026"
  },
  {
    id: "rev-2",
    author: "Siddharth Shenoy",
    location: "Udupi",
    rating: 5,
    comment: "MAN MODE is the ultimate luxury fashion boutique. The Noir Platinum Oud fragrance lasts all day and the Egyptian cotton shirts fit like bespoke perfection.",
    date: "July 18, 2026"
  },
  {
    id: "rev-3",
    author: "Karan D'Souza",
    location: "Mangaluru",
    rating: 5,
    comment: "Reserving online and picking up at Padil saved me so much time for my wedding shopping. The chrome aesthetic of the store and website is pure class.",
    date: "July 15, 2026"
  }
];
