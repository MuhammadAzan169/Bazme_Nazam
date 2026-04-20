// ── Image imports ───────────────────────────────────────────────
import poetGhalib from "@/assets/poet-ghalib.jpg";
import poetMir from "@/assets/poet-mir.jpg";
import poetIqbal from "@/assets/poet-iqbal.jpg";
import poetFaiz from "@/assets/poet-faiz.jpg";
import poetFaraz from "@/assets/poet-faraz.jpg";
import poetJaun from "@/assets/poet-jaun.jpg";
import poetSahir from "@/assets/poet-sahir.jpg";
import poetJalib from "@/assets/poet-jalib.jpg";
import bookPeerEKamil from "@/assets/book-peer-e-kamil.jpg";
import bookJabZindagi from "@/assets/book-jab-zindagi.jpg";
import bookUmraoJanAda from "@/assets/book-umrao-jan-ada.jpg";
import bookRajaGidh from "@/assets/book-raja-gidh.jpg";
import bookDivanEGhalib from "@/assets/book-divan-e-ghalib.jpg";
import bookBangEDra from "@/assets/book-bang-e-dra.jpg";
import bookFazailEAmaal from "@/assets/book-fazail-e-amaal.png";
import bookBahishtiZewar from "@/assets/book-bahishti-zewar.jpg";
import bookQasasUlAnbiya from "@/assets/book-qasas-ul-anbiya.jpg";
import bookAabEHayat from "@/assets/book-aab-e-hayat.jpg";
import bookKhushbu from "@/assets/book-khushbu.jpg";
import bookMantoAfsane from "@/assets/book-manto-afsane.jpg";
import bookShikwaJawab from "@/assets/book-shikwa-jawab.jpg";
import bookJannatKePattay from "@/assets/book-jannat-ke-pattay.jpg";
import bookNamal from "@/assets/book-namal.jpg";

// ── Eras ────────────────────────────────────────────────────────
export interface Era {
  id: string;
  number: string;
  name: string;
  urdu: string;
  range: string;
  description: string;
  poets: string[];
  historicalFact: string;
  sher: { lines: string[]; poet: string };
  authorImg: string | null;
  keyEvents: string[];
  majorWorks: string[];
}

export const ERAS: Era[] = [
  {
    id: "deccan",
    number: "01",
    name: "Deccani Dour",
    urdu: "دکنی دور",
    range: "1100s – 1600s",
    description:
      "The earliest flowering of Urdu literature emerged not in Delhi, but in the Deccan Sultanates of Bijapur, Golconda, and Bidar. Muhammad Quli Qutb Shah — a king who was also a poet — composed the first great Urdu diwan, weaving Persian elegance with the earthy Braj Bhasha of the south.",
    poets: ["Quli Qutb Shah", "Wajhi", "Gawwasi", "Nusrati"],
    historicalFact:
      "Muhammad Quli Qutb Shah wrote poetry in at least five languages, including Telugu and Kannada — making his diwan one of the most multilingual works in medieval South Asian literature.",
    sher: {
      lines: ["قطب شہی دور تھا ادب کا پہلا پھول", "دکن کی مٹی میں اردو نے لی انگڑائی"],
      poet: "دکنی دور",
    },
    authorImg: null,
    keyEvents: [
      "1327 — Muhammad bin Tughluq shifts capital to Daulatabad, seeding Urdu in the Deccan",
      "1580s — Quli Qutb Shah composes the first Urdu diwan",
      "1609 — Wajhi writes Sab Ras, the first Urdu prose romance",
    ],
    majorWorks: ["Diwan-e-Quli Qutb Shah", "Sab Ras (Wajhi)", "Kadambari (Gawwasi)"],
  },
  {
    id: "mughal",
    number: "02",
    name: "Mughal Dour",
    urdu: "مغل دور",
    range: "1600s – 1750s",
    description:
      "When Mughal power crystallised in Delhi and Agra, Urdu poetry followed. Mir Taqi Mir — Khuda-e-Sukhan, the God of Poetry — set the benchmark for unmediated grief. The ghazal reached formal perfection in Delhi's candlelit kothas.",
    poets: ["Mir Taqi Mir", "Mir Dard", "Shah Hatim", "Mir Soz"],
    historicalFact:
      "Mir Taqi Mir composed six complete divans — an unmatched volume. Sauda reportedly said: \"Do not call Mir a mere poet; he has turned grief itself into an art form.\"",
    sher: {
      lines: ["مجھ کو شاعر نہ کہو میر کہ صاحب میں نے", "درد و غم کتنے کیے جمع تو دیوان کیا"],
      poet: "میر تقی میرؔ",
    },
    authorImg: null,
    keyEvents: [
      "1707 — Death of Aurangzeb; Mughal decline accelerates Urdu's rise over Persian",
      "1720s — The Delhi School emerges as the centre of Urdu poetry",
      "1739 — Nadir Shah's invasion devastates Delhi; poets scatter",
    ],
    majorWorks: ["Six Divans of Mir", "Divan-e-Dard", "Diwan-e-Sauda"],
  },
  {
    id: "lucknow",
    number: "03",
    name: "Delhi vs Lucknow",
    urdu: "دہلی بنام لکھنؤ",
    range: "1750s – 1857",
    description:
      "As the Mughal empire weakened, Lucknow rose as a rival cultural capital. Two schools emerged — Delhi's austere philosophical depth versus Lucknow's elaborate ornamental style. Mirza Ghalib bridged both worlds and transcended them.",
    poets: ["Mirza Ghalib", "Sheikh Ibrahim Zauq", "Imam Bakhsh Nasikh", "Atish"],
    historicalFact:
      "Ghalib's pension dispute with the British colonial government produced some of the finest Urdu prose in history — his letters, funny and devastating in equal measure, remain required reading.",
    sher: {
      lines: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"],
      poet: "مرزا غالبؔ",
    },
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mirza_Asadullah_Khan_Ghalib.jpg/440px-Mirza_Asadullah_Khan_Ghalib.jpg",
    keyEvents: [
      "1775 — Lucknow becomes the cultural capital under the Nawabs of Awadh",
      "1797 — Ghalib born in Agra; the greatest Urdu poet enters the world",
      "1857 — The War of Independence shatters Mughal Delhi forever",
    ],
    majorWorks: ["Divan-e-Ghalib", "Kulliyat-e-Zauq", "Ghalib's Letters"],
  },
  {
    id: "sir-syed",
    number: "04",
    name: "Post-1857 Era",
    urdu: "۱۸۵۷ کے بعد",
    range: "1857 – 1920s",
    description:
      "The fall of Delhi in 1857 shattered the Mughal world. Urdu poetry turned from courtly celebration to mourning, reform, and defiance. From Sialkot, a young philosopher-poet named Allama Iqbal would change everything — giving a broken people a philosophy of the self: Khudi.",
    poets: ["Allama Iqbal", "Altaf Hussain Hali", "Akbar Allahabadi", "Shibli Nomani"],
    historicalFact:
      "Iqbal's \"Shikwa\" (Complaint to God) was so bold that clerics initially called for a fatwa against him. His follow-up \"Jawab-e-Shikwa\" silenced the critics.",
    sher: {
      lines: ["خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے", "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے"],
      poet: "علامہ اقبالؔ",
    },
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Allama_Iqbal.jpg/440px-Allama_Iqbal.jpg",
    keyEvents: [
      "1857 — War of Independence; collapse of the Mughal court",
      "1875 — Sir Syed founds MAO College (later AMU)",
      "1877 — Iqbal born in Sialkot",
      "1911 — Shikwa recited at Lahore, creating a literary earthquake",
    ],
    majorWorks: ["Bang-e-Dra (Iqbal)", "Musaddas-e-Hali", "Kulliyat-e-Akbar"],
  },
  {
    id: "progressive",
    number: "05",
    name: "Taraqqi Pasand Tehrik",
    urdu: "ترقی پسند تحریک",
    range: "1936 – 1970s",
    description:
      "Sajjad Zaheer founded the Progressive Writers Movement in 1936. Poetry became a weapon. Faiz wrote from prison cells; his pen never trembled. Manto and Ismat Chughtai tore open hypocrisies in afsanas that put them on trial.",
    poets: ["Faiz Ahmed Faiz", "Sahir Ludhianvi", "Ahmad Nadeem Qasmi", "Majrooh Sultanpuri"],
    historicalFact:
      "Faiz was imprisoned in 1951 and charged with treason. He continued writing some of his finest poetry in Lahore's Montgomery Jail, and later received the Lenin Peace Prize.",
    sher: {
      lines: ["مجھ سے پہلی سی محبت مرے محبوب نہ مانگ", "میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات"],
      poet: "فیضؔ احمد فیض",
    },
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Faiz_Ahmed_Faiz_%28cropped%29.jpg/440px-Faiz_Ahmed_Faiz_%28cropped%29.jpg",
    keyEvents: [
      "1936 — All India Progressive Writers Association founded in Lucknow",
      "1947 — Partition; Manto's 'Toba Tek Singh' captures the madness",
      "1951 — Faiz arrested in the Rawalpindi Conspiracy Case",
      "1962 — Faiz receives the Lenin Peace Prize",
    ],
    majorWorks: ["Naqsh-e-Faryadi (Faiz)", "Toba Tek Singh (Manto)", "Talkhiyan (Sahir)"],
  },
  {
    id: "modern",
    number: "06",
    name: "Jadeed Daur",
    urdu: "جدید دور",
    range: "1970s – Present",
    description:
      "Ahmad Faraz — exiled by Zia ul-Haq — became the voice of romantic resistance. Parveen Shakir wrote the female experience into Urdu verse with full authority. Jaun Elia's nihilist philosophy found cult status. Today, a 1200-year-old tradition is not dying but transforming.",
    poets: ["Ahmad Faraz", "Parveen Shakir", "Jaun Elia", "Munir Niazi"],
    historicalFact:
      "Parveen Shakir's debut \"Khushbu\" (1976) was rejected by publishers as \"too personal.\" It became one of the bestselling Urdu poetry collections in history, reprinted over 40 times.",
    sher: {
      lines: ["رنجش ہی سہی دل ہی دکھانے کے لیے آ", "آ پھر سے مجھے چھوڑ کے جانے کے لیے آ"],
      poet: "احمد فرازؔ",
    },
    authorImg: null,
    keyEvents: [
      "1976 — Parveen Shakir publishes Khushbu, redefining female voice in Urdu",
      "1977–88 — Zia era; poets exiled, literature becomes resistance",
      "2002 — Jaun Elia dies; social media posthumously makes him a cult icon",
      "2020s — Urdu poetry goes viral on Instagram and TikTok",
    ],
    majorWorks: ["Khushbu (Parveen Shakir)", "Tanha Tanha (Faraz)", "Shayad (Jaun Elia)"],
  },
];

