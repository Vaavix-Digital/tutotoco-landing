export type IconName =
  | "pin" | "mic" | "book" | "shield" | "question" | "download" | "star" | "alert"
  | "camera" | "briefcase" | "people" | "chart" | "speaker" | "clock" | "plane" | "sun"
  | "flame" | "mail" | "search" | "menu" | "x" | "left" | "right" | "chev";

export interface Language {
  slug: string;
  code: string;
  glyph: string;
  name: string;
  hello: string;
  rom: string;
  rtl?: boolean;
}
export interface QuizSlide { word: string; answers: string[]; correct: number; pct: number }
export interface Feature { title: string; tint: string; icon: IconName; text: string }
export interface Step { title: string; text: string; bg: string; fg: string }
export interface Reason { icon: IconName; title: string; text: string }
export interface Plan { name: string; price: string; unit: string; featured?: boolean; items: string[]; note?: string }
export interface DayMoment { icon: IconName; bg: string; time: string; title: string; text: string; art: "sun" | "cup" | "moon" | "plane" }

export interface LanguageDetail {
  /** [phrase, romanization, spoken text] */
  phrases: [string, string, string][];
  script: string | null;
  /** [line, spokenByLearner] */
  chat: [string, boolean][];
  dialect: string;
  exam: string;
  scriptQ: string;
  scriptA: string;
}
