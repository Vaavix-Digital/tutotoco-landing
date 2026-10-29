import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { PRIVACY } from "@/lib/pages-data";

export const metadata: Metadata = { title: "Privacy — Tutotoco" };

export default function PrivacyPage() {
  return <LegalPage title="Privacy" sections={PRIVACY} />;
}
