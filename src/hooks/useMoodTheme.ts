import { useEffect } from "react";
import { MOODS, useStore } from "@/store/useStore";

/**
 * Applies the active mood's HSL palette to :root CSS variables so the
 * entire design system (gold accents, backgrounds, borders) re-tints.
 * Mount once near the app root.
 */
export function useMoodTheme() {
  const mood = useStore((s) => s.mood);

  useEffect(() => {
    const m = MOODS[mood];
    const root = document.documentElement;

    // Semantic shadcn tokens
    root.style.setProperty("--primary", m.primaryHsl);
    root.style.setProperty("--ring", m.primaryHsl);
    root.style.setProperty("--accent", m.accentHsl);
    root.style.setProperty("--border", m.borderHsl);
    root.style.setProperty("--input", m.borderHsl);

    // Backgrounds — keep dark, just retint hue
    root.style.setProperty("--background", m.bgPrimaryHsl);
    root.style.setProperty("--card", m.bgSecondaryHsl);
    root.style.setProperty("--popover", m.bgPrimaryHsl);
    root.style.setProperty("--secondary", m.bgSecondaryHsl);
    root.style.setProperty("--muted", m.bgSecondaryHsl);
    root.style.setProperty("--bg-void", m.bgVoidHsl);
    root.style.setProperty("--bg-primary", m.bgPrimaryHsl);
    root.style.setProperty("--bg-secondary", m.bgSecondaryHsl);
    root.style.setProperty("--bg-tertiary", m.bgSecondaryHsl);

    // NOTE: gold palette intentionally unchanged — gold stays golden.
    // Mood accent is expressed via --primary, the ambient aura, and background hue only.

    // Hero gradient
    root.style.setProperty(
      "--grad-hero",
      `radial-gradient(ellipse 80% 60% at 50% -10%, hsl(${m.bgSecondaryHsl}) 0%, hsl(${m.bgPrimaryHsl}) 55%, hsl(${m.bgVoidHsl}) 100%)`,
    );
    root.style.setProperty(
      "--grad-gold-text",
      `linear-gradient(90deg, hsl(${m.primaryHsl}), hsl(${m.accentHsl}))`,
    );
  }, [mood]);
}
