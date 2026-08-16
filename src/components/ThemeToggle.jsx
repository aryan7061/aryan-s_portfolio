import "./ThemeToggle.css";

function Dot({ id, className }) {
  return (
    <svg id={id} className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

function Star({ id, className }) {
  return (
    <svg id={id} className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
    </svg>
  );
}

function Cloud({ id, className }) {
  return (
    <svg id={id} className={className} viewBox="0 0 100 60" aria-hidden="true">
      <ellipse cx="30" cy="40" rx="25" ry="20" />
      <ellipse cx="55" cy="25" rx="25" ry="25" />
      <ellipse cx="75" cy="40" rx="20" ry="18" />
    </svg>
  );
}

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <label className="switch" aria-label="Toggle light or dark theme">
      <input
        id="theme-switch-input"
        type="checkbox"
        checked={isDark}
        onChange={onToggle}
      />
      <div className="slider round">
        <Cloud id="cloud-1" className="cloud-dark" />
        <Cloud id="cloud-2" className="cloud-dark" />
        <Cloud id="cloud-3" className="cloud-dark" />
        <Cloud id="cloud-4" className="cloud-light" />
        <Cloud id="cloud-5" className="cloud-light" />
        <Cloud id="cloud-6" className="cloud-light" />
        <div className="sun-moon">
          <Dot id="moon-dot-1" className="moon-dot" />
          <Dot id="moon-dot-2" className="moon-dot" />
          <Dot id="moon-dot-3" className="moon-dot" />
          <Dot id="light-ray-1" className="light-ray" />
          <Dot id="light-ray-2" className="light-ray" />
          <Dot id="light-ray-3" className="light-ray" />
        </div>
        <div className="stars">
          <Star id="star-1" className="star" />
          <Star id="star-2" className="star" />
          <Star id="star-3" className="star" />
          <Star id="star-4" className="star" />
        </div>
      </div>
    </label>
  );
}
