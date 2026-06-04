'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import OrderModal from './OrderModal';
import { shopConfig } from '../config/shopConfig';

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, removeItem, cartTotal } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  if (!isCartOpen && !isCheckoutModalOpen) return null;

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity" 
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Your Bucket</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors p-2"
          >
            <span className="sr-only">Close panel</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
               <svg className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              <p className="text-lg font-medium text-slate-900">Your bucket is empty</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-200">
              {items.map((item) => {
                const price = item.variant.priceOverride || item.product.basePrice;
                return (
                  <li key={item.cartItemId} className="py-6 flex items-start">
                    <div className="h-20 w-20 flex-shrink-0 bg-slate-100 rounded-md flex items-center justify-center">
                       <span className="text-[10px] text-slate-400">Img</span>
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-slate-900">
                          <h3 className="line-clamp-1">{item.product.name}</h3>
                          <p className="ml-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: shopConfig.currency }).format(price)}</p>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">{item.variant.color} - {item.variant.pattern}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-slate-500">Size: <span className="font-bold text-slate-900">{item.size}</span> x {item.quantity}</p>
                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => removeItem(item.cartItemId)}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-200 p-6 bg-slate-50">
          <div className="flex justify-between text-lg font-bold text-slate-900 mb-4">
            <p>Subtotal</p>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: shopConfig.currency }).format(cartTotal)}</p>
          </div>
          <p className="text-sm text-slate-500 mb-6">Shipping and taxes calculated at checkout.</p>
          <button
            disabled={items.length === 0}
            onClick={() => {
              setIsCartOpen(false);
              setIsCheckoutModalOpen(true);
            }}
            className="w-full flex items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            Checkout
          </button>
          <div className="mt-4 flex justify-center text-sm text-slate-500">
            <p>
              or{' '}
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutModalOpen && (
        <OrderModal onClose={() => setIsCheckoutModalOpen(false)} />
      )}
    </>
  );
}
