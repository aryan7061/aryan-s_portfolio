import { useEffect } from "react";
import { idToPath, pathToId, scrollToId } from "../lib/sectionPaths";

// Keeps the address bar's path in sync with whichever section is currently
// in view, and restores scroll position on load/back-forward — all without
// pulling in a router, since this is a single scrolling page.
export function useActiveSection(ids) {
  useEffect(() => {
    const initialId = pathToId(window.location.pathname);
    if (initialId !== "top" && document.getElementById(initialId)) {
      // Wait a frame so fonts/images have settled before jumping, avoiding
      // a layout-shift-induced mis-scroll on load.
      requestAnimationFrame(() => scrollToId(initialId));
    }

    const onPopState = () =>
      scrollToId(pathToId(window.location.pathname), "smooth");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible) return;
        const path = idToPath(mostVisible.target.id);
        if (window.location.pathname !== path) {
          window.history.replaceState(null, "", path);
        }
      },
      // Treat a thin band near vertical center as "active", rather than any intersection at all
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);
}
