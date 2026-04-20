import { AnimatePresence, motion } from "framer-motion";
import { Feather, Info, Menu, Plus, Send, Sparkles, User, X } from "lucide-react";
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
  "Ghazal aur Nazm mein kya farq hai?",
  "Islamic kitaben bataiye",
  "Parveen Shakir kaun theen?",
  "Mir Taqi Mir ka ek sher",
];

const STORY_REPLIES: Record<string, string> = {
  ghalib:
    "Ghalib (1797–1869) Urdu shayari ke aasman ka sooraj hain. Unki ek aisi ghazal jo har dil mein basi hai:\n\n*\"Hazaaron khwahishein aisi ki har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle\"*\n\nMatlab: Hazaron arzooyein theen, har ek ke liye jaan dene ko taiyaar — bahut sari poori bhi huin, magar phir bhi tashnagi baqi rahi.\n\n📖 Top Works: Divan-e-Ghalib (234 ghazals), Dastanbu (1857 ki diary), Ud-e-Hindi (khatoot)\n✍️ Style: Philosophy, irony, wordplay — har sher mein kai parten hain.",
  shikwa:
    "Shikwa (1911) — Iqbal ka Khuda se gila. Ek Musalmaan ki taraf se hairat-angez sawaal: *\"Kyun ziyaan-kaar banoon, sood-faraamosh rahoon?\"* Aur 1913 mein Jawab-e-Shikwa — Khuda ka jawab, jis mein khudi ki taleem hai.\n\n📖 Iqbal ki kitaben: Bang-e-Dra, Bal-e-Jibreel, Zarb-e-Kaleem\n✍️ Philosophy: Khudi (selfhood) — apne aap ko itna buland karo ke Khuda khud poochhe.\n\n*\"Sitaron se aage jahan aur bhi hain / Abhi ishq ke imtihan aur bhi hain\"*",
  dard:
    "Dard ki shayari ke liye Mir aur Jaun Elia se behtar koi nahin.\n\n*\"Mujh ko shayar na kaho Mir ki sahab maine\nDard-o-gham kitne kiye jama to deewan kiya\"* — Mir Taqi Mir\n\n*\"Main ne bahut khoya hai apne aap ko paane mein / Aur jo paya wo bhi kho diya deewane mein.\"* — Jaun Elia\n\n*\"Kuch ashk the aankhon mein abhi aur bhi behne the / Kuch lafz the honton par abhi aur bhi kehne the\"* — Parveen Shakir",
  "peer-e-kamil":
    "Peer-e-Kamil (2004) Umera Ahmed ka un-bhulnewala novel hai. Imama Hashim aur Salar Sikander ki ruhani safari — imaan, baghaawat, aur ek 'mukammal rehnuma' ki talaash.\n\nIconic line: *\"Insaan ki sab se badi galti yeh hai ki woh Khuda ko bhool jaata hai.\"*\n\n📖 20+ zubanon mein tarjuma hua. 21vi sadi ka sab se zyada parha jane wala Urdu novel.",
  faiz:
    "Faiz Ahmed Faiz (1911–1984) — qaid mein bhi unka qalam nahin toota.\n\n*\"Mujh se pehli si mohabbat mere mehboob na maang\nMain ne samjha tha ke tu hai to darakhshaan hai hayat\"*\n\nIs nazm mein ishq aur inquilab dono ek doosre se baat karte hain.\n\n📖 Top Works: Naqsh-e-Faryadi, Dast-e-Saba, Zindan-Nama\n🏆 Lenin Peace Prize (1962), Nobel nomination\n✊ 'Hum Dekhenge' — har tehreek ka taraan.",
  jaun:
    "Jaun Elia (1931–2002) — Karachi ka misanthrope, philosophy ka aashiq.\n\n*\"Ab nahin koi baat khatre ki / Ab sabhi ko sabhi se khatra hai.\"*\n\nUnki shayari mein khud ko mitaane ka aisa lutf hai jo sirf wahi de sakte hain.\n\n📖 Collections: Shayad, Yaani, Lekin, Goya (sab posthumous)\n🌐 Social media par sab se zyada share hone wale Urdu shayar.",
  ghazal:
    "Ghazal Urdu shayari ki rani hai! Ek ghazal mein:\n\n• Matla — pehla sher jismein dono misre qafia-radif mein hote hain\n• Maqta — aakhri sher jismein shayar ka takhallus hota hai\n• Har sher mustaqil hota hai — lekin beher (meter) ek hoti hai\n• Kam az kam 5 ashaar\n\nMashhoor ghazlein: Ghalib ki 'Hazaron Khwahishein', Faraz ki 'Ranjish Hi Sahi', Faiz ki 'Mujh Se Pehli Si Mohabbat'\n\nNazm se farq: Ghazal mein har sher alag, nazm mein ek maujoo shuru se aakhir tak.",
  islamic:
    "Urdu mein Islamic adab bohot ameer hai:\n\n📕 Fazail-e-Amaal — Maulana Zakariya Kandhlawi\nHadees ki bunyad par naik aamaal ki fazilat. Duniya bhar ke Tablighi ijtema mein parhi jaati hai.\n\n📗 Bahishti Zewar — Maulana Ashraf Ali Thanvi\n100+ saal se dulhanon ko tohfe mein di jaane wali kitab. Islami zindagi ka mukammal guide.\n\n📘 Qasas-ul-Anbiya — Allama Ibn Kathir\nAdam se Muhammad ﷺ tak tamam Ambia ke qisse.\n\n📙 Jab Zindagi Shuru Hogi — Abu Yahya\nAakhirat ka bayaan aise andaz mein ke dil ko lage.\n\nAur Iqbal ki shairi — Lab Pe Aati Hai Dua, Shikwa — yeh bhi Islamic adab ka hissa hain.",
  parveen:
    "Parveen Shakir (1952–1994) — Urdu shayari mein aurat ki awaaz ka inqilab.\n\n*\"Kuch ashk the aankhon mein abhi aur bhi behne the\nKuch lafz the honton par abhi aur bhi kehne the\"*\n\n📖 Debut 'Khushbu' (1976) — publishers ne reject kiya 'bohot personal' keh kar. 40+ dafa chapi. Sad Barg, Inkaar bhi.\n\nHarvard se MPA kiya, civil service mein theen. 42 saal ki umar mein car accident mein shaheed huin.\n\nLegacy: Unke baad aane wali har aurat shayra ke liye darwaza khola.",
  mir:
    "Mir Taqi Mir (1723–1810) — Khuda-e-Sukhan, yani shayari ka Khuda.\n\n*\"Dikh to dil ki jaaN se uthta hai\nYeh dhuaN sa kahaaN se uthta hai\"*\n\nGhalib ne khud kaha: 'Rekhta ke tum hi ustad nahin ho Ghalib / Kehte hain agle zamane mein koi Mir bhi tha.'\n\n📖 6 mukammal Divan — kisi bhi classical Urdu shayar se zyada.\n📜 Zikr-e-Mir — unki apni aap beeti.\n\nStyle: Sadgi mein dard ka aisa gehrapan ke Ghalib bhi jhuk gaye.",
  faraz:
    "Ahmad Faraz (1931–2008) — romantic muzahimat ki awaaz.\n\n*\"Ranjish hi sahi dil hi dukhaane ke liye aa\nAa phir se mujhe chhod ke jaane ke liye aa\"*\n\nZia ul-Haq ne jalaawatan kiya — Europe mein reh kar bhi likha. Hilal-e-Imtiaz mila.\n\n📖 Tanha Tanha, Dard Aashob, Nayaft\n🎤 Mushaira mein hazaron ki majlis.",
  sahir:
    "Sahir Ludhianvi (1921–1980) — gharibi se Bollywood ke shikhar tak.\n\n*\"Yeh duniya agar mil bhi jaaye to kya hai\"* (Pyaasa, 1957)\n\n700+ Bollywood gaane likhe — 'Kabhi Kabhi', 'Chalo Ek Baar Phir Se'. Progressive shayar the — Marxism ko geet banaaya.\n\n📖 Talkhiyan — pehla majmua.",
  default:
    "Bahut khoob sawal! Urdu adab ek samandar hai — aap kis mauj mein dubki lagana chahenge?\n\nKuch tajaweez:\n• 🖋️ Shayar: Ghalib, Iqbal, Faiz, Mir, Faraz, Parveen Shakir, Jaun Elia, Sahir\n• 📝 Asnaf: Ghazal, Nazm, Marsiya, Qasida, Rubai, Hamd, Naat\n• 📚 Kitaben: Peer-e-Kamil, Raja Gidh, Umrao Jan Ada, Namal\n• 📖 Islamic: Fazail-e-Amaal, Bahishti Zewar, Qasas-ul-Anbiya\n• 🎭 Kaifiyat: Dard, ishq, umeed, tanhai ki shayari\n\nAur sawaal poochhein — main yahin hoon ✦",
};

