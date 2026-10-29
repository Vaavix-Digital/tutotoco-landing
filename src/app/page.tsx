import ScrollOnArrive from "@/components/ui/ScrollOnArrive";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import AppPeekSection from "@/components/sections/AppPeekSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MissionsSection from "@/components/sections/MissionsSection";
import DaySection from "@/components/sections/DaySection";
import ComplaintsSection from "@/components/sections/ComplaintsSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <ScrollOnArrive />
      <HeroSection />
      <HowItWorksSection />
      <LanguagesSection />
      <AppPeekSection />
      <FeaturesSection />
      <MissionsSection />
      <DaySection />
      <ComplaintsSection />
      <ReasonsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
