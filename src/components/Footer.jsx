import { profile } from "../data/portfolio";
import EmailButton from "./EmailButton";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span className="site-footer__copy">
        © {year} {profile.name} — {profile.role}
      </span>
      <div className="site-footer__links">
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <EmailButton className="link-button">email</EmailButton>
      </div>
    </footer>
  );
}
