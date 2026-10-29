import type { IconName } from "@/types";

export interface FeatureItem { icon: IconName; title: string; text: string; points: string[] }
export interface FeatureGroup { id: string; title: string; tint: string; intro: string; items: FeatureItem[] }

const item = (icon: IconName, title: string, text: string, points: string[]): FeatureItem => ({ icon, title, text, points });

export const FEATURE_HIGHLIGHTS: [IconName, string, string, string][] = [
  ["mic", "#D6F7EA", "Speak sooner", "You rehearse the exact phrases you will need, before you need them."],
  ["shield", "#DDD6FB", "Momentum without guilt", "Streaks protect themselves, so a busy day does not end your progress."],
  ["question", "#FFE9A8", "You understand the why", "Every answer comes with a short, plain explanation and examples."],
  ["download", "#CDEBFF", "It works where you are", "Offline packs for flights, and an emergency phrasebook with no signal."],
];

export const LESSON_STAGES: [string, IconName, string][] = [
  ["Warm up", "book", "A quick review of words you already met, so nothing slips away."],
  ["Learn", "mic", "Listen, build a sentence and match pairs. One task per screen."],
  ["Say it", "speaker", "Say the phrase out loud with word-by-word feedback, or switch to self-check mode."],
  ["Review", "flame", "Tutotoco brings phrases back at the right moment and protects your streak."],
];

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "lessons", title: "How a lesson works", tint: "#DDD6FB",
    intro: "Short, focused and always finished. Every lesson ends with you saying something.",
    items: [
      item("book", "A three-minute lesson", "Each lesson is one short task at a time, built to be finished on a bus ride or in a queue.", ["One task per screen", "A progress bar you can trust", "Pause and resume mid-lesson"]),
      item("question", "Always know why", "Tap Why? on any answer for a short explanation with examples, in your own language.", ["Plain explanations, not grammar jargon", "Examples you can reuse", "No unexplained rules"]),
      item("pin", "Built around your reason", "Choose why you are learning and Tutotoco arranges the phrases you will actually meet.", ["Everyday talk", "Work & Interview", "Travel", "Life Abroad", "Exam tracks"]),
    ],
  },
  {
    id: "speaking", title: "Speaking and feedback", tint: "#D6F7EA",
    intro: "The part most apps skip: actually saying it, and being told how it landed.",
    items: [
      item("mic", "Say it out loud", "Word-by-word pronunciation feedback, so you know which sound needs another try.", ["Feedback on each word", "Clarity and politeness scored separately", "Try again without losing progress"]),
      item("shield", "Self-check mode", "When you cannot use a microphone, the lesson keeps moving without it.", ["On by default for teen accounts", "Same lesson, same progress", "Switch at any time"]),
      item("people", "The help ladder", "Stuck mid-conversation? Get help in steps, never a dead end.", ["A hint about what to say", "Reply options to choose from", "“Say it for me”, then repeat it"]),
      item("chart", "Four scores after every mission", "You always know what worked and what to fix next.", ["Understood", "Clear", "Polite", "Goal met"]),
    ],
  },
  {
    id: "missions", title: "Missions and exams", tint: "#FFE9A8",
    intro: "Rehearse the real thing, before it happens to you for real.",
    items: [
      item("pin", "Real-life missions", "Voice or chat roleplay in the places language gets tested.", ["Airport, hotel, taxi and restaurant", "Doctor, pharmacy and bank", "Renting a flat, SIM cards and government offices"]),
      item("briefcase", "Mock interviews", "Practise with an interviewer for your role, then get a readiness report.", ["Role-specific questions", "A readiness report", "Better answers to try next time"]),
      item("book", "Exam tracks", "Focused tracks where a standard exam exists, alongside everyday tracks.", ["IELTS, DELE, DELF, Goethe", "JLPT, TOPIK, HSK, CELPE-Bras", "Track progress with checkpoint tests"]),
    ],
  },
  {
    id: "script", title: "Script Lab", tint: "#CDEBFF",
    intro: "New alphabets are taught, not assumed. Tracing with stroke order, at your pace.",
    items: [
      item("book", "Learn the script by tracing", "Follow the stroke order until the letters feel like yours.", ["Hiragana and Katakana", "Hangul", "Devanagari", "Arabic letters", "Hanzi"]),
      item("speaker", "Romanization alongside", "Where the script is new, Tutotoco shows how it sounds while you learn it.", ["Romanization on every phrase", "Turn it off when you are ready", "Audio for every letter and phrase"]),
    ],
  },
  {
    id: "momentum", title: "Review and momentum", tint: "#FFD9C8",
    intro: "Spaced review, stickers and friendly circles keep you going without pressure.",
    items: [
      item("clock", "Spaced review", "Phrases come back at the moment you are about to forget them.", ["Short review sessions", "Nothing to configure", "Never blocks a new lesson"]),
      item("shield", "Streaks that protect themselves", "Miss a day and Tutotoco has your back. No lives, no lock-outs, no guilt.", ["Weeks counted, days protected", "One streak across all courses", "No punishment for a busy day"]),
      item("star", "Stickers and Toco", "Every lesson earns a sticker, and Toco dresses up as you level.", ["Sticker packs for food, travel and feelings", "Rewards for real milestones", "Nothing you can lose"]),
      item("people", "Friends and Circles", "Small friendly groups with a shared weekly goal.", ["Private by default", "No public leaderboards", "Share progress only if you want to"]),
    ],
  },
  {
    id: "progress", title: "Progress and proof", tint: "#D6F7EA",
    intro: "See what you can do, in plain words, not just a percentage.",
    items: [
      item("chart", "Skill map from A1 to C1", "What you can do, in can-do statements you can actually read.", ["Clear levels, no false precision", "See what is next", "Updated as you finish units"]),
      item("star", "Checkpoint tests and certificates", "Take a checkpoint test and earn a shareable certificate.", ["One test per level", "Shareable result", "Inside Tutotoco only, not an official qualification"]),
    ],
  },
  {
    id: "offline", title: "Ready anywhere", tint: "#FFE9A8",
    intro: "Flights, rural signal and low data are all normal conditions, not edge cases.",
    items: [
      item("download", "Offline packs", "Download units and stories before you travel.", ["Units and stories offline", "Progress syncs when you reconnect", "Small downloads"]),
      item("alert", "Emergency Phrasebook", "Big “show this to someone” cards with full-volume audio.", ["“I need a doctor” with no signal", "Large text for showing a person", "Works offline"]),
      item("camera", "Snap and learn", "Point your camera at a sign, menu or label and turn the words into a mini lesson.", ["Signs and menus", "Instant mini lesson", "Saved to your review queue"]),
    ],
  },
];

export const TRUST: [IconName, string, string][] = [
  ["shield", "No ads, ever", "Learning is not interrupted by advertising, and we do not sell your attention."],
  ["people", "Teen safety by default", "Teen accounts have no public friend search and recordings are off by default."],
  ["mic", "Accessible by design", "Large touch targets, high-contrast text, reduced-motion support, and self-check mode when you cannot speak out loud."],
  ["book", "Your data, explained", "Recordings are used to give you feedback."],
];
