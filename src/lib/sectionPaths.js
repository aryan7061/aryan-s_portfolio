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
