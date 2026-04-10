import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINKS } from "@/lib/cta";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const SEGMENTS = [
  {
    iconSrc: "/icons/icon_clinicas.png",
    title: "Clínicas & Consultórios",
    headline: "Fila de mensagens virando agendamentos organizados.",
    description:
      "Pacientes perguntando por horários, exames e confirmações ao mesmo tempo. O FastAtende triaga, responde dúvidas recorrentes e passa para a secretária apenas o que precisa de ato humano.",
    features: ["Triagem de pacientes por tipo de demanda", "Coleta de informações antes do atendimento", "Direcionamento direto para secretaria"],
  },
  {
    iconSrc: "/icons/icon_equipes.png",
    title: "Equipes Comerciais",
    headline: "Lead qualificado direto para o vendedor certo.",
    description:
      "Contatos comerciais chegam em volume. Sem triagem, os melhores ficam esperando enquanto o time lida com dúvidas que não convertem. A FastAtende qualifica e roteia com precisão.",
    features: ["Separação de lead frio e lead quente", "Roteamento por produto ou região", "Histórico completo antes do primeiro contato humano"],
  },
  {
    iconSrc: "/icons/icon_suporte_v2.png",
    title: "Central de Suporte",
    headline: "Menos volume manual. Mais resolução real.",
    description:
      "Dúvidas repetitivas consomem o time de suporte inteiro. O FastAtende resolve o que é trivial e escala apenas as demandas que precisam de atenção especializada.",
    features: ["Resolução automática de dúvidas recorrentes", "Escalonamento com contexto completo", "Redução mensurável do tempo médio de resposta"],
  },
  {
    iconSrc: "/icons/icon_alto_volume_v2.png",
    title: "Alto Volume no WhatsApp",
    headline: "Operação profissional sem contratar mais pessoas.",
    description:
      "Quando o volume cresce, o caos cresce junto — sem estrutura. A FastAtende dá escala para o atendimento sem exigir mais cabeças, apenas mais organização.",
    features: ["Fluxos configurados para o seu contexto", "Operação rodando fora do horário comercial", "Dashboard com visibilidade em tempo real"],
  },
];

export function UseCasesSection() {
  return (
    <section id="segmentos" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <MotionSection className="mb-16 lg:mb-24">
          <p className="text-brand-cyan text-sm font-bold tracking-widest uppercase mb-5">
            Segmentos
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6 max-w-2xl">
            Feito para quem tem WhatsApp <span className="text-slate-400">como canal de operação real.</span>
          </h2>
        </MotionSection>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {SEGMENTS.map((seg, i) => (
            <MotionSection
              key={seg.title}
              delay={0.1 * i}
              className="rounded-[24px] border border-white/8 bg-white/[0.025] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 p-8 lg:p-10 flex flex-col group"
            >
              <div className="relative w-12 h-12 lg:w-[52px] lg:h-[52px] mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <Image 
                  src={seg.iconSrc} 
                  alt={seg.title} 
                  fill 
                  sizes="64px"
                  className="object-contain" 
                  quality={100}
                />
              </div>
              <p className="text-xs text-slate-500 font-bold tracking-widest uppercase mb-2">{seg.title}</p>
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">{seg.headline}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{seg.description}</p>
              <ul className="space-y-3">
                {seg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </MotionSection>
          ))}
        </div>

        <MotionSection className="mt-14 text-center">
          <CTAButton href={CTA_LINKS.mapear} variant="secondary">
            Ver como funciona para o meu segmento →
          </CTAButton>
        </MotionSection>
      </Container>
    </section>
  );
}
