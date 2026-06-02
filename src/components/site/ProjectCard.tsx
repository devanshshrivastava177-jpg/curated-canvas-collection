import { motion } from "framer-motion";

type Props = {
  image: string;
  name: string;
  tag: string;
  className?: string;
};

export function ProjectCard({ image, name, tag, className = "" }: Props) {
  return (
    <motion.a
      href="#"
      className={`group relative block overflow-hidden ${className}`}
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
        <div
          className="font-sans text-[11px] uppercase tracking-[0.3em]"
          style={{ color: "#c8b89a" }}
        >
          {tag}
        </div>
        <div className="mt-2 font-display text-2xl text-white md:text-[32px]">
          {name}
        </div>
        <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span>View Project</span>
          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.a>
  );
}
