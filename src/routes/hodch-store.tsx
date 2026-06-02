import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "../components/site/Footer";
import { GradientTile } from "../components/site/GradientTile";
import { SectionHeading } from "../components/site/SectionHeading";
import { useCart } from "../components/site/CartContext";

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
    ],
  }),
  component: Page,
});

const HERO_PRODUCTS = [
  { name: "Vessel No.3", gradient: "linear-gradient(135deg,#d4a870,#8b6030)" },
  { name: "Linen Throw", gradient: "linear-gradient(135deg,#c8d4c0,#607858)" },
  { name: "Arc Floor Lamp", gradient: "linear-gradient(135deg,#b0b8c8,#405068)" },
  { name: "Carved Bowl", gradient: "linear-gradient(135deg,#d8c0a8,#907060)" },
];

const CATEGORIES = [
  { name: "Furniture", count: 48, gradient: "linear-gradient(160deg,#c8b89a,#6b5040)" },
  { name: "Lighting", count: 32, gradient: "linear-gradient(160deg,#b0c0d0,#304858)" },
  { name: "Decor & Objects", count: 76, gradient: "linear-gradient(160deg,#d0c8b8,#786858)" },
  { name: "Textiles", count: 41, gradient: "linear-gradient(160deg,#c8d0c0,#485840)" },
  { name: "Tabletop", count: 58, gradient: "linear-gradient(160deg,#d8c8c0,#785850)" },
  { name: "Outdoor", count: 24, gradient: "linear-gradient(160deg,#c0d0c0,#406040)" },
];

const PRODUCTS = [
  { name: "Synchronicity Vase", mat: "Ceramic", price: "$485", gradient: "linear-gradient(135deg,#d4c0a8,#907858)" },
  { name: "Arc Pendant Light", mat: "Brass", price: "$1,240", gradient: "linear-gradient(135deg,#d4c890,#786820)" },
  { name: "Pacific Lounge Chair", mat: "Oak + Linen", price: "$3,800", gradient: "linear-gradient(135deg,#c0c8b8,#506040)" },
  { name: "Marble Side Table", mat: "Travertine", price: "$2,100", gradient: "linear-gradient(135deg,#e0d8d0,#908878)" },
  { name: "Nudo Throw", mat: "Merino Wool", price: "$340", gradient: "linear-gradient(135deg,#d0c0b8,#806858)" },
  { name: "Echo Floor Lamp", mat: "Blackened Steel", price: "$1,680", gradient: "linear-gradient(135deg,#b0b8c0,#384050)" },
  { name: "Wabi Bowl Set", mat: "Stoneware", price: "$220", gradient: "linear-gradient(135deg,#d0c8b8,#786848)" },
  { name: "Linen Duvet Cover", mat: "Belgian Linen", price: "$590", gradient: "linear-gradient(135deg,#e0dcd8,#907870)" },
];

function Page() {
  const { open: openCart } = useCart();
  return (
    <main style={{ background: "#faf9f7" }}>
      {/* HERO split */}
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div
          className="flex items-center justify-center px-8 py-32 md:py-0"
          style={{ background: "linear-gradient(135deg,#1a1a1a 0%,#2e2b28 100%)" }}
        >
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="font-display text-white"
              style={{ fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05 }}
            >
              Objects of Desire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 text-[12px] uppercase tracking-[0.3em]"
              style={{ color: "#c8b89a" }}
            >
              Curated Luxury for the Considered Home
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-px md:min-h-screen" style={{ background: "#1a1a1a" }}>
          {HERO_PRODUCTS.map((p) => (
            <GradientTile
              key={p.name}
              gradient={p.gradient}
              className="flex items-center justify-center"
              style={{ minHeight: 220 }}
            >
              <span className="font-display text-2xl text-white md:text-3xl">{p.name}</span>
            </GradientTile>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading className="text-center text-4xl md:text-5xl">Shop The Edit</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <GradientTile
                key={c.name}
                gradient={c.gradient}
                className="flex aspect-[2/3] items-end p-8"
                hoverOverlay={
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white">
                    Shop {c.name} →
                  </span>
                }
              >
                <div>
                  <div className="font-display text-3xl text-white">{c.name}</div>
                  <div className="mt-2 text-[12px] uppercase tracking-[0.2em]" style={{ color: "#c8b89a" }}>
                    {c.count} Items
                  </div>
                </div>
              </GradientTile>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between">
            <SectionHeading className="text-3xl md:text-4xl">New Arrivals</SectionHeading>
            <a href="#" className="hidden text-[11px] uppercase tracking-[0.3em] md:inline" style={{ color: "#c8b89a" }}>
              View All →
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <div
                  className="aspect-square w-full"
                  style={{ background: p.gradient }}
                />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display text-xl text-[#1a1a1a]">{p.name}</div>
                    <div className="mt-1 text-[12px] uppercase tracking-[0.2em] text-[#7a7570]">
                      {p.mat}
                    </div>
                  </div>
                  <div className="text-base text-[#1a1a1a]">{p.price}</div>
                </div>
                <button
                  onClick={openCart}
                  className="group/btn mt-3 inline-block text-[12px] uppercase tracking-[0.25em]"
                  style={{ color: "#c8b89a" }}
                >
                  <span className="relative">
                    Add to Cart
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c8b89a] transition-all duration-300 group-hover/btn:w-full" />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="px-6 py-24 text-center md:py-32" style={{ background: "#e8e2d9" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[800px]"
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(60px, 12vw, 96px)", color: "#c8b89a", lineHeight: 1 }}
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

      {/* LOOKBOOK */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <GradientTile
          gradient="linear-gradient(135deg,#2e2b28,#c8b89a)"
          className="flex min-h-[420px] items-end p-10 md:p-16"
          hoverOverlay={
            <span className="text-[11px] uppercase tracking-[0.3em] text-white">Explore →</span>
          }
        >
          <div>
            <h3 className="font-display text-3xl text-white md:text-[40px]">The Living Room Edit</h3>
            <p className="mt-3 text-sm text-white/80">12 objects for a considered living space</p>
          </div>
        </GradientTile>
        <GradientTile
          gradient="linear-gradient(135deg,#a8c0b8,#304840)"
          className="flex min-h-[420px] items-end p-10 md:p-16"
          hoverOverlay={
            <span className="text-[11px] uppercase tracking-[0.3em] text-white">Explore →</span>
          }
        >
          <div>
            <h3 className="font-display text-3xl text-white md:text-[40px]">Autumn Collection</h3>
            <p className="mt-3 text-sm text-white/80">New arrivals in stone, linen & brass</p>
          </div>
        </GradientTile>
      </section>

      <Footer brand="HODCH Store" extraLinks={["Shipping & Returns", "Care Guide", "Trade Program"]} />
    </main>
  );
}
