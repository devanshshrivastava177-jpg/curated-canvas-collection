import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import founder from "@/assets/founder.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Atelier() {
  return (
    <section id="atelier" className="relative bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative md:col-span-5"
        >
          {/* offset accent block */}
          <div
            aria-hidden
            className="absolute -left-4 -top-4 hidden h-full w-full md:block"
            style={{ background: "#e8e2d9" }}
          />
          <div
            aria-hidden
            className="absolute -right-3 -bottom-3 hidden h-full w-full md:block"
            style={{ border: "1px solid #c8b89a" }}
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={founder}
              alt="Raunaq Salariya, Founder & Creative Director"
              className="h-full w-full object-cover"
              loading="lazy"
              width={900}
              height={1125}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
              style={{ background: "linear-gradient(160deg, rgba(200,184,154,0.15), transparent 60%)" }}
            />
          </div>
        </motion.div>

        {/* Bio */}
        <div className="md:col-span-7 md:pt-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-[11px] uppercase tracking-[0.3em] text-[#7a7570]"
          >
            02 — Est. Atelier
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-display text-[#1a1a1a]"
            style={{ fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1.05 }}
          >
            A practice rooted in restraint,
            <br className="hidden md:block" /> ritual, and craft.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 space-y-5 text-[15px] leading-[1.75] text-[#5a5550]"
          >
            <p>
              Founder of Raunaq Salariya Designs, <strong className="font-medium text-[#1a1a1a]">Mr. Raunaq</strong>{" "}
              holds a B.Sc. (Interior Design) from Amity School of Design, Noida — with five vibrant
              years of professional experience bringing complex and exciting designs to life. The
              studio is a continuation of a family legacy: a grandfather's house, a draftsman's
              table, a discipline of drawing before deciding.
            </p>
            <p>
              Having lived and worked in multiple cities, he carries a sense of professionalism and
              integrity that has largely defined his career and design background. His belief is
              that design can be art, design can be aesthetics, and good design is always simple —
              which is precisely why it is so complicated to execute.
            </p>
            <p>
              He also believes that building space is a team effort, and that having a large,
              professional team of craftsmen, draftsmen, conservators and stylists is the key that
              sets the practice apart.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex items-center gap-3"
          >
            <span
              aria-hidden
              className="block h-px w-10"
              style={{ background: "#c8b89a" }}
            />
            <span className="font-display italic text-[#1a1a1a]" style={{ fontSize: 20 }}>
              Raunaq Salariya
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7a7570]">
              Founder & Creative Director
            </span>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "#e8e2d9" }}>
            <Stat value={<Counter to={5} suffix="+" />} label="Years of practice" />
            <Stat value={<Counter to={40} suffix="+" />} label="Projects delivered" />
            <Stat value={<Counter to={4} />} label="Cities served" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-[#1a1a1a] md:text-5xl">{value}</div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#7a7570]">{label}</div>
    </div>
  );
}
