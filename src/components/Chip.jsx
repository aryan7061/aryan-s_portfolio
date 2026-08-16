import "./Chip.css";

export default function Chip({ children, small = false }) {
  return <span className={`chip ${small ? "chip--sm" : ""}`}>{children}</span>;
}
