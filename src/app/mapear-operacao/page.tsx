import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BriefingFormLoader } from "@/components/briefing/BriefingFormLoader";

export const metadata: Metadata = {
  title: "Mapeie sua operação | FastAtende",
  description:
    "Preencha o briefing completo da sua operação no WhatsApp para que a FastAtende entenda seu escopo, complexidade e necessidades antes da proposta.",
};

const WILL_ANALYZE = [
  "Contexto da empresa e responsável pelo projeto",
  "Volume e tipo de atendimento atual",
  "Objetivos do escopo de atendimento no WhatsApp",
  "Integrações, regras e repasses",
  "Necessidade de dashboard e indicadores",
  "Prazo, orçamento e critérios de sucesso",
];

export default function MapearOperacaoPage() {
  return (
    <div className="min-h-screen bg-[#060b19] text-foreground">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/3 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#060b19]/90 backdrop-blur-md border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-9 w-9 flex items-center justify-center bg-brand-cyan/5 rounded-[10px] border border-white/[0.05]">
              <Image
                src="/posters/icone_fastatende.png"
                alt="Ícone FastAtende"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>
            <span className="font-bold text-white text-[1.1rem] tracking-tight">FastAtende</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 lg:pt-24 pb-12 lg:pb-16 border-b border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-brand-cyan text-xs font-bold tracking-wider uppercase">Diagnóstico operacional</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.05] mb-5">
              Mapeie sua operação{" "}
              <span className="text-brand-cyan">no WhatsApp</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Preencha este briefing para entendermos sua operação, o escopo ideal do atendimento e o que a FastAtende precisa considerar para montar a proposta certa.
            </p>
          </div>

          {/* What we'll analyze block */}
          <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.02] p-6 lg:p-8 max-w-2xl">
            <p className="text-sm font-bold text-white tracking-wide mb-4">O que vamos analisar</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {WILL_ANALYZE.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Briefing form */}
      <BriefingFormLoader />
    </div>
  );
}
