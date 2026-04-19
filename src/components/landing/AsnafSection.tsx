import { motion } from "framer-motion";
import { ASNAF } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

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
        subtitle="Each genre is a different vessel — for grief, for love, for revolution."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
        {ASNAF.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover relative overflow-hidden p-5 sm:p-7"
            style={{ borderRadius: "var(--r-lg)" }}
          >
            <p
              className="font-urdu text-gold leading-none"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              dir="rtl"
              lang="ur"
            >
              {a.urdu}
            </p>
            <h3 className="font-display italic text-foreground mt-3 text-lg sm:text-xl">
              {a.name}
            </h3>
            <hr className="divider-gold my-3 w-10 border-0 mx-0" />
            <p className="font-body text-secondary-warm text-[12px] sm:text-[13px] leading-relaxed">
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
