import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Custom spring-physics cursor — gold dot + trailing ring.
 * Scales up on interactive elements. Hidden on touch devices.
 */
export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const isHoveringMV = useMotionValue(0);

  // Dot spring — fast, snappy
  const dotSpringX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
  const dotSpringY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });
  const dotX = useTransform(dotSpringX, (v) => v - 5);
  const dotY = useTransform(dotSpringY, (v) => v - 5);
  const dotScale = useSpring(
    useTransform(isHoveringMV, [0, 1], [1, 0]),
    { stiffness: 500, damping: 28, mass: 0.5 },
  );

  // Ring spring — slower, elegant lag
  const ringSpringX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.8 });
  const ringSpringY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.8 });
  const ringX = useTransform(ringSpringX, (v) => v - 20);
  const ringY = useTransform(ringSpringY, (v) => v - 20);
  const ringScale = useSpring(
    useTransform(isHoveringMV, [0, 1], [1, 1.5]),
    { stiffness: 200, damping: 20, mass: 0.8 },
  );
  const ringOpacity = useSpring(
    useTransform(isHoveringMV, [0, 1], [0.45, 0.9]),
    { stiffness: 200, damping: 20, mass: 0.8 },
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
      {/* Dot — small gold circle */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          scale: dotScale,
          background: "hsl(var(--gold-main))",
          boxShadow: "0 0 8px hsl(var(--gold-main) / 0.5)",
        }}
      />
      {/* Ring — larger trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          opacity: ringOpacity,
          border: "1.5px solid hsl(var(--gold-main))",
        }}
      />
    </>
  );
}
