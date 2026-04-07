import { cn } from "@/lib/utils";

type VideoShellProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "portrait" | "landscape" | "square" | "circle";
};

const variantClasses = {
  portrait: "aspect-[3/4] max-w-[320px] w-full",
  landscape: "aspect-video w-full",
  square: "aspect-square w-full max-w-md",
  circle: "aspect-square w-44 md:w-56 rounded-full",
};

export function VideoShell({ children, className, variant = "portrait" }: VideoShellProps) {
  const isCircle = variant === "circle";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isCircle ? "rounded-full" : "rounded-[28px]",
        // Minimal frame: subtle border + glow + shadow — NO white background
        "border border-white/[0.08]",
        "shadow-[0_8px_50px_-10px_rgba(0,210,255,0.20)]",
        variantClasses[variant],
        className
      )}
    >
      {/* Cyan glow — very subtle, top-center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,210,255,0.12),transparent_60%)] pointer-events-none z-10" />
      {/* Content — fills directly, no white wrapper */}
      <div className={cn("relative h-full w-full overflow-hidden", isCircle ? "rounded-full" : "rounded-[27px]")}>
        {children}
      </div>
    </div>
  );
}
