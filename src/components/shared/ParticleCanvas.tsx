import { useEffect, useRef, useState } from "react";
import { useParticles } from "@/hooks/useParticles";

interface Props {
  className?: string;
}

export default function ParticleCanvas({ className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useParticles(ref);

  // Don't render canvas at all for reduced-motion users
  if (reducedMotion) return null;

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={
        "pointer-events-none fixed inset-0 z-0 " + (className ?? "")
      }
    />
  );
}
