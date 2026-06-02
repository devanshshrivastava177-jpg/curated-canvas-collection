import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "../components/site/Footer";
import { ProjectCard } from "../components/site/ProjectCard";
import { FadeUp, SectionHeading } from "../components/site/SectionHeading";
import { Atelier } from "../components/site/Atelier";
import { ContactForm } from "../components/site/ContactForm";
import { Marquee } from "../components/site/Marquee";

import { PROJECTS } from "@/lib/projects";

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

const SERVICES = [
  { name: "Architecture", desc: "Spatial planning and architectural design." },
  { name: "Interior Design", desc: "Full-service interiors from concept to install." },
  { name: "Art Curation", desc: "Curated collections for private and public spaces." },
  { name: "Brand Partnerships", desc: "Creative direction for product and lifestyle brands." },
];

const PRESS = ["Vogue Living", "Architectural Digest", "Harper's Bazaar", "Wallpaper", "Elle Decor", "AD India", "Dezeen"];

function Page() {
  return (
    <main style={{ background: "#faf9f7" }}>
      {/* HERO */}
      <section
        className="grain relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, #4a4540 0%, transparent 50%), linear-gradient(135deg,#2e2b28 0%,#3d3833 50%,#c8b89a 130%)",
        }}
      >
        <div className="relative z-10 px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block text-[11px] uppercase tracking-[0.4em] text-[#c8b89a]"
          >
            Est. Atelier · Noida · Mumbai
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="mt-6 font-display text-white"
            style={{
              fontSize: "clamp(44px, 7.5vw, 88px)",
              letterSpacing: "0.02em",
              lineHeight: 1.02,
            }}
          >
            Design Is How
            <br />
            <em className="not-italic" style={{ color: "#c8b89a" }}>I See</em> The World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mx-auto mt-8 max-w-xl text-[#e8e2d9]/90"
            style={{ fontSize: 14, letterSpacing: "0.15em" }}
          >
            Raunaq Salariya — Interior Architect & Creative Director.
            Restraint, ritual, and craft for the considered home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition-all hover:scale-[1.02]"
              style={{ background: "#c8b89a", color: "#1a1a1a" }}
            >
              View Selected Works
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-[#c8b89a]/50 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[#faf9f7] transition-all hover:scale-[1.02] hover:bg-[#c8b89a]/10"
            >
              Begin a Project
            </a>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#e8e2d9]/80"
        >
          <svg width="18" height="40" viewBox="0 0 18 40" fill="none">
            <path d="M9 0v32M2 26l7 7 7-7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </section>

      {/* SELECTED WORKS */}
      <section id="works" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">01 — Selected Works</span>
            <SectionHeading className="mt-3 text-4xl md:text-5xl">A selection of recent commissions.</SectionHeading>
            <p className="mt-3 max-w-md text-sm text-[#7a7570]">
              Residences, hospitality, and editorial projects across India and abroad.
            </p>
          </div>
          <Link
            to="/interior-spaces"
            className="hidden text-[11px] uppercase tracking-[0.3em] text-[#1a1a1a] story-link md:inline"
          >
            All Projects →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[300px]">
          {PROJECTS.map((p, i) => {
            const span =
              i === 0 || i === 3
                ? "md:row-span-2 md:col-span-1"
                : i === 2 || i === 5
                  ? "md:col-span-2"
                  : "";
            return (
              <ProjectCard
                key={p.name}
                image={p.image}
                name={p.name}
                tag={p.tag}
                className={`min-h-[300px] ${span}`}
              />
            );
          })}
        </div>
      </section>

      {/* PHILOSOPHY split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative min-h-[460px] overflow-hidden"
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
          <div className="relative z-10 flex h-full items-end p-10 md:p-16">
            <p className="font-display italic text-[#e8e2d9]" style={{ fontSize: "clamp(22px, 2.4vw, 32px)", lineHeight: 1.3 }}>
              "Material, proportion, and light are the vocabulary; restraint is the grammar."
            </p>
          </div>
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
              I believe spaces should hold stillness and story in equal measure. Every project
              begins with the question — what should this room ask of you?
            </p>
            <Link
              to="/interior-spaces"
              className="story-link mt-6 inline-block text-sm tracking-wide"
              style={{ color: "#c8b89a" }}
            >
              Read More →
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ATELIER / FOUNDER */}
      <Atelier />

      {/* SERVICES */}
      <section style={{ background: "#e8e2d9" }} className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">03 — Services</span>
          <SectionHeading className="mt-3 text-3xl md:text-4xl">What we make.</SectionHeading>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-8"
                style={{ borderTop: "2px solid #c8b89a" }}
              >
                <div className="font-display text-2xl text-[#c8b89a]">0{i + 1}</div>
                <h4 className="mt-3 font-display text-2xl text-[#1a1a1a]">{s.name}</h4>
                <p className="mt-3 text-[13px] leading-relaxed text-[#7a7570]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS Marquee */}
      <section className="bg-white py-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">As Seen In</p>
        <div className="mt-8">
          <Marquee items={PRESS} />
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />

      <Footer brand="Raunaq Salariya Designs" />
    </main>
  );
}
