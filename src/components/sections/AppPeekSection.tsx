import Carousel from "@/components/ui/Carousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { EmergencyScreen, MissionScreen, SkillScreen, StreakScreen, TraceScreen } from "./AppScreens";

const SLIDES = [
  { title: "Say it, don't just tap it", text: "Voice missions with a friendly character and four scores after every chat.", bg: "#D6F7EA", screen: <MissionScreen /> },
  { title: "Learn alphabets by tracing", text: "Stroke order shown step by step for Hiragana, Hangul, Devanagari, Arabic and Hanzi.", bg: "#FFE9A8", screen: <TraceScreen /> },
  { title: "Streaks that protect themselves", text: "Miss a day and Tutotoco has your back. No lives, no lock-outs, no guilt.", bg: "#DDD6FB", screen: <StreakScreen /> },
  { title: "See what you can do", text: "Plain can-do statements from A1 to C1, and a certificate after a checkpoint test.", bg: "#CDEBFF", screen: <SkillScreen /> },
  { title: "Help, with or without signal", text: "The Emergency Phrasebook shows big cards with full-volume audio.", bg: "#FFC8D4", screen: <EmergencyScreen /> },
];

export default function AppPeekSection() {
  const slides = SLIDES.map((s) => (
    <div key={s.title} className="flex flex-wrap items-center justify-center gap-8 px-6 py-10 md:px-14" style={{ background: s.bg }}>
      <div className="flex min-h-[250px] flex-[1_1_240px] items-center justify-center">{s.screen}</div>
      <div className="flex-[1_1_280px]">
        <h3 className="disp text-[32px]">{s.title}</h3>
        <p className="mt-3 text-lg text-[#2A1F4D]">{s.text}</p>
      </div>
    </div>
  ));
  return (
    <section className="wrap sec">
      <SectionHeading title="A peek inside the app" subtitle="Five screens, one friendly bear." subClassName="mb-9" />
      <Carousel slides={slides} label="App screens" />
    </section>
  );
}
