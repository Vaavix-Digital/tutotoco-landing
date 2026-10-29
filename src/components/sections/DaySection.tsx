import Carousel from "@/components/ui/Carousel";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";
import { DAY_MOMENTS } from "@/lib/constants";
import type { DayMoment } from "@/types";

function Art({ art }: { art: DayMoment["art"] }) {
  return (
    <svg viewBox="0 0 240 160" className="w-full max-w-[300px]" aria-hidden="true">
      <rect x="0" y="120" width="240" height="40" rx="20" fill="#2A1F4D" opacity=".12" />
      {art === "sun" && (
        <>
          <circle cx="170" cy="50" r="28" fill="#FFC83D" />
          <path d="M20 120 Q70 50 120 120z" fill="#8B73FF" />
          <path d="M90 120 Q150 70 210 120z" fill="#6C4DF6" />
        </>
      )}
      {art === "cup" && (
        <>
          <path d="M70 60h80v40a30 30 0 0 1-30 30h-20a30 30 0 0 1-30-30z" fill="#fff" stroke="#2A1F4D" strokeWidth="4" />
          <path d="M150 72h14a14 14 0 0 1 0 28h-14" fill="none" stroke="#2A1F4D" strokeWidth="4" />
          <path d="M95 40q-8-10 0-20M120 40q-8-10 0-20" stroke="#20C08B" strokeWidth="5" strokeLinecap="round" fill="none" />
        </>
      )}
      {art === "moon" && (
        <>
          <path d="M150 30a40 40 0 1 0 40 50 32 32 0 0 1-40-50z" fill="#FFE9A8" />
          <circle cx="60" cy="40" r="3" fill="#6C4DF6" />
          <circle cx="100" cy="24" r="4" fill="#F05A78" />
          <circle cx="40" cy="90" r="3" fill="#20C08B" />
        </>
      )}
      {art === "plane" && (
        <>
          <path d="M30 110C80 60 160 50 210 40L150 110z" fill="#fff" stroke="#2A1F4D" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="50" cy="40" r="14" fill="#fff" opacity=".8" />
          <circle cx="70" cy="46" r="10" fill="#fff" opacity=".8" />
        </>
      )}
    </svg>
  );
}

export default function DaySection() {
  const slides = DAY_MOMENTS.map((m) => (
    <div key={m.title} className="flex flex-wrap items-center gap-8 px-6 py-10 md:px-14" style={{ background: m.bg }}>
      <div className="flex flex-[1_1_240px] justify-center"><Art art={m.art} /></div>
      <div className="flex-[1_1_280px]">
        <span className="pill gap-2"><Icon name={m.icon} size={18} />{m.time}</span>
        <h3 className="disp mt-3 text-[32px]">{m.title}</h3>
        <p className="mt-2 text-lg">{m.text}</p>
      </div>
    </div>
  ));
  return (
    <section className="bg-white py-20">
      <div className="wrap">
        <div className="flex flex-col items-center text-center">
          <Mascot size={56} happy />
          <h2 className="disp h2 mt-2">A day with Tutotoco</h2>
          <p className="muted mb-9 mt-3 text-lg">Small moments add up to real conversations.</p>
        </div>
        <Carousel slides={slides} interval={6000} label="A day with Tutotoco" />
      </div>
    </section>
  );
}
