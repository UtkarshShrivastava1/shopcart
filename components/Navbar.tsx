'use client';

import Link from 'next/link';
import { shopConfig } from '../config/shopConfig';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tight">
              {shopConfig.storeName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-slate-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Cart Icon / Action */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-slate-600 hover:text-indigo-600 transition-colors relative group"
            >
              <span className="sr-only">View Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full transform translate-x-1/4 -translate-y-1/4">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
