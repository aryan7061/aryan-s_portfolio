import { profile, facts } from "../data/portfolio";
import HeroLaptop from "./HeroLaptop";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section wrap">
      <div className="hero">
        <div className="hero__main">
          <h1 className="hero__title">
            Aryan <span className="grad-text">Gupta</span>
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

      <div className="facts">
        {facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <span className="fact__label">{fact.label}</span>
            <span
              className={`fact__value ${fact.serif ? "fact__value--serif" : ""}`}
            >
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
