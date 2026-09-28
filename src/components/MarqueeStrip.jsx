import { skillGroups } from "../data/portfolio";
import "./MarqueeStrip.css";

const MARQUEE_ITEMS = [
  ...new Set(skillGroups.flatMap((group) => group.skills.map((s) => s.name))),
];

export default function MarqueeStrip() {
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`}>
            <i>◆</i>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
