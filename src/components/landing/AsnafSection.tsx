import { AnimatePresence, motion } from "framer-motion";
import { X, BookOpen, Feather, ScrollText } from "lucide-react";
import { useState, useEffect } from "react";
import { ASNAF, type Asnaf } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

/* ── Modal ───────────────────────────────────────────────────── */
function AsnafModal({ a, onClose }: { a: Asnaf; onClose: () => void }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Blurred backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/70"
        style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-[680px] max-h-[85vh] overflow-y-auto glass"
        style={{ borderRadius: "var(--r-xl)" }}
        initial={{ opacity: 0, scale: 0.92, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.4, ease: [0.22, 0.68, 0.2, 1] }}
      >
        {/* shimmer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]"
          style={{
            background: "linear-gradient(115deg, transparent 30%, rgb(var(--primary-rgb)/0.06) 50%, transparent 70%)",
            backgroundSize: "250% 100%",
            animation: "shimmerSweep 6s linear infinite",
          }}
        />

        <div className="relative p-7 sm:p-10">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 rounded-full border border-gold/20 bg-background/50 p-1.5 text-gold/60 hover:text-gold hover:border-gold/40 transition-colors"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <p
            className="font-urdu text-grad-gold leading-none"
            style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            dir="rtl"
            lang="ur"
          >
            {a.urdu}
          </p>
          <h2 className="font-display italic text-foreground mt-2 text-2xl sm:text-3xl">
            {a.name}
          </h2>
          <div
            className="my-4"
            style={{ height: 1, width: 64, background: "var(--grad-divider)" }}
          />
          <p className="font-body text-secondary-warm text-sm leading-[1.85] mt-1">
            {a.description}
          </p>

          {/* Detailed description */}
          <p className="font-classical italic text-secondary-warm/80 text-[13.5px] leading-[1.9] mt-5 border-l-2 border-gold/20 pl-4">
            {a.detailedDescription}
          </p>

          {/* Rules */}
          {a.rules.length > 0 && (
            <div className="mt-7">
              <div className="flex items-center gap-2 mb-3">
                <ScrollText size={14} className="text-gold/70" />
                <span className="font-etched text-[10px] tracking-[0.18em] uppercase text-gold/80">
                  Rules & Structure
                </span>
              </div>
              <ul className="space-y-2 pl-1">
                {a.rules.map((rule, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.35 }}
                    className="font-body text-secondary-warm text-[12.5px] leading-relaxed flex gap-2.5"
                  >
                    <span className="text-gold/50 mt-[3px] shrink-0">◆</span>
                    {rule}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Famous Examples */}
          {a.famousExamples.length > 0 && (
            <div className="mt-7">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-gold/70" />
                <span className="font-etched text-[10px] tracking-[0.18em] uppercase text-gold/80">
                  Famous Examples
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {a.famousExamples.map((ex, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gold/15 bg-gold/[0.06] px-3.5 py-1.5 text-[12px] text-secondary-warm"
                  >
                    <span className="font-body">{ex.title}</span>
                    <span className="text-tertiary-warm font-classical italic"> — {ex.poet}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Example Sher */}
          {a.exampleSher.length > 0 && (
            <div className="mt-7">
              <div className="flex items-center gap-2 mb-3">
                <Feather size={14} className="text-gold/70" />
                <span className="font-etched text-[10px] tracking-[0.18em] uppercase text-gold/80">
                  Example
                </span>
              </div>
              <motion.blockquote
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="relative rounded-md border border-gold/10 bg-gold/[0.04] px-5 py-4 overflow-hidden"
                dir="rtl"
              >
                <span
                  aria-hidden
                  className="absolute top-2 right-3 font-urdu text-gold/[0.06] select-none pointer-events-none"
                  style={{ fontSize: 72, lineHeight: 1 }}
                >
                  ؎
                </span>
                {a.exampleSher.map((line, i) => (
                  <p
                    key={i}
                    lang="ur"
                    className="font-urdu text-gold text-right leading-[2.4]"
                    style={{ fontSize: "clamp(15px, 1.8vw, 19px)" }}
                  >
                    {line}
                  </p>
                ))}
              </motion.blockquote>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Card ────────────────────────────────────────────────────── */
function AsnafCard({ a, index, onClick }: { a: Asnaf; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="glass glass-hover relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: "var(--r-lg)" }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      aria-label={`${a.name} — ${a.urdu}`}
    >
      <div className="p-5 sm:p-7">
        <p
          className="font-urdu text-gold leading-none"
          style={{ fontSize: "clamp(32px, 4.5vw, 48px)" }}
          dir="rtl"
          lang="ur"
        >
          {a.urdu}
        </p>
        <h3 className="font-display italic text-foreground mt-2 text-lg sm:text-xl">
          {a.name}
        </h3>
        <hr className="divider-gold my-3 w-10 border-0 mx-0" />
        <p className="font-body text-secondary-warm text-[12px] sm:text-[13px] leading-relaxed">
          {a.description}
        </p>

        {/* "Tap to explore" hint */}
        <p className="mt-4 font-etched text-[9px] tracking-[0.2em] uppercase text-gold/30 group-hover:text-gold/60 transition-colors">
          Tap to explore ↗
        </p>
      </div>
    </motion.div>
  );
}

export default function AsnafSection() {
  return (
    <section
      id="asnaf"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1200px] overflow-hidden"
    >
      <SectionHeader
        eyebrow="✦ Asnaf-e-Sukhan ✦"
        urdu="اصنافِ سخن"
        title="The Forms of Urdu Poetry"
        subtitle="Each genre is a different vessel — for grief, for love, for revolution. Click to explore."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ASNAF.map((a, i) => (
          <AsnafCard key={a.id} a={a} index={i} />
        ))}
      </div>
    </section>
  );
}
