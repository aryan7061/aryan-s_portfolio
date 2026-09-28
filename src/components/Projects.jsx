import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <SectionHeading eyebrow="04 — Projects" title="Selected work" />

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
