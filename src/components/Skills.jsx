import { useRef, useState } from "react";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeGroup = skillGroups[activeIndex];

  function handleTabKeyDown(event, index) {
    const lastIndex = skillGroups.length - 1;
    const nextIndex = {
      ArrowRight: index === lastIndex ? 0 : index + 1,
      ArrowLeft: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    }[event.key];
    if (nextIndex === undefined) return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="stack" className="wrap">
      <SectionHeading eyebrow="02 — Tech Stack" title="Tools I build with" />

      <div className="tabs" role="tablist" aria-label="Skill categories">
        {skillGroups.map((group, index) => (
          <button
            key={group.label}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`skills-tab-${index}`}
            type="button"
            role="tab"
            className="tab"
            aria-selected={index === activeIndex}
            aria-controls="skills-panel"
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div
        id="skills-panel"
        className="skill-grid"
        role="tabpanel"
        aria-labelledby={`skills-tab-${activeIndex}`}
        tabIndex={0}
      >
        {activeGroup.skills.map((skill) => (
          <div className="skill" key={skill.name}>
            {skill.icon ? (
              <img
                className={
                  skill.invertOnDark ? "skill__icon--invert" : undefined
                }
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
