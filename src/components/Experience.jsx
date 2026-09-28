import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="wrap">
      <SectionHeading eyebrow="03 — Experience" title="Where I've worked" />

      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={job.id}>
            <div className="timeline-item__marker" aria-hidden="true" />
            <div className="timeline-item__body">
              <div className="timeline-item__head">
                <h3>{job.role}</h3>
                <span className="timeline-item__period">{job.period}</span>
              </div>
              <p className="timeline-item__company">{job.company}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
