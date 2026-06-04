# ShopCart Core Demo - Implementation Plan

This document outlines the phased approach to building the "ShopCart Core Demo", focusing on the core requirement: a high-fidelity, multi-attribute product selection matrix, with a zero-friction dummy checkout, while keeping the overall effort manageable for a client demo.

## Phase 1: Foundation & Data Modeling
*Focus: Setting up the static data structures and basic configuration.*

- [x] **Create Configuration:** Set up `config/shopConfig.ts` for global store metadata (store name, theme colors, etc.).
- [x] **Mock Data Creation:** Build `data/products.ts`. This is crucial. We need 3-4 robust clothing products with deep variation matrices (combinations of Colors, Patterns, and mapping which Sizes are available for each combination).
- [x] **Global Styling Setup:** Ensure Tailwind configuration uses the slate/indigo token palette and any base global CSS is configured in `app/globals.css`.

## Phase 2: Global Layout & Navigation
*Focus: The structural frame of the application.*

- [x] **Navbar Component:** Build `components/Navbar.tsx` containing navigation links (Home, Shop, About, Contact) and a Cart UI trigger/counter.
- [x] **Footer Component:** Build `components/Footer.tsx` with simple mapping of utility links.
- [x] **App Layout Integration:** Update `app/layout.tsx` to wrap all pages with the Navbar and Footer.

## Phase 3: Static & Informational Pages
*Focus: Rapidly scaffolding the non-complex pages to give the app a complete feel.*

- [x] **Home Page (`app/page.tsx`):** Create a brand landing hero section with a call-to-action button linking to the Shop.
- [x] **About Page (`app/about/page.tsx`):** Build a minimalist brand storytelling layout.
- [x] **Contact Page (`app/contact/page.tsx`):** Create a basic UI for a customer query form (UI only, no actual email integration needed).

## Phase 4: Core Engine - The Shop & Variant Matrix 
*Focus: The main evaluation criteria for the client – complex attribute handling.*

- [x] **Product Card Component (`components/ProductCard.tsx`):** 
    - Implement React state to track selected variants (Color/Pattern).
    - **Reactive Logic:** Build the logic that checks the selected Color/Pattern against the variation matrix and dynamically disables/grays out unavailable Size badges.
    - Add "Add to Bucket" functionality (passing the specific selected variant to the cart).
- [x] **Catalog Component (`components/Catalog.tsx`):** Build the responsive grid layout to render multiple `ProductCard` components using the data from `data/products.ts`.
- [x] **Shop Page (`app/shop/page.tsx`):** Implement the Shop page view, importing and rendering the Catalog.

## Phase 5: Client-Side Bucket & Dummy Checkout
*Focus: Local storage persistence and the frictionless mock checkout flow.*

- [x] **Cart State Management:** Create a lightweight cart state manager (using React Context or Zustand) that automatically syncs with `localStorage`.
- [x] **Cart UI:** Build a simple sliding Cart sidebar or a Cart dropdown to view added items and their selected variants.
- [x] **Order Form Modal (`components/OrderModal.tsx`):** Create the dummy checkout form collecting Name, Shipping Address, and WhatsApp/Phone Number.
- [x] **Dummy Fulfillment Logic:** Wire up the "Place Order" button to:
    - Perform basic client-side form validation.
    - Clear the cart state (and `localStorage`).
    - Trigger a premium UI success Toast/Alert confirming the dummy order payload.

---
*Note: As this is a demo to secure client approval, we are intentionally omitting live backend integrations, user accounts, and payment gateways, prioritizing a flawless UI/UX on the multi-attribute selection.*