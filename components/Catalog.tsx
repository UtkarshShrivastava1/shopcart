"use client";

import { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Catalog() {
  // State for filters
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  
  // Mobile drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Prevent background scrolling when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileFilterOpen]);

  // Extract unique values for filters based on actual data
  const filterOptions = useMemo(() => {
    const genders = new Set<string>();
    const brands = new Set<string>();
    const categories = new Set<string>();
    const types = new Set<string>();
    const colors = new Set<string>();
    let maxPrice = 0;

    products.forEach(p => {
      if (p.gender) genders.add(p.gender);
      if (p.brand) brands.add(p.brand);
      if (p.category) categories.add(p.category);
      if (p.type) types.add(p.type);
      if (p.basePrice > maxPrice) maxPrice = p.basePrice;
      p.variants?.forEach(v => {
        if (v.color) colors.add(v.color);
      });
    });

    const upperLimit = Math.ceil(maxPrice / 10) * 10 || 200;

    return {
      genders: Array.from(genders).sort(),
      brands: Array.from(brands).sort(),
      categories: Array.from(categories).sort(),
      types: Array.from(types).sort(),
      colors: Array.from(colors).sort(),
      maxPrice: upperLimit
    };
  }, []);

  const [initialMaxSet, setInitialMaxSet] = useState(false);
  if (!initialMaxSet && filterOptions.maxPrice > 0) {
    setPriceRange([0, filterOptions.maxPrice]);
    setInitialMaxSet(true);
  }

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (p.basePrice < priceRange[0] || p.basePrice > priceRange[1]) return false;
      if (selectedGenders.length > 0 && !selectedGenders.includes(p.gender as string)) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(p.type)) return false;
      if (selectedColors.length > 0) {
        const hasColor = p.variants.some(v => selectedColors.includes(v.color));
        if (!hasColor) return false;
      }
      return true;
    });
  }, [selectedGenders, selectedBrands, selectedCategories, selectedTypes, selectedColors, priceRange]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedGenders([]);
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedColors([]);
    setPriceRange([0, filterOptions.maxPrice]);
  };

  const activeFilterCount = selectedGenders.length + selectedBrands.length + selectedCategories.length + selectedTypes.length + selectedColors.length;

  return (
    <div className="bg-slate-50 w-full relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 lg:py-12 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* Mobile Filter Toggle & Result Count */}
        <div className="flex items-center justify-between bg-white p-3 sm:p-4 rounded-lg border border-slate-200 shadow-sm lg:hidden sticky top-[64px] z-30">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center space-x-2 text-slate-900 font-bold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filters {activeFilterCount > 0 && <span className="ml-1 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">{activeFilterCount}</span>}</span>
          </button>
          <span className="text-slate-700 text-sm font-medium">
            <span className="text-slate-900 font-bold">{filteredProducts.length}</span> items
          </span>
        </div>

        {/* Mobile Backdrop */}
        {isMobileFilterOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileFilterOpen(false)}
          />
        )}

        {/* Sidebar Filters */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-5/6 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col
          lg:static lg:w-64 lg:transform-none lg:shadow-none lg:bg-transparent lg:z-auto lg:block
          ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          
          {/* Mobile Filter Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 lg:hidden bg-white">
            <h2 className="text-xl font-extrabold text-slate-900">Filters</h2>
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto lg:bg-white p-5 lg:rounded-lg lg:border lg:border-slate-200 lg:shadow-sm lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] hover-scrollbar">
            {/* Desktop Reset Button */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <h2 className="text-lg font-extrabold text-slate-900">Filters</h2>
              <button 
                onClick={clearAllFilters}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Reset
              </button>
            </div>
            
            {/* Mobile Reset Button */}
            <div className="flex justify-end mb-6 lg:hidden">
              <button onClick={clearAllFilters} className="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-md">Reset All Filters</button>
            </div>

            <div className="space-y-8 pb-20 lg:pb-0">
              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Price Range</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-1">
                    <label className="text-xs text-slate-500 mb-1 block">Min ($)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      min={0}
                      max={priceRange[1]}
                    />
                  </div>
                  <span className="text-slate-400 mt-5">-</span>
                  <div className="flex-1">
                    <label className="text-xs text-slate-500 mb-1 block">Max ($)</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border border-slate-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      min={priceRange[0]}
                      max={filterOptions.maxPrice}
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                  min={0} 
                  max={filterOptions.maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
              </div>

              {/* Dynamic Checkbox Filters */}
              <FilterSection 
                title="Department" 
                options={filterOptions.genders} 
                selected={selectedGenders} 
                onChange={(val) => toggleFilter(setSelectedGenders, val)} 
              />
              <FilterSection 
                title="Brands" 
                options={filterOptions.brands} 
                selected={selectedBrands} 
                onChange={(val) => toggleFilter(setSelectedBrands, val)} 
              />
              <FilterSection 
                title="Categories" 
                options={filterOptions.categories} 
                selected={selectedCategories} 
                onChange={(val) => toggleFilter(setSelectedCategories, val)} 
              />
              <FilterSection 
                title="Product Type" 
                options={filterOptions.types} 
                selected={selectedTypes} 
                onChange={(val) => toggleFilter(setSelectedTypes, val)} 
              />
              <FilterSection 
                title="Colors" 
                options={filterOptions.colors} 
                selected={selectedColors} 
                onChange={(val) => toggleFilter(setSelectedColors, val)} 
              />
            </div>
          </div>
          
          {/* Mobile Footer Sticky Action */}
          <div className="lg:hidden p-4 border-t border-slate-200 bg-slate-50 sticky bottom-0 z-10">
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-slate-900 text-white font-bold tracking-widest uppercase text-sm py-4 rounded-lg shadow-md hover:bg-slate-800"
            >
              Show {filteredProducts.length} Items
            </button>
          </div>
        </aside>

        {/* Main Content (Product Grid) */}
        <div className="flex-1">
          {/* Desktop Top Bar */}
          <div className="hidden lg:flex items-center justify-between mb-6 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-slate-700 font-medium">
              Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> results
            </span>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-lg p-8 sm:p-12 text-center shadow-sm">
              <svg className="mx-auto h-12 w-12 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 mb-6 text-sm">We couldn&apos;t find anything matching your current filters.</p>
              <button 
                onClick={clearAllFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper Component for Checkbox Lists
function FilterSection({ 
  title, 
  options, 
  selected, 
  onChange 
}: { 
  title: string, 
  options: string[], 
  selected: string[], 
  onChange: (val: string) => void 
}) {
  if (options.length === 0) return null;
  return (
    <div>
      <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">{title}</h3>
      <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        {options.map(option => (
          <label key={option} className="flex items-start space-x-3 cursor-pointer group">
            <div className="flex items-center h-5 flex-shrink-0">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                checked={selected.includes(option)}
                onChange={() => onChange(option)}
              />
            </div>
            <span className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-900 leading-5 select-none break-words">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
