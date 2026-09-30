import { useCallback, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useDismiss } from "../hooks/useDismiss";
import { HOME_ID, handleSectionClick, idToPath } from "../lib/sectionPaths";
import { NAV_SECTIONS } from "../lib/sections";
import ThemeToggle from "./ThemeToggle";
import agMarkLight from "../assets/brand/ag-mark-light.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const close = useCallback((reason) => {
    setOpen(false);
    if (reason === "escape") toggleRef.current?.focus();
  }, []);
  useDismiss(navRef, open, close);

  return (
    <nav ref={navRef} className="navbar" aria-label="Primary">
      <a
        href="/"
        className="navbar__brand"
        onClick={(event) => handleSectionClick(event, HOME_ID)}
      >
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
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="navbar-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "close" : "menu"}
        </button>

        <div
          id="navbar-links"
          className={`navbar__links ${open ? "is-open" : ""}`}
        >
          {NAV_SECTIONS.map((item) => (
            <a
              key={item.id}
              href={idToPath(item.id)}
              onClick={(event) => {
                handleSectionClick(event, item.id);
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
