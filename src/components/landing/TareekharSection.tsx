import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Calendar, BookOpen } from "lucide-react";
import { useState } from "react";
import { ERAS, type Era } from "@/data/literature";
import { useTypewriter } from "@/hooks/useTypewriter";

function EraCard({ era, index }: { era: Era; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { displayText, phase } = useTypewriter(era.sher.lines, {
    typeSpeed: 70,
    deleteSpeed: 35,
    holdDuration: 3200,
    pauseBetween: 700,
  });

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

        {/* Two-column: Sher + Portrait */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]">
          <div className="rounded-md border border-gold/10 bg-gold/[0.04] p-4 sm:p-5 min-h-[110px] flex flex-col justify-center">
            <p
              dir="rtl"
              lang="ur"
              className={
                "typewriter-text font-urdu text-gold text-right leading-[2.2] " +
                (phase === "deleting" ? "deleting" : "")
              }
              style={{ fontSize: "clamp(15px, 1.9vw, 19px)" }}
            >
              {displayText}
            </p>
            <p className="font-classical italic text-tertiary-warm text-right text-xs mt-2">
              — {era.sher.poet}
            </p>
          </div>

          {era.authorImg && (
            <div className="hidden md:block w-[120px] h-[120px] rounded-md overflow-hidden border border-gold/15 self-start">
              <img
                src={era.authorImg}
                alt={`${era.poets[0]} portrait`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{
                  filter: "sepia(30%) contrast(105%) brightness(0.82) saturate(0.8)",
                }}
              />
            </div>
          )}
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
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1100px]"
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
          style={{ background: "linear-gradient(180deg, transparent, rgb(232 180 90 / 0.3), transparent)" }}
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
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-etched text-[10px] sm:text-[11px] tracking-[0.30em] uppercase text-gold/55"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-urdu text-grad-gold mt-3"
        style={{ fontSize: "clamp(28px, 5vw, 54px)" }}
        dir="rtl"
        lang="ur"
      >
        {urdu}
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display italic text-foreground/75 mt-2"
        style={{ fontSize: "clamp(17px, 2.2vw, 26px)" }}
      >
        {title}
      </motion.h3>
      {subtitle && (
        <p className="font-classical italic text-secondary-warm mt-3 max-w-xl mx-auto text-[13.5px] sm:text-[15px] leading-relaxed">
          {subtitle}
        </p>
      )}
      <hr className="divider-gold mx-auto mt-6 w-20 border-0" />
    </div>
  );
}
