import { useEffect, useState } from "react";

export function useNearFooter(rootMargin = "0px 0px 100px 0px") {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin, threshold: 0 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [rootMargin]);

  return near;
}
