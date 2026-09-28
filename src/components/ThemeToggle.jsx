import { useState } from "react";
import "./ThemeToggle.css";

function Dot({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" />
    </svg>
  );
}

function Star({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
    </svg>
  );
}

function Cloud({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 60" aria-hidden="true">
      <ellipse cx="30" cy="40" rx="25" ry="20" />
      <ellipse cx="55" cy="25" rx="25" ry="25" />
      <ellipse cx="75" cy="40" rx="20" ry="18" />
    </svg>
  );
}

export default function ThemeToggle({ theme, onToggle }) {
  const [hasToggled, setHasToggled] = useState(false);

  function handleChange() {
    setHasToggled(true);
    onToggle();
  }

  return (
    <label className={`switch${hasToggled ? " switch--animated" : ""}`}>
      <input
        className="switch__input"
        type="checkbox"
        aria-label="Dark mode"
        checked={theme === "dark"}
        onChange={handleChange}
      />
      <div className="slider round">
        <Cloud className="cloud-dark cloud--1" />
        <Cloud className="cloud-dark cloud--2" />
        <Cloud className="cloud-dark cloud--3" />
        <Cloud className="cloud-light cloud--4" />
        <Cloud className="cloud-light cloud--5" />
        <Cloud className="cloud-light cloud--6" />
        <div className="sun-moon">
          <Dot className="moon-dot moon-dot--1" />
          <Dot className="moon-dot moon-dot--2" />
          <Dot className="moon-dot moon-dot--3" />
          <Dot className="light-ray light-ray--1" />
          <Dot className="light-ray light-ray--2" />
          <Dot className="light-ray light-ray--3" />
        </div>
        <div className="stars">
          <Star className="star star--1" />
          <Star className="star star--2" />
          <Star className="star star--3" />
          <Star className="star star--4" />
        </div>
      </div>
    </label>
  );
}
