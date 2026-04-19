import { motion } from "framer-motion";
import { MOODS, type MoodKey, useStore } from "@/store/useStore";

interface Props {
  compact?: boolean;
  showImages?: boolean;
}

export default function MoodPicker({ compact, showImages }: Props) {
  const mood = useStore((s) => s.mood);
  const setMood = useStore((s) => s.setMood);
  const current = MOODS[mood];

  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(Object.keys(MOODS) as MoodKey[]).map((k) => {
          const m = MOODS[k];
          const active = k === mood;
          return (
            <motion.button
              key={k}
              onClick={() => setMood(k)}
              whileTap={{ scale: 0.94 }}
              whileHover={{ y: -2 }}
              aria-pressed={active}
              aria-label={`Set mood to ${m.labelEn} (${m.meaning})`}
              className={
                "rounded-full border px-3 py-1.5 text-[11px] font-etched tracking-[0.14em] uppercase transition-all " +
                (active
                  ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_16px_hsl(var(--primary)/0.3)]"
                  : "border-border bg-card/40 text-secondary-warm hover:text-primary hover:border-primary/40")
              }
            >
              <span className="mr-1.5">{m.emoji}</span>
              <span className="font-urdu" dir="rtl" lang="ur">{m.label}</span>
              <span className="ml-1.5 opacity-70">{m.labelEn}</span>
            </motion.button>
          );
        })}
      </div>
    );
  }

  if (showImages) {
    return (
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {(Object.keys(MOODS) as MoodKey[]).map((k, i) => {
            const m = MOODS[k];
            const active = k === mood;
            return (
              <motion.button
                key={k}
                onClick={() => setMood(k)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
                aria-pressed={active}
                aria-label={`Set mood to ${m.labelEn} — ${m.meaning}`}
                className={
                  "group relative flex flex-col items-center overflow-hidden rounded-2xl border text-left transition-all " +
                  (active
                    ? "border-primary/70 shadow-[0_0_28px_hsl(var(--primary)/0.35)] scale-[1.02]"
                    : "border-border hover:border-primary/40")
                }
                style={{ borderRadius: "var(--r-lg)" }}
              >
                {/* Image */}
                <div
                  className="relative h-28 w-full overflow-hidden sm:h-36 img-skeleton"
                  style={{ borderRadius: "var(--r-lg) var(--r-lg) 0 0" }}
                >
                  <img
                    src={m.image}
                    alt={`${m.labelEn} mood — ${m.meaning}`}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      filter: active
                        ? "saturate(1.15) brightness(0.95)"
                        : "saturate(0.7) brightness(0.6)",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute top-2 right-2 text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                    aria-hidden="true"
                  >
                    {m.emoji}
                  </span>
                </div>

                {/* Body */}
                <div className="w-full bg-card/80 px-3 py-3 backdrop-blur-md">
                  <p
                    className="font-urdu text-right leading-tight"
                    style={{
                      fontSize: "20px",
                      color: active ? `hsl(${m.primaryHsl})` : "hsl(var(--text-gold))",
                    }}
                    dir="rtl"
                    lang="ur"
                  >
                    {m.label}
                  </p>
                  <div className="mt-1 flex items-baseline justify-between gap-2">
                    <p className="font-display text-foreground text-sm">{m.labelEn}</p>
                    <p className="font-etched text-[9px] tracking-[0.14em] uppercase text-tertiary-warm">
                      {m.meaning}
                    </p>
                  </div>
                </div>

                {active && (
                  <motion.div
                    layoutId="mood-active-ring"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-primary/60"
                    style={{ borderRadius: "var(--r-lg)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active mood description */}
        <motion.div
          key={mood}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto max-w-xl rounded-2xl px-5 py-4 text-center"
          style={{ borderRadius: "var(--r-lg)" }}
        >
          <p className="font-classical italic text-secondary-warm">
            <span className="text-primary">{current.labelEn}</span> · {current.description}
          </p>
        </motion.div>
      </div>
    );
  }

  // default chip layout
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-4">
      {(Object.keys(MOODS) as MoodKey[]).map((k) => {
        const m = MOODS[k];
        const active = k === mood;
        return (
          <motion.button
            key={k}
            onClick={() => setMood(k)}
            whileTap={{ scale: 0.94 }}
            whileHover={{ y: -2 }}
            aria-pressed={active}
            className={
              "rounded-full border px-4 py-2 text-[11px] font-etched tracking-[0.14em] uppercase transition-all " +
              (active
                ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_18px_hsl(var(--primary)/0.3)]"
                : "border-border bg-card/40 text-secondary-warm hover:text-primary hover:border-primary/40")
            }
          >
            <span className="mr-1.5">{m.emoji}</span>
            <span className="font-urdu mr-1.5" dir="rtl" lang="ur">{m.label}</span>
            <span>{m.labelEn}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
