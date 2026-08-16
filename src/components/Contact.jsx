import { profile } from "../data/portfolio";
import "./Contact.css";

const contactJsonHead = `{
  "name": "${profile.name}",
  "phone": "${profile.phone}",
  "email": "${profile.email.replace("@", "\n    @")}",
  "github": "${profile.githubHandle}",
  "linkedin":
    "${profile.linkedinHandle}",
  "status": `;

const contactJsonTail = `
}`;

export default function Contact() {
  return (
    <section id="contact" className="wrap">
      <div className="contact">
        <div className="contact__main">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            05 — Contact
          </div>
          <h2 className="contact__title">
            Open to <span className="grad-text">Frontend</span> opportunities
          </h2>
          <p>
            Looking for relevant roles where I can build production-grade React
            interfaces.
          </p>
          <div className="btn-row" style={{ animation: "none" }}>
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              send_message
            </a>
            <a
              className="btn btn--ghost"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              connect_on_linkedin
            </a>
            <a className="btn btn--ghost" href={profile.resumeUrl} download>
              download_resume
            </a>
          </div>
        </div>

        <div className="json-card">
          <div className="json-card__head">contact.json</div>
          <pre>
            {contactJsonHead}
            <b>"open_to_work"</b>
            {contactJsonTail}
          </pre>
        </div>
      </div>
    </section>
  );
}
