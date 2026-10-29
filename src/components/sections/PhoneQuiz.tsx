"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";
import { QUIZ } from "@/lib/constants";

export default function PhoneQuiz() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % QUIZ.length), 4500);
    return () => clearInterval(id);
  }, []);

  const slide = QUIZ[i];

  return (
    <div className="phone w-[280px] rounded-[36px] border-[3px] border-[#DDD6FB] bg-white p-5 shadow-[0_18px_40px_rgba(108,77,246,.18)]">
      <div className="h-[10px] rounded-full bg-[#DDD6FB]">
        <div className="h-full rounded-full bg-[#20C08B] transition-all duration-700" style={{ width: `${slide.pct}%` }} />
      </div>
      <div key={i} className="fade-in">
        <h3 className="disp mt-4 text-[22px]">What does this mean?</h3>
        <div className="mt-3 flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#6C4DF6] shadow-[0_4px_0_#5238D4]">
            <Icon name="speaker" color="#fff" />
          </span>
          <span className="disp text-2xl leading-tight">{slide.word}</span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {slide.answers.map((a, n) => (
            <div
              key={a}
              className={`rounded-[14px] border-2 px-[14px] py-[11px] text-[15px] font-extrabold ${n === slide.correct ? "border-[#20C08B] bg-[#D6F7EA]" : "border-[#DDD6FB]"}`}
            >
              {n === slide.correct && "✓ "}{a}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-[14px] bg-[#D6F7EA] p-2 font-extrabold text-[#0B5E43]">
          <Mascot size={34} happy /> Nice one!
        </div>
      </div>
    </div>
  );
}
