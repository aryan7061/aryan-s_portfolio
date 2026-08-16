import { profile } from "../data/portfolio";
import "./ContactTicket.css";

export default function ContactTicket() {
  return (
    <div className="ticket-slot">
      <div className="ticket-card">
        <div className="ticket-bg ticket-holographic" />

        <div className="ticket-header">CONTACT</div>

        <div className="ticket-body">
          <p className="ticket-name">{profile.name}</p>
          <p className="ticket-role">{profile.role}</p>
          <div className="ticket-rule">
            <span aria-hidden="true">✂</span>
          </div>
          <dl className="ticket-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a
                  href={profile.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.githubHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.linkedinHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="ticket-footer">
          <div className="ticket-status">open_to_work</div>
          <div className="ticket-barcode" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
