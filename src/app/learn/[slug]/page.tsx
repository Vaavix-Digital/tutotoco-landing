import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Accordion from "@/components/ui/Accordion";
import ChatCard from "@/components/ui/ChatCard";
import Mascot from "@/components/ui/Mascot";
import ScrollLink from "@/components/ui/ScrollLink";
import SpeakButton from "@/components/ui/SpeakButton";
import StoreButtons from "@/components/ui/StoreButtons";
import { LANGUAGES, LEARN_UNITS } from "@/lib/constants";
import { LANGUAGE_DETAILS } from "@/lib/languages";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return LANGUAGES.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const lang = LANGUAGES.find((l) => l.slug === slug);
  if (!lang) return {};
  return {
    title: `Learn ${lang.name} for real — Tutotoco`,
    description: `Learn ${lang.name} with real-life missions, voice practice and no pressure.`,
  };
}

export default async function LearnPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lang = LANGUAGES.find((l) => l.slug === slug);
  if (!lang) notFound();
  const d = LANGUAGE_DETAILS[slug];
  const dir = lang.rtl ? "rtl" : undefined;
  const faqs: [string, string][] = [
    ["Which dialect does Tutotoco teach?", d.dialect],
    [d.scriptQ, d.scriptA],
    ["Is there an exam track?", d.exam],
  ];

  return (
    <>
      <section className="wrap flex flex-wrap items-center gap-10 pb-16 pt-6">
        <div className="max-w-[560px] flex-[1_1_380px]">
          <span className="pill text-[#5238D4]">{lang.name}</span>
          <h1 className="disp h1 mt-4">
            Learn {lang.name} <span className="text-[#6C4DF6]">for real</span>
          </h1>
          <div className="mt-6"><StoreButtons /></div>
        </div>
        <div className="flex flex-[1_1_300px] justify-center">
          <div className="card-p w-full max-w-[340px] text-center">
            <div className="muted text-[13px] font-extrabold">Your first lesson: say hello</div>
            <div className="disp mt-1 text-5xl" dir={dir}>{lang.hello}</div>
            {lang.rom && <div className="muted">{lang.rom}</div>}
            <SpeakButton variant="listen" text={lang.hello} lang={lang.code} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="wrap">
          <h2 className="disp h2 text-center">What you will say after week 1</h2>
          <div className="mt-8 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
            {d.phrases.map(([text, rom, spoken]) => (
              <div key={text} className="card-p flex items-center justify-between gap-3">
                <div>
                  <div className="disp text-2xl" dir={dir}>{text}</div>
                  {rom && <div className="muted text-sm">{rom}</div>}
                </div>
                <SpeakButton text={spoken} lang={lang.code} label={text} />
              </div>
            ))}
          </div>
          {d.script && (
            <div className="card-p mx-auto mt-6 max-w-3xl !bg-[#FFF6D6]">
              <b className="disp text-xl">About the script</b>
              <p className="muted mt-1">{d.script}</p>
            </div>
          )}
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="disp h2 text-center">Your units</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {LEARN_UNITS.map((u) => <span key={u} className="pill !px-5 !py-3 text-base">{u}</span>)}
        </div>
      </section>

      <section className="bg-[#6C4DF6] py-16">
        <div className="wrap flex flex-wrap items-center justify-center gap-10 text-white">
          <div className="max-w-[420px] flex-[1_1_280px]">
            <h2 className="disp h2">Try a sample mission</h2>
            <p className="mt-3 text-lg text-[#EFEBFF]">Order a coffee in {lang.name}, with help whenever you need it.</p>
          </div>
          <ChatCard chips={["Order a coffee", "Ask the price"]} lines={d.chat} rtl={lang.rtl} />
        </div>
      </section>

      <section className="sec mx-auto max-w-[820px] px-6">
        <h2 className="disp h2 mb-8 text-center">Questions</h2>
        <Accordion items={faqs} />
      </section>

      <section className="bg-[#2A1F4D] py-16 text-center text-white">
        <div className="wrap flex flex-col items-center">
          <Mascot size={88} happy />
          <h2 className="disp h2 mt-3">Say hello in {lang.name} today.</h2>
          <p className="mb-6 mt-2 text-lg text-[#DDD6FB]">Your first lesson takes about three minutes.</p>
          <StoreButtons dark />
          <ScrollLink href="#languages" className="mt-6 font-extrabold text-[#DDD6FB] underline">See all ten languages</ScrollLink>
        </div>
      </section>
    </>
  );
}
