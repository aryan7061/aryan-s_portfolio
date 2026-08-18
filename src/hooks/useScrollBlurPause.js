import { useEffect } from "react";

// Backdrop-filter blur has to resample whatever's behind the element on
// every scroll frame. With this many glass panels — two of them (navbar,
// scroll-nav button) visible for the entire page — that adds up to real
// scroll jank. Drop the blur for the duration of the scroll gesture and
// restore it once movement settles; the panels are static most of the
// time, so the blur reappearing ~150ms after scrolling stops is invisible.
export function useScrollBlurPause(idleDelay = 150) {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;
    let idleTimer = null;

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          root.classList.add("is-scrolling");
          ticking = false;
        });
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        root.classList.remove("is-scrolling");
      }, idleDelay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idleTimer);
    };
  }, [idleDelay]);
}
