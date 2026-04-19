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
  },
];

// ── Forms / Asnaf ────────────────────────────────────────────────
export interface Asnaf {
  id: string;
  name: string;
  urdu: string;
  description: string;
}

export const ASNAF: Asnaf[] = [
  {
    id: "ghazal",
    name: "Ghazal",
    urdu: "غزل",
    description:
      "Couplets of love, loss, and longing. Each sher self-contained, the radif and qafia binding them like beads on a string.",
  },
  {
    id: "nazm",
    name: "Nazm",
    urdu: "نظم",
    description:
      "A single, sustained poem on one subject. Iqbal's Shikwa, Faiz's Hum Dekhenge — the form of revolutionary thought.",
  },
  {
    id: "qasida",
    name: "Qasida",
    urdu: "قصیدہ",
    description:
      "The grand panegyric. Long, ornate, ceremonial — written for kings, saints, and the Prophet ﷺ.",
  },
  {
    id: "marsiya",
    name: "Marsiya",
    urdu: "مرثیہ",
    description:
      "Elegy for the martyrs of Karbala. Anees and Dabeer raised this form to the height of Urdu's tragic register.",
  },
  {
    id: "rubai",
    name: "Rubai",
    urdu: "رباعی",
    description:
      "Four lines, one truth. A miniature universe — philosophy, love, mysticism distilled to its hardest essence.",
  },
  {
    id: "afsana",
    name: "Afsana",
    urdu: "افسانہ",
    description:
      "The Urdu short story. Manto, Ismat, Bedi — wounds of partition, of patriarchy, of being human, in a few brief pages.",
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
}

export const POETS: Poet[] = [
  {
    id: "ghalib",
    nameUrdu: "مرزا اسد اللہ خاں غالبؔ",
    nameEng: "Mirza Ghalib",
    years: "1797 – 1869",
    era: "Mughal / Post-Mughal",
    bio: "The greatest Urdu poet. His ghazals navigate philosophy, loss, and irony with unmatched genius. He saw the fall of Delhi and wrote about it with heartbreaking clarity.",
    knownFor: "Divan-e-Ghalib, his letters, the philosophy of desire",
    sher: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"],
    imgColor: "linear-gradient(135deg, #2A1845, #E8B45A15)",
    wikiImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mirza_Asadullah_Khan_Ghalib.jpg/440px-Mirza_Asadullah_Khan_Ghalib.jpg",
    fallbackLetter: "غ",
  },
  {
    id: "mir",
    nameUrdu: "میر تقی میرؔ",
    nameEng: "Mir Taqi Mir",
    years: "1723 – 1810",
    era: "Delhi School",
    bio: "Khuda-e-Sukhan — God of Poetry. His verses carry a raw, unmediated grief unlike any other Urdu poet. Six divans, each a world of loss.",
    knownFor: "Six Divans, mastery of rekhta, raw emotional authenticity",
    sher: ["مجھ کو شاعر نہ کہو میر کہ صاحب میں نے", "درد و غم کتنے کیے جمع تو دیوان کیا"],
    imgColor: "linear-gradient(135deg, #1A1A2E, #C9667A15)",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mir_Taqi_Mir.jpg/440px-Mir_Taqi_Mir.jpg",
    fallbackLetter: "م",
  },
  {
    id: "iqbal",
    nameUrdu: "علامہ محمد اقبالؔ",
    nameEng: "Allama Iqbal",
    years: "1877 – 1938",
    era: "Post-1857 / Reform",
    bio: "Shair-e-Mashriq — Poet of the East. Philosopher, poet, visionary. His Khudi philosophy awakened a generation and contributed to the founding of Pakistan.",
    knownFor: "Bang-e-Dra, Bal-e-Jibreel, Shikwa & Jawab-e-Shikwa",
    sher: ["خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے", "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے"],
    imgColor: "linear-gradient(135deg, #0D2340, #D49A3E15)",
    wikiImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Allama_Iqbal.jpg/440px-Allama_Iqbal.jpg",
    fallbackLetter: "ا",
  },
  {
    id: "faiz",
    nameUrdu: "فیض احمد فیضؔ",
    nameEng: "Faiz Ahmed Faiz",
    years: "1911 – 1984",
    era: "Progressive",
    bio: "Marxist, romantic, imprisoned revolutionary. His poetry blended political fire with lyrical tenderness into a form uniquely his own. Lenin Peace Prize laureate.",
    knownFor: "Naqsh-e-Faryadi, Dast-e-Saba, Zindan-Nama; \"Hum Dekhenge\"",
    sher: ["مجھ سے پہلی سی محبت مرے محبوب نہ مانگ", "میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات"],
    imgColor: "linear-gradient(135deg, #1A0E2E, #C9667A18)",
    wikiImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Faiz_Ahmed_Faiz_%28cropped%29.jpg/440px-Faiz_Ahmed_Faiz_%28cropped%29.jpg",
    fallbackLetter: "ف",
  },
  {
    id: "faraz",
    nameUrdu: "احمد فرازؔ",
    nameEng: "Ahmad Faraz",
    years: "1931 – 2008",
    era: "Modern",
    bio: "The voice of romantic resistance. Exiled by Zia ul-Haq for his political poetry, beloved by millions for his ghazals. His voice defined a generation of heartbreak.",
    knownFor: "Tanha Tanha, Dard Aashob, exile and defiance",
    sher: ["رنجش ہی سہی دل ہی دکھانے کے لیے آ", "آ پھر سے مجھے چھوڑ کے جانے کے لیے آ"],
    imgColor: "linear-gradient(135deg, #1E1030, #E8778A15)",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ahmad_Faraz.jpg/440px-Ahmad_Faraz.jpg",
    fallbackLetter: "ف",
  },
  {
    id: "parveen",
    nameUrdu: "پروین شاکرؔ",
    nameEng: "Parveen Shakir",
    years: "1952 – 1994",
    era: "Modern",
    bio: "The woman who wrote the female experience into Urdu poetry with full authority. Khushbu remains one of the bestselling Urdu poetry collections ever printed.",
    knownFor: "Khushbu, Sad Barg, Inkaar — feminist voice in Urdu literature",
    sher: ["خوشبو کی طرح پھیل گئی میری محبت", "میں نے دیا دل اور وہ بے وفا نکلا"],
    imgColor: "linear-gradient(135deg, #2E0A1A, #E8778A15)",
    wikiImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Parveen_Shakir.jpg/440px-Parveen_Shakir.jpg",
    fallbackLetter: "پ",
  },
  {
    id: "jaun",
    nameUrdu: "جونؔ ایلیا",
    nameEng: "Jaun Elia",
    years: "1931 – 2002",
    era: "Modern",
    bio: "A reckless philosopher-poet of self-destruction and wry nihilism. His cult following exploded posthumously in the social media era — the internet discovered what Karachi knew for decades.",
    knownFor: "Shayad, Yaani, Lekin, Goya",
    sher: ["میں نے بہت کھویا ہے اپنے آپ کو پانے میں", "اور جو پایا وہ بھی کھو دیا دیوانے میں"],
    imgColor: "linear-gradient(135deg, #0A0A20, #6B5BD618)",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jaun_Elia.jpg/440px-Jaun_Elia.jpg",
    fallbackLetter: "ج",
  },
  {
    id: "sahir",
    nameUrdu: "ساحرؔ لدھیانوی",
    nameEng: "Sahir Ludhianvi",
    years: "1921 – 1980",
    era: "Progressive",
    bio: "From poverty in Ludhiana to the pinnacle of Bollywood. His lyrics carried revolution to the masses. A communist who made millions weep and think at the same time.",
    knownFor: "Talkhiyan, 700+ Bollywood songs, Pyaasa, Kabhi Kabhi",
    sher: ["وہ صبح کبھی تو آئے گی", "اے ارض وطن تجھ کو کیا ہو گیا"],
    imgColor: "linear-gradient(135deg, #1A1000, #F5C84215)",
    wikiImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sahir_Ludhianvi.jpg/440px-Sahir_Ludhianvi.jpg",
    fallbackLetter: "س",
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
  genre: "Novel" | "Poetry Collection" | "Short Stories" | "Long Poem";
  language: string;
  description: string;
  themes: string[];
  cover: string;
  coverImg: string | null;
  iconicLine: string;
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
    description:
      "A spiritual journey of two souls — Imama and Salar — whose lives collide through faith, rebellion, and the search for a perfect guide. One of the bestselling Urdu novels of the 21st century.",
    themes: ["Faith", "Redemption", "Love", "Identity"],
    cover: "linear-gradient(135deg, #1a0a2e, #4a2060)",
    coverImg: "https://covers.openlibrary.org/b/isbn/9789690023414-L.jpg?default=false",
    iconicLine: "انسان کی سب سے بڑی غلطی یہ ہے کہ وہ خدا کو بھول جاتا ہے",
  },
  {
    id: "jab-zindagi-shuru-hogi",
    title: "Jab Zindagi Shuru Hogi",
    titleUrdu: "جب زندگی شروع ہوگی",
    author: "Abu Yahya",
    authorUrdu: "ابو یحییٰ",
    year: "2012",
    genre: "Novel",
    language: "Urdu",
    description:
      "A deeply moving account of the afterlife through the lens of Islamic belief. Philosophical depth meets extraordinary narrative clarity — a contemporary phenomenon.",
    themes: ["Afterlife", "Faith", "Accountability", "Hope"],
    cover: "linear-gradient(135deg, #0a1a2e, #1a4060)",
    coverImg: null,
    iconicLine: "موت زندگی کا انت نہیں، بلکہ اصل زندگی کا آغاز ہے",
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
    description:
      "The first great Urdu novel. A courtesan's life in Lucknow's twilight years — lush, melancholic, feminist before the word existed.",
    themes: ["Fate", "Womanhood", "Loss", "Lucknow culture"],
    cover: "linear-gradient(135deg, #2a1000, #6a3000)",
    coverImg: "https://covers.openlibrary.org/b/isbn/969350674X-L.jpg?default=false",
    iconicLine: "میری زندگی ایک ایسی کتاب ہے جسے لکھنے والے نے خود نہیں پڑھا",
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
    description:
      "A metaphysical masterwork. The vulture as a symbol of forbidden desire — philosophy, psychology, and mysticism woven together unlike anything else in Urdu literature.",
    themes: ["Forbidden desire", "Metaphysics", "Sufism"],
    cover: "linear-gradient(135deg, #1a2a0a, #3a4a1a)",
    coverImg: null,
    iconicLine: "جب انسان حرام کی طرف قدم بڑھاتا ہے تو اندر سے گدھ بن جاتا ہے",
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
    description:
      "The most studied, debated, and beloved poetry collection in Urdu literature. 234 ghazals containing multitudes — philosophy, desire, wit, tragedy — compressed into two lines each.",
    themes: ["Ghazal", "Philosophy", "Mystic thought"],
    cover: "linear-gradient(135deg, #2A1845, #E8B45A22)",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mirza_Asadullah_Khan_Ghalib.jpg/440px-Mirza_Asadullah_Khan_Ghalib.jpg",
    iconicLine: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے",
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
    description:
      "Iqbal's first Urdu collection — containing Shikwa, Jawab-e-Shikwa, Tarana-e-Hindi, and dozens of poems that shaped national consciousness across South Asia.",
    themes: ["Khudi", "Islamic revival", "Awakening"],
    cover: "linear-gradient(135deg, #0D2340, #D49A3E22)",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Allama_Iqbal.jpg/440px-Allama_Iqbal.jpg",
    iconicLine: "لب پہ آتی ہے دعا بن کے تمنا میری",
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
    description:
      "Parveen Shakir's debut that changed Urdu poetry forever. The female experience — desire, longing, identity — written with a directness previous poets had avoided.",
    themes: ["Feminine voice", "Longing", "Urban life"],
    cover: "linear-gradient(135deg, #2E0A1A, #E8778A22)",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Parveen_Shakir.jpg/440px-Parveen_Shakir.jpg",
    iconicLine: "خوشبو کی طرح پھیل گئی ہے میری محبت",
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
    description:
      "Manto ripped the curtain from Partition violence and hypocrisy. Tried for obscenity six times, acquitted each time. Toba Tek Singh, Khol Do — wounds that heal by hurting.",
    themes: ["Partition", "Human condition", "Colonial violence"],
    cover: "linear-gradient(135deg, #2a0a0a, #5a1a1a)",
    coverImg: null,
    iconicLine: "اگر آپ میری کہانیاں نہیں سہہ سکتے تو زمانہ ناقابلِ برداشت ہے",
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
    description:
      "Shikwa is a Muslim's complaint to God — bold, almost sacrilegious, devastating in its honesty. Jawab-e-Shikwa is God's reply. Together, one of the great dialogues in world literature.",
    themes: ["Theology", "Divine dialogue", "Khudi"],
    cover: "linear-gradient(135deg, #0D2340, #A87A3022)",
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Allama_Iqbal.jpg/440px-Allama_Iqbal.jpg",
    iconicLine: "تجھے یاد ہو کہ نہ یاد ہو، مجھے یاد ہے",
  },
];

// ── Featured Shers (carousel) ───────────────────────────────────
export interface FeaturedSher {
  id: string;
  lines: string[];
  poet: string;
  poetEng: string;
  year: string;
}

export const FEATURED_SHERS: FeaturedSher[] = [
  {
    id: "ghalib-1",
    lines: ["ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے", "بہت نکلے میرے ارمان لیکن پھر بھی کم نکلے"],
    poet: "مرزا غالبؔ",
    poetEng: "Mirza Ghalib",
    year: "1797–1869",
  },
  {
    id: "faiz-1",
    lines: ["مجھ سے پہلی سی محبت مرے محبوب نہ مانگ", "میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات"],
    poet: "فیضؔ احمد فیض",
    poetEng: "Faiz Ahmed Faiz",
    year: "1911–1984",
  },
  {
    id: "iqbal-1",
    lines: ["خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے", "خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے"],
    poet: "علامہ اقبالؔ",
    poetEng: "Allama Iqbal",
    year: "1877–1938",
  },
  {
    id: "mir-1",
    lines: ["مجھ کو شاعر نہ کہو میر کہ صاحب میں نے", "درد و غم کتنے کیے جمع تو دیوان کیا"],
    poet: "میر تقی میرؔ",
    poetEng: "Mir Taqi Mir",
    year: "1723–1810",
  },
  {
    id: "jaun-1",
    lines: ["میں نے بہت کھویا ہے اپنے آپ کو پانے میں", "اور جو پایا وہ بھی کھو دیا دیوانے میں"],
    poet: "جونؔ ایلیا",
    poetEng: "Jaun Elia",
    year: "1931–2002",
  },
  {
    id: "faraz-1",
    lines: ["رنجش ہی سہی دل ہی دکھانے کے لیے آ", "آ پھر سے مجھے چھوڑ کے جانے کے لیے آ"],
    poet: "احمد فرازؔ",
    poetEng: "Ahmad Faraz",
    year: "1931–2008",
  },
  {
    id: "parveen-1",
    lines: ["خوشبو کی طرح پھیل گئی میری محبت", "میں نے دیا دل اور وہ بے وفا نکلا"],
    poet: "پروین شاکرؔ",
    poetEng: "Parveen Shakir",
    year: "1952–1994",
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
