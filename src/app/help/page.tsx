import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import HelpCentre from "@/components/sections/HelpCentre";

export const metadata: Metadata = {
  title: "Help centre — Tutotoco",
  description: "Answers about lessons, missions, streaks, billing and offline use.",
};

export default function HelpPage() {
  return (
    <>
      <Suspense>
        <HelpCentre />
      </Suspense>
      <section className="bg-[#6C4DF6] py-16 text-center text-white">
        <h2 className="disp h2">Still stuck?</h2>
        <p className="mb-6 mt-2 text-lg text-[#EFEBFF]">Tell us what happened and we will help.</p>
        <Link href="/contact" className="btn btn-white">Contact</Link>
      </section>
    </>
  );
}
