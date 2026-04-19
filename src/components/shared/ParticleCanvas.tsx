import { useEffect, useRef } from "react";
import { useParticles } from "@/hooks/useParticles";

interface Props {
  className?: string;
}

export default function ParticleCanvas({ className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  useParticles(ref);

  // Hide for reduced-motion users
  const reducedMotion = useRef(false);
  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

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
