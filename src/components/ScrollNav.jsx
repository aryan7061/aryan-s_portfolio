import { useEffect, useRef, useState } from "react";
import { useScrolledPast } from "../hooks/useScrolled";
import { useNearFooter } from "../hooks/useNearFooter";
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
  const rootRef = useRef(null);

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
    <>
      <div
        ref={sentinelRef}
        className="scroll-nav__sentinel"
        aria-hidden="true"
      />

      <div
        ref={rootRef}
        className={`scroll-nav ${visible ? "is-visible" : ""}`}
      >
        {open && (
          <div className="scroll-nav__menu" role="menu">
            {SECTIONS.map((item) => (
              <a
                key={item.id}
                href={idToPath(item.id)}
                role="menuitem"
                className="scroll-nav__bubble"
                onClick={(event) => {
                  navigateToSection(item.id)(event);
                  setOpen(false);
                }}
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
    </>
  );
}
