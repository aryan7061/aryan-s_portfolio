import { useEffect } from "react";

export function useDismiss(ref, isOpen, onDismiss) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onDismiss("outside");
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") onDismiss("escape");
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, isOpen, onDismiss]);
}
