import { MISSION_POINTS } from "@/lib/constants";

const LINES: [string, boolean][] = [
  ["Hola, ¿qué te pongo?", false],
  ["Un café con leche, por favor.", true],
  ["Marchando. Son dos euros.", false],
];

export default function MissionsSection() {
  return (
    <section id="missions" className="bg-[#6C4DF6] py-20 text-white">
      <div className="wrap flex flex-wrap items-center gap-10">
        <div className="max-w-[520px] flex-[1_1_320px]">
          <h2 className="disp h2">Practise the conversation before it happens.</h2>
          <p className="mt-4 text-[19px] text-[#EFEBFF]">
            Pick a situation, talk to a friendly character, and use the help ladder when you get stuck: a hint, reply options, or “say it for me”. Ask in your own language and Tutotoco gives you the phrase.
          </p>
          <ul className="mt-5 flex flex-col gap-[10px] font-extrabold">
            {MISSION_POINTS.map((p) => <li key={p}>✓ {p}</li>)}
          </ul>
        </div>
        <div className="flex flex-[1_1_300px] justify-center">
          <div className="w-full max-w-[400px] rounded-[28px] bg-white p-5 text-[#2A1F4D]">
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-extrabold">
              <span className="rounded-full bg-[#D6F7EA] px-3 py-1">✓ Order a coffee</span>
              <span className="rounded-full bg-[#EFEBFF] px-3 py-1">Ask the price</span>
            </div>
            <div className="flex flex-col gap-3">
              {LINES.map(([text, right]) => (
                <div
                  key={text}
                  className={`max-w-[80%] px-4 py-2 font-extrabold ${right ? "ml-auto rounded-[18px_18px_4px_18px] bg-[#6C4DF6] text-white" : "rounded-[18px_18px_18px_4px] bg-[#EFEBFF]"}`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
