import { useCallback, useRef, useState } from "react";
import { useScrolledPast } from "../hooks/useScrolled";
import { useNearFooter } from "../hooks/useNearFooter";
import { useDismiss } from "../hooks/useDismiss";
import { idToPath, navigateToSection } from "../lib/sectionPaths";
import "./ScrollNav.css";

const SECTIONS = [
  { id: "top", label: "top" },
  { id: "about", label: "about" },
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function ScrollNav() {
  const [sentinelRef, scrolledPast] = useScrolledPast();
  const nearFooter = useNearFooter();
  const visible = scrolledPast && !nearFooter;
  const [open, setOpen] = useState(false);
  const [wasVisible, setWasVisible] = useState(visible);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  if (visible !== wasVisible) {
    setWasVisible(visible);
    if (!visible) setOpen(false);
  }

  const close = useCallback((reason) => {
    setOpen(false);
    if (reason === "escape") buttonRef.current?.focus();
  }, []);
  useDismiss(rootRef, open, close);

  return (
    <>
      <div
        ref={sentinelRef}
        className="scroll-nav__sentinel"
        aria-hidden="true"
      />

      <div
        ref={rootRef}
        className={`scroll-nav ${visible ? "is-visible" : ""}`}
        inert={!visible}
      >
        <button
          ref={buttonRef}
          type="button"
          className="scroll-nav__btn"
          aria-expanded={open}
          aria-controls="scroll-nav-menu"
          aria-label="Jump to section"
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true">{open ? "✕" : "↑"}</span>
        </button>

        {open && (
          <nav
            id="scroll-nav-menu"
            className="scroll-nav__menu"
            aria-label="Jump to section"
          >
            {SECTIONS.map((item) => (
              <a
                key={item.id}
                href={idToPath(item.id)}
                className="scroll-nav__bubble"
                onClick={(event) => {
                  navigateToSection(item.id)(event);
                  setOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
