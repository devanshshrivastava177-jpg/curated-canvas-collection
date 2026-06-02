
## Goals

1. Use the uploaded **logo** and **founder photo** as real assets (no cropping/distortion).
2. Replace the abstract gradient tiles for projects with **AI-generated realistic interior images** matching each project name.
3. Add a rich **"About / Founder" section** using the supplied bio copy.
4. Make every button/link functional, add buttery transitions, custom cursor accents, and more visual detail.
5. Wire up a **backend** (Lovable Cloud) for the Contact form, Newsletter, and HODCH Store cart/orders.

---

## 1. Assets

Upload via `lovable-assets` CLI (kept off-repo, served from CDN):
- `logo.jpg` → uploaded user logo. Used in the Nav (left of wordmark) and Footer.
- `founder.jpg` → founder portrait. Used in About section with a soft duotone overlay + decorative frame so the image is never cropped awkwardly (uses `object-cover` with `aspect-[4/5]` and a layered border + offset accent block).

Generate realistic interior images (premium model, landscape) for each project:
- Marlboro Residence, Pacific Penthouse, Magnum Opus Villa, Hillcrest Estate, Austin Proper Hotel, Malibu Beach House
- Plus a hero image for Interior Spaces page + 3 HODCH lifestyle lookbook images
- Plus 4 HODCH product images (vase, lamp, chair, throw)

All stored as Lovable Assets, referenced via `.asset.json` imports — no broken `<img>` tags, no Unsplash.

---

## 2. New "Atelier / Founder" section on `/`

Inserted between Philosophy and Services. Layout: split (5/7 cols).
- Left: founder portrait in a layered frame (image + offset sand-colored block + thin gold border).
- Right: eyebrow "Est. Atelier", display heading "A practice rooted in restraint, ritual, and craft.", bio paragraphs from the brief, signature line "— Raunaq Salariya, Founder & Creative Director", and a small stat row (5 Yrs Experience · B.Sc. Interior Design, Amity · Multi-City Practice).
- Fade-up + parallax-lite on scroll.

---

## 3. Project tiles upgrade

`GradientTile` becomes `ProjectCard` — uses the generated image as background, gradient overlay for legibility, tag + title bottom-left, hover: image `scale(1.05)`, overlay darkens, "View Project →" slides in. Keeps the asymmetric grid.

---

## 4. Interactions polish (global)

- Custom cursor: small dot + outline ring that scales on hoverable elements (`a, button, [data-cursor]`). Disabled on touch.
- Tailwind transitions standardized: `cubic-bezier(.2,.8,.2,1)` 400ms.
- Buttons: shared `<Button>` style with hover sheen, scale 1.02 / active 0.98.
- Page transitions: keep fade, add 8px y translate.
- Nav: add active underline animation; mobile menu already exists.
- Marquee strip of press logos (replacing static row).
- Scroll progress bar at top.

---

## 5. Functional buttons / backend

Enable **Lovable Cloud**. Create tables:
- `contact_messages` (id, name, email, message, project_type, created_at)
- `newsletter_subscribers` (id, email, created_at, unique email)
- `orders` (id, items jsonb, total, customer_email, customer_name, address, status, created_at)

Server functions (`createServerFn`):
- `submitContact` — validates with Zod, inserts row, returns `{ok:true}`.
- `subscribeNewsletter` — upsert by email.
- `placeOrder` — accepts cart payload, inserts order, clears cart on client.

UI wiring:
- New **Contact section** on `/` with working form (toast on success via sonner).
- Footer newsletter input → `subscribeNewsletter`.
- HODCH cart drawer gets a **Checkout** form (name/email/address) → `placeOrder`.
- All nav links, "View Project →", "Read More →", social icons get real `<Link>` / `href` targets (anchor sections or `/interior-spaces`, `/hodch-store`).

---

## 6. Extra detailing

- Subtle grain texture overlay on hero (SVG noise).
- Decorative serif numerals for section indices (01 — Works, 02 — Atelier, etc.).
- Animated underline on all inline links (`story-link`).
- Stat counter that counts up on scroll into Atelier section.
- Lookbook page on `/hodch-store` gets a second editorial row with the generated lifestyle images.

---

## Technical Notes

- Stack: TanStack Start + Tailwind v4 + Framer Motion + Lovable Cloud (already on this template).
- Image generation: agent-side `imagegen--generate_image` (premium for hero, fast for grid), saved to `src/assets/projects/*.jpg`.
- All colors continue to use the existing tokens in `src/styles.css` (sand, stone, charcoal).
- Form validation via Zod; toasts via existing `sonner`.
- No `<img>` tag without a real asset URL — fallback is the existing gradient tile if asset import fails.

---

## Files touched

- New: `src/components/site/ProjectCard.tsx`, `Atelier.tsx`, `ContactForm.tsx`, `Cursor.tsx`, `ScrollProgress.tsx`, `Marquee.tsx`
- New server fns: `src/lib/contact.functions.ts`, `src/lib/newsletter.functions.ts`, `src/lib/orders.functions.ts`
- New migrations for the 3 tables (with GRANTs + RLS).
- Updated: `Nav.tsx` (logo), `Footer.tsx` (logo + newsletter), `routes/index.tsx`, `routes/interior-spaces.tsx`, `routes/hodch-store.tsx`, `CartDrawer.tsx` (checkout), `styles.css` (cursor, transitions).
- Asset pointers under `src/assets/`.

Want me to proceed with all of this, or trim anything (e.g. skip Cloud backend, skip custom cursor)?
