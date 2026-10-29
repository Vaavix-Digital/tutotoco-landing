"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "tutotoco-cookies";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const choose = (value: string) => {
    try { localStorage.setItem(KEY, value); } catch {}
    setShow(false);
  };
  const btn = "btn btn-white !min-h-[44px] flex-1 !text-[15px] border-2 border-[#DDD6FB]";

  return (
    <div role="dialog" aria-label="Cookie choices" className="fade-in fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-[22px] border-2 border-[#DDD6FB] bg-white p-5 shadow-xl">
      <p className="text-[15px]">
        We use a few cookies to keep Tutotoco working and to understand how the site is used. Your choice is yours.{" "}
        <Link href="/privacy" className="font-extrabold text-[#5238D4] underline">Privacy</Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className={btn} onClick={() => choose("all")}>Accept all</button>
        <button className={btn} onClick={() => choose("none")}>Reject all</button>
        <Link href="/privacy" className={btn} onClick={() => choose("custom")}>Choose</Link>
      </div>
    </div>
  );
}
