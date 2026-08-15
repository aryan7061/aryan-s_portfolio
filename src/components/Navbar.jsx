import { useState } from "react";
import { profile } from "../data/portfolio";
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

  return (
    <nav className="navbar">
      <a href="#top" className="navbar__brand">
        aryan.dev
      </a>

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
          href={`mailto:${profile.email}`}
          onClick={() => setOpen(false)}
        >
          hire_me
        </a>
      </div>
    </nav>
  );
}
