import Link from "next/link";
import { LANGUAGES } from "@/lib/constants";

export default function LanguagesSection() {
  const loop = [...LANGUAGES, ...LANGUAGES];
  return (
    <section id="languages" className="bg-white py-16">
      <div className="wrap text-center">
        <h2 className="disp h2">Ten languages at launch</h2>
        <p className="muted mt-3 text-lg">Learn from your own language. Meanings and explanations come in the one you speak.</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {LANGUAGES.map((l) => (
            <li key={l.slug}>
              <Link href={`/learn/${l.slug}`} className="card-p flex items-center gap-[10px] !rounded-full !px-5 !py-3">
                <span className="disp text-2xl text-[#6C4DF6]">{l.glyph}</span>
                <b>{l.name}</b>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="disp mb-5 mt-12 text-left text-[28px]">Your first lesson: say hello</h3>
        <div className="grid gap-[14px] text-left [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]">
          {LANGUAGES.map((l) => (
            <Link key={l.slug} href={`/learn/${l.slug}`} className="card-p !p-4">
              <div className="muted text-[13px] font-extrabold">{l.name}</div>
              <div className="disp text-[26px]" dir={l.rtl ? "rtl" : undefined} style={l.rtl ? { textAlign: "left" } : undefined}>{l.hello}</div>
              {l.rom && <div className="muted text-sm">{l.rom}</div>}
            </Link>
          ))}
        </div>
        <p className="muted mt-6 text-left">Coming next: Italian, Turkish, Russian, Urdu, Malayalam, Tamil, Indonesian.</p>
      </div>
      <div className="mt-10 overflow-hidden" aria-hidden="true">
        <div className="marquee">
          {loop.map((l, i) => (
            <span key={i} className="pill !px-6 !py-3 text-xl">
              <span className="disp mr-2 text-[#6C4DF6]">{l.hello}</span>
              <span className="muted text-sm">{l.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
