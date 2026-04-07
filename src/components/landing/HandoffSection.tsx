import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MascotVideo } from "@/components/media/MascotVideo";
import { VideoShell } from "@/components/media/VideoShell";
import { HeartHandshake } from "lucide-react";

export function HandoffSection() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionSection className="relative">
            <VideoShell className="aspect-square lg:aspect-[4/3] max-w-sm mx-auto lg:max-w-none">
              <MascotVideo 
                src="/videos/08_mascote_handoff_humano.mp4"
                poster="/posters/08_mascote_handoff_humano.jpeg"
              />
            </VideoShell>
          </MotionSection>

          <MotionSection delay={0.2} className="lg:pl-8">
             <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              A passagem de bastão <br className="hidden lg:block"/> para o seu time.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg">
              <p>
                Muitas ferramentas forçam toda iteração no modelo de automação total. Na FastAtende sabemos que a relação humana é o que finalmente converte ou cura o cliente.
              </p>
              <p>
                Quando o processo exige calor humano, a transição é feita com polidez. O atendente entra na conversa com o histórico completo, o contexto exato e a dor já mapeada pelo sistema de triagem. Nenhuma informação é perdida e o usuário não sente frustração.
              </p>
            </div>
          </MotionSection>
        </div>
      </Container>
    </Section>
  );
}
