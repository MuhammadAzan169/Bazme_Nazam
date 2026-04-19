import { create } from "zustand";
import { persist } from "zustand/middleware";

import dardImg from "@/assets/mood-dard.jpg";
import ishqImg from "@/assets/mood-ishq.jpg";
import umeedImg from "@/assets/mood-umeed.jpg";
import tanhaiImg from "@/assets/mood-tanhai.jpg";
import gussaImg from "@/assets/mood-gussa.jpg";
import sukoonImg from "@/assets/mood-sukoon.jpg";

export type MoodKey = "dard" | "ishq" | "umeed" | "tanhai" | "gussa" | "sukoon";

export interface MoodInfo {
  label: string;        // Urdu
  labelEn: string;      // English transliteration
  meaning: string;      // English meaning
  description: string;  // Short evocative line
  // HSL token values (no `hsl()` wrapper) — drive CSS vars dynamically.
  primaryHsl: string;   // gold/accent replacement
  accentHsl: string;    // secondary accent
  bgVoidHsl: string;    // deepest background
  bgPrimaryHsl: string;
  bgSecondaryHsl: string;
  borderHsl: string;
  textGoldHsl: string;
  // Visual extras
  hexPrimary: string;
  aura: string;         // radial-gradient for blob
  image: string;        // imported image
  emoji: string;
}

export const MOODS: Record<MoodKey, MoodInfo> = {
  ishq: {
    label: "عشق",
    labelEn: "Ishq",
    meaning: "Love",
    description: "Rose and flame — the heart in bloom.",
    primaryHsl: "348 71% 65%",
    accentHsl: "38 71% 63%",
    bgVoidHsl: "340 35% 5%",
    bgPrimaryHsl: "342 32% 7%",
    bgSecondaryHsl: "344 30% 11%",
    borderHsl: "348 50% 30%",
    textGoldHsl: "348 70% 78%",
    hexPrimary: "#E8778A",
    aura: "radial-gradient(circle, rgba(232,119,138,0.55), rgba(201,102,122,0.25))",
    image: ishqImg,
    emoji: "❤️‍🔥",
  },
  dard: {
    label: "درد",
    labelEn: "Dard",
    meaning: "Sorrow",
    description: "A wound that learns to sing.",
    primaryHsl: "0 65% 55%",
    accentHsl: "348 47% 50%",
    bgVoidHsl: "352 40% 4%",
    bgPrimaryHsl: "354 35% 6%",
    bgSecondaryHsl: "356 32% 10%",
    borderHsl: "0 50% 28%",
    textGoldHsl: "10 60% 75%",
    hexPrimary: "#C53030",
    aura: "radial-gradient(circle, rgba(197,48,48,0.55), rgba(139,26,26,0.3))",
    image: dardImg,
    emoji: "🥀",
  },
  umeed: {
    label: "امید",
    labelEn: "Umeed",
    meaning: "Hope",
    description: "Dawn breaking through the long night.",
    primaryHsl: "42 88% 60%",
    accentHsl: "30 80% 55%",
    bgVoidHsl: "30 25% 5%",
    bgPrimaryHsl: "32 22% 7%",
    bgSecondaryHsl: "34 22% 11%",
    borderHsl: "40 60% 28%",
    textGoldHsl: "44 80% 72%",
    hexPrimary: "#F5C842",
    aura: "radial-gradient(circle, rgba(245,200,66,0.55), rgba(212,154,62,0.25))",
    image: umeedImg,
    emoji: "🌅",
  },
  tanhai: {
    label: "تنہائی",
    labelEn: "Tanhai",
    meaning: "Solitude",
    description: "A moonlit courtyard, your own footsteps.",
    primaryHsl: "230 70% 68%",
    accentHsl: "248 60% 60%",
    bgVoidHsl: "240 45% 4%",
    bgPrimaryHsl: "238 40% 6%",
    bgSecondaryHsl: "236 38% 10%",
    borderHsl: "232 50% 30%",
    textGoldHsl: "228 65% 78%",
    hexPrimary: "#7B8FE8",
    aura: "radial-gradient(circle, rgba(123,143,232,0.5), rgba(26,26,94,0.3))",
    image: tanhaiImg,
    emoji: "🌙",
  },
  gussa: {
    label: "غصہ",
    labelEn: "Gussa",
    meaning: "Anger",
    description: "Embers that refuse to die.",
    primaryHsl: "20 90% 55%",
    accentHsl: "12 75% 50%",
    bgVoidHsl: "16 40% 4%",
    bgPrimaryHsl: "18 35% 6%",
    bgSecondaryHsl: "20 32% 10%",
    borderHsl: "18 60% 28%",
    textGoldHsl: "24 85% 70%",
    hexPrimary: "#E85820",
    aura: "radial-gradient(circle, rgba(232,88,32,0.55), rgba(123,45,0,0.3))",
    image: gussaImg,
    emoji: "🔥",
  },
  sukoon: {
    label: "سکون",
    labelEn: "Sukoon",
    meaning: "Peace",
    description: "Still water. Lotus. Breath.",
    primaryHsl: "165 55% 55%",
    accentHsl: "180 45% 50%",
    bgVoidHsl: "170 35% 4%",
    bgPrimaryHsl: "168 30% 6%",
    bgSecondaryHsl: "166 28% 10%",
    borderHsl: "165 45% 26%",
    textGoldHsl: "162 55% 72%",
    hexPrimary: "#4DB89A",
    aura: "radial-gradient(circle, rgba(77,184,154,0.5), rgba(10,61,46,0.3))",
    image: sukoonImg,
    emoji: "🪷",
  },
};

export interface BookmarkSher {
  id: string;
  lines: string[];
  poet: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  ts: number;
}

interface StoreState {
  mood: MoodKey;
  setMood: (m: MoodKey) => void;

  bookmarks: BookmarkSher[];
  addBookmark: (s: BookmarkSher) => void;
  removeBookmark: (id: string) => void;

  chatHistory: ChatMessage[];
  addMessage: (m: ChatMessage) => void;
  clearChat: () => void;

  widgetOpen: boolean;
  setWidgetOpen: (v: boolean) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      mood: "ishq",
      setMood: (mood) => set({ mood }),

      bookmarks: [],
      addBookmark: (sher) =>
        set((s) =>
          s.bookmarks.some((b) => b.id === sher.id)
            ? s
            : { bookmarks: [sher, ...s.bookmarks] },
        ),
      removeBookmark: (id) =>
        set((s) => ({ bookmarks: s.bookmarks.filter((b) => b.id !== id) })),

      chatHistory: [],
      addMessage: (msg) => set((s) => ({ chatHistory: [...s.chatHistory, msg] })),
      clearChat: () => set({ chatHistory: [] }),

      widgetOpen: false,
      setWidgetOpen: (v) => set({ widgetOpen: v }),
    }),
    {
      name: "bazm-store",
      partialize: (s) => ({ bookmarks: s.bookmarks, mood: s.mood }),
    },
  ),
);
