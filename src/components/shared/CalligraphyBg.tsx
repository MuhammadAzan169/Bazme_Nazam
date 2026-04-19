interface Props {
  className?: string;
}

/**
 * Decorative giant Urdu calligraphy watermark behind the hero.
 */
export default function CalligraphyBg({ className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={
        "pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none animate-calli-sway " +
        (className ?? "")
      }
      style={{
        fontFamily: "var(--font-urdu)",
        fontSize: "min(40vw, 520px)",
        color: "rgb(232 180 90 / 0.025)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        direction: "rtl",
      }}
      lang="ur"
    >
      سخن
    </div>
  );
}
