import { useEffect } from "react";
import { MOODS, useStore } from "@/store/useStore";

/** Parse "H S% L%" and return with adjusted S/L */
function adjustHsl(hsl: string, lDelta: number, sDelta = 0): string {
  const [h, sp, lp] = hsl.split(" ");
  const s = Math.max(0, Math.min(100, parseFloat(sp) + sDelta));
  const l = Math.max(0, Math.min(100, parseFloat(lp) + lDelta));
  return `${h} ${s}% ${l}%`;
}

/** Convert "#RRGGBB" → [r, g, b] */
function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

/**
 * Applies the active mood's full palette to :root CSS variables so
 * EVERY design token (gold, rose, glass, gradients, backgrounds) re-tints.
 * Mount once near the app root.
 */
export function useMoodTheme() {
  const mood = useStore((s) => s.mood);

  useEffect(() => {
    const m = MOODS[mood];
    const root = document.documentElement;
    const [r, g, b] = hexToRgb(m.hexPrimary);

    // ── Shadcn semantic tokens ──────────────────────────────────
    root.style.setProperty("--primary", m.primaryHsl);
    root.style.setProperty("--ring", m.primaryHsl);
    root.style.setProperty("--accent", m.accentHsl);
    root.style.setProperty("--border", m.borderHsl);
    root.style.setProperty("--input", m.borderHsl);
    root.style.setProperty("--background", m.bgPrimaryHsl);
    root.style.setProperty("--card", m.bgSecondaryHsl);
    root.style.setProperty("--popover", m.bgPrimaryHsl);
    root.style.setProperty("--secondary", m.bgSecondaryHsl);
    root.style.setProperty("--muted", m.bgSecondaryHsl);
    root.style.setProperty("--bg-void", m.bgVoidHsl);
    root.style.setProperty("--bg-primary", m.bgPrimaryHsl);
    root.style.setProperty("--bg-secondary", m.bgSecondaryHsl);
    root.style.setProperty("--bg-tertiary", m.bgSecondaryHsl);

    // ── Gold palette → mood primary (drives text-gold, border-gold, bg-gold) ──
    root.style.setProperty("--gold-bright", adjustHsl(m.primaryHsl, +12));
    root.style.setProperty("--gold-main",   m.primaryHsl);
    root.style.setProperty("--gold-warm",   adjustHsl(m.primaryHsl, -8, -8));
    root.style.setProperty("--gold-dim",    adjustHsl(m.primaryHsl, -20));
    root.style.setProperty("--text-gold",   m.textGoldHsl);

    // ── Rose palette → mood accent ───────────────────────────────
    root.style.setProperty("--rose-main",   m.accentHsl);
    root.style.setProperty("--rose-bright", adjustHsl(m.accentHsl, +10));
    root.style.setProperty("--rose-dim",    adjustHsl(m.accentHsl, -18));
    root.style.setProperty("--text-rose",   adjustHsl(m.accentHsl, +12));
    root.style.setProperty("--indigo-main", adjustHsl(m.accentHsl, +5));

    // ── Glass tints using mood primary RGB ───────────────────────
    root.style.setProperty("--primary-rgb",              `${r} ${g} ${b}`);
    root.style.setProperty("--bg-glass",               `${r} ${g} ${b} / 0.04`);
    root.style.setProperty("--bg-glass-strong",        `${r} ${g} ${b} / 0.07`);
    root.style.setProperty("--bg-glass-hover",         `${r} ${g} ${b} / 0.10`);
    root.style.setProperty("--gold-border-rgba",       `${r} ${g} ${b} / 0.14`);
    root.style.setProperty("--gold-border-hover-rgba", `${r} ${g} ${b} / 0.35`);

    // ── Gradients ────────────────────────────────────────────────
    root.style.setProperty(
      "--grad-hero",
      `radial-gradient(ellipse 80% 60% at 50% -10%, hsl(${m.bgSecondaryHsl}) 0%, hsl(${m.bgPrimaryHsl}) 55%, hsl(${m.bgVoidHsl}) 100%)`,
    );
    root.style.setProperty(
      "--grad-gold",
      `linear-gradient(135deg, hsl(${adjustHsl(m.primaryHsl, -12)}) 0%, hsl(${m.primaryHsl}) 50%, hsl(${adjustHsl(m.primaryHsl, -16)}) 100%)`,
    );
    root.style.setProperty(
      "--grad-gold-text",
      `linear-gradient(90deg, hsl(${m.primaryHsl}), hsl(${m.accentHsl}))`,
    );
    root.style.setProperty(
      "--grad-card",
      `linear-gradient(145deg, rgb(${r} ${g} ${b} / 0.06), rgb(${r} ${g} ${b} / 0.03))`,
    );
    root.style.setProperty(
      "--grad-divider",
      `linear-gradient(90deg, transparent, rgb(${r} ${g} ${b} / 0.45), transparent)`,
    );
  }, [mood]);
}
