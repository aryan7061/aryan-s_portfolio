export const HOME_ID = "top";

export function idToPath(id) {
  return id === HOME_ID ? "/" : `/${id}`;
}

export function pathToId(pathname) {
  const id = pathname.replace(/^\/+|\/+$/g, "");
  return id || HOME_ID;
}

export function scrollToId(id, behavior = "instant") {
  if (id === HOME_ID) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
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
