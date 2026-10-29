import type { DayMoment, Feature, Language, Plan, QuizSlide, Reason, Step } from "@/types";

export const NAV_LINKS: [string, string][] = [
  ["How it works", "how"], ["Languages", "languages"], ["Features", "features"],
  ["Missions", "missions"], ["Pricing", "pricing"], ["FAQ", "faq"],
];

export const FOOTER_LINKS: [string, string][] = [
  ["Features", "/features"], ["About", "/about"], ["Privacy", "/privacy"], ["Terms", "/terms"],
  ["Help centre", "/help"], ["Contact", "/contact"], ["Download", "/download"],
];

export const HERO_PILLS = ["10 languages", "3-minute lessons", "Voice roleplay", "Works offline"];

export const BUBBLES: [string, string, string][] = [
  ["Hola", "top-[6px] left-0", ".6s"],
  ["你好", "top-[70px] right-0", "1.2s"],
  ["مرحبًا", "bottom-[120px] -left-[6px]", "1.8s"],
  ["नमस्ते", "bottom-[30px] right-1", ".9s"],
  ["こんにちは", "bottom-0 left-[30px]", "0s"],
];

export const QUIZ: QuizSlide[] = [
  { word: "Hello.", answers: ["Hola.", "Me llamo Sam.", "¿Cómo te llamas?"], correct: 0, pct: 38 },
  { word: "Thank you.", answers: ["Adiós.", "Gracias.", "Por favor."], correct: 1, pct: 56 },
  { word: "Where is the station?", answers: ["¿Dónde está la estación?", "Tengo hambre.", "Buenas noches."], correct: 0, pct: 74 },
];

export const STEPS: Step[] = [
  { title: "Choose your path", text: "Pick the language you speak, the one you want to learn, and why: travel, work, an interview, moving abroad or fun.", bg: "#6C4DF6", fg: "#fff" },
  { title: "Find your level", text: "Start from zero, say what you know, or take a 3-minute test. Results never lock you in.", bg: "#20C08B", fg: "#2A1F4D" },
  { title: "Learn in 3 minutes", text: "Listen, build sentences, match pairs and speak. Every answer comes with a short Why?", bg: "#FFC83D", fg: "#2A1F4D" },
  { title: "Practise for real", text: "Missions, spaced review and the Script Lab turn phrases into things you can actually say.", bg: "#F05A78", fg: "#fff" },
];

export const LANGUAGES: Language[] = [
  { slug: "english", code: "en-US", glyph: "A", name: "English", hello: "Hello.", rom: "" },
  { slug: "spanish", code: "es-ES", glyph: "Ñ", name: "Spanish", hello: "Hola.", rom: "" },
  { slug: "french", code: "fr-FR", glyph: "É", name: "French", hello: "Bonjour.", rom: "" },
  { slug: "german", code: "de-DE", glyph: "Ä", name: "German", hello: "Hallo.", rom: "" },
  { slug: "arabic", code: "ar-SA", glyph: "ع", name: "Arabic", hello: "مرحبًا", rom: "marhaban", rtl: true },
  { slug: "hindi", code: "hi-IN", glyph: "अ", name: "Hindi", hello: "नमस्ते", rom: "namaste" },
  { slug: "japanese", code: "ja-JP", glyph: "あ", name: "Japanese", hello: "こんにちは", rom: "konnichiwa" },
  { slug: "korean", code: "ko-KR", glyph: "한", name: "Korean", hello: "안녕하세요", rom: "annyeonghaseyo" },
  { slug: "mandarin", code: "zh-CN", glyph: "你", name: "Mandarin", hello: "你好", rom: "nǐ hǎo" },
  { slug: "portuguese", code: "pt-BR", glyph: "Ã", name: "Portuguese (BR)", hello: "Olá.", rom: "" },
];

export const LEARN_UNITS = ["Everyday talk", "Work & Interview", "Travel", "Life Abroad", "Exams"];

export const FEATURES: Feature[] = [
  { title: "Real-life Missions", tint: "#FFD9C8", icon: "pin", text: "Rehearse the café, the clinic, the bank and the job interview in a voice or chat roleplay, then get feedback on clarity and politeness." },
  { title: "Say it out loud", tint: "#D6F7EA", icon: "mic", text: "Word-by-word pronunciation feedback, plus a self-check mode for when you cannot talk." },
  { title: "Script Lab", tint: "#FFE9A8", icon: "book", text: "Hiragana, Hangul, Devanagari, Arabic letters and Hanzi, learned by tracing with stroke order." },
  { title: "No-pressure streaks", tint: "#DDD6FB", icon: "shield", text: "Tutotoco protects your streak when you miss a day. No lives, no lock-outs, no guilt." },
  { title: "Always know why", tint: "#CDEBFF", icon: "question", text: "Tap Why? on any answer for a short explanation and examples in your own language." },
  { title: "Works offline", tint: "#FFC8D4", icon: "download", text: "Download units, stories and the Emergency Phrasebook for flights and low data." },
  { title: "Stickers and Toco", tint: "#FFE9A8", icon: "star", text: "Every lesson earns a sticker. Collect packs for food, travel and feelings, and dress Toco up as you level." },
  { title: "Emergency Phrasebook", tint: "#FFC8D4", icon: "alert", text: "Large “show this to someone” cards with full-volume audio. “I need a doctor” works with no signal." },
  { title: "Snap and learn", tint: "#CDEBFF", icon: "camera", text: "Point your camera at a sign, menu or label and turn the words into a mini lesson." },
  { title: "Mock interviews", tint: "#D6F7EA", icon: "briefcase", text: "Practise with an interviewer for your role, then get a readiness report with better answers to try." },
  { title: "Friends and Circles", tint: "#FFD9C8", icon: "people", text: "Small friendly groups with a shared weekly goal. No public leaderboards by default." },
  { title: "Skill map and certificates", tint: "#DDD6FB", icon: "chart", text: "See what you can do in plain can-do statements from A1 to C1, and earn a shareable certificate after a checkpoint test." },
];

