# System Context: ShopCart Core Demo Boilerplate

## 🎯 Project Objective
ShopCart is a performance-optimized, white-label digital catalog engine designed for rapid storefront deployment without database infrastructure. This specific configuration covers the **Independent Product Demo Version** used to showcase high-fidelity multi-attribute product selection, dynamic layout mapping, and a frictionless, zero-profiling ordering loop.

---

## 🏗️ Technical Stack & Page Architecture
- **Framework:** Next.js 15+ (App Router, strict TypeScript)
- **Styling:** Tailwind CSS (Modern utility layout, slate/indigo token palette)
- **Pages/Navbar Navigation Layout:**
  - `Home`: Brand landing hero space and featured concept imagery.
  - `Shop`: The engine's core. Features the static catalog grid and the filtering/selection matrix.
  - `About`: Brand storytelling layout.
  - `Contact`: Minimalist customer query interface.
  - `Footer`: Global structural footer mapping utility links.

---

## 📌 Core Architecture & Selection Matrix Rules (Demo Version)

### 1. Multi-Attribute Variant Handling (The Key Core Engine Feature)
The client's main evaluation criteria is how cleanly the system processes complex clothing attributes. The architecture must elegantly organize and render:
- **Brand / Manufacturer Tracking:** Categorizing items by design label or origin.
- **Structural Classification:** Splitting inventory by Category (e.g., Oversized, Relaxed, Crop) and Type/Pattern (e.g., Heavyweight Solid, Acid Wash, Minimalist Stripe).
- **Deep Variation Matrices:** Products contain multi-layered variants handling **Color Options**, **Pattern Variations**, and associated **Size Availability** maps.
- **Reactive UI Constraints:** Selecting a variation (e.g., Color/Pattern combination) must instantly update available sizes. If a size is missing from that specific variant's matrix array, its UI badge must instantly lock/gray-out to prevent incorrect configurations from entering the bucket.

### 2. Client-Side Bucket & Dummy Checkout (No Live Integrations)
- **Zero User Profiling:** Absolutely no logins, registrations, or account creation states.
- **Bucket Storage:** Selected variant item states persist inside the browser's native `localStorage` layer.
- **Order Confirmation Workflow:** The order form captures **Name, Shipping Address, and WhatsApp/Phone Number**. 
- **Fulfillment Layer (Demo Rules):** Clicking "Place Order" bypasses live API/WhatsApp links. It triggers client-side validation, wipes the local cart storage state, and surfaces a premium UI success/toast alert banner confirming a dummy order payload was compiled successfully.

---

## 📁 Directory Architecture
```text
shopcart-core/
├── app/                  # App Router views (page.tsx, shop/page.tsx, about/page.tsx, etc.)
├── components/           # Functional layout blocks (Navbar, Footer, Catalog, ProductCard, OrderModal)
├── config/               # shopConfig.ts (Global store metadata settings)
└── data/                 # products.ts (The strict multi-attribute static product arrays)