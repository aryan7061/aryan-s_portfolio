import { heroLines } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import "./HeroLaptop.css";

export default function HeroLaptop() {
  const typed = useTypewriter(heroLines);

  return (
    <div className="hero-laptop-slot" aria-hidden="true">
      <div className="laptop-loader">
        <div className="lp-aura" />
        <div className="lp-particles">
          <div className="lp-particle" />
          <div className="lp-particle" />
          <div className="lp-particle" />
          <div className="lp-particle" />
          <div className="lp-particle" />
          <div className="lp-particle" />
        </div>

        <div className="lp-scene">
          <div className="lp-laptop">
            <div className="lp-screen">
              <div className="lp-bezel">
                <div className="lp-display lp-display--terminal">
                  <div className="lp-cam" />
                  <div className="lp-termbar">
                    <span
                      className="lp-termdot"
                      style={{ background: "#ff5f57" }}
                    />
                    <span
                      className="lp-termdot"
                      style={{ background: "#febc2e" }}
                    />
                    <span
                      className="lp-termdot"
                      style={{ background: "#28c840" }}
                    />
                    <span className="lp-termpath">~/aryan — zsh</span>
                  </div>
                  <pre className="lp-termbody">
                    {typed}
                    <span className="lp-termcaret">_</span>
                  </pre>
                </div>
              </div>
              <div className="lp-hinge" />
            </div>

            <div className="lp-deck">
              <div className="lp-base">
                <div className="lp-keys">
                  <div className="lp-row">
                    <div className="lp-key" />
                    <div className="lp-key lp-hit lp-k1" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key lp-hit lp-k2" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                  </div>
                  <div className="lp-row">
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key lp-hit lp-k3" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key lp-hit lp-k4" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                  </div>
                  <div className="lp-row">
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key lp-hit lp-k5" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key lp-hit lp-k6" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                  </div>
                  <div className="lp-row">
                    <div className="lp-key lp-key--shift lp-shift" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key" />
                    <div className="lp-key lp-key--space" />
                    <div className="lp-key" />
                    <div className="lp-key lp-key--enter" />
                  </div>
                </div>
                <div className="lp-pad" />
              </div>
              <div className="lp-front" />
            </div>
          </div>
        </div>

        <div className="lp-shadow" />
      </div>
    </div>
  );
}