export const MISSION_POINTS = [
  "Airport, hotel, taxi and restaurant",
  "Doctor, pharmacy and bank",
  "Mock job interviews with a readiness report",
  "Renting a flat, SIM cards and government offices",
  "Four scores after each mission: understood, clear, polite, goal met",
];

export const DAY_MOMENTS: DayMoment[] = [
  { icon: "sun", bg: "#FFE9A8", time: "Morning", title: "A 3-minute lesson on the bus", text: "Listen, build a sentence, match pairs and say it. Done before your stop.", art: "sun" },
  { icon: "mic", bg: "#D6F7EA", time: "Lunch break", title: "Order a coffee in a Mission", text: "Talk to a friendly character. Stuck? Use the help ladder: a hint, reply options, or “say it for me”.", art: "cup" },
  { icon: "book", bg: "#CDEBFF", time: "Evening", title: "Trace a new alphabet", text: "Follow the stroke order in the Script Lab until the letters feel like yours.", art: "moon" },
  { icon: "plane", bg: "#FFC8D4", time: "Before a trip", title: "Download your offline pack", text: "Units, stories and the Emergency Phrasebook, ready for flights and low data.", art: "plane" },
];

export const COMPLAINTS: [string, string][] = [
  ["Drills with no real conversation", "Missions with voice roleplay"],
  ["Lost streak, lost motivation", "Streaks that protect themselves"],
  ["Rules without reasons", "A Why? on every answer"],
  ["New alphabets left to you", "Tracing and stroke order built in"],
  ["Useless without a signal", "Offline packs and an Emergency Phrasebook"],
  ["A paywall before you have learned anything", "Free core lessons, Plus after you see the value"],
];

export const REASONS: Reason[] = [
  { icon: "people", title: "Starting a new language", text: "Brand new to a language, or coming back to one after years away. Begin with the sounds, the letters and the first phrases, at whatever pace your week allows." },
  { icon: "plane", title: "Travellers", text: "Airports, hotels, taxis and menus, practised before you land." },
  { icon: "briefcase", title: "Job seekers", text: "Introduce yourself, answer tough questions and sound professional." },
  { icon: "pin", title: "Newcomers abroad", text: "Banks, landlords, clinics and school gates, in the language people use there." },
  { icon: "book", title: "Exam takers", text: "Focused tracks for IELTS, DELE, DELF, Goethe, JLPT, TOPIK, HSK and CELPE-Bras." },
];

export const PLANS: Plan[] = [
  { name: "Free", price: "0", unit: "always free", items: ["All lessons and review", "A taste of every mission", "Streaks, stickers and badges"] },
  { name: "Tutotoco Plus", price: "3.99", unit: "per month", featured: true, items: ["Unlimited voice roleplay", "Mock interviews and deep reports", "Offline packs and certificates"], note: "Billed monthly. Cancel in one step, or pause instead if you prefer." },
];

export const FAQS: [string, string][] = [
  ["Is Tutotoco free?", "Lessons, review and a taste of every mission are free and never blocked. Tutotoco Plus adds the extras listed above for 3.99 per month."],
  ["Do I have to speak out loud?", "No. If you cannot use the microphone, a self-check mode keeps the lesson moving."],
  ["Which languages can I learn from?", "Meanings and explanations are available in English, Arabic, Hindi, Malayalam, Spanish, Urdu, French, Portuguese and Indonesian."],
  ["Does it work offline?", "Yes. Download units, stories and the Emergency Phrasebook before you travel."],
  ["Can I learn more than one language?", "Yes. Add as many courses as you like. One streak covers them all."],
  ["Do I need an account to start?", "No. Start as a guest, then save your progress after your first lesson."],
  ["Is there a track for exams or interviews?", "Yes. Work & Interview, Travel and Life Abroad tracks sit beside Everyday talk, with exam tracks where a standard exam exists."],
  ["What happens to my voice recordings?", "Recordings are used to give you feedback."],
  ["Is Tutotoco safe for teens?", "Teen accounts have no public friend search and recordings are off by default."],
];
