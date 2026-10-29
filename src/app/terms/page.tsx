import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { TERMS } from "@/lib/pages-data";

export const metadata: Metadata = { title: "Terms — Tutotoco" };

export default function TermsPage() {
  return <LegalPage title="Terms" sections={TERMS} />;
}
