"use client";

import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINKS } from "@/lib/cta";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-4 bg-gradient-to-t from-[#060b19] to-transparent pointer-events-none">
      <CTAButton
        href={CTA_LINKS.mapear}
        variant="cyan"
        className="w-full justify-center pointer-events-auto py-4 text-base shadow-[0_0_40px_rgba(0,210,255,0.35)]"
      >
        Mapear agora →
      </CTAButton>
    </div>
  );
}
