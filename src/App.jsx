import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="page" id="top">
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      <Navbar />
      <Hero />
    </div>
  );
}
