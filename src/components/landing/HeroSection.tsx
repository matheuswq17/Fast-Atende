import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { VideoShell } from "@/components/media/VideoShell";
import { MascotVideo } from "@/components/media/MascotVideo";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINKS } from "@/lib/cta";
import { ArrowRight, MessageSquare } from "lucide-react";
import { AnimatedHeroTitle } from "@/components/landing/AnimatedHeroTitle";

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-36 overflow-hidden flex items-center min-h-screen"
    >
      {/* Glow ambiental */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-cyan/8 blur-[160px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/6 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Copy column */}
          <MotionSection delay={0.05} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 mt-4 lg:mt-0">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase">
                Operação no WhatsApp
              </span>
            </div>

            <AnimatedHeroTitle />

            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Triagem, direção e contexto para cada mensagem no WhatsApp. A FastAtende organiza suporte,
              comercial e agendamento —{" "}
              <span className="text-slate-200">sem esconder o humano atrás de um robô.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href={CTA_LINKS.mapear} variant="primary">
                Mapear minha operação
                <ArrowRight className="w-5 h-5" />
              </CTAButton>
              <CTAButton href={CTA_LINKS.entenderFluxo} variant="secondary">
                <MessageSquare className="w-4 h-4 text-slate-300" />
                Entender o fluxo
              </CTAButton>
            </div>

            {/* Social proof micro */}
            <p className="mt-8 text-sm text-slate-500 flex items-center gap-2">
              <span className="inline-flex -space-x-1.5">
                {["🏥", "🏢", "📞"].map((e, i) => (
                  <span key={i} className="flex h-7 w-7 rounded-full bg-white/8 border border-white/10 items-center justify-center text-xs">
                    {e}
                  </span>
                ))}
              </span>
              Clínicas, equipes comerciais e centrais de suporte já estruturadas.
            </p>
          </MotionSection>

          {/* Mascot column — portrait, larger for hero presence */}
          <MotionSection delay={0.25} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind shell */}
              <div className="absolute inset-0 scale-[1.15] bg-brand-cyan/10 blur-[60px] rounded-full" />
              <VideoShell variant="portrait" className="relative w-[300px] lg:w-[360px]">
                <MascotVideo
                  src="/videos/02_mascote_hero_acenando.mp4"
                  poster="/posters/02_mascote_hero_acenando.jpeg"
                  priority={true}
                />
              </VideoShell>
            </div>
          </MotionSection>
        </div>
      </Container>
    </Section>
  );
}
