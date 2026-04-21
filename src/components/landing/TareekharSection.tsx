import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";
import { ERAS, type Era } from "@/data/literature";

/* ── Word-by-word blur-reveal for the sher ─────────────────────────── */
const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 12 },
  show: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.68, 0.2, 1] as [number,number,number,number], delay: i * 0.07 },
  }),
};

function SherReveal({ lines, poet }: { lines: string[]; poet: string }) {
  const allWords = lines.map((l) => l.split(" "));
  let globalIdx = 0;

  return (
    <motion.div
      className="relative overflow-hidden rounded-md border border-gold/10 bg-gold/[0.04] p-5 sm:p-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {/* ambient shimmer sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-md"
        style={{
          background:
            "linear-gradient(105deg, transparent 35%, rgb(var(--primary-rgb) / 0.07) 50%, transparent 65%)",
          backgroundSize: "220% 100%",
          animation: "shimmerSweep 5s linear infinite",
        }}
      />

      {/* ink-drop ornament top-right */}
      <motion.span
        aria-hidden
        className="absolute top-3 left-4 font-urdu text-gold/20 select-none"
        style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        ؎
      </motion.span>

      {/* sher lines */}
      <div className="mt-2 space-y-1">
        {allWords.map((words, li) => (
          <p
            key={li}
            dir="rtl"
            lang="ur"
            className="font-urdu text-gold text-right leading-[2.4]"
            style={{ fontSize: "clamp(15px, 1.9vw, 20px)" }}
          >
            {words.map((word) => {
              const idx = globalIdx++;
              return (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={wordVariants}
                  className="inline-block mx-[3px]"
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
        ))}
      </div>

      {/* divider + attribution */}
      <motion.div
        className="mt-4 flex items-center gap-3 justify-end"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: allWords.flat().length * 0.07 + 0.3, duration: 0.6 }}
      >
        <div className="h-px flex-1 max-w-[60px]" style={{ background: "var(--grad-divider)" }} />
        <p className="font-classical italic text-tertiary-warm text-xs">— {poet}</p>
      </motion.div>
    </motion.div>
  );
}

function EraCard({ era, index }: { era: Era; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="relative pl-6 sm:pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-[8px] top-8 hidden sm:block">
        <div className="h-3 w-3 rounded-full bg-gold shadow-[0_0_18px_hsl(var(--gold-main)/0.6)]" />
      </div>

      <div
        className="glass glass-hover relative overflow-hidden p-5 sm:p-9"
        style={{
          borderLeft: "3px solid rgb(232 180 90 / 0.45)",
          borderRadius: "0 18px 18px 0",
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          {/* Center top — Range */}
          <div className="text-center">
            <span className="font-etched text-[14px] tracking-[0.2em] uppercase text-gold bg-gold/[0.12] px-4 py-2 rounded-full border border-gold/25 shadow-sm">
              {era.range}
            </span>
          </div>

          {/* Era number + English left · Urdu right */}
          <div className="flex items-start gap-4 w-full">
            {/* Era number */}
            <span
              className="font-display italic leading-none text-grad-gold opacity-70 flex-shrink-0"
              style={{ fontSize: "clamp(38px, 5vw, 60px)" }}
            >
              {era.number}
            </span>

            {/* English left · Urdu right */}
            <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
              {/* Left — English name */}
              <div className="min-w-0">
                <h3
                  className="font-display text-foreground"
                  style={{ fontSize: "clamp(18px, 2.4vw, 26px)" }}
                >
                  {era.name}
                </h3>
              </div>

              {/* Right — Urdu name */}
              <p
                className="font-urdu text-gold text-right flex-shrink-0"
                style={{ fontSize: "clamp(16px, 2.2vw, 26px)", lineHeight: 1.9 }}
                dir="rtl"
                lang="ur"
              >
                {era.urdu}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          dir="ltr"
          className="font-body text-secondary-warm mt-5 leading-[1.9]"
          style={{ fontSize: "clamp(13px, 1.4vw, 15px)" }}
        >
          {era.description}
        </p>

        {/* Sher reveal */}
        <div className="mt-5">
          <SherReveal lines={era.sher.lines} poet={era.sher.poet} />
        </div>

        {/* Poets chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {era.poets.map((p) => (
            <span
              key={p}
              className="font-etched rounded-full border border-gold/15 bg-gold/[0.05] px-3 py-1 text-[10px] tracking-[0.1em] uppercase text-secondary-warm"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Expandable: Historical fact + Key Events + Major Works */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 flex items-center gap-2 font-etched text-[10px] tracking-[0.18em] uppercase text-gold/80 hover:text-gold transition-colors"
        >
          Explore This Era
          <ChevronDown
            size={12}
            className={"transition-transform " + (expanded ? "rotate-180" : "")}
          />
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-5">
                {/* Historical Fact */}
                <p dir="ltr" className="font-classical italic text-secondary-warm text-sm leading-relaxed">
                  {era.historicalFact}
                </p>

                {/* Key Events Timeline */}
                {era.keyEvents.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-gold/70" />
                      <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                        Key Events
                      </span>
                    </div>
                    <div className="space-y-2 pl-3 border-l border-gold/15">
                      {era.keyEvents.map((event, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="relative"
                        >
                          <div className="absolute -left-[11px] top-1.5 h-2 w-2 rounded-full bg-gold/40" />
                          <p dir="ltr" className="font-body text-secondary-warm text-[12px] leading-relaxed pl-2">
                            {event}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Major Works */}
                {era.majorWorks.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={14} className="text-gold/70" />
                      <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                        Major Works
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {era.majorWorks.map((work, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-gold/15 bg-gold/[0.05] px-3 py-1.5 font-body text-[11px] text-secondary-warm"
                        >
                          {work}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function TareekharSection() {
  return (
    <section
      id="tareekh"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1100px] overflow-hidden"
    >
      <SectionHeader
        eyebrow="✦ Tareekh-e-Adab ✦"
        urdu="تاریخِ ادب"
        title="A History of Urdu Letters"
        subtitle="Six eras, twelve hundred years — from Deccan to digital."
      />

      <div className="relative mt-16">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[14px] top-0 bottom-0 hidden sm:block w-px"
          style={{ background: "linear-gradient(180deg, transparent, rgb(var(--primary-rgb) / 0.3), transparent)" }}
          aria-hidden
        />
        <div className="flex flex-col gap-8">
          {ERAS.map((era, i) => (
            <EraCard key={era.id} era={era} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  urdu,
  title,
  subtitle,
}: {
  eyebrow: string;
  urdu: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      {/* eyebrow — centered */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="font-etched text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-gold/50 mb-4 text-center"
      >
        {eyebrow}
      </motion.p>

      {/* Heading row: English on the left, Urdu on the right */}
      <div className="flex items-center justify-between gap-6 flex-wrap overflow-visible">
        {/* English title — left */}
        <motion.h3
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          className="font-display italic text-foreground/70 text-left"
          style={{ fontSize: "clamp(18px, 2.6vw, 30px)" }}
        >
          {title}
        </motion.h3>

        {/* Urdu heading — right.
            NOTE: Do NOT split into child spans; text-grad-gold uses
            -webkit-text-fill-color:transparent which does not propagate
            to child elements, making them invisible. */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(18px)", x: 18 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 0.68, 0.2, 1] as [number,number,number,number], delay: 0.1 }}
          dir="rtl"
          lang="ur"
          className="font-urdu text-grad-gold text-right"
          style={{ fontSize: "clamp(28px, 4.5vw, 54px)", lineHeight: 2.4, overflow: "visible" }}
        >
          {urdu}
        </motion.h2>
      </div>

      {/* animated gold rule — full width */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as [number,number,number,number], delay: 0.4 }}
        className="my-4"
        style={{
          transformOrigin: "left",
          height: 1,
          background: "var(--grad-divider)",
          boxShadow: "0 0 10px rgb(var(--primary-rgb) / 0.35)",
        }}
      />

      {/* optional description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-classical italic text-secondary-warm mt-1 max-w-xl mx-auto text-center text-[13px] sm:text-[14.5px] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
