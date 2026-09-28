import "./HeroLaptop.css";

export default function HeroLaptop() {
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
                <div className="lp-display lp-display--headline">
                  <div className="lp-cam" />
                  <div className="lp-headline">
                    <p className="lp-headline__kicker">hello world</p>
                    <p className="lp-headline__statement">
                      I design <span className="lp-headline__amp">&amp;</span>{" "}
                      craft beautiful websites that solve your{" "}
                      <span className="lp-headline__accent">
                        business tasks
                      </span>
                    </p>
                  </div>
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
