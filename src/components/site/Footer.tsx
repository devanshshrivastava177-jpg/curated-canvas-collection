import { Instagram } from "lucide-react";

type Props = {
  brand: string;
  extraLinks?: string[];
};

const DEFAULT_LINKS = ["Projects", "About", "Press", "Trade", "Careers", "Contact"];

export function Footer({ brand, extraLinks = [] }: Props) {
  const links = [...DEFAULT_LINKS, ...extraLinks];
  return (
    <footer style={{ background: "#1a1a1a", color: "#faf9f7" }}>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-display text-2xl">{brand}</div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#b0a89a]">
            Considered design, soulful interiors, and objects that elevate the everyday.
          </p>
        </div>
        <nav className="flex flex-wrap items-start gap-x-8 gap-y-3 md:justify-center">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] uppercase tracking-[0.25em] text-[#faf9f7]/80 hover:text-[#c8b89a]"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-start gap-5 md:justify-end">
          <a href="#" aria-label="Instagram" className="text-[#faf9f7]/80 hover:text-[#c8b89a]">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Pinterest" className="text-[#faf9f7]/80 hover:text-[#c8b89a]">
            {/* Pinterest-ish "P" mark */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.09 2.46 7.6 5.97 9.13-.08-.78-.16-1.97.03-2.82.18-.77 1.17-4.9 1.17-4.9s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.14-4.52 4.34 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.07.3-.24.99-.27 1.12-.04.18-.14.22-.33.13-1.22-.57-1.99-2.36-1.99-3.79 0-3.09 2.25-5.93 6.48-5.93 3.4 0 6.04 2.42 6.04 5.66 0 3.38-2.13 6.1-5.09 6.1-.99 0-1.93-.52-2.25-1.13l-.61 2.34c-.22.86-.82 1.94-1.22 2.6.92.28 1.89.44 2.9.44 5.52 0 10-4.48 10-10S17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 md:px-10">
        <p className="mx-auto max-w-[1400px] text-xs text-[#7a7570]">
          © 2025 {brand}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
