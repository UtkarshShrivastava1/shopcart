'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, Variant, Size } from '../data/products';

export interface CartItem {
  cartItemId: string; // Unique ID for the cart entry (since same product can have multiple variants)
  product: Product;
  variant: Variant;
  size: Size;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant: Variant, size: Size) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopcart_demo_bucket');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('shopcart_demo_bucket', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = (product: Product, variant: Variant, size: Size) => {
    setItems(currentItems => {
      // Check if exact same item exists (same product, variant, and size)
      const existingItemIndex = currentItems.findIndex(
        item => item.product.id === product.id && item.variant.id === variant.id && item.size === size
      );

      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      }

      const newItem: CartItem = {
        cartItemId: `${product.id}-${variant.id}-${size}-${Date.now()}`,
        product,
        variant,
        size,
        quantity: 1,
      };
      return [...currentItems, newItem];
    });
    setIsCartOpen(true); // Auto-open cart on add
  };

  const removeItem = (cartItemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotal = items.reduce((total, item) => {
    const price = item.variant.priceOverride || item.product.basePrice;
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, isCartOpen, setIsCartOpen, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
