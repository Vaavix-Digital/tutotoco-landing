"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Mascot from "@/components/ui/Mascot";
import { HELP_CATEGORIES, HELP_FAQS } from "@/lib/pages-data";

export default function HelpCentre() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const results = HELP_FAQS.filter(([q, a]) => (q + a).toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <section className="wrap flex flex-wrap items-center justify-center gap-8 pb-12 pt-6 text-center md:text-left">
        <Mascot size={150} headset className="wobble" />
        <div className="max-w-[560px] flex-1">
          <h1 className="disp h2">How can we help?</h1>
          <label className="relative mt-5 block">
            <span className="sr-only">Search help</span>
            <Icon name="search" className="absolute left-4 top-3.5" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an answer"
              className="h-12 w-full rounded-2xl border-2 border-[#DDD6FB] bg-white pl-12 pr-4 text-base font-bold"
            />
          </label>
        </div>
      </section>

      <section className="wrap">
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))]">
          {HELP_CATEGORIES.map(([name, icon, bg]) => (
            <button key={name} onClick={() => setQuery(name.split(" ")[0])} className="card-p flex items-center gap-4 text-left">
              <span className="tile" style={{ background: bg }}><Icon name={icon} /></span>
              <b className="disp text-xl">{name}</b>
            </button>
          ))}
        </div>
      </section>

      <section className="sec mx-auto max-w-[820px] px-6">
        <h2 className="disp mb-6 text-center text-[32px]">Top questions</h2>
        {results.length ? <Accordion items={results} /> : <p className="muted text-center">No answers match that yet. Try the Contact page.</p>}
      </section>
    </>
  );
}
