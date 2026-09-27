import { useState } from "react";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].label);
  const activeGroup = skillGroups.find((g) => g.label === active);

  return (
    <section id="stack" className="wrap">
      <SectionHeading
        eyebrow="02 — Tech Stack"
        title="Tools I build with"
        lede="Frontend-first, full-stack capable. Enough backend knowledge to ship and deploy independently."
      />

      <div className="tabs" role="tablist" aria-label="Skill categories">
        {skillGroups.map((group) => (
          <button
            key={group.label}
            type="button"
            role="tab"
            className="tab"
            aria-selected={active === group.label}
            onClick={() => setActive(group.label)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="skill-grid" role="tabpanel">
        {activeGroup.skills.map((skill) => (
          <div className="skill" key={skill.name}>
            {skill.icon ? (
              <img
                src={skill.icon}
                alt=""
                width="34"
                height="34"
                loading="lazy"
              />
            ) : (
              <span className="skill__glyph" aria-hidden="true">
                ◆
              </span>
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