function generate(prompt: string): string {
  const p = prompt.toLowerCase();
  if (p.includes("ghalib")) return STORY_REPLIES.ghalib;
  if (p.includes("shikwa") || (p.includes("iqbal") && !p.includes("bal"))) return STORY_REPLIES.shikwa;
  if (p.includes("dard") || p.includes("sad") || p.includes("gham") || p.includes("udas"))
    return STORY_REPLIES.dard;
  if (p.includes("peer") || p.includes("kamil")) return STORY_REPLIES["peer-e-kamil"];
  if (p.includes("faiz") && !p.includes("faraz")) return STORY_REPLIES.faiz;
  if (p.includes("jaun") || p.includes("elia")) return STORY_REPLIES.jaun;
  if (p.includes("ghazal") || p.includes("nazm") || p.includes("farq")) return STORY_REPLIES.ghazal;
  if (p.includes("islamic") || p.includes("islam") || p.includes("fazail") || p.includes("bahishti") || p.includes("qasas") || p.includes("deeni"))
    return STORY_REPLIES.islamic;
  if (p.includes("parveen") || p.includes("shakir")) return STORY_REPLIES.parveen;
  if (p.includes("mir") && !p.includes("amir")) return STORY_REPLIES.mir;
  if (p.includes("faraz")) return STORY_REPLIES.faraz;
  if (p.includes("sahir") || p.includes("ludhian")) return STORY_REPLIES.sahir;
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
    // Realistic typing delay based on response length
    const reply = generate(t);
    const delay = Math.min(800 + reply.length * 3, 2500);
    setTimeout(() => {
      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
        ts: Date.now(),
      });
      setThinking(false);
    }, delay);
  };

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden bg-grad-hero">
      <ParticleCanvas />
      <MoodAura />
      <Navbar variant="chatbot" />

      <div className="relative z-10 flex flex-1 overflow-hidden pt-16 sm:pt-20">
        {/* Sidebar — always visible on lg+, slide-in on mobile */}
        <aside
          className={
            "hidden lg:flex fixed inset-y-0 left-0 z-[250] w-[280px] flex-shrink-0 border-r border-gold/15 pt-20 lg:relative lg:border-r-0"
          }
        >
          <div className="flex h-full w-full flex-col px-4 pb-4">
            <div className="flex items-center justify-between mb-4">
              <p className="font-etched text-[10px] tracking-[0.18em] uppercase text-tertiary-warm">
                Mehfil
              </p>
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
                  onClick={() => send(q)}
                  className="w-full rounded-md border border-gold/10 bg-gold/[0.03] px-3 py-2 text-left font-classical italic text-[12.5px] text-secondary-warm hover:bg-gold/[0.08] hover:text-gold transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                key="sidebar-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 z-[240] bg-black/50 lg:hidden"
              />
              <motion.aside
                key="sidebar-mobile"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                className="fixed inset-y-0 left-0 z-[250] w-[85vw] max-w-[300px] border-r border-gold/15 bg-[hsl(var(--bg-secondary)/0.95)] backdrop-blur-xl pt-20 lg:hidden"
              >
                <div className="flex h-full flex-col px-4 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-etched text-[10px] tracking-[0.18em] uppercase text-tertiary-warm">
                      Mehfil
                    </p>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="rounded-md p-1.5 text-secondary-warm"
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
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

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
                    What do you want to explore?
                  </p>

                  {/* Categorized suggestion cards */}
                  <div className="mt-6 space-y-3 max-w-lg mx-auto">
                    <p className="font-etched text-[9px] tracking-[0.18em] uppercase text-tertiary-warm">
                      Ask about
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => send("Ghalib ki sab se mashhoor ghazal sunaiye")}
                        className="glass glass-hover rounded-lg px-3.5 py-3 text-left"
                      >
                        <span className="font-display italic text-gold text-[13px]">Ghalib</span>
                        <p className="font-classical italic text-[11px] text-secondary-warm/70 mt-0.5">Greatest ghazal</p>
                      </button>
                      <button
                        onClick={() => send("Ghazal aur Nazm mein kya farq hai?")}
                        className="glass glass-hover rounded-lg px-3.5 py-3 text-left"
                      >
                        <span className="font-display italic text-gold text-[13px]">Ghazal Rules</span>
                        <p className="font-classical italic text-[11px] text-secondary-warm/70 mt-0.5">How it works</p>
                      </button>
                      <button
                        onClick={() => send("Peer-e-Kamil ke baare mein batayein")}
                        className="glass glass-hover rounded-lg px-3.5 py-3 text-left"
                      >
                        <span className="font-display italic text-gold text-[13px]">Best Books</span>
                        <p className="font-classical italic text-[11px] text-secondary-warm/70 mt-0.5">Novels & poetry</p>
                      </button>
                      <button
                        onClick={() => send("Mujhe dard ki shayari chahiye")}
                        className="glass glass-hover rounded-lg px-3.5 py-3 text-left"
                      >
                        <span className="font-display italic text-gold text-[13px]">Mood Poetry</span>
                        <p className="font-classical italic text-[11px] text-secondary-warm/70 mt-0.5">Shers by feeling</p>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    "flex gap-3 stream-msg " +
                    (m.role === "user" ? "justify-end" : "justify-start")
                  }
                >
                  {m.role === "assistant" && (
                    <div className="chat-avatar chat-avatar-ai mt-1">
                      <Feather size={14} />
                    </div>
                  )}
                  <div
                    className={
                      "max-w-[80%] rounded-2xl px-4 py-3 text-[13.5px] leading-[1.75] whitespace-pre-wrap " +
                      (m.role === "user"
                        ? "bg-gold/15 border border-gold/25 text-foreground"
                        : "glass text-secondary-warm")
                    }
                  >
                    {m.content}
                  </div>
                  {m.role === "user" && (
                    <div className="chat-avatar chat-avatar-user mt-1">
                      <User size={14} />
                    </div>
                  )}
                </motion.div>
              ))}

              {thinking && (
                <div className="flex items-center gap-3 px-1 py-3">
                  <div className="chat-avatar chat-avatar-ai">
                    <Feather size={14} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-gold animate-pulse" />
                    <span className="font-classical italic shimmer-gold">
                      Soch raha hoon…
                    </span>
                  </div>
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
                className="flex-1 resize-none rounded-2xl border border-gold/15 bg-[hsl(var(--bg-primary)/0.6)] px-4 py-3 text-sm text-foreground placeholder:text-tertiary-warm focus:border-gold/40 outline-none min-h-[48px] max-h-[160px]"
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

        {/* Context panel — always visible on lg+, slide-in on mobile */}
        <aside className="hidden lg:flex w-[300px] flex-shrink-0 border-l border-gold/15 pt-0">
          <div className="flex h-full w-full flex-col px-5 pb-5 overflow-y-auto">
            <div className="mb-4 pt-1">
              <p className="font-etched text-[10px] tracking-[0.18em] uppercase text-tertiary-warm">
                Maloomat
              </p>
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
        </aside>

        {/* Mobile context panel */}
        <AnimatePresence>
          {contextOpen && (
            <>
              <motion.div
                key="ctx-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setContextOpen(false)}
                className="fixed inset-0 z-[240] bg-black/50 lg:hidden"
              />
              <motion.aside
                key="ctx-mobile"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                className="fixed inset-y-0 right-0 z-[250] w-[85vw] max-w-[320px] border-l border-gold/15 bg-[hsl(var(--bg-secondary)/0.95)] backdrop-blur-xl pt-20 lg:hidden"
              >
                <div className="flex h-full flex-col px-5 pb-5 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-etched text-[10px] tracking-[0.18em] uppercase text-tertiary-warm">
                      Maloomat
                    </p>
                    <button
                      onClick={() => setContextOpen(false)}
                      className="rounded-md p-1.5 text-secondary-warm"
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
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
