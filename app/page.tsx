import Link from "next/link";
import { shopConfig } from "@/config/shopConfig";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  // Grab a few products for the featured sections
  const newArrivals = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <div className="flex-grow flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] bg-slate-50 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #64748b 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        
        <div className="z-10 text-center max-w-4xl px-6 relative mt-[-4rem]">
          <span className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4 block">New Season 2026</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Define Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Aesthetic.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {shopConfig.description}. Experience frictionless catalog browsing with our high-fidelity, multi-attribute selection engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase font-bold text-white transition-all duration-300 bg-slate-900 border border-transparent rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1">
              Shop The Collection
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase font-bold text-slate-900 transition-all duration-300 bg-white border border-slate-200 rounded-full hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-sm hover:shadow-md hover:-translate-y-1">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">New Arrivals</h2>
              <p className="text-slate-500 text-lg">The latest pieces dropped this week.</p>
            </div>
            <Link href="/shop" className="hidden md:inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors uppercase tracking-wider text-sm mt-4 md:mt-0">
              View All <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors uppercase tracking-wider text-sm">
              View All <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop" 
            alt="Fashion Banner" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">Elevated Basics for the Modern Wardrobe.</h2>
            <p className="text-lg text-slate-300 mb-8 font-light leading-relaxed">
              We focus on premium materials, ethical manufacturing, and timeless silhouettes. Discover our core collection designed to last.
            </p>
            <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors shadow-lg hover:-translate-y-1 duration-300">
              Shop Essentials
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Trending Now</h2>
            <div className="w-24 h-1 bg-indigo-600 rounded-full mb-6"></div>
            <p className="text-slate-500 text-lg max-w-2xl">Our most sought-after pieces, currently flying off the shelves. Grab them before they&apos;re gone.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}