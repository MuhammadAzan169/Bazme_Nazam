import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAV_LINKS } from "@/data/literature";

interface Props {
  variant?: "landing" | "chatbot";
}

export default function Navbar({ variant = "landing" }: Props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={
          "glass-navbar fixed top-0 left-0 right-0 z-[400] transition-all duration-300 " +
          (scrolled ? "py-2.5" : "py-4")
        }
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-baseline gap-2 text-left"
            aria-label="Bazm-e-Sukhan home"
          >
            <span
              className="font-urdu text-xl sm:text-2xl text-gold leading-none"
              lang="ur"
              dir="rtl"
            >
              بزمِ سخن
            </span>
            <span className="hidden sm:inline-block font-etched text-[10px] tracking-[0.22em] text-secondary-warm uppercase">
              Bazm-e-Sukhan
            </span>
          </button>

          {/* Desktop links */}
          {variant === "landing" && (
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, labelUrdu, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex flex-col items-center gap-0.5 rounded-full px-3 py-2 transition-colors"
                  >
                    <span className="font-etched text-[11px] tracking-[0.18em] uppercase text-secondary-warm group-hover:text-gold transition-colors">
                      {label}
                    </span>
                    <span
                      className="font-urdu text-[10px] text-secondary-warm/60 group-hover:text-gold transition-colors"
                      dir="rtl"
                      lang="ur"
                    >
                      {labelUrdu}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {variant === "landing" ? (
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/chatbot")}
                className="btn-gold whitespace-nowrap font-body text-[12px] sm:text-[13px] px-4 sm:px-6 py-2 sm:py-2.5"
              >
                <span className="hidden sm:inline">AI se Baat Karein ↗</span>
                <span className="sm:hidden">AI ✦</span>
              </motion.button>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="font-etched text-[11px] tracking-[0.14em] uppercase text-secondary-warm hover:text-gold transition-colors px-4 py-2 rounded-full border border-gold/20"
              >
                ← Wapas
              </button>
            )}

            {variant === "landing" && (
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-md border border-gold/20 bg-gold/5 text-gold"
              >
                <Menu size={18} />
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            className="fixed inset-0 z-[500] flex flex-col items-center justify-center gap-2 px-8 py-10"
            style={{
              background: "rgb(7 5 15 / 0.97)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-5 rounded-full border border-gold/20 bg-gold/5 p-2.5 text-secondary-warm"
            >
              <X size={18} />
            </button>

            <p
              className="font-urdu text-4xl text-gold/70 mb-8"
              dir="rtl"
              lang="ur"
            >
              بزمِ سخن
            </p>
            <hr className="divider-gold w-24 mb-6 border-0" />

            {NAV_LINKS.map(({ label, labelUrdu, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex w-full max-w-[280px] flex-col items-center gap-1 rounded-lg border-b border-gold/10 px-8 py-3.5 text-center active:bg-gold/5"
              >
                <span className="font-etched text-sm tracking-[0.2em] uppercase text-foreground">
                  {label}
                </span>
                <span
                  className="font-urdu text-base text-gold/70"
                  dir="rtl"
                  lang="ur"
                >
                  {labelUrdu}
                </span>
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                setOpen(false);
                navigate("/chatbot");
              }}
              className="btn-gold mt-6 px-10 py-3.5 text-sm"
            >
              AI se Baat Karein ✦
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
