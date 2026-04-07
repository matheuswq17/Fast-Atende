import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "cyan";
  className?: string;
  children: React.ReactNode;
};

export function CTAButton({ href, variant = "primary", className, children }: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan";

  const variants = {
    primary:
      "bg-white text-[#060b19] px-7 py-4 hover:bg-slate-100 active:scale-[0.97] shadow-lg",
    secondary:
      "bg-white/5 text-white border border-white/15 px-7 py-4 hover:bg-white/10 active:scale-[0.97]",
    ghost:
      "text-slate-300 hover:text-white px-4 py-2 text-sm",
    cyan:
      "bg-brand-cyan text-[#060b19] px-8 py-5 text-lg hover:brightness-110 active:scale-[0.97] shadow-[0_0_40px_rgba(0,210,255,0.25)]",
  };

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}
