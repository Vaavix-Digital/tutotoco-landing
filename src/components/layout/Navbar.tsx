"use client";

import { useState } from "react";
import Mascot from "@/components/ui/Mascot";
import ScrollLink from "@/components/ui/ScrollLink";
import Icon from "@/components/ui/Icon";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#EFEBFF]/90 backdrop-blur">
      <div className="wrap relative flex items-center justify-between gap-4 py-5">
      <ScrollLink href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
        <Mascot size={40} />
        <span className="disp text-[28px] text-[#6C4DF6]">Tutotoco</span>
      </ScrollLink>
      <nav className="hidden items-center gap-6 text-base font-extrabold lg:flex" aria-label="Main">
        {NAV_LINKS.map(([label, id]) => (
          <ScrollLink key={id} href={`#${id}`} className="hover:text-[#6C4DF6]">{label}</ScrollLink>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ScrollLink href="#download" className="btn btn-violet whitespace-nowrap !px-4 sm:!px-6">Get the app</ScrollLink>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-[#DDD6FB] bg-white lg:hidden"
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>
      {open && (
        <nav className="card-p fade-in absolute left-6 right-6 top-[84px] z-30 flex flex-col gap-1 !p-3 lg:hidden" aria-label="Mobile">
          {NAV_LINKS.map(([label, id]) => (
            <ScrollLink key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-extrabold hover:bg-[#EFEBFF]">
              {label}
            </ScrollLink>
          ))}
        </nav>
      )}
      </div>
    </header>
  );
}
