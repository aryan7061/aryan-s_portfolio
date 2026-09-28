import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollNav from "./components/ScrollNav";
import EmailOptions from "./components/EmailOptions";
import { useActiveSection } from "./hooks/useActiveSection";

const NAV_SECTION_IDS = [
  "top",
  "about",
  "stack",
  "experience",
  "projects",
  "contact",
];

export default function App() {
  useActiveSection(NAV_SECTION_IDS);

  return (
    <div className="page">
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
      <div className="rule" />
      <Projects />
      <div className="rule" />
      <Quote />
      <div className="rule" />
      <Contact />
      <Footer />
      <ScrollNav />
      <EmailOptions />
    </div>
  );
}