// ── Forms / Asnaf ────────────────────────────────────────────────
export interface Asnaf {
  id: string;
  name: string;
  urdu: string;
  description: string;
  detailedDescription: string;
  rules: string[];
  famousExamples: { title: string; poet: string }[];
  exampleSher: string[];
}

export const ASNAF: Asnaf[] = [
  {
    id: "ghazal",
    name: "Ghazal",
    urdu: "غزل",
    description:
      "Couplets of love, loss, and longing. Each sher self-contained, the radif and qafia binding them like beads on a string.",
    detailedDescription:
      "The ghazal is the queen of Urdu poetry. Each couplet (sher) is an independent poem in itself, yet all shers in a ghazal share the same meter (beher), rhyme scheme (qafia), and refrain (radif). The opening couplet (matla) sets the rhyme; the closing one (maqta) carries the poet's pen name (takhallus). A ghazal may contain 5 to 25 couplets.",
    rules: [
      "Each sher must be metrically identical (same beher)",
      "Both lines of the matla end in the radif + qafia",
      "Only the second line of later shers carries the radif + qafia",
      "The maqta includes the poet's takhallus",
      "Minimum 5 ashaar traditionally required",
    ],
    famousExamples: [
      { title: "Hazaron Khwahishein", poet: "Mirza Ghalib" },
      { title: "Ranjish Hi Sahi", poet: "Ahmad Faraz" },
      { title: "Mujh Se Pehli Si Mohabbat", poet: "Faiz Ahmed Faiz" },
    ],
    exampleSher: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"],
  },
  {
    id: "nazm",
    name: "Nazm",
    urdu: "نظم",
    description:
      "A single, sustained poem on one subject. Iqbal's Shikwa, Faiz's Hum Dekhenge — the form of revolutionary thought.",
    detailedDescription:
      "Unlike the ghazal where each sher is independent, a nazm carries a single unified theme from beginning to end. It may be rhymed, partially rhymed, or free verse. The nazm became the vehicle for political, philosophical, and social commentary.",
    rules: [
      "Must maintain a single, continuous theme throughout",
      "Can use any meter or no fixed meter (free verse)",
      "Rhyme is optional (paaband vs azaad nazm)",
      "Length is unrestricted",
    ],
    famousExamples: [
      { title: "Shikwa / Jawab-e-Shikwa", poet: "Allama Iqbal" },
      { title: "Hum Dekhenge", poet: "Faiz Ahmed Faiz" },
      { title: "Subh-e-Azadi", poet: "Faiz Ahmed Faiz" },
    ],
    exampleSher: ["ہم دیکھیں گے", "لازم ہے کہ ہم بھی دیکھیں گے"],
  },
  {
    id: "qasida",
    name: "Qasida",
    urdu: "قصیدہ",
    description:
      "The grand panegyric. Long, ornate, ceremonial — written for kings, saints, and the Prophet ﷺ.",
    detailedDescription:
      "The qasida is a formal ode, often running 50–100+ couplets. Historically written in praise of kings and patrons, in Urdu it reached its height as praise poetry for the Prophet Muhammad ﷺ. It follows strict meter and rhyme conventions.",
    rules: [
      "Single rhyme scheme throughout (aa, ba, ca...)",
      "Sections: tashbeeb (intro), gurez (transition), madah (main praise)",
      "Often 50+ couplets; grandeur is the measure",
      "Elevated, formal language",
    ],
    famousExamples: [
      { title: "Qasida Burda Shareef", poet: "Imam Busiri" },
      { title: "Qasaid-e-Sauda", poet: "Mirza Rafi Sauda" },
      { title: "Qasaid-e-Zauq", poet: "Sheikh Ibrahim Zauq" },
    ],
    exampleSher: ["کعبے میں جا کے دیکھ تو سب کو خبر ہوئی", "اس بت کدے میں آ کے خدا یاد آ گیا"],
  },
  {
    id: "marsiya",
    name: "Marsiya",
    urdu: "مرثیہ",
    description:
      "Elegy for the martyrs of Karbala. Anees and Dabeer raised this form to the height of Urdu's tragic register.",
    detailedDescription:
      "The marsiya is a lamentation poem about the martyrdom of Imam Hussain at Karbala (680 CE). Composed in a six-line stanza (musaddas), it contains vivid battle descriptions, emotional dialogues, and profound spiritual reflections.",
    rules: [
      "Composed in musaddas (six-line stanzas) — rhyme: AABBCC",
      "Subject relates to the events of Karbala",
      "Contains sections: rukhsat, rajaz, shahadat",
      "Recited during Muharram gatherings (majalis)",
    ],
    famousExamples: [
      { title: "Marsiya-e-Anees (multiple)", poet: "Mir Anees" },
      { title: "Marsiya-e-Dabeer (multiple)", poet: "Mirza Dabeer" },
      { title: "Muharram Marsiyas", poet: "Josh Malihabadi" },
    ],
    exampleSher: ["جب عرشِ برین سے آئی یہ آواز", "کربل میں حسین کا وقتِ شہادت آ گیا"],
  },
  {
    id: "rubai",
    name: "Rubai",
    urdu: "رباعی",
    description:
      "Four lines, one truth. A miniature universe — philosophy, love, mysticism distilled to its hardest essence.",
    detailedDescription:
      "The rubai compresses an entire thought into exactly four lines. The rhyme scheme is AABA (lines 1, 2, 4 rhyme; line 3 is free). Persian-origin, it was perfected by Omar Khayyam and brought into Urdu by Iqbal.",
    rules: [
      "Exactly four lines (misras)",
      "Rhyme scheme: AABA",
      "Has its own specific set of meters (24 recognized)",
      "Must express a complete thought",
    ],
    famousExamples: [
      { title: "Rubai'at-e-Iqbal", poet: "Allama Iqbal" },
      { title: "Rubai'at-e-Khayyam (Urdu)", poet: "Omar Khayyam / Various" },
      { title: "Rubai'at-e-Firaq", poet: "Firaq Gorakhpuri" },
    ],
    exampleSher: ["اک عمر ملی تھی جو خدا سے مانگ کر", "اک پل میں گنوا دی ہے تیری یاد میں"],
  },
  {
    id: "afsana",
    name: "Afsana",
    urdu: "افسانہ",
    description:
      "The Urdu short story. Manto, Ismat, Bedi — wounds of partition, of patriarchy, of being human, in a few brief pages.",
    detailedDescription:
      "The afsana became Urdu's most powerful prose form in the 20th century. Premchand introduced social realism; Manto stripped it to the bone with brutal honesty about Partition; Ismat Chughtai wrote desire into Urdu prose for the first time.",
    rules: [
      "Prose form — no metrical requirements",
      "Unified plot, climax, and resolution",
      "Focuses on a single event or moment of revelation",
      "Typically 2,000–10,000 words",
    ],
    famousExamples: [
      { title: "Toba Tek Singh", poet: "Saadat Hasan Manto" },
      { title: "Lihaaf (The Quilt)", poet: "Ismat Chughtai" },
      { title: "Lajwanti", poet: "Rajinder Singh Bedi" },
    ],
    exampleSher: ["اگر آپ میری کہانیاں نہیں سہہ سکتے", "تو زمانہ ناقابلِ برداشت ہے — منٹو"],
  },
  {
    id: "hamd",
    name: "Hamd",
    urdu: "حمد",
    description:
      "Praise of Allah — the opening note of every diwan. A poet's humility before the Divine.",
    detailedDescription:
      "Hamd is poetry in praise of Allah. Traditionally, every diwan opens with a hamd, acknowledging the Creator before all earthly art. The form has no fixed structure — it may follow ghazal, nazm, or free verse patterns.",
    rules: [
      "Subject must be exclusively the praise of Allah",
      "No fixed meter or rhyme — may follow any poetic form",
      "Traditionally opens every poetry collection",
      "Language should be reverential and spiritually elevated",
    ],
    famousExamples: [
      { title: "Hamd from Bang-e-Dra", poet: "Allama Iqbal" },
      { title: "Hamd-e-Baari Taala", poet: "Ahmad Raza Khan Barelvi" },
      { title: "Hamd (various)", poet: "Mir Taqi Mir" },
    ],
    exampleSher: ["خدا وہ ایک ہے جو ذرے ذرے میں پنہاں ہے", "نہ اس کی ابتدا ہے اور نہ اس کی انتہا ہے"],
  },
  {
    id: "naat",
    name: "Naat",
    urdu: "نعت",
    description:
      "Poetry in praise of the Prophet Muhammad ﷺ — the heart's truest devotion poured into verse.",
    detailedDescription:
      "Naat is devotional poetry praising the Prophet Muhammad ﷺ. It is one of the most beloved and widely recited forms of Urdu literature — a bridge between literary art and spiritual devotion.",
    rules: [
      "Must be in praise of the Prophet Muhammad ﷺ",
      "Must maintain utmost respect (adab)",
      "Can follow ghazal, nazm, qasida, or free verse structure",
      "Often recited in mehfils with musical accompaniment",
    ],
    famousExamples: [
      { title: "Lab Pe Aati Hai Dua", poet: "Allama Iqbal" },
      { title: "Mustafa Jaane Rehmat", poet: "Ahmed Raza Khan" },
      { title: "Tala al-Badru Alayna", poet: "Traditional" },
    ],
    exampleSher: ["لب پہ آتی ہے دعا بن کے تمنا میری", "زندگی شمع کی صورت ہو خدایا میری"],
  },
];

