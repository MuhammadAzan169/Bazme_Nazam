import { AnimatePresence, motion } from "framer-motion";
import { MOODS, useStore } from "@/store/useStore";

export default function MoodAura() {
  const mood = useStore((s) => s.mood);
  const current = MOODS[mood];

  return (
    /* Single diffuse ambient blob — mood colour at very low opacity.
       Gold text, borders, and section colours are unaffected by this. */
    <AnimatePresence mode="wait">
      <motion.div
        key={mood + "-blob"}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.055, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
        aria-hidden="true"
        className="pointer-events-none fixed top-[5%] right-[10%] z-0 h-[55vh] w-[55vw] rounded-full"
        style={{
          background: current.aura,
          filter: "blur(200px)",
        }}
      />
    </AnimatePresence>
  );
}
