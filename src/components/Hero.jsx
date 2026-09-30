import { profile, facts } from "../data/portfolio";
import HeroLaptop from "./HeroLaptop";
import "./Hero.css";

const [firstName, ...restOfName] = profile.name.split(" ");

export default function Hero() {
  return (
    <section id="top" className="hero-section wrap">
      <div className="hero">
        <div className="hero__main">
          <h1 className="hero__title">
            {firstName}{" "}
            <span className="grad-text">{restOfName.join(" ")}</span>
          </h1>

          <div className="status-pill">
            <span className="status-dot" />
            <span>{profile.status}</span>
          </div>

          <p className="hero__lede">{profile.introLede}</p>

          <div className="btn-row">
            <a
              className="btn btn--solid"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
            >
              download_resume
            </a>
          </div>
        </div>

        <HeroLaptop />
      </div>

      <div className="hero__facts">
        {facts.map((fact) => (
          <div className="hero-fact" key={fact.label}>
            <span className="hero-fact__label">{fact.label}</span>
            <span
              className={`hero-fact__value ${fact.serif ? "hero-fact__value--serif" : ""}`}
            >
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
