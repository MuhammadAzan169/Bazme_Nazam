import { motion } from "framer-motion";
import { useState } from "react";
import { POETS, type Poet } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

function PoetCard({ poet, index }: { poet: Poet; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.06, duration: 0.65 }}
      whileHover={{ y: -8 }}
      className="glass glass-hover overflow-hidden flex flex-col"
      style={{ borderRadius: "var(--r-lg)" }}
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
        subtitle="From the candlelit kothas of Delhi to the Instagram reels of Karachi."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {POETS.map((poet, i) => (
          <PoetCard key={poet.id} poet={poet} index={i} />
        ))}
      </div>
    </section>
  );
}
