import { useEffect, useRef, useState } from "react";
export function useScrolledPast() {
  const sentinelRef = useRef(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setPassed(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [sentinelRef, passed];
}
