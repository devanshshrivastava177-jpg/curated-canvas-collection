import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Footer } from "../components/site/Footer";
import { SectionHeading } from "../components/site/SectionHeading";
import { useCart } from "../components/site/CartContext";

import vase from "@/assets/products/vase.jpg";
import lamp from "@/assets/products/lamp.jpg";
import chair from "@/assets/products/chair.jpg";
import throwImg from "@/assets/products/throw.jpg";
import look1 from "@/assets/lookbook/look1.jpg";
import look2 from "@/assets/lookbook/look2.jpg";
import look3 from "@/assets/lookbook/look3.jpg";

export const Route = createFileRoute("/hodch-store")({
  head: () => ({
    meta: [
      { title: "HODCH Store — Objects of Desire for the Considered Home" },
      {
        name: "description",
        content:
          "HODCH is a curated destination for luxury home goods — furniture, lighting, textiles, and tabletop, selected for craft and longevity.",
      },
      { property: "og:title", content: "HODCH Store" },
      { property: "og:description", content: "Objects of desire — curated luxury for the considered home." },
      { property: "og:image", content: look1 },
    ],
  }),
  component: Page,
});

const HERO_TILES = [
  { name: "Synchronicity Vase", img: vase },
  { name: "Threadwork Throw", img: throwImg },
  { name: "Arc Brass Lamp", img: lamp },
  { name: "Pacific Lounge Chair", img: chair },
];

const CATEGORIES = [
  { name: "Furniture", count: 48, img: chair },
  { name: "Lighting", count: 32, img: lamp },
  { name: "Decor & Objects", count: 76, img: vase },
  { name: "Textiles", count: 41, img: throwImg },
  { name: "Tabletop", count: 58, img: look2 },
  { name: "Lookbook", count: 24, img: look1 },
];

const PRODUCTS = [
  { id: "p1", name: "Synchronicity Vase", mat: "Ceramic", price: 485, image: vase },
  { id: "p2", name: "Arc Pendant Light", mat: "Brass", price: 1240, image: lamp },
  { id: "p3", name: "Pacific Lounge Chair", mat: "Oak + Leather", price: 3800, image: chair },
  { id: "p4", name: "Nudo Throw", mat: "Merino Wool", price: 340, image: throwImg },
  { id: "p5", name: "Threadwork Cushion", mat: "Linen", price: 220, image: throwImg },
  { id: "p6", name: "Echo Floor Lamp", mat: "Blackened Steel", price: 1680, image: lamp },
  { id: "p7", name: "Wabi Bowl Set", mat: "Stoneware", price: 220, image: vase },
  { id: "p8", name: "Atelier Armchair", mat: "Walnut + Bouclé", price: 2900, image: chair },
];

function Page() {
  const { add } = useCart();

  const onAdd = (p: typeof PRODUCTS[number]) => {
    add({ id: p.id, name: p.name, price: p.price, mat: p.mat, image: p.image });
    toast.success(`${p.name} added`, { description: "Open the cart to checkout." });
  };

  return (
    <main style={{ background: "#faf9f7" }}>
      {/* HERO split */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div
          className="grain relative flex items-center justify-center overflow-hidden px-8 py-32 md:py-0"
          style={{ background: "linear-gradient(135deg,#1a1a1a 0%,#2e2b28 100%)" }}
        >
          <div className="relative z-10 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "#c8b89a" }}
            >
              HODCH · The Considered Home
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 font-display text-white"
              style={{ fontSize: "clamp(48px, 6.5vw, 84px)", lineHeight: 1.02 }}
            >
              Objects
              <br />
              of Desire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 max-w-sm text-sm text-white/70"
            >
              Curated objects for everyday living. Each piece selected for craft, materiality,
              and longevity.
            </motion.p>
            <motion.a
              href="#shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-block px-8 py-4 text-[11px] uppercase tracking-[0.3em]"
              style={{ background: "#c8b89a", color: "#1a1a1a" }}
            >
              Shop The Edit
            </motion.a>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-px md:min-h-screen" style={{ background: "#1a1a1a" }}>
          {HERO_TILES.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 font-display text-lg text-white md:text-xl">
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">01 — Categories</span>
          <SectionHeading className="mt-3 text-4xl md:text-5xl">Shop The Edit</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <motion.a
                key={c.name}
                href="#shop"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative block aspect-[3/4] overflow-hidden"
                data-cursor="hover"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-display text-3xl text-white">{c.name}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em]" style={{ color: "#c8b89a" }}>
                    {c.count} Items
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section id="shop" className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">02 — New Arrivals</span>
              <SectionHeading className="mt-3 text-3xl md:text-4xl">The latest additions.</SectionHeading>
            </div>
            <a href="#" className="hidden text-[11px] uppercase tracking-[0.3em] story-link md:inline" style={{ color: "#c8b89a" }}>
              View All →
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#e8e2d9]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-xl text-[#1a1a1a]">{p.name}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#7a7570]">{p.mat}</div>
                  </div>
                  <div className="text-base text-[#1a1a1a]">${p.price.toLocaleString()}</div>
                </div>
                <button
                  onClick={() => onAdd(p)}
                  className="story-link mt-3 inline-block text-[11px] uppercase tracking-[0.25em]"
                  style={{ color: "#c8b89a" }}
                >
                  Add to Cart →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK */}
      <section className="px-6 py-24 md:px-10 md:py-32" style={{ background: "#e8e2d9" }}>
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">03 — Lookbook</span>
          <SectionHeading className="mt-3 text-3xl md:text-4xl">The considered home.</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "The Living Room Edit", sub: "12 objects for a considered living space", img: look1 },
              { title: "Tabletop Stories", sub: "Brass, ceramic, linen for the table", img: look2 },
              { title: "Bedroom Sanctuary", sub: "Soft layers in oat and cream", img: look3 },
            ].map((l, i) => (
              <motion.a
                key={l.title}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative block aspect-[4/5] overflow-hidden"
                data-cursor="hover"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-[1.06]"
                  style={{ backgroundImage: `url(${l.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="font-display text-2xl text-white md:text-3xl">{l.title}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em]" style={{ color: "#c8b89a" }}>
                    {l.sub}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-white px-6 py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[800px]"
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(60px, 12vw, 120px)", color: "#c8b89a", lineHeight: 1 }}
          >
            HODCH
          </h2>
          <p className="mt-4 text-[12px] uppercase tracking-[0.3em] text-[#7a7570]">
            The Considered Home
          </p>
          <p className="mx-auto mt-8 max-w-[600px] text-base leading-relaxed text-[#7a7570]">
            HODCH is a curated destination for objects that elevate everyday living. Each piece
            is selected for its craft, materiality, and longevity.
          </p>
        </motion.div>
      </section>

      <Footer brand="HODCH Store" extraLinks={["Shipping & Returns", "Care Guide", "Trade Program"]} />
    </main>
  );
}
