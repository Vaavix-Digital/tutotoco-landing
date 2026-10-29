import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";
import CTASection from "@/components/sections/CTASection";
import { ABOUT_BUBBLES, NEXT_LANGUAGES, TEAM, VALUES } from "@/lib/pages-data";

export const metadata: Metadata = {
  title: "About — Tutotoco",
  description: "Language learning that respects your time and your nerve.",
};

export default function AboutPage() {
  return (
    <>
      <section className="wrap flex flex-wrap items-center gap-10 pb-16 pt-6">
        <div className="max-w-[560px] flex-[1_1_380px]">
          <span className="pill text-[#5238D4]">About Tutotoco</span>
          <h1 className="disp h1 mt-4">Language learning that respects your time and your nerve.</h1>
          <p className="muted mt-5 text-xl">
            Most apps teach you to tap the right answer. Tutotoco teaches you to say the right thing, in the room where it matters: the counter, the clinic, the interview.
          </p>
        </div>
        <div className="relative flex min-h-[300px] flex-[1_1_280px] items-center justify-center">
          {ABOUT_BUBBLES.map(([text, pos, delay]) => (
            <span key={text} aria-hidden="true" className={`bubble ${pos}`} style={{ animationDelay: delay }}>{text}</span>
          ))}
          <Mascot size={220} happy />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="wrap grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
          <div>
            <h2 className="disp h2">Why Tutotoco exists</h2>
            <p className="muted mt-3 text-lg">People finish courses and still freeze when someone speaks to them. The words were learned, but never used.</p>
          </div>
          <div className="muted flex flex-col gap-4 text-lg">
            <p>So Tutotoco is built the other way round. Every lesson ends in speech, every mission rehearses a real situation, and every answer comes with a reason.</p>
            <p>We think learning a language should fit into a commute, not take over your life. Three minutes done properly beats an hour abandoned.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="disp h2 text-center">What we believe</h2>
        <p className="muted mb-9 mt-3 text-center text-lg">Four rules we hold ourselves to.</p>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
          {VALUES.map(([title, icon, bg, text]) => (
            <div key={title} className="card-p">
              <span className="tile" style={{ background: bg }}><Icon name={icon} /></span>
              <h3 className="disp mt-4 text-[22px]">{title}</h3>
              <p className="muted mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF6D6] py-16">
        <div className="wrap flex flex-wrap items-center justify-center gap-10">
          <div className="flex flex-[1_1_240px] justify-center"><Mascot size={150} headset className="wobble" /></div>
          <div className="max-w-[520px] flex-[1_1_320px]">
            <h2 className="disp text-[32px]">Meet Toco, the bear in the corner</h2>
            <p className="muted mt-3 text-lg">Toco is the mascot you meet in your first lesson. A small bear who waits patiently, never interrupts and never makes you feel silly for getting it wrong.</p>
            <p className="muted mt-3 text-lg">When you miss a day, Toco does not scold you. Toco waits.</p>
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="disp h2 text-center">The people building Tutotoco</h2>
        <p className="muted mb-9 mt-3 text-center text-lg">A small team, plus native speakers for every language we teach.</p>
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))]">
          {TEAM.map(([icon, bg, role, text]) => (
            <div key={role} className="card-p">
              <span className="tile" style={{ background: bg }}><Icon name={icon} /></span>
              <h3 className="disp mt-4 text-xl">{role}</h3>
              <p className="muted mt-2">{text}</p>
            </div>
          ))}
        </div>
        <p className="muted mt-5 text-center">Plus native-speaker reviewers across all ten languages.</p>
        <p className="muted mt-8 text-center text-lg">
          Want to work on Tutotoco or review phrases in your language?{" "}
          <Link href="/contact" className="font-extrabold text-[#5238D4] underline">Get in touch</Link>.
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="wrap">
          <h2 className="disp h2 text-center">Where we are going next</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {NEXT_LANGUAGES.map((l) => <span key={l} className="pill !px-5 !py-3 text-base">{l}</span>)}
          </div>
          <p className="muted mt-6 text-center">More exam tracks, more mission settings and more stories.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
