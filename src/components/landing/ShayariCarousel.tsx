import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FEATURED_SHERS } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

const AUTO_DELAY = 7000;

/* ── word-by-word blur → reveal ─────────────────────────────────── */
const wordVariant = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 14 },
  show: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 0.68, 0.2, 1] as [number, number, number, number],
      delay: i * 0.065,
    },
  }),
  exit: { opacity: 0, filter: "blur(8px)", y: -10, transition: { duration: 0.25 } },
};

function SherLines({ lines, cardKey }: { lines: string[]; cardKey: string }) {
  const allWords = lines.map((l) => l.split(" "));
  let globalIdx = 0;
  return (
    <motion.div key={cardKey} initial="hidden" animate="show" exit="exit" className="w-full">
      {allWords.map((words, li) => (
        <motion.p
          key={li}
          dir="rtl"
          lang="ur"
          className="font-urdu text-gold text-right leading-[2.5]"
          style={{ fontSize: "clamp(18px, 2.8vw, 28px)" }}
        >
          {words.map((word) => {
            const idx = globalIdx++;
            return (
              <motion.span
                key={`${cardKey}-${idx}`}
                custom={idx}
                variants={wordVariant}
                className="inline-block mx-[3px]"
              >
                {word}
              </motion.span>
            );
          })}
        </motion.p>
      ))}
    </motion.div>
  );
}

export default function ShayariCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = FEATURED_SHERS[currentIndex];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const englishY = useTransform(scrollYProgress, [0, 1], ["16px", "-16px"]);

  const totalWords = current.lines.reduce((sum, l) => sum + l.split(" ").length, 0);
  const attrDelay = totalWords * 0.065 + 0.35;

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrentIndex((i) => (i + dir + FEATURED_SHERS.length) % FEATURED_SHERS.length);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => go(1), AUTO_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const pct = Math.min(((now - start) / AUTO_DELAY) * 100, 100);
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [currentIndex]);

  return (
    <section
      id="shayari"
      ref={sectionRef}
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1100px] text-center overflow-hidden"
    >
      <SectionHeader
        eyebrow="✦ Muntakhib Ashaar ✦"
        urdu="منتخب اشعار"
        title="Selected Verses"
      />

      <div className="relative mt-14">
        {/* main card */}
        <div
          className="glass relative mx-auto max-w-[780px] overflow-hidden px-8 py-10 sm:px-14 sm:py-14"
          style={{ borderRadius: "var(--r-xl)" }}
        >
          {/* ambient shimmer */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, transparent 30%, rgb(var(--primary-rgb) / 0.06) 50%, transparent 70%)",
              backgroundSize: "250% 100%",
              animation: "shimmerSweep 6s linear infinite",
            }}
          />

          {/* sher lines */}
          <div className="relative z-10 min-h-[130px] sm:min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <SherLines key={current.id} lines={current.lines} cardKey={current.id} />
            </AnimatePresence>
          </div>

          <hr className="divider-gold mx-auto my-6 w-24 border-0" />

          {/* attribution */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-attr"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { delay: attrDelay, duration: 0.6 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <p
                className="font-urdu text-gold"
                style={{ fontSize: "clamp(15px, 2vw, 21px)" }}
                dir="rtl"
                lang="ur"
              >
                {current.poet}
              </p>
              <p className="font-classical italic text-tertiary-warm text-sm mt-1">
                {current.poetEng} · {current.year}
              </p>
              {current.translation && (
                <motion.p
                  style={{ y: englishY }}
                  className="font-body text-secondary-warm/65 text-[12px] mt-4 max-w-lg mx-auto leading-relaxed italic"
                >
                  &ldquo;{current.translation}&rdquo;
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold/[0.08] overflow-hidden">
            <div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: "var(--grad-gold)",
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>

        {/* arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-gold/15 bg-background/60 p-2.5 text-gold backdrop-blur hover:bg-gold/10 transition-colors hidden sm:block"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-gold/15 bg-background/60 p-2.5 text-gold backdrop-blur hover:bg-gold/10 transition-colors hidden sm:block"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* dots */}
      <div className="mt-8 flex justify-center items-center gap-2">
        {FEATURED_SHERS.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
            aria-label={`Sher ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              height: 6,
              width: i === currentIndex ? 32 : 6,
              background:
                i === currentIndex
                  ? "hsl(var(--gold-main))"
                  : "rgb(var(--primary-rgb) / 0.22)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
