// Shared helpers for path-based section navigation (no router needed for
// a single scrolling page — just keep the URL's path in sync with scroll
// position and handle clicks/back-forward without a full reload).

export function idToPath(id) {
  return id === "top" ? "/" : `/${id}`;
}

export function pathToId(pathname) {
  const id = pathname.replace(/^\/+|\/+$/g, "");
  return id || "top";
}

export function scrollToId(id, behavior = "auto") {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior });
}

// Returns a click handler that scrolls to the section and updates the URL
// path, while still letting modifier-key clicks (open in new tab, middle
// click, etc.) fall through to the anchor's real href.
export function navigateToSection(id) {
  return (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    scrollToId(id, "smooth");
    window.history.pushState(null, "", idToPath(id));
  };
}
