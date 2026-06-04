'use client';

import { useState } from 'react';
import { Product, Variant, Size } from '../data/products';
import { shopConfig } from '../config/shopConfig';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ALL_SIZES: Size[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState<string>(product.variants[0].id);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId) as Variant;
  
  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
    // When changing variant (color/pattern), reset size if the previously selected size is not available in the new variant
    const newVariant = product.variants.find(v => v.id === variantId);
    if (selectedSize && newVariant && !newVariant.availableSizes.includes(selectedSize)) {
      setSelectedSize(null);
    }
  };

  const handleAddToBucket = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    addItem(product, selectedVariant, selectedSize);
  };

  const displayPrice = selectedVariant.priceOverride || product.basePrice;

  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100 group/card">
      {/* Product Image */}
      <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
        {product.images && product.images[0] && !product.images[0].startsWith('/placeholder') ? (
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <span className="text-sm font-medium">{product.name} Image</span>
          </div>
        )}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full text-slate-900 shadow-sm uppercase tracking-widest">
            {product.brand}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1 sm:gap-4 mb-1">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 leading-tight line-clamp-2 sm:line-clamp-none">{product.name}</h3>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: shopConfig.currency }).format(displayPrice)}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mt-1 sm:mt-2">{product.description}</p>
        </div>

        <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-100">
          {/* Variant Selection (Color/Pattern) */}
          <div className="mb-4 sm:mb-5">
            <div className="flex justify-between items-end mb-2 sm:mb-3">
              <h4 className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-widest">Style</h4>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-full transition-all border ${
                    selectedVariantId === variant.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection (Reactive Matrix Logic) */}
          <div className="mb-4 sm:mb-6">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
               <h4 className="text-[10px] sm:text-xs font-semibold text-slate-900 uppercase tracking-widest">Size</h4>
               {selectedSize && <span className="text-[10px] sm:text-xs text-indigo-600 font-bold tracking-wide">{selectedSize}</span>}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
              {ALL_SIZES.map((size) => {
                const isAvailable = selectedVariant.availableSizes.includes(size);
                return (
                  <button
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-center py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold rounded transition-all ${
                      !isAvailable
                        ? 'bg-slate-50 text-slate-300 cursor-not-allowed border border-transparent'
                        : selectedSize === size
                        ? 'bg-indigo-600 text-white shadow-md border border-indigo-600'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-600 hover:text-indigo-600'
                    }`}
                    title={!isAvailable ? 'Out of stock for this style' : `Select ${size}`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleAddToBucket}
            className="w-full bg-slate-900 text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs py-3 sm:py-4 px-2 sm:px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
