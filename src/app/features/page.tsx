import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import CTASection from "@/components/sections/CTASection";
import { FEATURE_GROUPS, FEATURE_HIGHLIGHTS, LESSON_STAGES, TRUST } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features — Tutotoco",
  description: "How Tutotoco works, what you get out of it, and what we deliberately left out.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="wrap pb-14 pt-6 text-center">
        <span className="pill text-[#5238D4]">Features</span>
        <h1 className="disp h1 mx-auto mt-4 max-w-[820px]">Everything Tutotoco does, in detail.</h1>
        <p className="muted mx-auto mt-5 max-w-[660px] text-xl">
          How the app works, what you get out of it, and what we deliberately left out. Ten languages, short lessons, and speaking practice from day one.
        </p>
      </section>

      <section className="wrap pb-16">
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))]">
          {FEATURE_HIGHLIGHTS.map(([icon, bg, title, text]) => (
            <div key={title} className="card-p">
              <span className="tile" style={{ background: bg }}><Icon name={icon} /></span>
              <h3 className="disp mt-4 text-[22px]">{title}</h3>
              <p className="muted mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="wrap">
          <h2 className="disp h2 text-center">How a lesson works</h2>
          <p className="muted mb-9 mt-3 text-center text-lg">Four short stages, every time you open the app.</p>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))]">
            {LESSON_STAGES.map(([title, icon, text], i) => (
              <div key={title} className="card-p">
                <div className="flex items-center gap-3">
                  <span className="disp grid h-10 w-10 place-items-center rounded-[12px] bg-[#6C4DF6] text-xl text-white">{i + 1}</span>
                  <Icon name={icon} size={24} />
                </div>
                <h3 className="disp mt-3 text-[22px]">{title}</h3>
                <p className="muted mt-1">{text}</p>
              </div>
            ))}
          </div>
          <p className="muted mt-6 text-center text-lg">Most lessons take about three minutes, and you can stop at any point.</p>
        </div>
      </section>

      <section className="wrap sec">
        <h2 className="disp h2 mb-10 text-center">The full breakdown</h2>
        <div className="flex flex-col gap-14">
          {FEATURE_GROUPS.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-2 w-10 rounded-full" style={{ background: g.tint }} />
                <h2 className="disp text-[32px]">{g.title}</h2>
              </div>
              <p className="muted mt-2 text-lg">{g.intro}</p>
              <div className="mt-6 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
                {g.items.map((it) => (
                  <div key={it.title} className="card-p">
                    <span className="tile" style={{ background: g.tint }}><Icon name={it.icon} /></span>
                    <h3 className="disp mt-4 text-2xl">{it.title}</h3>
                    <p className="muted mt-2">{it.text}</p>
                    <ul className="mt-3 flex flex-col gap-1 text-[15px] font-bold">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-2"><span className="text-[#20C08B]">✓</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF6D6] py-16">
        <div className="wrap">
          <h2 className="disp h2 text-center">Safety, access and trust</h2>
          <p className="muted mb-9 mt-3 text-center text-lg">Learning tools should be calm about the things that matter.</p>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
            {TRUST.map(([icon, title, text]) => (
              <div key={title} className="card-p">
                <span className="tile bg-[#DDD6FB]"><Icon name={icon} /></span>
                <h3 className="disp mt-4 text-[22px]">{title}</h3>
                <p className="muted mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
