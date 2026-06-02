import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "../components/site/Footer";
import { GradientTile } from "../components/site/GradientTile";
import { FadeUp, SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/interior-spaces")({
  head: () => ({
    meta: [
      { title: "Interior Spaces — Editorial Interior Design Studio" },
      {
        name: "description",
        content:
          "A curated interior design studio crafting soulful interiors for discerning clients across New York, LA, London, Miami, and beyond.",
      },
      { property: "og:title", content: "Interior Spaces Studio" },
      {
        property: "og:description",
        content: "Where space becomes story. Editorial interiors for the considered home.",
      },
    ],
  }),
  component: Page,
});

const PROJECTS = [
  { name: "The Lupine Loft", loc: "New York", gradient: "linear-gradient(160deg,#c9b8a8,#7a6858)" },
  { name: "Canela Interiors", loc: "Los Angeles", gradient: "linear-gradient(160deg,#b8d4c8,#4a7868)" },
  { name: "Dahlia Suite", loc: "London", gradient: "linear-gradient(160deg,#d8c8d8,#785878)" },
  { name: "Second Act Residence", loc: "Miami", gradient: "linear-gradient(160deg,#e8d0a8,#9a7840)" },
  { name: "Grotto Villa", loc: "Amalfi", gradient: "linear-gradient(160deg,#a8b8c8,#384858)" },
];

const STEPS = [
  { n: "01", name: "Discovery", desc: "Understanding your vision, lifestyle, and spatial needs." },
  { n: "02", name: "Concept", desc: "Developing mood boards, material palettes, and spatial layouts." },
  { n: "03", name: "Design", desc: "Detailed drawings, specification sheets, and 3D visualization." },
  { n: "04", name: "Delivery", desc: "Procurement, installation, and final styling." },
];

const PHILOSOPHY = [
  "Restraint as a discipline — every object earns its place.",
  "Material honesty — wood, stone, linen, brass, allowed to age.",
  "Light first — every room designed around its window.",
];

function Page() {
  return (
    <main style={{ background: "#faf9f7" }}>
      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center"
        style={{ background: "linear-gradient(160deg,#f0ebe4 0%,#d4c9b8 50%,#a89880 100%)" }}
      >
        <div className="px-6 md:pl-[8vw] md:pr-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block text-[11px] uppercase tracking-[0.3em] text-[#7a7570]"
          >
            Interior Spaces Studio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="mt-6 font-display text-[#1a1a1a]"
            style={{ fontSize: "clamp(48px, 8vw, 80px)", lineHeight: 1 }}
          >
            Where Space
            <br />
            Becomes Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-md text-base text-[#7a7570]"
          >
            A curated design studio crafting soulful interiors for discerning clients.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a", color: "#faf9f7" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mt-10 px-8 py-4 text-[11px] uppercase tracking-[0.3em]"
            style={{ border: "1px solid #1a1a1a", color: "#1a1a1a" }}
          >
            Explore Our Work
          </motion.button>
        </div>
      </section>

      {/* HORIZONTAL PROJECTS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeading className="text-3xl md:text-4xl">Our Projects</SectionHeading>
          <p className="mt-3 max-w-md text-sm text-[#7a7570]">
            Recently completed residences and hospitality projects.
          </p>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 md:px-10">
          {PROJECTS.map((p) => (
            <GradientTile
              key={p.name}
              gradient={p.gradient}
              className="shrink-0 snap-start"
              style={{ width: 420, height: 560, maxWidth: "85vw" }}
            >
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="font-display text-3xl text-white">{p.name}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-white/80">
                  {p.loc}
                </div>
              </div>
            </GradientTile>
          ))}
          <div aria-hidden className="shrink-0" style={{ width: 1 }} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 md:px-10 md:py-28" style={{ background: "#faf9f7" }}>
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading className="text-3xl md:text-4xl">How We Work</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 80, color: "#e8e2d9", lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <div className="mt-3 text-base font-medium text-[#1a1a1a]">{s.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-[#7a7570]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL FEATURE */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="flex min-h-[420px] items-center justify-center px-10 py-20"
          style={{ background: "linear-gradient(180deg,#2e2b28,#6b5d50)" }}
        >
          <p
            className="max-w-md text-center font-display italic text-white"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.3 }}
          >
            "Every room should tell a story. Every object should earn its place."
          </p>
        </div>
        <FadeUp
          className="flex items-center px-10 py-20"
          // @ts-expect-error allow custom bg
        >
          <div style={{ background: "transparent" }} className="w-full">
            <h3 className="font-display text-3xl md:text-4xl text-[#1a1a1a]">Studio Philosophy</h3>
            <ul className="mt-8 space-y-5">
              {PHILOSOPHY.map((p) => (
                <li
                  key={p}
                  className="pl-5 text-[15px] leading-relaxed text-[#7a7570]"
                  style={{ borderLeft: "2px solid #c8b89a" }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </section>
      {/* fix right half bg */}
      <style>{`
        section.grid > div:nth-child(2):has(.font-display) {}
      `}</style>

      {/* CTA */}
      <section
        className="px-6 py-24 text-center md:py-32"
        style={{ background: "#1a1a1a" }}
      >
        <SectionHeading className="text-4xl text-white md:text-5xl">
          <span style={{ color: "#faf9f7" }}>Start Your Project</span>
        </SectionHeading>
        <p className="mx-auto mt-5 max-w-md text-base text-[#b0a89a]">
          We work with a limited number of clients each year. Let's see if we're a fit.
        </p>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#c8b89a", color: "#1a1a1a" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="mt-10 px-10 py-4 text-[11px] uppercase tracking-[0.3em]"
          style={{ border: "1px solid #c8b89a", color: "#c8b89a" }}
        >
          Get In Touch
        </motion.button>
      </section>

      <Footer brand="Interior Spaces" />
    </main>
  );
}
