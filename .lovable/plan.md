# 3-Page Luxury Interior Design Site

A fully-routed marketing + commerce site with three pages sharing a global nav/footer, built on the project's existing TanStack Start + Tailwind v4 stack. All visuals are CSS gradients / SVG art — no external image URLs.

## Stack notes (important deviation from prompt)

The prompt asks for React Router, but this project uses **TanStack Router** (file-based routing under `src/routes/`). I'll use TanStack Router instead — the routing UX (shared nav, page transitions, 3 routes) is identical. Tailwind v4 is configured via `src/styles.css` (no `tailwind.config.js`), so color tokens go there as CSS custom properties exposed through `@theme inline`. Framer Motion will be added via `bun add framer-motion`.

## Routes

- `/` → Raunaq Salariya Designs (`src/routes/index.tsx`) — replaces current placeholder
- `/interior-spaces` → Interior Spaces (`src/routes/interior-spaces.tsx`)
- `/hodch-store` → Hodch Store (`src/routes/hodch-store.tsx`)

Each route file declares its own `head()` with distinct title / description / og tags.

## Design system (added to `src/styles.css`)

New tokens (converted to oklch where Tailwind expects, but exposed as the requested hex via CSS vars):
- `--bg #faf9f7`, `--black #1a1a1a`, `--accent #c8b89a`, `--stone #e8e2d9`, `--charcoal #2e2b28`, `--muted #7a7570`
- Registered in `@theme inline` as `--color-bg`, `--color-accent`, `--color-stone`, `--color-charcoal`, `--color-muted` so Tailwind utilities like `bg-bg`, `text-muted`, `border-stone` work.
- Google Fonts (Cormorant Garamond + Inter) loaded via `@import url(...)` at top of `styles.css`; font families exposed as `--font-display` and `--font-sans` and registered in `@theme inline` so `font-display` / `font-sans` utilities work.

## Shared components (`src/components/site/`)

- `Nav.tsx` — sticky top nav. Transparent over hero, switches to `--bg` with `1px` `--stone` bottom border on scroll (scroll listener + Framer Motion `animate`). Left: dynamic wordmark based on current route. Center: 3 TanStack `<Link>`s. Right: Search / Account / Cart icons (lucide-react) with cart count badge `0`. Mobile: hamburger → full-screen overlay, links stagger-in from left via Framer Motion.
- `Footer.tsx` — `#1a1a1a` bg, accepts `brand` prop and optional extra links (used by Hodch).
- `CartDrawer.tsx` — right-side Framer Motion slide-in drawer, opens via shared context (`CartContext`) so the nav cart icon on any page can open it. Empty state, subtotal $0.00, accent CTA.
- `SectionHeading.tsx` — reusable heading with fade-up on-scroll (`whileInView`, `y:30→0`, `opacity:0→1`, duration 0.6).
- `GradientTile.tsx` — div with inline `background` style, used for project/category/product tiles.

All three route files render `<Nav />` + page content + `<Footer brand="…" />` and are wrapped in a shared `<CartProvider>` mounted in `__root.tsx`. Page transitions: Framer Motion `AnimatePresence` keyed by `useLocation()` pathname, fade 0→1 over 0.3s.

## Page 1 — `/` Raunaq Salariya Designs

Hero (full-vh, `linear-gradient(135deg,#2e2b28,#4a4540 40%,#c8b89a)`), centered display heading + uppercase subtitle, bouncing scroll indicator (Framer Motion infinite `y` loop). Then: Selected Works asymmetric grid (6 gradient tiles with hover darken + "View Project →"), Philosophy split section with SVG overlapping-circles art on gradient left half, Services strip (4 white cards on stone bg, hover `y:-4`), Press row of 5 italic publication wordmarks.

## Page 2 — `/interior-spaces`

Hero (full-vh, `linear-gradient(160deg,#f0ebe4,#d4c9b8 50%,#a89880)`), left-aligned eyebrow + 80px display heading + outlined CTA (fills black on hover). Horizontal snap-scroll row of 5 wide project cards (420×560 gradient tiles). 4-step Process grid with giant stone-colored numerals. Two-column editorial: dark gradient quote left, stone philosophy bullets right with accent left-border. Dark CTA section "Start Your Project".

## Page 3 — `/hodch-store`

Split hero: dark left half with "Objects of Desire" heading, right half 2×2 mini product gradient grid. "Shop The Edit" 3-column category tiles (6 categories, 2:3 portrait gradients). "New Arrivals" 4-column product grid (8 products, gradient swatch + name/material/price/accent "Add to Cart" link that toggles cart drawer open). Brand Story strip with giant `HODCH` accent wordmark. Lookbook: 2 side-by-side gradient cards with hover darken + "Explore →". Cart drawer reused from shared component.

## Animations (global)

- Section headings: `motion.h2` with `whileInView` fade-up.
- Card grids: parent `motion.div` with `staggerChildren: 0.1`, children fade-up.
- Buttons: `whileHover={{scale:1.02}} whileTap={{scale:0.98}}`.
- Page transitions via `AnimatePresence` in `__root.tsx`.

## Responsive

Tailwind responsive utilities throughout: hero typography clamps via `text-[clamp(...)]`, grids collapse to 1–2 cols on mobile, nav switches to hamburger below `md`, horizontal scroll on page 2 stays horizontal on all sizes (touch-friendly).

## File changes

New:
- `src/routes/interior-spaces.tsx`
- `src/routes/hodch-store.tsx`
- `src/components/site/Nav.tsx`
- `src/components/site/Footer.tsx`
- `src/components/site/CartDrawer.tsx`
- `src/components/site/CartContext.tsx`
- `src/components/site/SectionHeading.tsx`
- `src/components/site/GradientTile.tsx`

Modified:
- `src/routes/index.tsx` — replace placeholder with Page 1
- `src/routes/__root.tsx` — mount `CartProvider` + `AnimatePresence` page transition wrapper around `<Outlet />`
- `src/styles.css` — add Google Font import, brand color tokens, font tokens
- `package.json` — add `framer-motion` via `bun add`

No backend, no Lovable Cloud needed — purely presentational.
