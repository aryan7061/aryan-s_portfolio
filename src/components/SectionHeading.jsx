import { sectionEyebrow } from "../lib/sections";

export default function SectionHeading({ sectionId, title, lede }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{sectionEyebrow(sectionId)}</div>
      <h2 className="section-title">{title}</h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </div>
  );
}