// ── Poets ───────────────────────────────────────────────────────
export interface Poet {
  id: string;
  nameUrdu: string;
  nameEng: string;
  years: string;
  era: string;
  bio: string;
  knownFor: string;
  sher: string[];
  imgColor: string;
  wikiImg: string | null;
  fallbackLetter: string;
  fullBio: string;
  topWorks: { title: string; titleUrdu: string; year: string; description: string }[];
  famousAshaar: { lines: string[]; context: string }[];
  style: string;
  legacy: string;
}

export const POETS: Poet[] = [
  {
    id: "ghalib",
    nameUrdu: "مرزا اسد اللہ خاں غالبؔ",
    nameEng: "Mirza Ghalib",
    years: "1797 – 1869",
    era: "Mughal / Post-Mughal",
    bio: "The greatest Urdu poet. His ghazals navigate philosophy, loss, and irony with unmatched genius.",
    knownFor: "Divan-e-Ghalib, his letters, the philosophy of desire",
    sher: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"],
    imgColor: "linear-gradient(135deg, #2A1845, #E8B45A15)",
    wikiImg: poetGhalib,
    fallbackLetter: "غ",
    fullBio: "Mirza Asadullah Baig Khan (1797-1869), known by his pen name Ghalib, was born in Agra to a family of Turkish descent. Orphaned young, he was raised by his uncle. Married at 13, he moved to Delhi and entered the literary circles of the Mughal court. His Persian diwan was his pride, but it is his Urdu ghazals that have made him immortal. He lived through the 1857 War of Independence and documented the destruction of Delhi in his diary 'Dastanbu'. Despite lifelong financial troubles, court intrigues, and personal tragedies (all seven children died in infancy), his wit and literary genius never dimmed. He is buried in Nizamuddin, Delhi.",
    topWorks: [
      { title: "Divan-e-Ghalib", titleUrdu: "دیوانِ غالب", year: "1841", description: "234 ghazals — the most studied collection in Urdu literature." },
      { title: "Dastanbu", titleUrdu: "دستنبو", year: "1858", description: "An eyewitness account of the 1857 War of Independence and the destruction of Delhi." },
      { title: "Ud-e-Hindi", titleUrdu: "اردوئے معلی", year: "Various", description: "His collected letters — considered the foundation of modern Urdu prose." },
    ],
    famousAshaar: [
      { lines: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"], context: "On the infinity of human desire" },
      { lines: ["دل ہی تو ہے نہ سنگ و خشت درد سے بھر نہ آئے کیوں", "روئیں گے ہم ہزار بار کوئی ہمیں ستائے کیوں"], context: "On the vulnerability of the heart" },
      { lines: ["ہم کو معلوم ہے جنت کی حقیقت لیکن", "دل کے خوش رکھنے کو غالب یہ خیال اچھا ہے"], context: "On faith, doubt, and the comforts we need" },
    ],
    style: "Philosophical depth, irony, wordplay, multi-layered meaning.",
    legacy: "The most quoted Urdu poet globally. His Delhi haveli is now a museum.",
  },
  {
    id: "mir",
    nameUrdu: "میر تقی میرؔ",
    nameEng: "Mir Taqi Mir",
    years: "1723 – 1810",
    era: "Delhi School",
    bio: "Khuda-e-Sukhan — God of Poetry. His verses carry a raw, unmediated grief unlike any other.",
    knownFor: "Six Divans, mastery of rekhta, raw emotional authenticity",
    sher: ["مجھ کو شاعر نہ کہو میر کہ صاحب میں نے", "درد و غم کتنے کیے جمع تو دیوان کیا"],
    imgColor: "linear-gradient(135deg, #1A1A2E, #C9667A15)",
    wikiImg: poetMir,
    fallbackLetter: "م",
    fullBio: "Born in Agra in 1723, Mir witnessed his father die when he was young, and this early grief coloured everything he wrote. He moved to Delhi and quickly became the greatest poet of his age. When Delhi was devastated by invasions, Mir migrated to Lucknow. Ghalib himself said: 'Rekhta ke tum hi ustad nahin ho Ghalib / Kehte hain agle zamane mein koi Mir bhi tha.' Mir composed six divans — an unmatched volume.",
    topWorks: [
      { title: "Kulliyat-e-Mir", titleUrdu: "کلیاتِ میر", year: "1723–1810", description: "Six complete divans of ghazals — the largest body of work by any classical Urdu poet." },
      { title: "Zikr-e-Mir", titleUrdu: "ذکرِ میر", year: "~1790", description: "Mir's autobiography — a rare first-person account of 18th century Delhi." },
    ],
    famousAshaar: [
      { lines: ["مجھ کو شاعر نہ کہو میر کہ صاحب میں نے", "درد و غم کتنے کیے جمع تو دیوان کیا"], context: "On turning grief into art" },
      { lines: ["دیکھ تو دل کہ جاں سے اٹھتا ہے", "یہ دھواں سا کہاں سے اٹھتا ہے"], context: "On the smouldering grief within" },
    ],
    style: "Simplicity of language with devastating emotional depth. Where Ghalib is philosophical, Mir is primal.",
    legacy: "Called Khuda-e-Sukhan (God of Poetry). Ghalib acknowledged his superiority.",
  },
  {
    id: "iqbal",
    nameUrdu: "علامہ محمد اقبالؔ",
    nameEng: "Allama Iqbal",
    years: "1877 – 1938",
    era: "Post-1857 / Reform",
    bio: "Shair-e-Mashriq — Poet of the East. Philosopher, poet, visionary. His Khudi philosophy awakened a generation.",
    knownFor: "Bang-e-Dra, Bal-e-Jibreel, Shikwa & Jawab-e-Shikwa",
    sher: ["خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے", "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے"],
    imgColor: "linear-gradient(135deg, #0D2340, #D49A3E15)",
    wikiImg: poetIqbal,
    fallbackLetter: "ا",
    fullBio: "Born in Sialkot in 1877, Muhammad Iqbal studied philosophy in Cambridge and Munich. He returned to Lahore and transformed Urdu literature with his philosophy of Khudi (selfhood). His Allahabad Address (1930) envisioned a separate Muslim state. He died in 1938, nine years before Pakistan was created. His birthday (Nov 9) is a public holiday in Pakistan.",
    topWorks: [
      { title: "Bang-e-Dra", titleUrdu: "بانگِ درا", year: "1924", description: "Contains Shikwa, Jawab-e-Shikwa, Tarana-e-Hindi, Tarana-e-Milli." },
      { title: "Bal-e-Jibreel", titleUrdu: "بالِ جبریل", year: "1935", description: "Considered his finest Urdu work. Ghazals of extraordinary power." },
      { title: "Zarb-e-Kaleem", titleUrdu: "ضربِ کلیم", year: "1936", description: "Poetry as a weapon against colonialism and spiritual decay." },
    ],
    famousAshaar: [
      { lines: ["خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے", "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے"], context: "On the philosophy of Khudi" },
      { lines: ["ستاروں سے آگے جہاں اور بھی ہیں", "ابھی عشق کے امتحان اور بھی ہیں"], context: "On limitless aspiration" },
      { lines: ["لب پہ آتی ہے دعا بن کے تمنا میری", "زندگی شمع کی صورت ہو خدایا میری"], context: "A child's prayer" },
    ],
    style: "Philosophical grandeur, Islamic mysticism, pan-Islamic political vision.",
    legacy: "National poet of Pakistan. His Khudi philosophy influenced independence movements across the Muslim world.",
  },
  {
    id: "faiz",
    nameUrdu: "فیض احمد فیضؔ",
    nameEng: "Faiz Ahmed Faiz",
    years: "1911 – 1984",
    era: "Progressive",
    bio: "Marxist, romantic, imprisoned revolutionary. His poetry blended political fire with lyrical tenderness. Lenin Peace Prize laureate.",
    knownFor: "Naqsh-e-Faryadi, Dast-e-Saba, Zindan-Nama; \"Hum Dekhenge\"",
    sher: ["مجھ سے پہلی سی محبت مرے محبوب نہ مانگ", "میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات"],
    imgColor: "linear-gradient(135deg, #1A0E2E, #C9667A18)",
    wikiImg: poetFaiz,
    fallbackLetter: "ف",
    fullBio: "Born in Sialkot in 1911, Faiz studied Arabic, English, and philosophy. Arrested in 1951 in the Rawalpindi Conspiracy Case, he spent four years in prison — writing some of his finest verse. His poetry uniquely fused romantic imagery with revolutionary politics. He was nominated for the Nobel Prize and received the Lenin Peace Prize in 1962.",
    topWorks: [
      { title: "Naqsh-e-Faryadi", titleUrdu: "نقشِ فریادی", year: "1941", description: "His debut — immediately established him as the heir to Ghalib and Iqbal." },
      { title: "Dast-e-Saba", titleUrdu: "دستِ صبا", year: "1952", description: "Written largely in prison. Contains some of the most powerful political poetry in Urdu." },
      { title: "Zindan-Nama", titleUrdu: "زنداں نامہ", year: "1956", description: "Letters and poems from prison — a testament to the unbreakable spirit." },
    ],
    famousAshaar: [
      { lines: ["مجھ سے پہلی سی محبت مرے محبوب نہ مانگ", "میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات"], context: "When love meets political awakening" },
      { lines: ["بول کہ لب آزاد ہیں تیرے", "بول زبان اب تک تیری ہے"], context: "On the freedom of speech" },
      { lines: ["ہم دیکھیں گے لازم ہے کہ ہم بھی دیکھیں گے", "جب تختِ فلک پر بٹھائے جائیں گے"], context: "The anthem of every resistance movement" },
    ],
    style: "Romantic-revolutionary. Uses classical ghazal vocabulary to carry Marxist and anti-colonial messages.",
    legacy: "'Hum Dekhenge' became the anthem of every South Asian protest movement. Nominated for the Nobel Prize.",
  },
  {
    id: "faraz",
    nameUrdu: "احمد فرازؔ",
    nameEng: "Ahmad Faraz",
    years: "1931 – 2008",
    era: "Modern",
    bio: "The voice of romantic resistance. Exiled by Zia ul-Haq for his political poetry, beloved by millions for his ghazals.",
    knownFor: "Tanha Tanha, Dard Aashob, exile and defiance",
    sher: ["رنجش ہی سہی دل ہی دکھانے کے لیے آ", "آ پھر سے مجھے چھوڑ کے جانے کے لیے آ"],
    imgColor: "linear-gradient(135deg, #1E1030, #E8778A15)",
    wikiImg: poetFaraz,
    fallbackLetter: "ف",
    fullBio: "Ahmad Faraz (1931-2008), born Syed Ahmad Shah in Kohat, was one of the most popular Urdu poets of the 20th century. During Zia ul-Haq's martial law, his outspoken poetry led to exile in Europe. His ghazals — passionate, accessible, and deeply musical — made him a household name. He received the Hilal-e-Imtiaz.",
    topWorks: [
      { title: "Tanha Tanha", titleUrdu: "تنہا تنہا", year: "1962", description: "Early romantic ghazals that established his reputation." },
      { title: "Dard Aashob", titleUrdu: "درد آشوب", year: "1975", description: "Poetry of pain and political protest." },
      { title: "Nayaft", titleUrdu: "نایافت", year: "1998", description: "Mature work blending exile, memory, and longing." },
    ],
    famousAshaar: [
      { lines: ["رنجش ہی سہی دل ہی دکھانے کے لیے آ", "آ پھر سے مجھے چھوڑ کے جانے کے لیے آ"], context: "Perhaps the most sung ghazal in Urdu" },
      { lines: ["اب کے ہم بچھڑے تو شاید کبھی خوابوں میں ملیں", "جس طرح سوکھے ہوئے پھول کتابوں میں ملیں"], context: "On separation and memory" },
    ],
    style: "Romantic, musical, accessible. Perfectly suited for musical performance.",
    legacy: "His mushaira performances drew crowds of thousands. 'Ranjish Hi Sahi' remains one of the most performed ghazals.",
  },
  {
    id: "jaun",
    nameUrdu: "جونؔ ایلیا",
    nameEng: "Jaun Elia",
    years: "1931 – 2002",
    era: "Modern",
    bio: "A reckless philosopher-poet of self-destruction and wry nihilism. His cult following exploded on social media.",
    knownFor: "Shayad, Yaani, Lekin, Goya",
    sher: ["میں نے بہت کھویا ہے اپنے آپ کو پانے میں", "اور جو پایا وہ بھی کھو دیا دیوانے میں"],
    imgColor: "linear-gradient(135deg, #0A0A20, #6B5BD618)",
    wikiImg: poetJaun,
    fallbackLetter: "ج",
    fullBio: "Jaun Elia (1931-2002) was born in Amroha, India. A polyglot who read Hebrew, Sanskrit, Arabic, and Persian, he lived as a deliberate outcast. His mushaira performances were legendary. His four collections were published posthumously, and social media turned him into a phenomenon.",
    topWorks: [
      { title: "Shayad", titleUrdu: "شاید", year: "2003 (posthumous)", description: "Perhaps — even the title is uncertain. His most famous collection." },
      { title: "Yaani", titleUrdu: "یعنی", year: "2004 (posthumous)", description: "That is to say — philosophical musings and devastating ghazals." },
      { title: "Lekin", titleUrdu: "لیکن", year: "2006 (posthumous)", description: "But — the eternal qualifier." },
    ],
    famousAshaar: [
      { lines: ["میں نے بہت کھویا ہے اپنے آپ کو پانے میں", "اور جو پایا وہ بھی کھو دیا دیوانے میں"], context: "On the paradox of self-discovery" },
      { lines: ["اب نہیں کوئی بات خطرے کی", "اب سبھی کو سبھی سے خطرا ہے"], context: "On universal mistrust" },
    ],
    style: "Nihilistic, philosophical, deliberately careless. Conversations with the void.",
    legacy: "The most shared Urdu poet on social media. Mushaira videos have millions of views.",
  },
  {
    id: "sahir",
    nameUrdu: "ساحرؔ لدھیانوی",
    nameEng: "Sahir Ludhianvi",
    years: "1921 – 1980",
    era: "Progressive",
    bio: "From poverty in Ludhiana to the pinnacle of Bollywood. His lyrics carried revolution to the masses.",
    knownFor: "Talkhiyan, 700+ Bollywood songs, Pyaasa, Kabhi Kabhi",
    sher: ["یہ دنیا اگر مل بھی جائے تو کیا ہے", "یہ دنیا بڑی بے وفا ہے میرے ہم نشیں"],
    imgColor: "linear-gradient(135deg, #1A1000, #F5C84215)",
    wikiImg: poetSahir,
    fallbackLetter: "س",
    fullBio: "Born Abdul Hayee in Ludhiana in 1921, Sahir took his pen name meaning 'magician'. He became a leading Progressive poet and then entered Bollywood, where his film lyrics became the most powerful vehicle for social messaging in Indian cinema. He wrote over 700 songs while never compromising his literary standards.",
    topWorks: [
      { title: "Talkhiyan", titleUrdu: "تلخیاں", year: "1945", description: "Bitterness — his debut collection establishing him as a major Progressive voice." },
      { title: "Pyaasa (Film)", titleUrdu: "پیاسا", year: "1957", description: "The film's lyrics are considered the finest poetry written for cinema." },
      { title: "Kabhi Kabhi (Film)", titleUrdu: "کبھی کبھی", year: "1976", description: "His romantic masterpiece — 'Kabhi Kabhi Mere Dil Mein' is eternally beloved." },
    ],
    famousAshaar: [
      { lines: ["یہ دنیا اگر مل بھی جائے تو کیا ہے", "یہ دنیا بڑی بے وفا ہے میرے ہم نشیں"], context: "From Pyaasa — cinema as poetry" },
      { lines: ["وہ صبح کبھی تو آئے گی", "جب ظلم کے سب بت ڈھائے جائیں گے"], context: "Revolutionary hope" },
    ],
    style: "Accessible, musical, politically charged. Made Marxist ideas sing.",
    legacy: "Proved that popular art and high literature need not be enemies.",
  },
  {
    id: "jalib",
    nameUrdu: "حبیب جالبؔ",
    nameEng: "Habib Jalib",
    years: "1928 – 1993",
    era: "Modern",
    bio: "The poet of the streets. He spoke truth to power so fearlessly that dictators jailed him — and the people made him immortal.",
    knownFor: "Dastoor, Musheer, revolutionary protest poetry",
    sher: ["ایسے دستور کو صبح بے نور کو", "میں نہیں مانتا میں نہیں مانتا"],
    imgColor: "linear-gradient(135deg, #1A0A00, #D4400015)",
    wikiImg: poetJalib,
    fallbackLetter: "ج",
    fullBio: "Habib Jalib (1928-1993) was born in Hoshiarpur, Punjab. He became Pakistan's most celebrated protest poet — imprisoned multiple times under Ayub Khan, Yahya Khan, and Zia ul-Haq for his defiant verse. Where other poets used metaphor, Jalib used the hammer. His poem 'Dastoor' (written against Ayub Khan's constitution in 1962) became the anthem of every pro-democracy movement in Pakistan's history. He died in poverty, beloved by the people he fought for.",
    topWorks: [
      { title: "Dastoor", titleUrdu: "دستور", year: "1962", description: "The most famous protest poem in Urdu. Written against Ayub Khan's constitution — recited at every democratic uprising since." },
      { title: "Barg-e-Aawara", titleUrdu: "برگِ آوارہ", year: "1958", description: "Wandering leaf — his debut collection, already burning with social fire." },
      { title: "Sar-e-Maqtal", titleUrdu: "سرِ مقتل", year: "1966", description: "At the place of execution — poetry written from prison and the edge of danger." },
    ],
    famousAshaar: [
      { lines: ["ایسے دستور کو صبح بے نور کو", "میں نہیں مانتا میں نہیں مانتا"], context: "From Dastoor — refusal to accept an unjust constitution" },
      { lines: ["تم سے پہلے وہ جو اک شخص یہاں تخت نشیں تھا", "اس کو بھی اپنا یقیں تھا کہ یہی حق ہے یہی دیں ہے"], context: "On the self-delusion of tyrants" },
      { lines: ["کیا دیکھتا ہوں میں یہ جہاں دیکھ کر", "رو رہا ہوں میں اپنا وطن دیکھ کر"], context: "On grief for a nation's suffering" },
    ],
    style: "Direct, furious, musical. No ambiguity — every word a stone thrown at power.",
    legacy: "Pakistan's conscience in verse. His poems are chanted at protests to this day.",
  },
];

// ── Notable Books ───────────────────────────────────────────────
export interface Book {
  id: string;
  title: string;
  titleUrdu: string;
  author: string;
  authorUrdu: string;
  year: string;
  genre: "Novel" | "Poetry Collection" | "Short Stories" | "Long Poem" | "Islamic" | "Prose";
  language: string;
  description: string;
  themes: string[];
  cover: string;
  coverImg: string | null;
  iconicLine: string;
  detailedSynopsis?: string;
  whyRead?: string;
}

export const BOOKS: Book[] = [
  {
    id: "peer-e-kamil",
    title: "Peer-e-Kamil",
    titleUrdu: "پیرِ کامل",
    author: "Umera Ahmed",
    authorUrdu: "عمیرہ احمد",
    year: "2004",
    genre: "Novel",
    language: "Urdu",
    description: "A spiritual journey of two souls — Imama and Salar — whose lives collide through faith, rebellion, and the search for a perfect guide.",
    themes: ["Faith", "Redemption", "Love", "Identity"],
    cover: "linear-gradient(135deg, #1a0a2e, #4a2060)",
    coverImg: bookPeerEKamil,
    iconicLine: "انسان کی سب سے بڑی غلطی یہ ہے کہ وہ خدا کو بھول جاتا ہے",
    detailedSynopsis: "Imama Hashim, an Ahmadi girl who converts to Sunni Islam, and Salar Sikander, a genius drowning in arrogance, are connected by fate. Their parallel journeys eventually converge in a story about the meaning of a 'perfect guide'.",
    whyRead: "The most-read Urdu novel of the 21st century. Translated into 20+ languages.",
  },
  {
    id: "jab-zindagi-shuru-hogi",
    title: "Jab Zindagi Shuru Hogi",
    titleUrdu: "جب زندگی شروع ہوگی",
    author: "Abu Yahya",
    authorUrdu: "ابو یحییٰ",
    year: "2012",
    genre: "Islamic",
    language: "Urdu",
    description: "A deeply moving account of the afterlife through the lens of Islamic belief. Philosophical depth meets extraordinary narrative clarity.",
    themes: ["Afterlife", "Faith", "Accountability", "Hope"],
    cover: "linear-gradient(135deg, #0a1a2e, #1a4060)",
    coverImg: bookJabZindagi,
    iconicLine: "موت زندگی کا انت نہیں، بلکہ اصل زندگی کا آغاز ہے",
    whyRead: "Made millions re-examine their relationship with mortality.",
  },
  {
    id: "umrao-jan-ada",
    title: "Umrao Jan Ada",
    titleUrdu: "امراؤ جان ادا",
    author: "Mirza Hadi Ruswa",
    authorUrdu: "مرزا محمد ہادی رسوا",
    year: "1905",
    genre: "Novel",
    language: "Urdu",
    description: "The first great Urdu novel. A courtesan's life in Lucknow's twilight years — lush, melancholic, feminist before the word existed.",
    themes: ["Fate", "Womanhood", "Loss", "Lucknow culture"],
    cover: "linear-gradient(135deg, #2a1000, #6a3000)",
    coverImg: bookUmraoJanAda,
    iconicLine: "میری زندگی ایک ایسی کتاب ہے جسے لکھنے والے نے خود نہیں پڑھا",
    whyRead: "The founding novel of Urdu literature.",
  },
  {
    id: "raja-gidh",
    title: "Raja Gidh",
    titleUrdu: "راجہ گدھ",
    author: "Bano Qudsia",
    authorUrdu: "بانو قدسیہ",
    year: "1981",
    genre: "Novel",
    language: "Urdu",
    description: "A metaphysical masterwork. The vulture as a symbol of forbidden desire — philosophy, psychology, and mysticism woven together.",
    themes: ["Forbidden desire", "Metaphysics", "Sufism"],
    cover: "linear-gradient(135deg, #1a2a0a, #3a4a1a)",
    coverImg: bookRajaGidh,
    iconicLine: "جب انسان حرام کی طرف قدم بڑھاتا ہے تو اندر سے گدھ بن جاتا ہے",
    whyRead: "Combines Sufi thought with modern psychology like no other Urdu novel.",
  },
  {
    id: "divan-e-ghalib",
    title: "Divan-e-Ghalib",
    titleUrdu: "دیوانِ غالب",
    author: "Mirza Ghalib",
    authorUrdu: "مرزا غالبؔ",
    year: "1841",
    genre: "Poetry Collection",
    language: "Urdu & Persian",
    description: "The most studied, debated, and beloved poetry collection in Urdu literature. 234 ghazals containing multitudes.",
    themes: ["Ghazal", "Philosophy", "Mystic thought"],
    cover: "linear-gradient(135deg, #2A1845, #E8B45A22)",
    coverImg: bookDivanEGhalib,
    iconicLine: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے",
    whyRead: "The Bible of Urdu poetry. Every serious student begins and ends here.",
  },
  {
    id: "bang-e-dra",
    title: "Bang-e-Dra",
    titleUrdu: "بانگِ درا",
    author: "Allama Iqbal",
    authorUrdu: "علامہ اقبالؔ",
    year: "1924",
    genre: "Poetry Collection",
    language: "Urdu",
    description: "Iqbal's first Urdu collection — Shikwa, Jawab-e-Shikwa, Tarana-e-Hindi, and dozens of poems that shaped national consciousness.",
    themes: ["Khudi", "Islamic revival", "Awakening"],
    cover: "linear-gradient(135deg, #0D2340, #D49A3E22)",
    coverImg: bookBangEDra,
    iconicLine: "لب پہ آتی ہے دعا بن کے تمنا میری",
    whyRead: "Contains the poems that changed the political consciousness of a billion people.",
  },
  {
    id: "khushbu",
    title: "Khushbu",
    titleUrdu: "خوشبو",
    author: "Parveen Shakir",
    authorUrdu: "پروین شاکرؔ",
    year: "1976",
    genre: "Poetry Collection",
    language: "Urdu",
    description: "Parveen Shakir's debut that changed Urdu poetry forever. The female experience written with unprecedented directness.",
    themes: ["Feminine voice", "Longing", "Urban life"],
    cover: "linear-gradient(135deg, #2E0A1A, #E8778A22)",
    coverImg: bookKhushbu,
    iconicLine: "خوشبو کی طرح پھیل گئی ہے میری محبت",
    whyRead: "The book that proved women could redefine Urdu poetry.",
  },
  {
    id: "manto-afsane",
    title: "Manto ke Afsane",
    titleUrdu: "منٹو کے افسانے",
    author: "Saadat Hasan Manto",
    authorUrdu: "سعادت حسن منٹو",
    year: "1947–1955",
    genre: "Short Stories",
    language: "Urdu",
    description: "Manto ripped the curtain from Partition violence and hypocrisy. Tried for obscenity six times, acquitted each time.",
    themes: ["Partition", "Human condition", "Colonial violence"],
    cover: "linear-gradient(135deg, #2a0a0a, #5a1a1a)",
    coverImg: bookMantoAfsane,
    iconicLine: "اگر آپ میری کہانیاں نہیں سہہ سکتے تو زمانہ ناقابلِ برداشت ہے",
    whyRead: "To understand Partition, start with Manto. To understand humanity, also start with Manto.",
  },
  {
    id: "shikwa-jawab",
    title: "Shikwa & Jawab-e-Shikwa",
    titleUrdu: "شکوہ اور جوابِ شکوہ",
    author: "Allama Iqbal",
    authorUrdu: "علامہ اقبالؔ",
    year: "1911 & 1913",
    genre: "Long Poem",
    language: "Urdu",
    description: "Shikwa is a Muslim's complaint to God — bold, devastating. Jawab-e-Shikwa is God's reply. Together, one of the great dialogues in world literature.",
    themes: ["Theology", "Divine dialogue", "Khudi"],
    cover: "linear-gradient(135deg, #0D2340, #A87A3022)",
    coverImg: bookShikwaJawab,
    iconicLine: "تجھے یاد ہو کہ نہ یاد ہو، مجھے یاد ہے",
    whyRead: "The boldest theological poem in Urdu. A believer's complaint to God — and God answers.",
  },
  {
    id: "fazail-e-amaal",
    title: "Fazail-e-Amaal",
    titleUrdu: "فضائلِ اعمال",
    author: "Maulana Zakariya Kandhlawi",
    authorUrdu: "مولانا زکریا کاندھلوی",
    year: "1928",
    genre: "Islamic",
    language: "Urdu",
    description: "A widely-read collection of Hadith compilations and stories encouraging good deeds. Read in Tablighi gatherings worldwide.",
    themes: ["Hadith", "Good deeds", "Faith", "Prayer"],
    cover: "linear-gradient(135deg, #0a2a1a, #1a4a2a)",
    coverImg: bookFazailEAmaal,
    iconicLine: "ہر نیکی کا بدلہ اللہ کے یہاں محفوظ ہے",
    whyRead: "One of the most widely-read Islamic books in the world.",
  },
  {
    id: "bahishti-zewar",
    title: "Bahishti Zewar",
    titleUrdu: "بہشتی زیور",
    author: "Maulana Ashraf Ali Thanvi",
    authorUrdu: "مولانا اشرف علی تھانوی",
    year: "1905",
    genre: "Islamic",
    language: "Urdu",
    description: "Heavenly Ornaments — a comprehensive guide to Islamic life. For over a century, it was given to brides as an essential wedding gift across South Asia.",
    themes: ["Islamic jurisprudence", "Women's guide", "Daily life", "Fiqh"],
    cover: "linear-gradient(135deg, #1a2a0a, #2a4a1a)",
    coverImg: bookBahishtiZewar,
    iconicLine: "عورت کی عزت اس کے علم اور تقویٰ میں ہے",
    whyRead: "A century-old guide that shaped how millions of Muslim women understood their faith.",
  },
  {
    id: "qasas-ul-anbiya",
    title: "Qasas-ul-Anbiya",
    titleUrdu: "قصص الانبیاء",
    author: "Allama Ibn Kathir",
    authorUrdu: "علامہ ابن کثیر",
    year: "14th century",
    genre: "Islamic",
    language: "Urdu",
    description: "Stories of the Prophets — from Adam to Muhammad ﷺ. Its Urdu translations have been a cornerstone of Islamic education in South Asia.",
    themes: ["Prophetic stories", "Islamic history", "Faith", "Lessons"],
    cover: "linear-gradient(135deg, #1a1a2e, #2a2a4e)",
    coverImg: bookQasasUlAnbiya,
    iconicLine: "ہر نبی کی کہانی میں نسلِ انسانی کے لیے سبق ہے",
    whyRead: "The prophets' stories told with scholarly depth. Essential Islamic reading.",
  },
  {
    id: "aab-e-hayat",
    title: "Aab-e-Hayat",
    titleUrdu: "آبِ حیات",
    author: "Muhammad Hussain Azad",
    authorUrdu: "محمد حسین آزاد",
    year: "1880",
    genre: "Prose",
    language: "Urdu",
    description: "The Water of Life — the first comprehensive history of Urdu poetry. Literary criticism, biography, and beautiful prose combined.",
    themes: ["Literary history", "Poetry criticism", "Biography"],
    cover: "linear-gradient(135deg, #2a1a0a, #4a3a1a)",
    coverImg: bookAabEHayat,
    iconicLine: "شاعری وہ آب حیات ہے جو زبان کو زندہ رکھتی ہے",
    whyRead: "The foundational text of Urdu literary criticism.",
  },
  {
    id: "jannat-ke-pattay",
    title: "Jannat ke Pattay",
    titleUrdu: "جنت کے پتے",
    author: "Nemrah Ahmed",
    authorUrdu: "نمرہ احمد",
    year: "2014",
    genre: "Novel",
    language: "Urdu",
    description: "A gripping thriller interweaving ISI intelligence, Turkish history, and a Quranic mystery.",
    themes: ["Espionage", "Faith", "Ottoman history", "Adventure"],
    cover: "linear-gradient(135deg, #0a2a2e, #1a4a4e)",
    coverImg: bookJannatKePattay,
    iconicLine: "اللہ کے راز ان لوگوں پر کھلتے ہیں جو ان کی تلاش میں نکلتے ہیں",
    whyRead: "Proved Urdu fiction could compete with international thrillers.",
  },
  {
    id: "namal",
    title: "Namal",
    titleUrdu: "نمل",
    author: "Nemrah Ahmed",
    authorUrdu: "نمرہ احمد",
    year: "2017",
    genre: "Novel",
    language: "Urdu",
    description: "An epic saga — murder, corruption, love, and redemption. Every chapter begins with a Quranic verse mirroring the plot.",
    themes: ["Justice", "Corruption", "Faith", "Redemption"],
    cover: "linear-gradient(135deg, #2a1a2e, #4a2a4e)",
    coverImg: bookNamal,
    iconicLine: "ہر ظلم کا حساب ہے، ہر آنسو کا حساب ہے",
    whyRead: "At 900+ pages, the most ambitious modern Urdu novel.",
  },
];

// ── Featured Shers (carousel) ───────────────────────────────────
export interface FeaturedSher {
  id: string;
  lines: string[];
  poet: string;
  poetEng: string;
  year: string;
  translation?: string;
}

export const FEATURED_SHERS: FeaturedSher[] = [
  {
    id: "ghalib-1",
    lines: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"],
    poet: "مرزا غالبؔ",
    poetEng: "Mirza Ghalib",
    year: "1797–1869",
    translation: "A thousand desires, each so intense it takes my breath — many were fulfilled, yet they still feel too few.",
  },
  {
    id: "faiz-1",
    lines: ["مجھ سے پہلی سی محبت مرے محبوب نہ مانگ", "میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات"],
    poet: "فیضؔ احمد فیض",
    poetEng: "Faiz Ahmed Faiz",
    year: "1911–1984",
    translation: "Don't ask me for that old love, beloved — I once thought if you existed, life would be radiant.",
  },
  {
    id: "iqbal-1",
    lines: ["خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے", "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے"],
    poet: "علامہ اقبالؔ",
    poetEng: "Allama Iqbal",
    year: "1877–1938",
    translation: "Elevate your selfhood so high that before every decree, God Himself asks: what is your wish?",
  },
  {
    id: "mir-1",
    lines: ["مجھ کو شاعر نہ کہو میر کہ صاحب میں نے", "درد و غم کتنے کیے جمع تو دیوان کیا"],
    poet: "میر تقی میرؔ",
    poetEng: "Mir Taqi Mir",
    year: "1723–1810",
    translation: "Don't call me merely a poet — I gathered so much grief and pain that it became a diwan.",
  },
  {
    id: "jaun-1",
    lines: ["میں نے بہت کھویا ہے اپنے آپ کو پانے میں", "اور جو پایا وہ بھی کھو دیا دیوانے میں"],
    poet: "جونؔ ایلیا",
    poetEng: "Jaun Elia",
    year: "1931–2002",
    translation: "I lost so much trying to find myself — and what I found, I lost again in my own madness.",
  },
  {
    id: "faraz-1",
    lines: ["رنجش ہی سہی دل ہی دکھانے کے لیے آ", "آ پھر سے مجھے چھوڑ کے جانے کے لیے آ"],
    poet: "احمد فرازؔ",
    poetEng: "Ahmad Faraz",
    year: "1931–2008",
    translation: "Even if only to quarrel, come to break my heart — come again, even if only to leave me once more.",
  },
  {
    id: "parveen-1",
    lines: ["کچھ اشک تھے آنکھوں میں ابھی اور بھی بہنے تھے", "کچھ لفظ تھے ہونٹوں پر ابھی اور بھی کہنے تھے"],
    poet: "پروین شاکرؔ",
    poetEng: "Parveen Shakir",
    year: "1952–1994",
    translation: "There were more tears yet to fall from these eyes, more words yet to be said upon these lips.",
  },
  {
    id: "sahir-1",
    lines: ["یہ دنیا اگر مل بھی جائے تو کیا ہے", "یہ دنیا بڑی بے وفا ہے میرے ہم نشیں"],
    poet: "ساحرؔ لدھیانوی",
    poetEng: "Sahir Ludhianvi",
    year: "1921–1980",
    translation: "Even if I were given this whole world, what of it? This world is faithless, my companion.",
  },
  {
    id: "ghalib-2",
    lines: ["دل ہی تو ہے نہ سنگ و خشت درد سے بھر نہ آئے کیوں", "روئیں گے ہم ہزار بار کوئی ہمیں ستائے کیوں"],
    poet: "مرزا غالبؔ",
    poetEng: "Mirza Ghalib",
    year: "1797–1869",
    translation: "It is a heart, not stone — why should it not fill with pain? I shall weep a thousand times — why should anyone torment me?",
  },
  {
    id: "iqbal-2",
    lines: ["ستاروں سے آگے جہاں اور بھی ہیں", "ابھی عشق کے امتحان اور بھی ہیں"],
    poet: "علامہ اقبالؔ",
    poetEng: "Allama Iqbal",
    year: "1877–1938",
    translation: "Beyond the stars, there are worlds yet more — there are still more tests of love to endure.",
  },
];

export const NAV_LINKS = [
  { label: "Tareekh", labelUrdu: "تاریخ", href: "#tareekh" },
  { label: "Asnaf", labelUrdu: "اصناف", href: "#asnaf" },
  { label: "Shuara", labelUrdu: "شعراء", href: "#shuara" },
  { label: "Novels", labelUrdu: "ناول", href: "#novels" },
  { label: "Shayari", labelUrdu: "شاعری", href: "#shayari" },
  { label: "Maktaba", labelUrdu: "مکتبہ", href: "#maktaba" },
];
