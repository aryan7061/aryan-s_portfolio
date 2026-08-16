import { useEffect, useRef, useState } from "react";
import { useScrolled } from "../hooks/useScrolled";
import "./ScrollNav.css";

const SECTIONS = [
  { href: "#top", label: "top" },
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function ScrollNav() {
  const visible = useScrolled(240);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // Scrolling back near the top hides the button — close the menu with it.
  useEffect(() => {
    if (!visible && open) setOpen(false);
  }, [visible, open]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className={`scroll-nav ${visible ? "is-visible" : ""}`}>
      {open && (
        <div className="scroll-nav__menu" role="menu">
          {SECTIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              role="menuitem"
              className="scroll-nav__bubble"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        className="scroll-nav__btn"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Jump to section"
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden="true">{open ? "✕" : "↑"}</span>
      </button>
    </div>
  );
}
