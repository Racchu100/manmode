"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, Order, MOCK_ORDERS } from "./data";
import { generateOrderId } from "./utils";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: Product[];
  orders: Order[];
  quickViewProduct: Product | null;
  isCartOpen: boolean;
  selectedPickupDate: string;
  selectedPickupTimeSlot: string;
  user: { name: string; email: string; phone: string; role: 'CUSTOMER' | 'ADMIN' } | null;
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  setQuickViewProduct: (product: Product | null) => void;
  setIsCartOpen: (open: boolean) => void;
  setSelectedPickupDate: (date: string) => void;
  setSelectedPickupTimeSlot: (slot: string) => void;
  createOrder: (customerDetails: { name: string; email: string; phone: string; notes?: string }) => Order;
  updateOrderStatus: (orderId: string, newStatus: Order['status']) => void;
  loginDemo: (role: 'CUSTOMER' | 'ADMIN') => void;
  logout: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedPickupDate, setSelectedPickupDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [selectedPickupTimeSlot, setSelectedPickupTimeSlot] = useState<string>("11:00 AM – 1:00 PM");
  const [user, setUser] = useState<{ name: string; email: string; phone: string; role: 'CUSTOMER' | 'ADMIN' } | null>({
    name: "Vikram Hegde",
    email: "vikram.h@gmail.com",
    phone: "+91 98450 12345",
    role: "CUSTOMER"
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size && item.color === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, size, color, quantity }];
    });
    showToast(`Added "${product.name}" (${size}) to Store Pickup Cart`);
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size && item.color === color)
      )
    );
    showToast("Item removed from cart");
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Wishlist`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to Wishlist`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId);
  };

  const createOrder = (customerDetails: { name: string; email: string; phone: string; notes?: string }): Order => {
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: generateOrderId(),
      customerName: customerDetails.name,
      customerEmail: customerDetails.email,
      customerPhone: customerDetails.phone,
      pickupDate: selectedPickupDate,
      pickupTimeSlot: selectedPickupTimeSlot,
      notes: customerDetails.notes,
      totalAmount: total,
      status: "PENDING",
      createdAt: new Date().toISOString(),
      items: cart.map((item, idx) => ({
        id: `item-${Date.now()}-${idx}`,
        productId: item.product.id,
        productName: item.product.name,
        productImage: item.product.images[0],
        size: item.size,
        color: item.color,
        quantity: item.quantity,
        price: item.product.price,
      })),
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId || o.orderNumber === orderId ? { ...o, status: newStatus } : o))
    );
    showToast(`Order status updated to ${newStatus}`);
  };

  const loginDemo = (role: 'CUSTOMER' | 'ADMIN') => {
    if (role === 'ADMIN') {
      setUser({
        name: "Lounge Administrator",
        email: "admin@manmodelounge.com",
        phone: "+91 98765 43210",
        role: "ADMIN"
      });
      showToast("Logged in as Admin");
    } else {
      setUser({
        name: "Vikram Hegde",
        email: "vikram.h@gmail.com",
        phone: "+91 98450 12345",
        role: "CUSTOMER"
      });
      showToast("Logged in as Customer");
    }
  };

  const logout = () => {
    setUser(null);
    showToast("Logged out successfully");
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        orders,
        quickViewProduct,
        isCartOpen,
        selectedPickupDate,
        selectedPickupTimeSlot,
        user,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setQuickViewProduct,
        setIsCartOpen,
        setSelectedPickupDate,
        setSelectedPickupTimeSlot,
        createOrder,
        updateOrderStatus,
        loginDemo,
        logout,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
