import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Footer } from "../components/site/Footer";
import { ProjectCard } from "../components/site/ProjectCard";
import { FadeUp, SectionHeading } from "../components/site/SectionHeading";
import { ContactForm } from "../components/site/ContactForm";

import hero from "@/assets/projects/hero-spaces.jpg";
import marlboro from "@/assets/projects/marlboro.jpg";
import pacific from "@/assets/projects/pacific.jpg";
import magnum from "@/assets/projects/magnum.jpg";
import hillcrest from "@/assets/projects/hillcrest.jpg";
import malibu from "@/assets/projects/malibu.jpg";
import austin from "@/assets/projects/austin.jpg";

export const Route = createFileRoute("/interior-spaces")({
  head: () => ({
    meta: [
      { title: "Interior Spaces — Editorial Interior Design Studio" },
      {
        name: "description",
        content:
          "A curated interior design studio crafting soulful interiors for discerning clients across India and abroad.",
      },
      { property: "og:title", content: "Interior Spaces Studio" },
      {
        property: "og:description",
        content: "Where space becomes story. Editorial interiors for the considered home.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: Page,
});

const PROJECTS = [
  { name: "Marlboro Residence", loc: "Noida", image: marlboro },
  { name: "Pacific Penthouse", loc: "Mumbai", image: pacific },
  { name: "Magnum Opus Villa", loc: "Goa", image: magnum },
  { name: "Hillcrest Estate", loc: "Shimla", image: hillcrest },
  { name: "Austin Proper Hotel", loc: "Austin, TX", image: austin },
  { name: "Malibu Beach House", loc: "Malibu, CA", image: malibu },
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
      {/* HERO with real image */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(110deg, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.2) 60%, transparent 100%)" }} />
        <div className="relative z-10 px-6 md:pl-[8vw] md:pr-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="block text-[11px] uppercase tracking-[0.3em] text-[#c8b89a]"
          >
            Interior Spaces Studio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-white"
            style={{ fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 1 }}
          >
            Where Space
            <br />
            Becomes Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-md text-base text-white/85"
          >
            A curated design studio crafting soulful interiors for discerning clients.
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-block px-8 py-4 text-[11px] uppercase tracking-[0.3em]"
            style={{ background: "#c8b89a", color: "#1a1a1a" }}
          >
            Explore Our Work
          </motion.a>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">01 — Projects</span>
        <SectionHeading className="mt-3 text-3xl md:text-5xl">Recent commissions.</SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[320px]">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.name}
              image={p.image}
              name={p.name}
              tag={p.loc}
              className={i === 0 ? "md:row-span-2" : ""}
            />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 md:px-10 md:py-28" style={{ background: "#e8e2d9" }}>
        <div className="mx-auto max-w-[1400px]">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7a7570]">02 — Process</span>
          <SectionHeading className="mt-3 text-3xl md:text-4xl">How we work.</SectionHeading>
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
                  style={{ fontSize: 96, color: "#c8b89a", lineHeight: 1, opacity: 0.7 }}
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
          className="flex min-h-[460px] items-center justify-center px-10 py-20"
          style={{ background: "linear-gradient(180deg,#2e2b28,#6b5d50)" }}
        >
          <p
            className="max-w-md text-center font-display italic text-white"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.3 }}
          >
            "Every room should tell a story. Every object should earn its place."
          </p>
        </div>
        <FadeUp className="flex items-center px-10 py-20">
          <div className="w-full">
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

      <ContactForm />

      <Footer brand="Interior Spaces" />
    </main>
  );
}
