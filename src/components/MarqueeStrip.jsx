import { useRef } from "react";
import { skillGroups } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import "./MarqueeStrip.css";

const MARQUEE_ITEMS = [
  ...new Set(skillGroups.flatMap((group) => group.skills.map((s) => s.name))),
];

export default function MarqueeStrip() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      ref={ref}
      className={inView ? "marquee-strip" : "marquee-strip is-paused"}
      aria-hidden="true"
    >
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
