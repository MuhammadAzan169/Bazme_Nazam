import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Feather, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";

const QUICK_CHIPS = [
  { label: "Ghalib ki shayari", urdu: "غالبؔ" },
  { label: "Novel suggest karo", urdu: "ناول" },
  { label: "Ghazal kya hai?", urdu: "غزل" },
  { label: "Iqbal ka Shikwa", urdu: "شکوہ" },
  { label: "Peer-e-Kamil", urdu: "پیرِ کامل" },
  { label: "Faiz ki nazm", urdu: "فیضؔ" },
];

interface Msg {
  role: "user" | "assistant";
  text: string;
}

const MOCK_REPLIES: Record<string, string> = {
  default:
    "Bahut khoob — ek lamhe mein khayal aata hai: \"Hazaaron khwahishein aisi ki har khwahish pe dam nikle.\" Aur gehri baat karne ke liye chatbot mein aayein ✦",
  ghalib:
    "Ghalib ne dard ko falsafa banaya. \"Ishq se tabeeyat ne zeest ka maza paaya / Dard ki dawa paayi, dard-e-be-dawa paaya.\" Unke khat aur diwan dono parhne ke laaeq hain. Aur baat karein chatbot mein ✦",
  iqbal:
    "Iqbal ka Shikwa ek bagaawat thi — Khuda se sawal. Jawab-e-Shikwa us ka jawab. \"Khudi ko kar buland itna…\" — yeh sirf sher nahin, ek tarz-e-zindagi hai. Chatbot mein poora padhein ✦",
  faiz:
    "Faiz qaid mein bhi geet likhte rahe. \"Mujh se pehli si mohabbat mere mehboob na maang.\" Inquilab aur ishq, dono ek hi qalam se. Chatbot par tafseelan baat karein ✦",
};

function fakeReply(prompt: string): string {
  const p = prompt.toLowerCase();
  if (p.includes("ghalib")) return MOCK_REPLIES.ghalib;
  if (p.includes("iqbal") || p.includes("shikwa")) return MOCK_REPLIES.iqbal;
  if (p.includes("faiz")) return MOCK_REPLIES.faiz;
  return MOCK_REPLIES.default;
}

export default function MiniAIWidget() {
  const navigate = useNavigate();
  const open = useStore((s) => s.widgetOpen);
  const setOpen = useStore((s) => s.setWidgetOpen);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Salam. Main aapka chhota literary saathi hoon — Urdu adab par kuch poochhein.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: fakeReply(t) }]);
      setThinking(false);
    }, 900);
  };

  return (
    <>
      {/* Trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 18, stiffness: 200, delay: 1.2 }}
        onClick={() => setOpen(!open)}
        aria-label="Open AI companion"
        className="animate-widget-pulse fixed bottom-5 right-5 z-[300] flex h-14 w-14 items-center justify-center rounded-full text-[#1a0e00]"
        style={{
          background: "linear-gradient(135deg, #C8943A, #E0A84A)",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="f"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <Feather size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[280] bg-black/60 sm:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="panel"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 200 }}
              className="fixed z-[290] flex flex-col overflow-hidden border border-gold/15 bg-[hsl(var(--bg-secondary)/0.95)] backdrop-blur-xl shadow-2xl
                bottom-0 left-0 right-0 h-[60vh] rounded-t-3xl
                sm:bottom-24 sm:right-5 sm:left-auto sm:h-[520px] sm:w-[380px] sm:rounded-2xl sm:border-gold/20"
            >
              {/* Mobile handle */}
              <div className="sm:hidden mx-auto mt-2 h-1 w-10 rounded-full bg-gold/30" />

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-gold/10 px-5 py-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Feather size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-foreground text-sm">
                    Bazm AI · Mini
                  </p>
                  <p
                    className="font-urdu text-xs text-gold/70"
                    dir="rtl"
                    lang="ur"
                  >
                    مختصر گفتگو
                  </p>
                </div>
                <button
                  onClick={() => navigate("/chatbot")}
                  className="font-etched text-[10px] tracking-[0.14em] uppercase text-gold hover:underline"
                >
                  Open Full ↗
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              >
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={
                      "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.6] " +
                      (m.role === "user"
                        ? "ml-auto bg-gold/15 text-foreground border border-gold/20"
                        : "bg-[hsl(var(--bg-tertiary)/0.7)] border border-gold/10 text-secondary-warm")
                    }
                  >
                    {m.text}
                  </motion.div>
                ))}
                {thinking && (
                  <div className="flex items-center gap-1.5 px-2 text-gold">
                    <span
                      className="animate-dot-bounce h-1.5 w-1.5 rounded-full bg-current"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="animate-dot-bounce h-1.5 w-1.5 rounded-full bg-current"
                      style={{ animationDelay: "160ms" }}
                    />
                    <span
                      className="animate-dot-bounce h-1.5 w-1.5 rounded-full bg-current"
                      style={{ animationDelay: "320ms" }}
                    />
                  </div>
                )}
              </div>

              {/* Quick chips */}
              <div className="border-t border-gold/10 px-3 pt-3">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {QUICK_CHIPS.map((c) => (
                    <button
                      key={c.label}
                      onClick={() => send(c.label)}
                      className="shrink-0 rounded-full border border-gold/15 bg-gold/[0.05] px-3 py-1.5 font-classical italic text-[11px] text-secondary-warm hover:text-gold transition-colors"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 border-t border-gold/10 px-3 py-3"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Apni baat likhein…"
                  className="flex-1 rounded-full border border-gold/15 bg-[hsl(var(--bg-primary)/0.6)] px-4 py-2.5 text-sm text-foreground placeholder:text-tertiary-warm focus:border-gold/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  disabled={!input.trim()}
                  className="btn-gold flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                </button>
              </form>

              <button
                onClick={() => navigate("/chatbot")}
                className="mb-3 mx-3 mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-gold/15 bg-gold/[0.05] py-2 font-etched text-[10px] tracking-[0.18em] uppercase text-gold hover:bg-gold/10 transition-colors"
              >
                Continue in Full Chatbot <ArrowRight size={12} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
