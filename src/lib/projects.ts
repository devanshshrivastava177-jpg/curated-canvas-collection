import marlboro from "@/assets/projects/marlboro.jpg";
import pacific from "@/assets/projects/pacific.jpg";
import magnum from "@/assets/projects/magnum.jpg";
import hillcrest from "@/assets/projects/hillcrest.jpg";
import austin from "@/assets/projects/austin.jpg";
import malibu from "@/assets/projects/malibu.jpg";

export type Project = {
  slug: string;
  name: string;
  tag: string;
  location: string;
  year: string;
  area: string;
  scope: string;
  image: string;
  summary: string;
  story: string;
  palette: { name: string; hex: string }[];
  details: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "marlboro",
    name: "Marlboro Residence",
    tag: "Residential",
    location: "Noida, India",
    year: "2024",
    area: "6,200 sq.ft",
    scope: "Architecture · Interior · Styling",
    image: marlboro,
    summary: "A four-bedroom retreat composed in warm travertine, smoked oak and parchment plaster.",
    story:
      "The brief was a home that could host a hundred and still hold one. We carved the plan around a central double-height court and let light describe the day. Bespoke joinery in smoked oak threads the public rooms; the private wing is hushed in linen and lime plaster, the palette dialled down to a whisper.",
    palette: [
      { name: "Travertine", hex: "#c8b89a" },
      { name: "Smoked Oak", hex: "#4a3e30" },
      { name: "Parchment", hex: "#e8e2d9" },
      { name: "Ink", hex: "#1a1a1a" },
    ],
    details: [
      { label: "Client", value: "Private" },
      { label: "Year", value: "2024" },
      { label: "Photography", value: "Atelier RSD" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "pacific",
    name: "Pacific Penthouse",
    tag: "Residential",
    location: "Mumbai, India",
    year: "2023",
    area: "4,800 sq.ft",
    scope: "Interior Architecture · FF&E",
    image: pacific,
    summary: "A sky-borne penthouse where the sea writes the colour palette every hour.",
    story:
      "Two duplex floors on the Arabian Sea, opened up into a single restrained gesture. Floors in honed limestone, ceilings in handmade lime — the architecture stays quiet so the horizon can speak. A bespoke spiral in blackened steel ties the floors with a single, exact line.",
    palette: [
      { name: "Limestone", hex: "#d9cfbf" },
      { name: "Sea Mist", hex: "#a6b0a8" },
      { name: "Blackened Steel", hex: "#2a2825" },
      { name: "Pearl", hex: "#f2eee6" },
    ],
    details: [
      { label: "Client", value: "Private" },
      { label: "Year", value: "2023" },
      { label: "Photography", value: "Atelier RSD" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "magnum",
    name: "Magnum Opus Villa",
    tag: "Estate",
    location: "Goa, India",
    year: "2024",
    area: "12,400 sq.ft",
    scope: "Architecture · Landscape · Interior",
    image: magnum,
    summary: "A coastal estate built around a courtyard of frangipani and rain.",
    story:
      "Set against the laterite cliffs of north Goa, the villa is conceived as a series of pavilions linked by a long colonnade. Cement-finished walls, teak shutters, and a 24-metre reflecting pool tie inside to outside. Locally quarried stone and reclaimed timber give the rooms a sense of having always been there.",
    palette: [
      { name: "Laterite", hex: "#8a5a3c" },
      { name: "Teak", hex: "#6b4a32" },
      { name: "Ivory", hex: "#ece4d4" },
      { name: "Monsoon", hex: "#3d4a44" },
    ],
    details: [
      { label: "Client", value: "Private" },
      { label: "Year", value: "2024" },
      { label: "Photography", value: "Atelier RSD" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "hillcrest",
    name: "Hillcrest Estate",
    tag: "Residential",
    location: "Shimla, India",
    year: "2022",
    area: "5,400 sq.ft",
    scope: "Restoration · Interior",
    image: hillcrest,
    summary: "A colonial cottage gently restored — bones intact, breath renewed.",
    story:
      "An old Raj-era cottage in the deodar forests, restored with surgical care. Original deodar floors were sanded back to their grain; walls now wear a soft chalk distemper. A new wing in glass and steel slips beside the original — quiet, deferential, and full of mountain light.",
    palette: [
      { name: "Chalk", hex: "#efeae0" },
      { name: "Deodar", hex: "#6e5a44" },
      { name: "Slate", hex: "#3b4046" },
      { name: "Moss", hex: "#7c8270" },
    ],
    details: [
      { label: "Client", value: "Private" },
      { label: "Year", value: "2022" },
      { label: "Photography", value: "Atelier RSD" },
      { label: "Status", value: "Completed" },
    ],
  },
  {
    slug: "austin",
    name: "Austin Proper Hotel",
    tag: "Hospitality",
    location: "Austin, TX",
    year: "2023",
    area: "Public Areas · 28,000 sq.ft",
    scope: "Concept · FF&E Curation",
    image: austin,
    summary: "A lobby, library and lounge composed as a single, slow exhale.",
    story:
      "Commissioned to reimagine the hotel's ground-floor experience. We replaced the existing palette with hand-thrown ceramics, sisal rugs, vintage Italian seating and a custom 14-metre bar in cast bronze. Lighting was reworked from scratch — every fixture warm, every shadow intentional.",
    palette: [
      { name: "Bronze", hex: "#8a6a45" },
      { name: "Sisal", hex: "#c8b89a" },
      { name: "Espresso", hex: "#2e251f" },
      { name: "Bone", hex: "#ece5d6" },
    ],
    details: [
      { label: "Client", value: "Proper Hospitality" },
      { label: "Year", value: "2023" },
      { label: "Photography", value: "Atelier RSD" },
      { label: "Status", value: "Open" },
    ],
  },
  {
    slug: "malibu",
    name: "Malibu Beach House",
    tag: "Residential",
    location: "Malibu, CA",
    year: "2025",
    area: "3,400 sq.ft",
    scope: "Interior · Styling",
    image: malibu,
    summary: "A driftwood-and-linen retreat on the Pacific edge.",
    story:
      "A weekend house facing due west into the surf. The interiors stay close to the colour of bleached driftwood — washed oak floors, raw linen drapery, white-oak millwork rubbed back to a chalky finish. Furniture is low, generous, and meant to be sat in wet.",
    palette: [
      { name: "Driftwood", hex: "#cdbfa8" },
      { name: "Surf", hex: "#bdc6c4" },
      { name: "Sand", hex: "#e3dac4" },
      { name: "Kelp", hex: "#4f5a48" },
    ],
    details: [
      { label: "Client", value: "Private" },
      { label: "Year", value: "2025" },
      { label: "Photography", value: "Atelier RSD" },
      { label: "Status", value: "In Progress" },
    ],
  },
];

export const PROJECTS_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));
