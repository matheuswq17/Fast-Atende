"use client";

import dynamic from "next/dynamic";

const BriefingFormDynamic = dynamic(
  () => import("@/components/briefing/BriefingForm").then((m) => m.BriefingForm),
  { ssr: false, loading: () => (
    <div className="flex justify-center items-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-brand-cyan/30 border-t-brand-cyan animate-spin" />
    </div>
  )}
);

export function BriefingFormLoader() {
  return <BriefingFormDynamic />;
}
