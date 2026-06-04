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
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 group h-full">
      {/* Product Image */}
      <div className="aspect-[4/5] bg-slate-50 relative overflow-hidden">
        {product.images && product.images[0] && !product.images[0].startsWith('/placeholder') ? (
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <span className="text-sm font-medium">{product.name}</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Header: Brand & Title */}
        <div className="mb-2">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
            {product.brand}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-base sm:text-lg font-bold text-slate-900">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: shopConfig.currency }).format(displayPrice)}
          </span>
        </div>

        <div className="pt-3 border-t border-slate-100 flex flex-col gap-3 flex-grow">
          {/* Variant Selection (Color/Pattern) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest">Color</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant.id)}
                  className={`px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-md transition-all border ${
                    selectedVariantId === variant.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center mb-2">
               <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest">Size</span>
               {selectedSize && <span className="text-[10px] sm:text-xs text-indigo-600 font-bold tracking-wide">{selectedSize}</span>}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-1.5">
              {ALL_SIZES.map((size) => {
                const isAvailable = selectedVariant.availableSizes.includes(size);
                return (
                  <button
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1.5 text-[10px] sm:text-xs font-bold rounded-md transition-all ${
                      !isAvailable
                        ? 'bg-slate-50 text-slate-300 cursor-not-allowed border border-transparent'
                        : selectedSize === size
                        ? 'bg-indigo-600 text-white shadow-sm border border-indigo-600'
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

          {/* Add to Cart */}
          <button
            onClick={handleAddToBucket}
            className="w-full bg-slate-900 text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs py-2.5 sm:py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed shadow-sm mt-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
