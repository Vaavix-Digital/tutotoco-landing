import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";

export function ScreenFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-[230px] rounded-[30px] border-[3px] border-[#DDD6FB] bg-white p-4 shadow-[0_14px_30px_rgba(108,77,246,.18)]">
      {children}
    </div>
  );
}

export function MissionScreen() {
  return (
    <ScreenFrame>
      <div className="mb-3 flex items-center gap-2">
        <Mascot size={34} headset />
        <b className="disp">Mission: café</b>
      </div>
      <div className="mb-2 max-w-[85%] rounded-[16px_16px_16px_4px] bg-[#EFEBFF] p-2 text-sm font-extrabold">Hola, ¿qué te pongo?</div>
      <div className="mb-3 ml-auto max-w-[85%] rounded-[16px_16px_4px_16px] bg-[#6C4DF6] p-2 text-sm font-extrabold text-white">Un café, por favor.</div>
      <div className="flex gap-1 text-xs font-extrabold">
        {["Understood", "Clear", "Polite"].map((c) => (
          <span key={c} className="rounded-full bg-[#D6F7EA] px-2 py-1 text-[#0B5E43]">{c}</span>
        ))}
      </div>
    </ScreenFrame>
  );
}

export function TraceScreen() {
  return (
    <ScreenFrame>
      <div className="disp mb-2 text-center text-lg">Trace it</div>
      <svg viewBox="0 0 120 120" className="w-full rounded-2xl bg-[#FFF6D6]" aria-hidden="true">
        <text x="60" y="92" textAnchor="middle" fontSize="90" fill="#FFE9A8" fontFamily="sans-serif">あ</text>
        <path className="stroke-draw" d="M38 38 H82 M58 22 C58 60 52 88 38 92 M78 52 C94 62 90 90 66 88 C48 86 46 62 76 62" stroke="#6C4DF6" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
      <div className="muted mt-2 text-center text-sm font-extrabold">Stroke 1 of 3</div>
    </ScreenFrame>
  );
}

export function StreakScreen() {
  return (
    <ScreenFrame>
      <div className="flex items-center gap-2">
        <Icon name="flame" color="#F05A78" />
        <b className="disp text-xl">7 day streak</b>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1">
        {[1, 1, 1, 0, 1, 1, 1].map((d, i) => (
          <span key={i} className={`grid h-7 w-7 place-items-center rounded-full text-xs font-extrabold ${d ? "bg-[#20C08B]" : "bg-[#DDD6FB]"}`}>{d ? "✓" : ""}</span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#DDD6FB] p-2 text-sm font-extrabold">
        <Icon name="shield" size={20} /> Toco protected a day
      </div>
    </ScreenFrame>
  );
}

export function SkillScreen() {
  return (
    <ScreenFrame>
      <div className="disp mb-3 text-lg">Skill map</div>
      {([["A1", 100], ["A2", 80], ["B1", 52], ["B2", 25], ["C1", 8]] as const).map(([l, p]) => (
        <div key={l} className="mb-2 flex items-center gap-2 text-sm font-extrabold">
          <span className="w-6">{l}</span>
          <div className="h-3 flex-1 rounded-full bg-[#DDD6FB]">
            <div className="h-full rounded-full bg-[#6C4DF6]" style={{ width: `${p}%` }} />
          </div>
        </div>
      ))}
    </ScreenFrame>
  );
}

export function EmergencyScreen() {
  return (
    <ScreenFrame>
      <div className="rounded-2xl bg-[#FFC8D4] p-4 text-center">
        <Icon name="alert" size={34} className="mx-auto" />
        <div className="disp mt-2 text-2xl">Necesito un médico</div>
        <div className="muted text-sm font-extrabold">I need a doctor</div>
        <span className="mx-auto mt-3 grid h-12 w-12 place-items-center rounded-2xl bg-[#6C4DF6] shadow-[0_4px_0_#5238D4]">
          <Icon name="speaker" color="#fff" />
        </span>
      </div>
    </ScreenFrame>
  );
}
