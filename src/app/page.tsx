import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainStrip } from "@/components/landing/PainStrip";
import { ScrollStory } from "@/components/landing/ScrollStory";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { HowWeStart } from "@/components/landing/HowWeStart";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

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
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <MobileStickyCTA />
    </>
  );
}
