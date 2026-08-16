import { useEffect, useState } from "react";

export function useScrolled(threshold = 240) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(checkScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
