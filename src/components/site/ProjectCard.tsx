import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MapPin, Calendar, Maximize2, Layers } from "lucide-react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const { image, name, tag } = project;

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden text-left ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        data-cursor="hover"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
        <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end p-6 md:p-8">
          <div className="font-sans text-[11px] uppercase tracking-[0.3em]" style={{ color: "#c8b89a" }}>
            {tag} · {project.location}
          </div>
          <div className="mt-2 font-display text-2xl text-white md:text-[32px]">{name}</div>
          <div className="mt-3 max-w-md text-[13px] leading-relaxed text-white/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {project.summary}
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span>View Project</span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && <ProjectDialog project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ background: "rgba(15,12,8,0.7)" }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 grid w-full max-w-[1100px] grid-cols-1 overflow-hidden bg-[#faf9f7] shadow-2xl md:grid-cols-2"
        style={{ maxHeight: "92vh" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] backdrop-blur transition-transform hover:scale-105"
        >
          <X size={18} />
        </button>

        {/* Image side */}
        <div
          className="relative min-h-[260px] md:min-h-full"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            {project.palette.map((c) => (
              <div
                key={c.hex}
                className="flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a] backdrop-blur"
              >
                <span className="h-3 w-3 rounded-full" style={{ background: c.hex }} />
                {c.name}
              </div>
            ))}
          </div>
        </div>

        {/* Content side */}
        <div className="overflow-y-auto p-7 md:p-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#c8b89a]">{project.tag}</span>
          <h2 className="mt-3 font-display text-[32px] leading-[1.05] text-[#1a1a1a] md:text-[44px]">
            {project.name}
          </h2>
          <p className="mt-3 text-sm italic text-[#7a7570]">{project.summary}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#e8e2d9] pt-6 text-[12px] text-[#1a1a1a]">
            <Stat icon={<MapPin size={14} />} label="Location" value={project.location} />
            <Stat icon={<Calendar size={14} />} label="Year" value={project.year} />
            <Stat icon={<Maximize2 size={14} />} label="Area" value={project.area} />
            <Stat icon={<Layers size={14} />} label="Scope" value={project.scope} />
          </div>

          <p className="mt-6 text-[14px] leading-[1.7] text-[#3d3833]">{project.story}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-[#e8e2d9] pt-6 text-[12px]">
            {project.details.map((d) => (
              <div key={d.label}>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-[#7a7570]">{d.label}</dt>
                <dd className="mt-1 text-[#1a1a1a]">{d.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-[0.3em] transition-transform hover:scale-[1.02]"
              style={{ background: "#1a1a1a", color: "#faf9f7" }}
            >
              Enquire About This Project →
            </a>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 border border-[#1a1a1a]/15 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 text-[#c8b89a]">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[#7a7570]">{label}</div>
        <div className="mt-0.5 text-[13px] text-[#1a1a1a]">{value}</div>
      </div>
    </div>
  );
}
