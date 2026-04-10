import dynamic from "next/dynamic";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainStrip } from "@/components/landing/PainStrip";
import { ScrollStory } from "@/components/landing/ScrollStory";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { HowWeStart } from "@/components/landing/HowWeStart";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { FormSection } from "@/components/landing/FormSection";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

// Lazy load components that appear below the fold for performance
const PricingSection = dynamic(() => import("@/components/landing/PricingSection").then((m) => m.PricingSection));
const TeamSection = dynamic(() => import("@/components/landing/TeamSection").then((m) => m.TeamSection));
const FAQSection = dynamic(() => import("@/components/landing/FAQSection").then((m) => m.FAQSection));
const FinalCTASection = dynamic(() => import("@/components/landing/FinalCTASection").then((m) => m.FinalCTASection));

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="min-h-screen bg-[#060b19] text-foreground overflow-x-clip selection:bg-brand-cyan/30 selection:text-white pb-24 lg:pb-0"
      >
        <HeroSection />
        <PainStrip />
        <ScrollStory />
        <UseCasesSection />
        <HowWeStart />
        <ComparisonSection />
        <FormSection />
        <PricingSection />
        <TeamSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <MobileStickyCTA />
    </>
  );
}
