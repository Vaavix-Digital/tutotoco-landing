import type { Metadata, Viewport } from "next";
import { Baloo_2 } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import ScrollToTop from "@/components/layout/ScrollToTop";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-baloo", display: "swap" });

export const metadata: Metadata = {
  title: "Tutotoco — Speak it for real",
  description:
    "Learn Spanish, French, German, Arabic, Hindi, Japanese, Korean, Mandarin, Portuguese and English with real-life missions, voice practice and no pressure.",
  openGraph: {
    title: "Tutotoco — Speak it for real",
    description: "Real-life speaking in 10 languages, with a friendly bear who never shames you.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#6C4DF6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={baloo.variable}>
      <body>
        <div id="top" className="min-h-screen bg-[#EFEBFF]">
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
