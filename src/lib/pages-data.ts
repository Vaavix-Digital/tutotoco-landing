import type { IconName } from "@/types";

/* About */
export const VALUES: [string, IconName, string, string][] = [
  ["Real life first", "pin", "#FFD9C8", "Every phrase earns its place by being useful in a real situation, not by filling a word list."],
  ["Kind by default", "shield", "#DDD6FB", "No lives, no shame, no public leaderboards by default. Missing a day is normal, not a failure."],
  ["Always explain", "question", "#FFE9A8", "If we ask you to say it that way, we tell you why, in words you already understand."],
  ["Built for everyone who moves between languages", "people", "#D6F7EA", "Learn from the language you actually speak, at a pace that fits your day."],
];

export const TEAM: [IconName, string, string, string][] = [
  ["chart", "#DDD6FB", "Founder & product", "Sets the vision and decides what Tutotoco refuses to do."],
  ["book", "#FFE9A8", "Language lead", "Checks every phrase, translation and Why? with native speakers."],
  ["star", "#D6F7EA", "Learning design", "Designs the three-minute lesson loop and the mission scoring."],
  ["download", "#CDEBFF", "Engineering", "Makes the app fast, quiet and usable without a signal."],
];

export const NEXT_LANGUAGES = ["Italian", "Turkish", "Russian", "Urdu", "Malayalam", "Tamil", "Indonesian"];

export const ABOUT_BUBBLES: [string, string, string][] = [
  ["Hola", "top-[10px] left-0", ".4s"],
  ["こんにちは", "bottom-[40px] right-0", "1.1s"],
  ["مرحبًا", "bottom-0 left-[24px]", "1.7s"],
];

/* Legal */
export type LegalSection = [string, string];

export const PRIVACY: LegalSection[] = [
  ["What we collect", "Account details you give us, your learning progress, and basic device information needed to run the app."],
  ["Voice recordings and how they are used", "Recordings are used to give you feedback on your speaking. Describe storage, retention and whether recordings are off by default."],
  ["How we use data", "To run lessons, save your progress, protect your streak, improve content and answer your questions."],
  ["Teens and children", "Teen accounts have no public friend search and recordings are off by default. Add age limits and parental consent rules."],
  ["Sharing", "List the service providers who help us run Tutotoco and when information is shared."],
  ["Retention", "State how long we keep progress, recordings and account details."],
  ["Your rights", "You can access, export and delete your data. Explain how to ask and how long it takes."],
  ["Security", "Describe how data is protected in transit and at rest."],
  ["Contact", "Use the Contact page to reach us about privacy questions."],
];

export const TERMS: LegalSection[] = [
  ["Using Tutotoco", "Tutotoco is a language-learning app for personal use. Describe permitted use and age requirements."],
  ["Accounts", "You can start as a guest and save your progress with an account. Keep your sign-in details safe."],
  ["Subscriptions and trials", "State the price, renewal terms and trial rules. Cancel in one step, or pause instead. Billing runs through the app store."],
  ["Acceptable use", "Be kind in roleplay and community features. Describe what is not allowed and how reports work."],
  ["Content and recordings", "Explain who owns content and how your recordings may be used to give feedback."],
  ["Certificates are not official qualifications", "Tutotoco certificates show progress inside the app. They are not official exam results."],
  ["Termination", "Describe when an account can be closed, by you or by us."],
  ["Changes", "Explain how we tell you about changes to these terms."],
  ["Governing law", "State the governing law and where disputes are handled."],
  ["Contact", "Use the Contact page to reach us about these terms."],
];

/* Help */
export const HELP_CATEGORIES: [string, IconName, string][] = [
  ["Getting started", "pin", "#FFD9C8"],
  ["Lessons and speaking", "mic", "#D6F7EA"],
  ["Missions", "briefcase", "#FFE9A8"],
  ["Streaks and rewards", "star", "#DDD6FB"],
  ["Subscriptions and billing", "chart", "#CDEBFF"],
  ["Offline", "download", "#FFC8D4"],
  ["Account and privacy", "shield", "#D6F7EA"],
];

export const HELP_FAQS: [string, string][] = [
  ["How do I start my first lesson?", "Open Tutotoco, choose the language you speak, the one you want to learn and your reason. You can start as a guest."],
  ["What if my microphone does not work?", "Turn on self-check mode in the lesson. It keeps things moving without the microphone."],
  ["How do Missions work?", "Pick a situation, talk to a friendly character and use the help ladder when you get stuck. You get four scores at the end."],
  ["Will I lose my streak if I miss a day?", "No. Tutotoco protects your streak when you miss a day. There are no lives and no lock-outs."],
  ["How do I cancel Plus?", "Cancellation takes one step in your store subscription settings. You can also pause instead."],
  ["How do I download lessons for offline use?", "Open a unit and tap Download. The Emergency Phrasebook can be downloaded the same way."],
  ["How do I delete my account and recordings?", "Go to Account and privacy in the app."],
  ["Can I learn more than one language?", "Yes. Add as many courses as you like. One streak covers them all."],
];

export const CONTACT_TOPICS = ["Bug", "Billing", "Content error", "Suggest a phrase", "Partnerships", "Other"];
