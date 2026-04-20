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
        <div className="flex items-baseline gap-4 flex-wrap">
          <span
            className="font-display italic leading-none text-grad-gold opacity-70"
            style={{ fontSize: "clamp(38px, 5vw, 60px)" }}
          >
            {era.number}
          </span>
          <div className="flex-1 min-w-0">
            <h3
              className="font-display text-foreground"
              style={{ fontSize: "clamp(18px, 2.4vw, 26px)" }}
            >
              {era.name}
            </h3>
            <p
              className="font-urdu text-gold mt-1"
              style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
              dir="rtl"
              lang="ur"
            >
              {era.urdu}
            </p>
          </div>
          <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-tertiary-warm whitespace-nowrap">
            {era.range}
          </span>
        </div>

        {/* Description */}
        <p
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
                <p className="font-classical italic text-secondary-warm text-sm leading-relaxed">
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
                          <p className="font-body text-secondary-warm text-[12px] leading-relaxed pl-2">
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
    <div className="text-center">
      {/* eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="font-etched text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-gold/50 mb-4"
      >
        {eyebrow}
      </motion.p>

      {/* Urdu heading — single element blur reveal.
          Do NOT split into child spans here: text-grad-gold uses
          -webkit-text-fill-color:transparent which is inherited,
          and background-clip:text does not propagate to child elements,
          making any child spans invisible. */}
      <motion.h2
        initial={{ opacity: 0, filter: "blur(18px)", y: 22 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.22, 0.68, 0.2, 1] as [number,number,number,number], delay: 0.1 }}
        dir="rtl"
        lang="ur"
        className="font-urdu text-grad-gold"
        style={{ fontSize: "clamp(30px, 5.5vw, 62px)" }}
      >
        {urdu}
      </motion.h2>

      {/* animated gold rule */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as [number,number,number,number], delay: 0.4 }}
        className="mx-auto my-4"
        style={{
          transformOrigin: "center",
          height: 1,
          width: 80,
          background: "var(--grad-divider)",
          boxShadow: "0 0 10px rgb(var(--primary-rgb) / 0.35)",
        }}
      />

      {/* English title */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.55 }}
        className="font-display italic text-foreground/70"
        style={{ fontSize: "clamp(16px, 2.2vw, 24px)" }}
      >
        {title}
      </motion.h3>

      {/* optional description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-classical italic text-secondary-warm mt-3 max-w-xl mx-auto text-[13px] sm:text-[14.5px] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
