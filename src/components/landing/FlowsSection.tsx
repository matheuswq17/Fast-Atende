import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MascotVideo } from "@/components/media/MascotVideo";
import { VideoShell } from "@/components/media/VideoShell";
import { Stethoscope, ShoppingCart, Headset } from "lucide-react";

export function FlowsSection() {
  return (
    <Section className="bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <MotionSection className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            A espinha dorsal das operações estruturadas.
          </h2>
          <p className="text-slate-400 text-lg">
            Direcione as conversas pelo contexto do setor. Separe triagem de pacientes num agendamento, desvincule suporte técnico da força de vendas — e faça isso de forma autônoma.
          </p>
        </MotionSection>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <MotionSection className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors">
               <div className="flex items-center gap-4 mb-2">
                 <ShoppingCart className="text-brand-cyan w-6 h-6" />
                 <h3 className="text-xl font-semibold">Comercial</h3>
               </div>
               <p className="text-slate-400 text-sm">Qualificação inteligente e roteamento para o vendedor apropriado sem perder o calor do lead.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors">
               <div className="flex items-center gap-4 mb-2">
                 <Headset className="text-brand-cyan w-6 h-6" />
                 <h3 className="text-xl font-semibold">Suporte Integrado</h3>
               </div>
               <p className="text-slate-400 text-sm">Resolução imediata para dúvidas triviais e escalonamento lógico perfeitamente documentado.</p>
            </div>
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors">
               <div className="flex items-center gap-4 mb-2">
                 <Stethoscope className="text-brand-cyan w-6 h-6" />
                 <h3 className="text-xl font-semibold">Clínicas</h3>
               </div>
               <p className="text-slate-400 text-sm">Preparação de triagem unificada, coleta prévia de informações e fluxo direto para as secretárias.</p>
            </div>
          </MotionSection>

          <MotionSection className="lg:col-span-7 order-1 lg:order-2 relative" delay={0.2}>
            <VideoShell className="aspect-square lg:aspect-video w-full">
              <MascotVideo 
                src="/videos/07_mascote_organizando_fluxos.mp4"
                poster="/posters/07_mascote_organizando_fluxos.jpeg"
              />
            </VideoShell>
          </MotionSection>
        </div>
      </Container>
    </Section>
  );
}
