import { AnimatePresence, motion } from "framer-motion";
import { MOODS, useStore } from "@/store/useStore";

export default function MoodAura() {
  const mood = useStore((s) => s.mood);
  const current = MOODS[mood];

  return (
    <>
      {/* Soft tinted blob */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mood + "-blob"}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.18, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
          aria-hidden="true"
          className="animate-mood-aura pointer-events-none fixed top-[10%] left-[15%] z-0 h-[80vh] w-[80vw] rounded-full"
          style={{
            background: current.aura,
            filter: "blur(150px)",
          }}
        />
      </AnimatePresence>

      {/* Faint atmospheric image overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mood + "-img"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center mix-blend-screen"
          style={{
            backgroundImage: `url(${current.image})`,
            filter: "blur(2px) saturate(1.1)",
          }}
        />
      </AnimatePresence>
    </>
  );
}
