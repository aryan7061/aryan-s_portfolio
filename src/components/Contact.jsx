import { profile } from "../data/portfolio";
import ContactTicket from "./ContactTicket";
import EmailButton from "./EmailButton";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="wrap">
      <div className="contact">
        <div className="contact__main">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            05 — Contact
          </div>
          <h2 className="contact__title">
            Open to <span className="grad-text">Developer roles</span>{" "}
          </h2>
          <p>
            Looking for relevant roles where I can build production-grade
            applications.
          </p>
          <div className="btn-row" style={{ animation: "none" }}>
            <EmailButton className="btn btn--solid">send_message</EmailButton>
            <a
              className="btn btn--ghost"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              connect_on_linkedin
            </a>
            <a
              className="btn btn--ghost"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
            >
              download_resume
            </a>
          </div>
        </div>

        <ContactTicket />
      </div>
    </section>
  );
}
