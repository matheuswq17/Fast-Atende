import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MascotVideo } from "@/components/media/MascotVideo";
import { VideoShell } from "@/components/media/VideoShell";
import { Activity } from "lucide-react";

export function DashboardSection() {
  return (
    <Section className="bg-white/[0.02] border-y border-white/5 relative">
      <Container>
        <MotionSection className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6">
            <Activity className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Saia do escuro. <br className="hidden md:block"/> Visibilidade gerencial completa.
          </h2>
          <p className="text-slate-400 text-lg">
            Um canal de comunicação sem dashboard é um túnel escuro de problemas. O FastAtende entrega relatórios claros de fila, SLA e gargalos de atendimento passivo.
          </p>
        </MotionSection>

        <MotionSection className="max-w-4xl mx-auto" delay={0.2}>
          <VideoShell className="aspect-square md:aspect-video w-full shadow-[0_0_80px_rgba(0,210,255,0.2)]">
            <MascotVideo 
              src="/videos/09_mascote_apresentando_dashboard.mp4"
              poster="/posters/09_mascote_apresentando_dashboard.jpeg"
            />
          </VideoShell>
        </MotionSection>
      </Container>
    </Section>
  );
}
