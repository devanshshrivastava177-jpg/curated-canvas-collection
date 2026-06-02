import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "../components/site/Footer";
import { GradientTile } from "../components/site/GradientTile";
import { FadeUp, SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raunaq Salariya Designs — Interior Architect & Creative Director" },
      {
        name: "description",
        content:
          "Selected works and design philosophy by Raunaq Salariya — interior architecture, creative direction, and curated residences.",
      },
      { property: "og:title", content: "Raunaq Salariya Designs" },
      {
        property: "og:description",
        content: "Design is how I see the world — selected residences, hotels, and creative direction.",
      },
    ],
  }),
  component: Page,
});

const PROJECTS = [
  { name: "Marlboro Residence", tag: "Residential", gradient: "linear-gradient(135deg,#d4a89a,#8b5e52)" },
  { name: "Pacific Penthouse", tag: "Residential", gradient: "linear-gradient(135deg,#a8c5b5,#3d6b5a)" },
  { name: "Magnum Opus Villa", tag: "Estate", gradient: "linear-gradient(135deg,#e8d5b0,#b8944a)" },
  { name: "Hillcrest Estate", tag: "Residential", gradient: "linear-gradient(135deg,#b8b0c8,#5c5478)" },
  { name: "Austin Proper Hotel", tag: "Hospitality", gradient: "linear-gradient(135deg,#c5b8a8,#6b5d50)" },
  { name: "Malibu Beach House", tag: "Residential", gradient: "linear-gradient(135deg,#a8c8d8,#3a6878)" },
];

const SERVICES = [
  { name: "Architecture", desc: "Spatial planning and architectural design." },
  { name: "Interior Design", desc: "Full-service interiors from concept to install." },
  { name: "Art Curation", desc: "Curated collections for private and public spaces." },
  { name: "Brand Partnerships", desc: "Creative direction for product and lifestyle brands." },
];

const PRESS = ["Vogue Living", "Architectural Digest", "Harper's Bazaar", "Wallpaper", "Elle Decor"];

function Page() {
  return (
    <main style={{ background: "#faf9f7" }}>
      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center justify-center"
        style={{ background: "linear-gradient(135deg,#2e2b28 0%,#4a4540 40%,#c8b89a 100%)" }}
      >
        <div className="px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-display text-white"
            style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              letterSpacing: "0.05em",
              lineHeight: 1.05,
            }}
          >
            Design Is How I See The World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-[#e8e2d9]"
            style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            Raunaq Salariya — Interior Architect & Creative Director
          </motion.p>
        </div>
        <motion.div
          aria-hidden
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#e8e2d9]"
        >
          <svg width="18" height="40" viewBox="0 0 18 40" fill="none">
            <path d="M9 0v32M2 26l7 7 7-7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </section>

      {/* SELECTED WORKS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <SectionHeading className="text-4xl md:text-5xl">Selected Works</SectionHeading>
        <p className="mt-3 max-w-md text-sm text-[#7a7570]">
          A selection of recent residences, hospitality, and editorial projects.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[280px]">
          {PROJECTS.map((p, i) => {
            // asymmetric: indices 0, 3 span row 2; index 2, 5 span col 2
            const span =
              i === 0 || i === 3
                ? "md:row-span-2 md:col-span-1"
                : i === 2 || i === 5
                  ? "md:col-span-2"
                  : "";
            return (
              <GradientTile
                key={p.name}
                gradient={p.gradient}
                className={`min-h-[280px] ${span}`}
                hoverOverlay={
                  <span className="font-sans text-[12px] uppercase tracking-[0.3em] text-white">
                    View Project →
                  </span>
                }
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="font-sans text-[11px] uppercase tracking-[0.3em]"
                    style={{ color: "#c8b89a" }}
                  >
                    {p.tag}
                  </div>
                  <div className="mt-2 font-display text-2xl text-white md:text-3xl">
                    {p.name}
                  </div>
                </div>
              </GradientTile>
            );
          })}
        </div>
      </section>

      {/* PHILOSOPHY split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative min-h-[420px] overflow-hidden"
          style={{ background: "linear-gradient(135deg,#2e2b28,#4a4540)" }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <circle cx="180" cy="220" r="160" fill="#c8b89a" opacity="0.18" />
            <circle cx="320" cy="300" r="200" fill="#c8b89a" opacity="0.12" />
            <rect x="60" y="80" width="220" height="220" fill="#c8b89a" opacity="0.08" />
          </svg>
        </div>
        <FadeUp className="flex items-center px-8 py-16 md:px-16 md:py-24">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">
              Approach
            </span>
            <h3 className="mt-3 font-display text-3xl md:text-[42px]" style={{ color: "#1a1a1a" }}>
              The Philosophy
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#7a7570]">
              I believe spaces should hold stillness and story in equal measure. Material,
              proportion, and light are the vocabulary; restraint is the grammar. Every
              project begins with the question — what should this room ask of you?
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-sm tracking-wide"
              style={{ color: "#c8b89a" }}
            >
              Read More →
            </a>
          </div>
        </FadeUp>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#e8e2d9" }} className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading className="text-3xl md:text-4xl">Services</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8"
                style={{ borderTop: "2px solid #c8b89a" }}
              >
                <h4 className="font-display text-2xl text-[#1a1a1a]">{s.name}</h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#7a7570]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-white px-6 py-20 text-center md:py-24">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">As Seen In</p>
        <div className="mx-auto mt-10 flex max-w-[1100px] flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PRESS.map((p) => (
            <span
              key={p}
              className="font-display italic"
              style={{ fontSize: 28, color: "#b0a89a" }}
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      <Footer brand="Raunaq Salariya Designs" />
    </main>
  );
}
