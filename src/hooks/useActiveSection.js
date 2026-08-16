import { useEffect } from "react";

// Keeps the address bar's hash in sync with whichever section is currently
// in view — clicking a nav link already updates the URL natively, but
// scrolling past a section with no click never did.
export function useActiveSection(ids) {
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
        const hash = `#${mostVisible.target.id}`;
        if (window.location.hash !== hash) {
          window.history.replaceState(null, "", hash);
        }
      },
      // Treat a thin band near vertical center as "active", rather than any intersection at all
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  // On load/reload with a hash already in the URL, the browser can jump before
  // fonts and images finish shifting layout — re-settle it one frame later.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView();
    });
  }, []);
}
