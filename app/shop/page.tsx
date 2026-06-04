import Catalog from '@/components/Catalog';
import { shopConfig } from '@/config/shopConfig';

export const metadata = {
  title: `Shop | ${shopConfig.storeName}`,
  description: 'Explore our multi-attribute digital catalog engine.',
};

export default function ShopPage() {
  return (
    <div className="flex-grow flex flex-col bg-slate-50">
      <div className="bg-slate-900 border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 uppercase">
            The Collection
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light">
            Curated essentials. Refined details. Uncompromising quality.
          </p>
        </div>
      </div>
      
      {/* Catalog Grid */}
      <Catalog />
    </div>
  );
}
