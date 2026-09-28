import { HOME_ID } from "./sectionPaths";

// When adding a section, also add its id to the rewrites in vercel.json.
export const SECTIONS = [
  { id: HOME_ID, label: "top" },
  { id: "about", label: "about", eyebrow: "About" },
  { id: "stack", label: "stack", eyebrow: "Tech Stack" },
  { id: "experience", label: "experience", eyebrow: "Experience" },
  { id: "projects", label: "projects", eyebrow: "Projects" },
  { id: "contact", label: "contact", eyebrow: "Contact" },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export const NAV_SECTIONS = SECTIONS.filter(
  (section) => section.id !== HOME_ID,
);

export function sectionEyebrow(id) {
  const index = NAV_SECTIONS.findIndex((section) => section.id === id);
  const number = String(index + 1).padStart(2, "0");
  return `${number} — ${NAV_SECTIONS[index].eyebrow}`;
}
