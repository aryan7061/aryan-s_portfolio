import "./Chip.css";

export default function Chip({ children, small = false }) {
  return <span className={small ? "chip chip--sm" : "chip"}>{children}</span>;
}
