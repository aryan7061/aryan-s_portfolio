import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { idToPath, navigateToSection } from "../lib/sectionPaths";
import ThemeToggle from "./ThemeToggle";
import agMarkLight from "../assets/brand/ag-mark-light.png";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand" onClick={navigateToSection("top")}>
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
            <a
              key={item.id}
              href={idToPath(item.id)}
              onClick={(event) => {
                navigateToSection(item.id)(event);
                setOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
