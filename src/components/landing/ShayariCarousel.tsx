import { AnimatePresence, motion } from "framer-motion";
import { Bookmark, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { FEATURED_SHERS } from "@/data/literature";
import { useTypewriter } from "@/hooks/useTypewriter";
import { SectionHeader } from "./TareekharSection";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

export default function ShayariCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = FEATURED_SHERS[currentIndex];

  const addBookmark = useStore((s) => s.addBookmark);
  const bookmarks = useStore((s) => s.bookmarks);
  const isSaved = bookmarks.some((b) => b.id === current.id);

  const { displayText, phase, textIndex } = useTypewriter(
    [current.lines[1]],
    {
      typeSpeed: 65,
      deleteSpeed: 28,
      holdDuration: 3400,
      pauseBetween: 600,
      loop: true,
    },
  );

  // Auto-advance whenever the typewriter completes a delete cycle.
  useEffect(() => {
    if (phase === "pausing" && textIndex === 0) {
      const t = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % FEATURED_SHERS.length);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [phase, textIndex]);

  const go = (dir: 1 | -1) =>
    setCurrentIndex((i) => (i + dir + FEATURED_SHERS.length) % FEATURED_SHERS.length);

  return (
    <section
      id="shayari"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1100px] text-center"
    >
      <SectionHeader
        eyebrow="✦ Muntakhib Ashaar ✦"
        urdu="منتخب اشعار"
        title="Selected Verses"
      />

      <div className="relative mt-14">
        <div
          className="glass relative mx-auto max-w-[760px] overflow-hidden p-8 sm:p-14"
          style={{ borderRadius: "var(--r-xl)" }}
        >
          <Quote
            size={120}
            className="absolute top-4 right-6 text-gold/[0.06] pointer-events-none"
            strokeWidth={1}
          />

          <AnimatePresence mode="wait">
            <motion.p
              key={current.id + "-l1"}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 0.85, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.6 }}
              lang="ur"
              dir="rtl"
              className="font-urdu text-right text-gold leading-[2.4] mb-2"
              style={{ fontSize: "clamp(18px, 3vw, 28px)" }}
            >
              {current.lines[0]}
            </motion.p>
          </AnimatePresence>

          <p
            lang="ur"
            dir="rtl"
            className={
              "typewriter-text font-urdu text-right text-gold leading-[2.4] block mb-7 " +
              (phase === "deleting" ? "deleting" : "")
            }
            style={{ fontSize: "clamp(18px, 3vw, 28px)" }}
          >
            {displayText}
          </p>

          <hr className="divider-gold mx-auto mb-5 w-20 border-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-poet"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="font-urdu text-gold"
                style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
                dir="rtl"
                lang="ur"
              >
                {current.poet}
              </p>
              <p className="font-classical italic text-tertiary-warm text-sm mt-1">
                {current.poetEng} · {current.year}
              </p>
              {current.translation && (
                <p className="font-body text-secondary-warm/70 text-[12px] mt-3 max-w-lg mx-auto leading-relaxed italic">
                  "{current.translation}"
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bookmark */}
          <button
            onClick={() => {
              addBookmark({
                id: current.id,
                lines: current.lines,
                poet: current.poet,
              });
              toast(isSaved ? "Pehle se mehfooz hai" : "Maktaba mein mehfooz", {
                description: current.poetEng,
              });
            }}
            aria-label="Save sher"
            className={
              "absolute top-4 left-4 rounded-full border border-gold/20 bg-background/40 p-2.5 backdrop-blur-md transition-colors " +
              (isSaved ? "text-gold" : "text-secondary-warm hover:text-gold")
            }
          >
            <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-gold/15 bg-background/60 p-2.5 text-gold backdrop-blur hover:bg-gold/10 transition-colors hidden sm:block"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-gold/15 bg-background/60 p-2.5 text-gold backdrop-blur hover:bg-gold/10 transition-colors hidden sm:block"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {FEATURED_SHERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Sher ${i + 1}`}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === currentIndex ? 28 : 8,
              background:
                i === currentIndex
                  ? "hsl(var(--gold-main))"
                  : "rgb(232 180 90 / 0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
