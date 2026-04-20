import { motion } from "framer-motion";
import { Bookmark, Trash2 } from "lucide-react";
import { useStore } from "@/store/useStore";
import { SectionHeader } from "./TareekharSection";
import SectionWatermark from "@/components/shared/SectionWatermark";

export default function MaktabaSection() {
  const bookmarks = useStore((s) => s.bookmarks);
  const removeBookmark = useStore((s) => s.removeBookmark);

  return (
    <section
      id="maktaba"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1100px] overflow-hidden"
    >
      <SectionWatermark word="مکتبہ" position="right" />
      <SectionWatermark word="مکتبہ" position="right" />
      <SectionHeader
        eyebrow="✦ Apna Maktaba ✦"
        urdu="اپنا مکتبہ"
        title="Your Saved Verses"
        subtitle="Bookmark any sher from the carousel and it lives here."
      />

      <div className="mt-14">
        {bookmarks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass mx-auto max-w-md p-10 text-center"
            style={{ borderRadius: "var(--r-lg)" }}
          >
            <Bookmark
              size={32}
              className="mx-auto text-gold/40"
              strokeWidth={1.5}
            />
            <p className="font-classical italic text-secondary-warm mt-4">
              Aapka maktaba abhi khaali hai.
              <br />
              <span
                className="font-urdu text-gold/70 mt-2 inline-block"
                dir="rtl"
                lang="ur"
              >
                ابھی کوئی شعر محفوظ نہیں
              </span>
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {bookmarks.map((b, i) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="glass relative p-5 sm:p-6"
                style={{ borderRadius: "var(--r-lg)" }}
              >
                <div dir="rtl">
                  {b.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="font-urdu text-gold text-right leading-[2.4]"
                      style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
                      lang="ur"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <p
                  className="font-urdu text-right text-tertiary-warm mt-3 text-sm"
                  dir="rtl"
                  lang="ur"
                >
                  — {b.poet}
                </p>
                <button
                  onClick={() => removeBookmark(b.id)}
                  aria-label="Remove"
                  className="absolute top-3 left-3 rounded-full border border-gold/15 bg-background/40 p-2 text-tertiary-warm hover:text-rose transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
