import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  gradient: string;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  hoverOverlay?: ReactNode;
};

export function GradientTile({
  gradient,
  className = "",
  children,
  style,
  hoverOverlay,
}: Props) {
  return (
    <motion.div
      className={`group relative overflow-hidden ${className}`}
      style={{ background: gradient, ...style }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* subtle inner sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      {children}
      {hoverOverlay && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/30 group-hover:opacity-100">
          {hoverOverlay}
        </div>
      )}
    </motion.div>
  );
}
