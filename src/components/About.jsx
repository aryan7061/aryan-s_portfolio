import { highlights, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="wrap">
      <SectionHeading sectionId="about" title="What I bring" />

      <p className="about__summary">{profile.summary}</p>

      <div ref={ref} className="about__cards">
        {highlights.map((item, i) => (
          <div
            className={`about-card reveal ${visible ? "is-visible" : ""}`}
            key={item.title}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="about-card__arrow">▸</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
