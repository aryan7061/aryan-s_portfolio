import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="page" id="top">
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <div className="rule" />
      <Skills />
      <div className="rule" />
      <Experience />
    </div>
  );
}
