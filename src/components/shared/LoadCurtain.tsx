import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadCurtain() {
  const [visible, setVisible] = useState(
    !sessionStorage.getItem("curtain-shown")
  );

  useEffect(() => {
    if (visible) {
      sessionStorage.setItem("curtain-shown", "1");
      const t = setTimeout(() => setVisible(false), 1800);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Left panel */}
          <motion.div
            className="fixed inset-y-0 left-0 z-[9999] flex items-center justify-end pr-8"
            style={{ width: "50vw", background: "hsl(var(--bg-void))" }}
            initial={{ x: 0 }}
            exit={{
              x: "-100%",
              transition: {
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.4,
              },
            }}
          >
            <span
              className="font-urdu text-gold opacity-30 select-none"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
              dir="rtl"
            >
              بزمِ
            </span>
          </motion.div>

          {/* Right panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-[9999] flex items-center justify-start pl-8"
            style={{ width: "50vw", background: "hsl(var(--bg-void))" }}
            initial={{ x: 0 }}
            exit={{
              x: "100%",
              transition: {
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.4,
              },
            }}
          >
            <span
              className="font-urdu text-gold opacity-30 select-none"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
              dir="rtl"
            >
              سخن
            </span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
