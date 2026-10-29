"use client";

import { useEffect } from "react";
import { SCROLL_TARGET_KEY } from "@/lib/scroll";

/** Home page only: scrolls to the requested section, then keeps the URL clean ("/"). */
export default function ScrollOnArrive() {
  useEffect(() => {
    let id = window.location.hash.slice(1);
    try {
      const stored = sessionStorage.getItem(SCROLL_TARGET_KEY);
      if (stored) {
        id = stored;
        sessionStorage.removeItem(SCROLL_TARGET_KEY);
      }
    } catch {}
    if (!id) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
      if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
