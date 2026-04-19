import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, BookOpen, Feather, ScrollText } from "lucide-react";
import { useState } from "react";
import { ASNAF, type Asnaf } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

function AsnafCard({ a, index }: { a: Asnaf; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="glass glass-hover relative overflow-hidden cursor-pointer"
      style={{ borderRadius: "var(--r-lg)" }}
      onClick={() => setExpanded((v) => !v)}
    >
      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
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
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gold/60"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
        <hr className="divider-gold my-3 w-10 border-0 mx-0" />
        <p className="font-body text-secondary-warm text-[12px] sm:text-[13px] leading-relaxed">
          {a.description}
        </p>
      </div>

      {/* Expanded Detail Panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-7 pb-6 border-t border-gold/10">
              {/* Detailed description */}
              <p className="font-body text-secondary-warm text-[13px] leading-[1.8] mt-4">
                {a.detailedDescription}
              </p>

              {/* Rules */}
              {a.rules.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <ScrollText size={14} className="text-gold/70" />
                    <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                      Rules & Structure
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {a.rules.map((rule, i) => (
                      <li
                        key={i}
                        className="font-body text-secondary-warm text-[12px] leading-relaxed flex gap-2"
                      >
                        <span className="text-gold/50 mt-0.5 text-[10px]">◆</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Famous Examples */}
              {a.famousExamples.length > 0 && (
                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} className="text-gold/70" />
                    <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                      Famous Examples
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {a.famousExamples.map((ex, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-gold/15 bg-gold/[0.05] px-3 py-1.5 text-[11px] text-secondary-warm"
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
                <div className="mt-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Feather size={14} className="text-gold/70" />
                    <span className="font-etched text-[10px] tracking-[0.16em] uppercase text-gold/80">
                      Example
                    </span>
                  </div>
                  <blockquote
                    className="rounded-md border border-gold/10 bg-gold/[0.04] p-4"
                    dir="rtl"
                  >
                    {a.exampleSher.map((line, i) => (
                      <p
                        key={i}
                        lang="ur"
                        className="font-urdu text-gold text-right leading-[2.4]"
                        style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}
                      >
                        {line}
                      </p>
                    ))}
                  </blockquote>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AsnafSection() {
  return (
    <section
      id="asnaf"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1200px]"
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
