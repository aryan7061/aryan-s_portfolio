import { useState } from "react";
import { profile } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import agMarkLight from "../assets/brand/ag-mark-light.png";
import "./Navbar.css";

const NAV_ITEMS = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  return (
    <nav className="navbar">
      <a href="#top" className="navbar__brand">
        <img
          src={agMarkLight}
          alt=""
          className="navbar__brand-mark"
          width="28"
          height="28"
        />
        aryan.dev
      </a>

      <div className="navbar__right">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "close" : "menu"}
        </button>

        <div id="navLinks" className={`navbar__links ${open ? "is-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="navbar__cta"
            href={profile.emailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            hire_me
          </a>
        </div>
      </div>
    </nav>
  );
}
