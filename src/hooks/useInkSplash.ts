import { useEffect } from "react";

interface Splash {
  x: number;
  y: number;
  r: number;
  alpha: number;
  particles: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
  }[];
}

export function useInkSplash(canvasRef: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const splashes: Splash[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onClick = (e: MouseEvent) => {
      const particles = Array.from({ length: 12 }, () => ({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        alpha: 0.7,
      }));
      splashes.push({
        x: e.clientX,
        y: e.clientY,
        r: 0,
        alpha: 0.5,
        particles,
      });
    };
    window.addEventListener("click", onClick);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 180, 90, ${s.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        s.r += 3.5;
        s.alpha -= 0.025;

        s.particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 217, 138, ${p.alpha})`;
          ctx.fill();
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.12;
          p.alpha -= 0.022;
        });

        if (s.alpha <= 0) splashes.splice(i, 1);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, [canvasRef]);
}
