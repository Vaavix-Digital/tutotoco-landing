import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { STEPS } from "@/lib/constants";

export default function HowItWorksSection() {
  return (
    <section id="how" className="wrap sec">
      <SectionHeading title="How Tutotoco works" subtitle="From first hello to a real conversation in four steps." />
      <Reveal className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {STEPS.map((s, i) => (
          <div key={s.title} className="card-p">
            <span className="disp grid h-11 w-11 place-items-center rounded-[14px] text-2xl" style={{ background: s.bg, color: s.fg }}>{i + 1}</span>
            <h3 className="disp mt-4 text-[22px]">{s.title}</h3>
            <p className="muted mt-2">{s.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
