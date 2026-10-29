import PhoneQuiz from "./PhoneQuiz";
import StoreButtons from "@/components/ui/StoreButtons";
import { BUBBLES, HERO_PILLS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section id="download" className="wrap flex flex-wrap items-center gap-10 pb-[72px] pt-10">
      <div className="max-w-[560px] flex-[1_1_440px]">
        <span className="pill text-[#5238D4]">Language learning for real life</span>
        <h1 className="disp h1 mt-5">
          Speak it <span className="text-[#6C4DF6]">for real.</span>
        </h1>
        <p className="muted mt-5 text-xl">
          Tutotoco teaches the phrases you will actually say, in the places you will actually say them. Ten languages, short lessons, and a friendly bear who never shames you.
        </p>
        <div className="mt-6"><StoreButtons /></div>
        <p className="muted mt-4 text-[15px]">Free to start. No lives. No guilt.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {HERO_PILLS.map((p) => <span key={p} className="pill">{p}</span>)}
        </div>
      </div>
      <div className="relative flex min-h-[460px] flex-[1_1_320px] items-center justify-center">
        {BUBBLES.map(([text, pos, delay]) => (
          <span key={text} aria-hidden="true" className={`bubble ${pos}`} style={{ animationDelay: delay }}>{text}</span>
        ))}
        <PhoneQuiz />
      </div>
    </section>
  );
}
