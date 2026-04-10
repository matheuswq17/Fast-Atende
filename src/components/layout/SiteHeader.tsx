"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINKS } from "@/lib/cta";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona", internal: false },
  { label: "Segmentos", href: "#segmentos", internal: false },
  { label: "Dashboard", href: "#dashboard", internal: false },
  { label: "FAQ", href: "#faq", internal: false },
  { label: "Já mapeou sua operação?", href: "/mapear-operacao", internal: true, highlight: true },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#060b19]/90 backdrop-blur-md border-b border-white/8 shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0">
              <div className="relative h-10 w-10 flex items-center justify-center bg-brand-cyan/5 rounded-[12px] border border-white/[0.05]">
                <Image
                  src="/posters/icone_fastatende.png"
                  alt="Ícone FastAtende"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <span className="font-bold text-white text-[1.15rem] tracking-tight">FastAtende</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) =>
                link.internal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      link.highlight
                        ? "text-brand-cyan hover:opacity-80"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <CTAButton href={CTA_LINKS.mapear} variant="primary" className="text-sm py-2.5 px-5">
                Mapear minha operação →
              </CTAButton>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#07101f] border-t border-white/8">
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) =>
                link.internal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "text-base font-medium py-1",
                      link.highlight ? "text-brand-cyan" : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-slate-300 hover:text-white font-medium py-1"
                  >
                    {link.label}
                  </a>
                )
              )}
              <CTAButton href={CTA_LINKS.mapear} variant="primary" className="mt-2 w-full justify-center">
                Mapear minha operação →
              </CTAButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
