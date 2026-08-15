import { profile, heroLines, facts } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import "./Hero.css";

export default function Hero() {
  const typed = useTypewriter(heroLines);

  return (
    <section id="about" className="hero-section wrap">
      <div className="hero">
        <div className="hero__main">
          <div className="status-pill">
            <span className="status-dot" />
            <span>{profile.status}</span>
          </div>

          <h1 className="hero__title">
            Aryan <span className="grad-text">Gupta</span>
          </h1>

          <div className="hero__role-line">
            <span className="hero__role">{profile.role}</span>
            <span className="hero__stack">
              <span className="hero__dot">·</span>
              {profile.stackLine}
            </span>
          </div>

          <p className="hero__lede">
            {profile.role} at <strong>{profile.company}</strong> since{" "}
            {profile.companyStart}, building responsive web applications and
            SPAs with React.js and Tailwind CSS — component-driven interfaces,
            Redux state flow, and REST APIs wired to real backends.
          </p>

          <div className="btn-row">
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              get_in_touch
            </a>
            <a
              className="btn btn--ghost"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              className="btn btn--ghost"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl} download>
              download_resume
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal__bar">
            <span className="terminal__dot" style={{ background: "#ff5f57" }} />
            <span className="terminal__dot" style={{ background: "#febc2e" }} />
            <span className="terminal__dot" style={{ background: "#28c840" }} />
            <span className="terminal__path">~/aryan — zsh</span>
          </div>
          <div className="terminal__body">
            <pre>
              {typed}
              <span className="caret">_</span>
            </pre>
          </div>
        </div>
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
