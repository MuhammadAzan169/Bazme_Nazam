interface Props {
  word: string;
  position?: "left" | "right" | "center";
}

export default function SectionWatermark({ word, position = "right" }: Props) {
  const posClass = {
    left: "left-4 text-left",
    right: "right-4 text-right",
    center: "left-1/2 -translate-x-1/2 text-center",
  }[position];

  return (
    <span
      className={`absolute top-0 ${posClass} font-urdu pointer-events-none select-none z-0`}
      dir="rtl"
      aria-hidden="true"
      style={{
        fontSize: "clamp(100px, 18vw, 200px)",
        lineHeight: 1,
        color: "hsl(var(--gold-main) / 0.055)",
        userSelect: "none",
      }}
    >
      {word}
    </span>
  );
}
