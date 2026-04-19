import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BookOpen, ChevronDown, Feather, Quote, X } from "lucide-react";
import { POETS, type Poet } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

function PoetDetailModal({
  poet,
  onClose,
}: {
  poet: Poet;
  onClose: () => void;
}) {
  // Lock body scroll while modal is open; restore on close/unmount
  useEffect(() => {
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarW}px`;
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative z-10 w-full max-w-[800px] max-h-[85vh] overflow-y-auto overscroll-contain"
        style={{ borderRadius: "var(--r-xl)" }}
        data-lenis-prevent
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full border border-gold/20 bg-background/60 p-2 text-gold backdrop-blur hover:bg-gold/10 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header with gradient */}
        <div
          className="relative p-6 sm:p-8 pb-0"
          style={{ background: poet.imgColor }}
        >
          <div className="flex gap-5 items-end pb-6">
            {/* Portrait */}
            <div className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-lg overflow-hidden border border-gold/20 flex-shrink-0">
              {poet.wikiImg ? (
                <img
                  src={poet.wikiImg}
                  alt={poet.nameEng}
                  className="w-full h-full object-cover"
                  style={{ filter: "sepia(20%) contrast(105%) brightness(0.85) saturate(0.85)" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-urdu text-gold/30" style={{ fontSize: "60px" }} dir="rtl" lang="ur">
                    {poet.fallbackLetter}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="font-urdu text-gold text-right leading-tight"
                style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
                dir="rtl"
                lang="ur"
              >
                {poet.nameUrdu}
              </p>
              <h2 className="font-display text-foreground mt-1 text-xl sm:text-2xl">
                {poet.nameEng}
              </h2>
              <p className="font-etched text-[11px] tracking-[0.12em] text-tertiary-warm mt-1">
                {poet.years} · {poet.era}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-4 space-y-6">
          {/* Full bio */}
          <div>
            <p className="font-body text-secondary-warm text-[13.5px] leading-[1.9]">
              {poet.fullBio}
            </p>
          </div>

          {/* Style & Legacy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-md border border-gold/10 bg-gold/[0.03] p-4">
              <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80 block mb-2">
                Style
              </span>
              <p className="font-body text-secondary-warm text-[12.5px] leading-relaxed">
                {poet.style}
              </p>
            </div>
            <div className="rounded-md border border-gold/10 bg-gold/[0.03] p-4">
              <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80 block mb-2">
                Legacy
              </span>
              <p className="font-body text-secondary-warm text-[12.5px] leading-relaxed">
                {poet.legacy}
              </p>
            </div>
          </div>

          {/* Top Works */}
          {poet.topWorks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={15} className="text-gold/70" />
                <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                  Major Works
                </span>
              </div>
              <div className="space-y-3">
                {poet.topWorks.map((work, i) => (
                  <div
                    key={i}
                    className="rounded-md border border-gold/10 bg-gold/[0.02] p-4 flex gap-4 items-start"
                  >
                    <span className="font-display text-gold/30 text-2xl italic leading-none mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h4 className="font-display italic text-foreground text-[15px]">
                          {work.title}
                        </h4>
                        <span className="font-urdu text-gold text-[14px]" dir="rtl" lang="ur">
                          {work.titleUrdu}
                        </span>
                        <span className="font-etched text-[10px] text-tertiary-warm">
                          ({work.year})
                        </span>
                      </div>
                      <p className="font-body text-secondary-warm text-[12px] leading-relaxed mt-1">
                        {work.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Famous Ashaar */}
          {poet.famousAshaar.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Feather size={15} className="text-gold/70" />
                <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                  Famous Ashaar
                </span>
              </div>
              <div className="space-y-3">
                {poet.famousAshaar.map((sher, i) => (
                  <blockquote
                    key={i}
                    className="rounded-md border border-gold/10 bg-gold/[0.04] p-4 relative"
                  >
                    <Quote
                      size={40}
                      className="absolute top-2 right-3 text-gold/[0.06] pointer-events-none"
                      strokeWidth={1}
                    />
                    <div dir="rtl">
                      {sher.lines.map((line, j) => (
                        <p
                          key={j}
                          lang="ur"
                          className="font-urdu text-gold text-right leading-[2.4]"
                          style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <p className="font-classical italic text-tertiary-warm text-[11px] mt-2">
                      — {sher.context}
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PoetCard({ poet, index }: { poet: Poet; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: index * 0.06, duration: 0.65 }}
        whileHover={{ y: -8 }}
        className="glass glass-hover overflow-hidden flex flex-col cursor-pointer"
        style={{ borderRadius: "var(--r-lg)" }}
        onClick={() => setShowDetail(true)}
      >
        {/* Portrait */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            paddingBottom: "100%",
            background: poet.imgColor,
            borderRadius: "var(--r-lg) var(--r-lg) 0 0",
          }}
        >
          {poet.wikiImg && !imgError ? (
            <img
              src={poet.wikiImg}
              alt={`${poet.nameEng} — Urdu poet (${poet.years})`}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-500 hover:[filter:sepia(15%)_contrast(108%)_brightness(0.9)_saturate(0.9)]"
              style={{
                filter: "sepia(30%) contrast(105%) brightness(0.82) saturate(0.8)",
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-urdu text-gold/25"
                style={{ fontSize: "clamp(72px, 12vw, 110px)" }}
                lang="ur"
                dir="rtl"
              >
                {poet.fallbackLetter}
              </span>
            </div>
          )}

          <div className="absolute top-3 left-3">
            <span className="rounded-full border border-gold/20 bg-background/75 px-2.5 py-1 font-etched text-[9px] tracking-[0.12em] uppercase text-secondary-warm backdrop-blur-md">
              {poet.era}
            </span>
          </div>

          {/* "Click to explore" hint */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-3 flex justify-center">
            <span className="font-etched text-[9px] tracking-[0.14em] uppercase text-gold/70 flex items-center gap-1">
              Click to explore
              <ChevronDown size={12} />
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-4 sm:p-5">
          <p
            className="font-urdu text-gold text-right leading-tight"
            style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
            dir="rtl"
            lang="ur"
          >
            {poet.nameUrdu}
          </p>
          <h3 className="font-display text-foreground mt-1 text-[15px] sm:text-base">
            {poet.nameEng}
          </h3>
          <p className="font-etched text-[10px] tracking-[0.1em] text-tertiary-warm mt-0.5">
            {poet.years}
          </p>

          <p className="font-body text-secondary-warm mt-3 text-[12px] sm:text-[13px] leading-[1.7]">
            {poet.bio}
          </p>

          {/* Sher reveal */}
          <div className="mt-3 border-t border-gold/10 pt-3" dir="rtl">
            {poet.sher.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
                whileInView={{ opacity: 0.9, y: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.5, duration: 0.6 }}
                lang="ur"
                className="font-urdu text-gold text-right leading-[2.4]"
                style={{ fontSize: "clamp(12px, 1.4vw, 14px)" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <PoetDetailModal poet={poet} onClose={() => setShowDetail(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ShuaraSection() {
  return (
    <section
      id="shuara"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1300px]"
    >
      <SectionHeader
        eyebrow="✦ Shuara-e-Urdu ✦"
        urdu="شعرائے اردو"
        title="Voices That Defined the Tradition"
        subtitle="From the candlelit kothas of Delhi to the Instagram reels of Karachi. Click any poet to explore."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {POETS.map((poet, i) => (
          <PoetCard key={poet.id} poet={poet} index={i} />
        ))}
      </div>
    </section>
  );
}
