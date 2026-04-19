import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  as?: "div" | "article" | "section";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4 } : undefined}
      className={cn(
        "glass relative overflow-hidden",
        hover && "glass-hover",
        className,
      )}
      style={{ borderRadius: "var(--r-lg)" }}
    >
      {children}
    </motion.div>
  );
}
