import { useEffect, useRef } from "react";

/**
 * Subtle particle system — gold/rose dust drifting across a canvas.
 * Atmospheric only. Max opacity per particle: 0.22.
 */
export function useParticles(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    const lowPower = (navigator.hardwareConcurrency ?? 8) < 4;
    const COUNT = isMobile ? 35 : lowPower ? 50 : 75;
    const COLORS = ["#E8B45A", "#D4A040", "#C49030", "#C9667A", "#B05065", "#FFD98A"];

    const w = window.innerWidth;
    const h = window.innerHeight;

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.18 + 0.04,
      speed: Math.random() * 0.12 + 0.025,
      angle: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.005 + 0.002,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;
      particles.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.angle += (Math.random() - 0.5) * 0.018;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        const opacity =
          p.opacity * (0.5 + 0.5 * Math.sin(frame * p.pulseSpeed + p.pulsePhase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleVisibility = () => {
      if (document.hidden && animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      } else if (!animRef.current) {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [canvasRef]);
}
