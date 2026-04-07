import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MascotVideo } from "@/components/media/MascotVideo";
import { VideoShell } from "@/components/media/VideoShell";
import { ScanSearch } from "lucide-react";

export function ContextSection() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionSection>
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6">
              <ScanSearch className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Captura impecável <br className="hidden lg:block"/> de contexto e intenção.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg">
              <p>
                As respostas da sua empresa não precisam soar como formulários robóticos da década passada.
              </p>
              <p>
                O FastAtende atua na frente de batalha para capturar a real necessidade do cliente baseada na conversa. Ele coleta os dados críticos, compreende o contexto inicial e poupa seu time da estressante tarefa de perguntar sempre <span className="italic text-slate-300">&quot;aliás, como posso ajudá-lo(a) e qual o seu nome?&quot;</span> a cada novo atendimento.
              </p>
            </div>
          </MotionSection>

          <MotionSection className="relative" delay={0.2}>
            <VideoShell className="aspect-square lg:aspect-[4/3] max-w-sm mx-auto lg:max-w-none ml-auto">
              <MascotVideo 
                src="/videos/06_mascote_modo_triagem_scanner.mp4"
                poster="/posters/06_mascote_modo_triagem_scanner.jpeg"
              />
            </VideoShell>
          </MotionSection>
        </div>
      </Container>
    </Section>
  );
}
