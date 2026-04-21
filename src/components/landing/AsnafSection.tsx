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

  // Lock scroll without moving the page — overflow on <html> preserves
  // scrollY natively so there is no jump when the modal closes.
  useEffect(() => {
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarW}px`;
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          background: "rgba(4, 2, 12, 0.88)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
        }}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 flex flex-col w-full max-w-[660px]"
        style={{
          borderRadius: "var(--r-xl)",
          maxHeight: "min(92vh, 840px)",
          background: "linear-gradient(160deg, hsl(256 38% 10% / 0.98) 0%, hsl(256 47% 5% / 0.99) 100%)",
          border: "1px solid rgb(var(--primary-rgb) / 0.18)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgb(var(--primary-rgb)/0.06), inset 0 1px 0 rgb(var(--primary-rgb)/0.14)",
        }}
        initial={{ opacity: 0, scale: 0.86, y: 48 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top accent bar */}
        <div
          aria-hidden
          className="absolute top-0 left-8 right-8 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgb(var(--primary-rgb)/0.9), rgb(var(--primary-rgb)/0.5), transparent)" }}
        />

        {/* ── Fixed Header ── */}
        <div className="relative flex-none px-7 pt-7 pb-5">

          {/* Title row: English left · Urdu right · Close far-right */}
          <div className="flex items-start justify-between gap-3">

            {/* LEFT — English name */}
            <div className="flex flex-col min-w-0">
              <p className="font-etched text-[8.5px] tracking-[0.28em] uppercase text-gold/45 mb-1">
                ✦ Asnaf-e-Sukhan ✦
              </p>
              <h2 className="font-display italic text-foreground/90 text-xl sm:text-[1.65rem] leading-snug tracking-tight">
                {a.name}
              </h2>
            </div>

            {/* RIGHT — Urdu name + close button */}
            <div className="flex items-start gap-3 flex-shrink-0">
              <p
                className="font-urdu text-grad-gold text-right"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.7 }}
                dir="rtl"
                lang="ur"
              >
                {a.urdu}
              </p>

              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex-none mt-1 w-8 h-8 rounded-full border border-gold/20 bg-background/50 flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold/45 hover:bg-gold/10 transition-all duration-200"
              >
                <X size={13} />
              </button>
            </div>
          </div>

          {/* Ornamental divider */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgb(var(--primary-rgb)/0.25))" }} />
            <span className="text-gold/25 text-[10px]">◆</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgb(var(--primary-rgb)/0.25))" }} />
          </div>
        </div>

        {/* ── Scrollable Body — scroll-contained, no bleed ── */}
        <div
          className="relative flex-1 overflow-y-auto px-7 pb-8"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgb(var(--primary-rgb)/0.22) transparent",
            overscrollBehavior: "contain",
          }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Main description */}
          <p dir="ltr" className="font-body text-secondary-warm text-[13.5px] leading-[1.95]">
            {a.description}
          </p>

          {/* Detailed description */}
          {a.detailedDescription && (
            <div className="mt-4 pl-4 border-l-2 border-gold/15">
              <p dir="ltr" className="font-classical italic text-secondary-warm/65 text-[12.5px] sm:text-[13px] leading-[2]">
                {a.detailedDescription}
              </p>
            </div>
          )}

          {/* ── Rules ── */}
          {a.rules.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center gap-2.5 mb-4">
                <ScrollText size={11} className="text-gold/55 shrink-0" />
                <span className="font-etched text-[8px] tracking-[0.24em] uppercase text-gold/55">
                  Rules &amp; Structure
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgb(var(--primary-rgb)/0.18), transparent)" }} />
              </div>
              <ul className="space-y-2.5">
                {a.rules.map((rule, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.38 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="flex-none mt-[2px] w-[22px] h-[22px] rounded-full flex items-center justify-center font-etched text-[9px] text-gold/60 shrink-0"
                      style={{ border: "1px solid rgb(var(--primary-rgb)/0.22)", background: "rgb(var(--primary-rgb)/0.06)" }}
                    >
                      {i + 1}
                    </span>
                    <span dir="ltr" className="font-body text-secondary-warm text-[12.5px] leading-relaxed">
                      {rule}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Famous Examples ── */}
          {a.famousExamples.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center gap-2.5 mb-4">
                <BookOpen size={11} className="text-gold/55 shrink-0" />
                <span className="font-etched text-[8px] tracking-[0.24em] uppercase text-gold/55">
                  Famous Examples
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgb(var(--primary-rgb)/0.18), transparent)" }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {a.famousExamples.map((ex, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.18 + i * 0.045, duration: 0.32 }}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11.5px] cursor-default transition-all duration-200 hover:border-gold/30 hover:bg-gold/[0.09]"
                    style={{ border: "1px solid rgb(var(--primary-rgb)/0.14)", background: "rgb(var(--primary-rgb)/0.05)" }}
                  >
                    <span className="font-body text-secondary-warm">{ex.title}</span>
                    <span className="text-gold/30">—</span>
                    <span className="font-classical italic text-tertiary-warm">{ex.poet}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* ── Example Sher ── */}
          {a.exampleSher.length > 0 && (
            <div className="mt-8 mb-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Feather size={11} className="text-gold/55 shrink-0" />
                <span className="font-etched text-[8px] tracking-[0.24em] uppercase text-gold/55">
                  A Verse
                </span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgb(var(--primary-rgb)/0.18), transparent)" }} />
              </div>

              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden"
                style={{
                  borderRadius: "var(--r-lg)",
                  border: "1px solid rgb(var(--primary-rgb)/0.14)",
                  background: "linear-gradient(140deg, rgb(var(--primary-rgb)/0.07) 0%, rgb(var(--primary-rgb)/0.02) 100%)",
                  padding: "1.5rem 1.75rem 1.75rem",
                }}
                dir="rtl"
              >
                {/* Decorative ؎ glyph */}
                <span
                  aria-hidden
                  className="absolute bottom-1 left-4 font-urdu select-none pointer-events-none leading-none"
                  style={{ fontSize: 72, color: "rgb(var(--primary-rgb)/0.055)" }}
                >
                  ؎
                </span>
                {/* Bottom shimmer */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgb(var(--primary-rgb)/0.22), transparent)" }}
                />
                <div className="relative z-10">
                  {a.exampleSher.map((line, i) => (
                    <p
                      key={i}
                      lang="ur"
                      className="font-urdu text-gold text-right"
                      style={{ fontSize: "clamp(15px, 2.1vw, 21px)", lineHeight: 2.65 }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.blockquote>
            </div>
          )}

          {/* Bottom breath */}
          <div className="h-2" />
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
        {/* Heading row: English left · Urdu right */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display italic text-foreground text-lg sm:text-xl">
            {a.name}
          </h3>
          <p
            className="font-urdu text-gold text-right flex-shrink-0"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)", lineHeight: 1.8 }}
            dir="rtl"
            lang="ur"
          >
            {a.urdu}
          </p>
        </div>
        <hr className="divider-gold my-3 w-10 border-0 mx-0" />
        <p dir="ltr" className="font-body text-secondary-warm text-[12px] sm:text-[13px] leading-relaxed">
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
  const [selected, setSelected] = useState<Asnaf | null>(null);

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
          <AsnafCard key={a.id} a={a} index={i} onClick={() => setSelected(a)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <AsnafModal a={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
