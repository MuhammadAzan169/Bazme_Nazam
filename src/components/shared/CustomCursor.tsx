import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Custom spring-physics cursor — feather quill nib only.
 * Scales up on interactive elements. Hidden on touch devices.
 */
export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const isHoveringMV = useMotionValue(0);

  // Feather spring — fast, snappy
  const featherSpringX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const featherSpringY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });
  const featherX = useTransform(featherSpringX, (v) => v - 2);
  const featherY = useTransform(featherSpringY, (v) => v - 2);
  const featherScale = useSpring(
    useTransform(isHoveringMV, [0, 1], [1, 1.3]),
    { stiffness: 500, damping: 28, mass: 0.5 },
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        target.classList.contains("cursor-pointer");
      isHoveringMV.set(hovering ? 1 : 0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isHoveringMV]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Feather quill nib SVG */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: featherX,
          y: featherY,
          scale: featherScale,
          filter: "drop-shadow(0 0 6px hsl(var(--gold-main) / 0.5))",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(-30deg)" }}
        >
          {/* Feather body */}
          <path
            d="M20.12 3.88C17.61 1.37 10 4 7 7c-2.4 2.4-3.7 5.6-4 9l6-2c.5-.5 1.2-1.5 2-3s3.5-5.5 9.12-7.12z"
            fill="hsl(var(--gold-main))"
            opacity="0.85"
          />
          {/* Feather spine */}
          <path
            d="M20.12 3.88L4 20"
            stroke="hsl(var(--gold-main))"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          {/* Nib tip */}
          <path
            d="M3 21l1-1c.3-3.4 1.6-6.6 4-9"
            stroke="hsl(var(--gold-main))"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Barb lines */}
          <path
            d="M15 5.5l-3 3M17 4.5l-4 4M12 7l-2.5 2.5"
            stroke="hsl(var(--gold-warm))"
            strokeWidth="0.5"
            opacity="0.5"
          />
          {/* Ink dot at nib */}
          <circle cx="3" cy="21" r="1.2" fill="hsl(var(--gold-bright))" />
        </svg>
      </motion.div>
    </>
  );
}
