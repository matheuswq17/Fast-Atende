import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { VideoShell } from "@/components/media/VideoShell";
import { MascotVideo } from "@/components/media/MascotVideo";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINKS } from "@/lib/cta";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-cyan/6 blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="rounded-[36px] bg-white/[0.025] border border-white/10 overflow-hidden p-1">
          <div className="rounded-[32px] bg-[#06101f] border border-white/5 px-8 py-16 md:p-16 lg:p-24 relative overflow-hidden">

            {/* Top glow line */}
            <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Portrait mascot */}
              <MotionSection className="shrink-0 relative">
                <div className="absolute inset-0 scale-125 bg-brand-cyan/15 blur-[50px] rounded-full" />
                <VideoShell variant="portrait" className="relative w-[220px] lg:w-[260px]">
                  <MascotVideo
                    src="/videos/10_mascote_cta_convite_final.mp4"
                    poster="/posters/10_mascote_cta_convite_final.jpeg"
                  />
                </VideoShell>
              </MotionSection>

              {/* Text + CTA */}
              <MotionSection delay={0.15} className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
                <p className="text-brand-cyan text-sm font-bold tracking-widest uppercase mb-6">
                  Próximo passo
                </p>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-6">
                  A sua operação sob o seu controle.
                </h2>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                  Chega de fila vermelha no final do turno. Chega de lead esfriando enquanto o time resolve dúvida de produto. Mapeie sua operação e veja onde a FastAtende estrutura o fluxo.
                </p>
                <CTAButton href={CTA_LINKS.mapear} variant="cyan" className="w-full sm:w-auto">
                  Vamos mapear minha operação
                  <ArrowRight className="w-5 h-5" />
                </CTAButton>
                <p className="mt-5 text-xs text-slate-500">
                  Sem compromisso. Mapeamento gratuito.
                </p>
              </MotionSection>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
