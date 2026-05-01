"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = sessionStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return []; // Initial server render should return an empty cart
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
