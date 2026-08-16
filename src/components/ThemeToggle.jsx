import "./ThemeToggle.css";

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isLight}
      aria-label="Toggle light or dark theme"
    >
      <span className="theme-toggle__glyph" aria-hidden="true">
        {isLight ? "☀" : "☽"}
      </span>
      <span className="theme-toggle__label">{theme}</span>
    </button>
  );
}
