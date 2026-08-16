import Chip from "./Chip";
import "./ProjectCard.css";

const LINK_LABELS = {
  live: "live_demo",
  frontend: "frontend",
  backend: "backend",
};

export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="project__inner">
        <div className="project__content">
          <div className="project__meta">
            <span className="project__index">
              {project.index} — {project.kind}
            </span>
            {project.featured ? <Chip small>featured</Chip> : null}
          </div>

          <h3>{project.name}</h3>
          <p className="project__kicker">{project.kicker}</p>
          <p className="project__body">{project.description}</p>

          {project.points?.length ? (
            <ul className="project__points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          <div className="project__tech">
            {project.tech.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>

        <div className="project__links">
          {project.links ? (
            Object.entries(project.links).map(([key, url]) => (
              <a
                key={key}
                className="plink"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {LINK_LABELS[key] ?? key}
              </a>
            ))
          ) : (
            <span className="plink plink--disabled">links_soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
