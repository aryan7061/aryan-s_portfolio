import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "aryan-theme";
const LIGHT_QUERY = "(prefers-color-scheme: light)";

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Theme still works for this visit, it just won't be remembered.
  }
}
function getSystemTheme() {
  return window.matchMedia(LIGHT_QUERY).matches ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => readStoredTheme() ?? getSystemTheme(),
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(LIGHT_QUERY);
    const onChange = (event) => {
      if (readStoredTheme() === null) {
        setTheme(event.matches ? "light" : "dark");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    storeTheme(next);
    setTheme(next);
  }, [theme]);

  return [theme, toggleTheme];
}
