import { motion } from "framer-motion";
import { useState } from "react";
import { BOOKS, type Book } from "@/data/literature";
import { SectionHeader } from "./TareekharSection";

const GENRE_COLOR: Record<Book["genre"], string> = {
  Novel: "border-accent",
  "Poetry Collection": "border-gold",
  "Short Stories": "border-indigo",
  "Long Poem": "border-gold",
};

function BookCard({ book, index }: { book: Book; index: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.06, duration: 0.65 }}
      whileHover={{ y: -6 }}
      className={
        "glass glass-hover overflow-hidden flex flex-col sm:flex-row gap-0 border-l-2 " +
        GENRE_COLOR[book.genre]
      }
      style={{ borderRadius: "var(--r-lg)" }}
    >
      {/* Cover */}
      <div
        className="relative w-full sm:w-[180px] flex-shrink-0 overflow-hidden min-h-[180px]"
        style={{ background: book.cover }}
      >
        {book.coverImg && !imgError ? (
          <img
            src={book.coverImg}
            alt={`${book.title} book cover`}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.88) contrast(1.05)" }}
          />
        ) : (
          /* Styled book-cover fallback */
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div>
              <span className="font-etched text-[8px] tracking-[0.22em] uppercase text-gold/50 border-b border-gold/20 pb-1 block">
                {book.genre}
              </span>
            </div>
            <div className="text-center">
              <p
                className="font-urdu text-gold/90 leading-snug"
                style={{ fontSize: "clamp(16px, 2.2vw, 20px)" }}
                dir="rtl"
                lang="ur"
              >
                {book.titleUrdu}
              </p>
              <p className="font-display italic text-foreground/60 text-[11px] mt-1 leading-tight">
                {book.title}
              </p>
            </div>
            <div className="border-t border-gold/20 pt-2">
              <p className="font-classical italic text-secondary-warm text-[10px]">{book.author}</p>
              <p className="font-etched text-[9px] tracking-[0.1em] text-tertiary-warm">{book.year}</p>
            </div>
          </div>
        )}
        {/* dark overlay so text above image is readable */}
        {book.coverImg && !imgError && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        )}
      </div>

      {/* Body */}
      <div className="flex-1 p-5 sm:p-6 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={
              "font-etched text-[9px] tracking-[0.14em] uppercase rounded-full px-2.5 py-1 border " +
              GENRE_COLOR[book.genre] +
              " bg-background/40"
            }
            style={{ color: "hsl(var(--text-secondary))" }}
          >
            {book.genre}
          </span>
          <span className="font-etched text-[10px] tracking-[0.12em] text-tertiary-warm">
            {book.year}
          </span>
        </div>

        <h3 className="font-display italic text-foreground mt-2 text-lg sm:text-xl">
          {book.title}
        </h3>
        <p
          className="font-urdu text-gold text-right mt-1"
          style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
          dir="rtl"
          lang="ur"
        >
          {book.titleUrdu}
        </p>

        <p className="font-classical italic text-secondary-warm text-[13px] mt-1">
          by {book.author}
          <span className="text-tertiary-warm"> · {book.authorUrdu}</span>
        </p>

        <p className="font-body text-secondary-warm mt-3 text-[12.5px] leading-[1.7]">
          {book.description}
        </p>

        <blockquote
          className="mt-4 rounded-md border border-gold/10 bg-gold/[0.04] p-3 sm:p-4"
          dir="rtl"
        >
          <p
            className="font-urdu text-gold text-right leading-[2.2]"
            style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}
            lang="ur"
          >
            {book.iconicLine}
          </p>
        </blockquote>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {book.themes.map((t) => (
            <span
              key={t}
              className="rounded-full px-2 py-0.5 text-[10px] font-etched tracking-[0.08em] uppercase text-tertiary-warm border border-gold/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function NovelsSection() {
  return (
    <section
      id="novels"
      className="relative py-20 sm:py-32 px-5 sm:px-12 mx-auto max-w-[1300px]"
    >
      <SectionHeader
        eyebrow="✦ Maqbool Kitaben ✦"
        urdu="مقبول کتابیں"
        title="Novels, Poetry & Afsane"
        subtitle="From Umrao Jan Ada to Peer-e-Kamil — the books that shaped readers."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {BOOKS.map((b, i) => (
          <BookCard key={b.id} book={b} index={i} />
        ))}
      </div>
    </section>
  );
}
