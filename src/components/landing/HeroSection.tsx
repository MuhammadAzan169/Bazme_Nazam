import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTypewriter } from "@/hooks/useTypewriter";
import CalligraphyBg from "@/components/shared/CalligraphyBg";
import { MOODS, useStore } from "@/store/useStore";
import heroImg from "@/assets/hero-mushaira.jpg";

const ROTATING = [
  "where words meet the heart",
  "candlelit mushaira, infinite",
  "Ghalib, Iqbal, Faiz — alive",
  "every sher, a small forever",
];

export default function HeroSection() {
  const navigate = useNavigate();
  const mood = useStore((s) => s.mood);
  const moodInfo = MOODS[mood];
  const { displayText, phase } = useTypewriter(ROTATING, {
    typeSpeed: 55,
    deleteSpeed: 28,
    holdDuration: 2400,
    pauseBetween: 500,
  });

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-grad-hero pt-28 sm:pt-32">
      {/* Cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ filter: "saturate(0.85) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, hsl(${moodInfo.primaryHsl} / 0.22), transparent 60%)`,
          }}
        />
      </div>

      <CalligraphyBg />

      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center px-5 text-center sm:px-8">
        {/* Top tag */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-etched text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-primary/70 flex items-center gap-2"
        >
          <Sparkles size={12} className="text-primary" />
          The Gathering of Words
          <Sparkles size={12} className="text-primary" />
        </motion.p>

        {/* Urdu title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-urdu mt-6 leading-[1.4]"
          style={{
            fontSize: "clamp(48px, 10vw, 120px)",
            color: `hsl(${moodInfo.primaryHsl})`,
            textShadow: `0 0 40px hsl(${moodInfo.primaryHsl} / 0.4)`,
            transition: "color 1s ease, text-shadow 1s ease",
          }}
          dir="rtl"
          lang="ur"
        >
          بزمِ سخن
        </motion.h1>

        {/* English title */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="font-display italic text-grad-gold mt-2"
          style={{ fontSize: "clamp(20px, 3.5vw, 36px)" }}
        >
          Bazm-e-Sukhan
        </motion.p>

        {/* Tagline + typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="font-classical italic text-secondary-warm mt-8 max-w-2xl"
          style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
        >
          A candlelit mushaira reimagined for the web —{" "}
          <span
            className={"typewriter-text " + (phase === "deleting" ? "deleting" : "")}
            style={{ color: "hsl(var(--text-gold))" }}
          >
            {displayText}
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mt-12 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <button
            onClick={() => navigate("/chatbot")}
            className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-[14px]"
          >
            AI se Baat Karein
            <ArrowRight size={16} />
          </button>
          <a
            href="#kaifiyat"
            className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-etched text-[12px] tracking-[0.18em] uppercase text-primary"
          >
            Choose Your Mood
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 grid w-full grid-cols-3 gap-3 overflow-x-auto"
        >
          {[
            { n: "1200+", l: "Years of Adab", u: "سال" },
            { n: "8", l: "Featured Shuara", u: "شعراء" },
            { n: "9", l: "Iconic Books", u: "کتب" },
          ].map(({ n, l, u }) => (
            <div
              key={l}
              className="glass rounded-xl px-3 py-4 sm:px-6 sm:py-6 text-center"
            >
              <p
                className="text-grad-gold font-display text-2xl sm:text-4xl leading-none"
                style={{ fontWeight: 600 }}
              >
                {n}
              </p>
              <p className="font-etched mt-2 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-secondary-warm">
                {l}
              </p>
              <p
                className="font-urdu text-[10px] sm:text-xs text-primary/60 mt-0.5"
                dir="rtl"
                lang="ur"
              >
                {u}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
