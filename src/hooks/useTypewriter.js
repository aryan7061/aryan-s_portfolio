import { useEffect, useRef, useState } from "react";

// Types out an array of lines, joined with newlines, at a fixed per-character
// interval. Renders instantly for prefers-reduced-motion instead of animating.
export function useTypewriter(lines, speed = 26) {
  const [text, setText] = useState("");
  const linesRef = useRef(lines);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(linesRef.current.join("\n"));
      return undefined;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let out = "";

    const timer = setInterval(() => {
      const currentLine = linesRef.current[lineIndex];
      if (currentLine === undefined) {
        clearInterval(timer);
        return;
      }
      if (charIndex < currentLine.length) {
        out += currentLine[charIndex];
        charIndex += 1;
      } else {
        out += "\n";
        lineIndex += 1;
        charIndex = 0;
      }
      setText(out);
    }, speed);

    return () => clearInterval(timer);
  }, [speed]);

  return text;
}
