"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** The navbar lives in the layout, so reset the scroll to the very top whenever the route changes. */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // "instant" overrides the page's smooth scrolling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
