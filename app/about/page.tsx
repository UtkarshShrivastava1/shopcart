import { shopConfig } from "@/config/shopConfig";

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32 flex-grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">About {shopConfig.storeName}</h2>
          <p className="mt-6 text-lg/8 text-slate-600">
            We are redefining digital retail. The {shopConfig.storeName} engine is built for speed, elegance, and conversion.
            This demo showcases a strictly typed, structurally sound approach to complex multi-attribute inventory matrixes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base/7 font-semibold text-slate-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                Zero Friction
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-slate-600">
                <p className="flex-auto">Experience browsing without roadblocks. No account creation, no intrusive profiling. Just pure product discovery.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base/7 font-semibold text-slate-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                   <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                Dynamic Inventory Rules
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-slate-600">
                <p className="flex-auto">Our engine handles complex overlapping variations effortlessly. Selecting a color accurately locks out unavailable size variants in real-time.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base/7 font-semibold text-slate-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
                Edge Optimized
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-slate-600">
                <p className="flex-auto">Built on Next.js, the framework compiles completely static where possible, offering sub-second page transitions.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
