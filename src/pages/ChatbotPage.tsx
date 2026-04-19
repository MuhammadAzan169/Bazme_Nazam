import { AnimatePresence, motion } from "framer-motion";
import { Feather, Info, Menu, Plus, Send, Sparkles, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/store/useStore";
import Navbar from "@/components/shared/Navbar";
import MoodPicker from "@/components/shared/MoodPicker";
import ParticleCanvas from "@/components/shared/ParticleCanvas";
import MoodAura from "@/components/shared/MoodAura";
import { MOODS } from "@/store/useStore";

const QUICK_PROMPTS = [
  "Ghalib ki sab se mashhoor ghazal sunaiye",
  "Iqbal ka Shikwa kya hai?",
  "Mujhe dard ki shayari chahiye",
  "Peer-e-Kamil ke baare mein batayein",
  "Faiz ki ek nazm aur uska matlab",
  "Jaun Elia ka ek sher",
];

const STORY_REPLIES: Record<string, string> = {
  ghalib:
    "Ghalib (1797–1869) Urdu shayari ke aasman ka sooraj hain. Unki ek aisi ghazal jo har dil mein basi hai:\n\n*\"Hazaaron khwahishein aisi ki har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle\"*\n\nMatlab: Hazaron arzooyein theen, har ek ke liye jaan dene ko taiyaar — bahut sari poori bhi huin, magar phir bhi tashnagi baqi rahi.",
  shikwa:
    "Shikwa (1911) — Iqbal ka Khuda se gila. Ek Musalmaan ki taraf se hairat-angez sawaal: *\"Kyun ziyaan-kaar banoon, sood-faraamosh rahoon?\"* Aur 1913 mein Jawab-e-Shikwa — Khuda ka jawab, jis mein khudi ki taleem hai. Yeh dono nazmein ek hi sikke ke do ruukh hain.",
  dard:
    "Dard ki shayari ke liye Mir aur Jaun Elia se behtar koi nahin.\n\n*\"Mujh ko shayar na kaho Mir ki sahab maine\nDard-o-gham kitne kiye jama to deewan kiya\"* — Mir Taqi Mir\n\nAur Jaun: *\"Main ne bahut khoya hai apne aap ko paane mein / Aur jo paya wo bhi kho diya deewane mein.\"*",
  "peer-e-kamil":
    "Peer-e-Kamil (2004) Umera Ahmed ka un-bhulnewala novel hai. Imama Hashim aur Salar Sikander ki ruhani safari — imaan, baghaawat, aur ek 'mukammal rehnuma' ki talaash. Iconic line: *\"Insaan ki sab se badi galti yeh hai ki woh Khuda ko bhool jaata hai.\"*",
  faiz:
    "Faiz Ahmed Faiz (1911–1984) — qaid mein bhi unka qalam nahin toota. Ek tukda Naqsh-e-Faryadi se:\n\n*\"Mujh se pehli si mohabbat mere mehboob na maang\nMain ne samjha tha ke tu hai to darakhshaan hai hayat\"*\n\nIs nazm mein ishq aur inquilab dono ek doosre se baat karte hain.",
  jaun:
    "Jaun Elia (1931–2002) — Karachi ka misanthrope, philosophy ka aashiq.\n\n*\"Ab nahin koi baat khatre ki / Ab sabhi ko sabhi se khatra hai.\"*\n\nUnki shayari mein khud ko mitaane ka aisa lutf hai jo sirf wahi de sakte hain.",
  default:
    "Bahut khoob sawal. Urdu adab ek samandar hai — aap kis mauj mein dubki lagana chahenge?\n\nKuch tajaweez:\n• Kisi shayar par tafseel — Ghalib, Iqbal, Faiz, Faraz\n• Kisi sinf par — Ghazal, Nazm, Marsiya\n• Kisi kitaab par — Peer-e-Kamil, Raja Gidh, Divan-e-Ghalib\n• Apni kaifiyat ke mutabiq sher\n\nAur sawaal poochhein — main yahin hoon ✦",
};

function generate(prompt: string): string {
  const p = prompt.toLowerCase();
  if (p.includes("ghalib")) return STORY_REPLIES.ghalib;
  if (p.includes("shikwa") || p.includes("iqbal")) return STORY_REPLIES.shikwa;
  if (p.includes("dard") || p.includes("sad") || p.includes("gham"))
    return STORY_REPLIES.dard;
  if (p.includes("peer") || p.includes("kamil")) return STORY_REPLIES["peer-e-kamil"];
  if (p.includes("faiz")) return STORY_REPLIES.faiz;
  if (p.includes("jaun") || p.includes("elia")) return STORY_REPLIES.jaun;
  return STORY_REPLIES.default;
}

export default function ChatbotPage() {
  const messages = useStore((s) => s.chatHistory);
  const addMessage = useStore((s) => s.addMessage);
  const clearChat = useStore((s) => s.clearChat);
  const mood = useStore((s) => s.mood);

  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contextOpen, setContextOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    addMessage({ id: crypto.randomUUID(), role: "user", content: t, ts: Date.now() });
    setInput("");
    setThinking(true);
    setTimeout(() => {
      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        content: generate(t),
        ts: Date.now(),
      });
      setThinking(false);
    }, 1100);
  };

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden bg-grad-hero">
      <ParticleCanvas />
      <MoodAura />
      <Navbar variant="chatbot" />

      <div className="relative z-10 flex flex-1 overflow-hidden pt-16 sm:pt-20">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || typeof window !== "undefined") && (
            <motion.aside
              key="sidebar"
              initial={{ x: -300 }}
              animate={{ x: sidebarOpen ? 0 : -300 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 left-0 z-[250] w-[85vw] max-w-[300px] border-r border-gold/15 bg-ink-secondary/95 backdrop-blur-xl pt-20 lg:relative lg:translate-x-0 lg:w-[280px] lg:flex-shrink-0 lg:bg-transparent lg:backdrop-blur-none"
              style={{
                transform:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? "translateX(0)"
                    : undefined,
              }}
            >
              <div className="flex h-full flex-col px-4 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-etched text-[10px] tracking-[0.18em] uppercase text-gold-dim">
                    Mehfil
                  </p>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden rounded-md p-1.5 text-secondary-warm"
                    aria-label="Close sidebar"
                  >
                    <X size={16} />
                  </button>
                </div>

                <button
                  onClick={() => clearChat()}
                  className="btn-gold w-full px-4 py-2.5 text-[12px] flex items-center justify-center gap-2 mb-4"
                >
                  <Plus size={14} /> Nayi Mehfil
                </button>

                <p className="font-etched text-[10px] tracking-[0.16em] uppercase text-tertiary-warm mb-2 px-1">
                  Quick Prompts
                </p>
                <div className="flex-1 space-y-1.5 overflow-y-auto">
                  {QUICK_PROMPTS.map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        send(q);
                        setSidebarOpen(false);
                      }}
                      className="w-full rounded-md border border-gold/10 bg-gold/[0.03] px-3 py-2 text-left font-classical italic text-[12.5px] text-secondary-warm hover:bg-gold/[0.08] hover:text-gold transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {messages.length > 0 && (
                  <button
                    onClick={() => clearChat()}
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-rose/20 px-3 py-2 font-etched text-[10px] tracking-[0.16em] uppercase text-rose hover:bg-rose/10 transition-colors"
                  >
                    <Trash2 size={12} /> Saaf Karein
                  </button>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {sidebarOpen && (
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-[240] bg-black/50 lg:hidden"
          />
        )}

        {/* Chat area */}
        <main className="relative flex flex-1 flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-3 border-b border-gold/10 px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden rounded-md border border-gold/15 bg-gold/5 p-2 text-gold"
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>

            <div className="flex-1 min-w-0 text-center lg:text-left">
              <p className="font-display italic text-grad-gold text-base sm:text-lg leading-tight">
                Bazm-e-Sukhan AI
              </p>
              <p
                className="font-urdu text-[11px] sm:text-xs text-gold/70"
                dir="rtl"
                lang="ur"
              >
                اردو ادب کا ساتھی
              </p>
            </div>

            <button
              onClick={() => setContextOpen(true)}
              className="lg:hidden rounded-md border border-gold/15 bg-gold/5 p-2 text-gold"
              aria-label="Info"
            >
              <Info size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
            <div className="mx-auto max-w-2xl space-y-4">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center pt-8"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Feather size={22} />
                  </div>
                  <p
                    className="font-urdu text-gold mx-auto"
                    style={{ fontSize: "clamp(22px, 4vw, 30px)" }}
                    dir="rtl"
                    lang="ur"
                  >
                    خوش آمدید
                  </p>
                  <p className="font-classical italic text-secondary-warm mt-2 max-w-md mx-auto">
                    Aap kis baare mein baat karna chahenge? Shayari, novel, ya kisi shayar ki kahani?
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg mx-auto">
                    {QUICK_PROMPTS.slice(0, 4).map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="glass glass-hover rounded-lg px-3.5 py-2.5 text-left font-classical italic text-[12.5px] text-secondary-warm hover:text-gold"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    "flex " + (m.role === "user" ? "justify-end" : "justify-start")
                  }
                >
                  <div
                    className={
                      "max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-[1.75] whitespace-pre-wrap " +
                      (m.role === "user"
                        ? "bg-gold/15 border border-gold/25 text-foreground"
                        : "glass text-secondary-warm")
                    }
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {thinking && (
                <div className="flex items-center gap-2 px-4 py-3">
                  <Sparkles size={14} className="text-gold animate-pulse" />
                  <span
                    className="font-classical italic text-gold/80"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, hsl(var(--gold-dim)), hsl(var(--gold-bright)), hsl(var(--gold-dim)))",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      animation: "shimmerSweep 2.4s linear infinite",
                    }}
                  >
                    Soch raha hoon…
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-gold/10 p-3 sm:p-4"
          >
            <div className="mx-auto flex max-w-2xl items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                placeholder="Apni baat likhein… (Enter to send)"
                className="flex-1 resize-none rounded-2xl border border-gold/15 bg-ink-primary/60 px-4 py-3 text-sm text-foreground placeholder:text-tertiary-warm focus:border-gold/40 outline-none min-h-[48px] max-h-[160px]"
              />
              <button
                type="submit"
                disabled={!input.trim() || thinking}
                aria-label="Send"
                className="btn-gold flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </main>

        {/* Context panel */}
        <AnimatePresence>
          {(contextOpen || true) && (
            <motion.aside
              key="ctx"
              initial={{ x: 320 }}
              animate={{ x: contextOpen ? 0 : 320 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[250] w-[85vw] max-w-[320px] border-l border-gold/15 bg-ink-secondary/95 backdrop-blur-xl pt-20 lg:relative lg:translate-x-0 lg:w-[300px] lg:flex-shrink-0 lg:bg-transparent lg:backdrop-blur-none"
            >
              <div className="flex h-full flex-col px-5 pb-5 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-etched text-[10px] tracking-[0.18em] uppercase text-gold-dim">
                    Maloomat
                  </p>
                  <button
                    onClick={() => setContextOpen(false)}
                    className="lg:hidden rounded-md p-1.5 text-secondary-warm"
                    aria-label="Close info"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div
                  className="glass rounded-xl p-4 mb-4"
                  style={{ borderRadius: "var(--r-md)" }}
                >
                  <p className="font-etched text-[10px] tracking-[0.16em] uppercase text-tertiary-warm mb-2">
                    Aaj ki Kaifiyat
                  </p>
                  <MoodPicker compact />
                  <p className="font-classical italic text-secondary-warm text-xs mt-3">
                    Mood:{" "}
                    <span className="text-gold">{MOODS[mood].labelEn}</span> —
                    Bazm aapke mood ke mutabiq jawab dene ki koshish karega.
                  </p>
                </div>

                <div
                  className="glass p-4 mb-4"
                  style={{ borderRadius: "var(--r-md)" }}
                >
                  <p className="font-etched text-[10px] tracking-[0.16em] uppercase text-tertiary-warm mb-2">
                    Kya Kar Sakte Hain?
                  </p>
                  <ul className="space-y-1.5 text-[12px] font-classical italic text-secondary-warm leading-relaxed">
                    <li>• Kisi shayar par tafseel</li>
                    <li>• Ghazal, nazm, marsiya samjhayein</li>
                    <li>• Mood ke mutabiq sher</li>
                    <li>• Novel ya afsana ki sifarish</li>
                    <li>• Tareekh-e-adab par sawal</li>
                  </ul>
                </div>

                <div
                  className="glass p-4"
                  style={{ borderRadius: "var(--r-md)" }}
                >
                  <p className="font-etched text-[10px] tracking-[0.16em] uppercase text-tertiary-warm mb-2">
                    Note
                  </p>
                  <p className="text-[12px] font-classical italic text-secondary-warm leading-relaxed">
                    Ye preview demo hai — abhi mock replies chal rahe hain. Real AI ke liye Lovable Cloud + AI Gateway connect ki ja sakti hai.
                  </p>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {contextOpen && (
          <button
            aria-hidden
            tabIndex={-1}
            onClick={() => setContextOpen(false)}
            className="fixed inset-0 z-[240] bg-black/50 lg:hidden"
          />
        )}
      </div>
    </div>
  );
}
