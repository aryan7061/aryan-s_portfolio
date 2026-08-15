import { highlights, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

export default function About() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="wrap">
      <SectionHeading eyebrow="01 — About" title="What I bring" />

      <p className="about__summary">{profile.summary}</p>

      <div ref={ref} className="cards">
        {highlights.map((item, i) => (
          <div
            className={`card reveal ${visible ? "is-visible" : ""}`}
            key={item.title}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="card__arrow">▸</span>
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
