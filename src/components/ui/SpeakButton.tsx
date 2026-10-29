"use client";

import Icon from "./Icon";

function speak(text: string, lang: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

interface Props { text: string; lang: string; label?: string; variant?: "icon" | "listen" }

export default function SpeakButton({ text, lang, label, variant = "icon" }: Props) {
  if (variant === "listen") {
    return (
      <button onClick={() => speak(text, lang)} aria-label={`Hear ${text}`} className="btn btn-violet mx-auto mt-4 !px-4">
        <Icon name="speaker" color="#fff" />Listen
      </button>
    );
  }
  return (
    <button
      onClick={() => speak(text, lang)}
      aria-label={`Hear ${label ?? text}`}
      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#6C4DF6] shadow-[0_4px_0_#5238D4]"
    >
      <Icon name="speaker" color="#fff" />
    </button>
  );
}
