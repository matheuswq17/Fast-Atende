import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MascotVideo } from "@/components/media/MascotVideo";
import { VideoShell } from "@/components/media/VideoShell";

export function PainSection() {
  return (
    <Section className="bg-white/[0.02] border-y border-white/5 relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <MotionSection className="order-2 lg:order-1 relative">
            <VideoShell className="aspect-square lg:aspect-[4/3] max-w-md mx-auto lg:max-w-none">
              <MascotVideo 
                src="/videos/11_mascote_reacao_caos_controlado.mp4"
                poster="/posters/11_mascote_reacao_caos_controlado.jpeg"
              />
            </VideoShell>
            {/* Soft backdrop glow to anchor the shell */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[80px] rounded-full -z-10" />
          </MotionSection>
          
          <MotionSection className="order-1 lg:order-2 lg:pl-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              A sensação de que algo <br className="hidden lg:block"/>
              urgente ficou para trás.
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Misturar dúvidas simples de suporte com contatos comerciais quentes é o caminho mais curto para destruir seu SLA de atendimento e queimar leads.
              </p>
              <p className="pl-4 border-l-2 border-brand-cyan/50 text-slate-300 italic">
                O volume de contatos via WhatsApp não pode ditar o ritmo da sua operação profissional. O controle precisa estar nas suas mãos.
              </p>
            </div>
          </MotionSection>

        </div>
      </Container>
    </Section>
  );
}
