"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { SCROLL_TARGET_KEY } from "@/lib/scroll";

/**
 * Link for in-page sections. The URL never gets a #hash:
 * on the home page it scrolls in place; on other pages it goes to "/" and
 * <ScrollOnArrive /> scrolls to the section once the home page has rendered.
 */
export default function ScrollLink({ href, onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  const router = useRouter();

  if (!href.startsWith("#")) return <Link href={href} onClick={onClick} {...props} />;

  const id = href.slice(1);
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    if (pathname === "/") {
      // Default behavior follows CSS scroll-behavior, which honours prefers-reduced-motion.
      if (id === "top") window.scrollTo({ top: 0 });
      else document.getElementById(id)?.scrollIntoView();
      return;
    }
    try { sessionStorage.setItem(SCROLL_TARGET_KEY, id); } catch {}
    router.push("/");
  };

  return <a href={pathname === "/" ? href : `/${href}`} onClick={handle} {...props} />;
}
