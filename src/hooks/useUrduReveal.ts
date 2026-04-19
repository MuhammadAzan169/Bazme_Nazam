import { useEffect, useRef, useState } from "react";

interface Options {
  /** ms per character — slower = more dramatic */
  speed?: number;
  /** ms before animation starts */
  delay?: number;
  /** whether to animate at all (set false for instant) */
  animate?: boolean;
}

/**
 * useUrduReveal — reveals Urdu text letter-by-letter from right to left.
 * Returns the visible portion and completion state.
 * Works with RTL text naturally since slice(0, n) on an RTL string
 * renders correctly in a dir="rtl" container.
 */
export function useUrduReveal(
  text: string,
  { speed = 80, delay = 0, animate = true }: Options = {},
) {
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : text.length);
  const [done, setDone] = useState(!animate);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animate || text.length === 0) {
      setVisibleCount(text.length);
      setDone(true);
      return;
    }
    setVisibleCount(0);
    setDone(false);
    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp + delay;
      }
      const elapsed = timestamp - startTimeRef.current;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const count = Math.min(Math.floor(elapsed / speed) + 1, text.length);
      setVisibleCount(count);
      if (count < text.length) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [text, speed, delay, animate]);

  return {
    /** The visible portion of text to render */
    displayText: text.slice(0, visibleCount),
    /** Fraction 0..1 */
    progress: text.length > 0 ? visibleCount / text.length : 1,
    /** True once fully revealed */
    done,
  };
}
