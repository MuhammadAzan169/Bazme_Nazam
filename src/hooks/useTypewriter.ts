import { useEffect, useRef, useState } from "react";

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
  pauseBetween?: number;
  loop?: boolean;
}

type Phase = "typing" | "holding" | "deleting" | "pausing";

/**
 * useTypewriter — types text letter by letter, holds, then deletes.
 * Cycles through the provided array.
 */
export function useTypewriter(
  texts: string[],
  {
    typeSpeed = 60,
    deleteSpeed = 30,
    holdDuration = 2800,
    pauseBetween = 600,
    loop = true,
  }: Options = {},
) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [textIndex, setTextIndex] = useState(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentText = texts[textIndex] ?? "";

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (texts.length === 0) return;

    if (phase === "typing") {
      if (charIndexRef.current < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          charIndexRef.current += 1;
          setDisplayText(currentText.slice(0, charIndexRef.current));
        }, typeSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("holding"), holdDuration);
      }
    } else if (phase === "holding") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (charIndexRef.current > 0) {
        timeoutRef.current = setTimeout(() => {
          charIndexRef.current -= 1;
          setDisplayText(currentText.slice(0, charIndexRef.current));
        }, deleteSpeed);
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => {
        if (loop || textIndex < texts.length - 1) {
          setTextIndex((i) => (i + 1) % texts.length);
          charIndexRef.current = 0;
          setPhase("typing");
        }
      }, pauseBetween);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, displayText, textIndex, texts.length]);

  return { displayText, phase, isDeleting: phase === "deleting", textIndex };
}
