import { profile } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>
        © {year} {profile.name} — {profile.role}
      </span>
      <div className="footer-links">
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href={`mailto:${profile.email}`}>email</a>
      </div>
    </footer>
  );
}
