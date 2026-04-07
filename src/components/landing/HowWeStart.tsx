import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { MapPin, Workflow, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MapPin,
    number: "01",
    title: "Mapeamento da operação",
    description:
      "Em uma conversa de 30 a 60 minutos, entendemos com precisão o volume de mensagens, os tipos de demanda, quem atende o quê e onde estão os maiores gargalos. Sem formulário genérico.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "Configuração dos fluxos",
    description:
      "Com base no mapeamento, configuramos os fluxos para o seu contexto real — suporte, comercial, agendamento. A equipe revisa e aprova antes de ir ao ar.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Acompanhamento inicial",
    description:
      "Nas primeiras semanas, acompanhamos de perto os resultados, ajustamos o que precisa e garantimos que a equipe está confortável com o novo fluxo.",
  },
];

export function HowWeStart() {
  return (
    <section className="py-24 lg:py-36 border-y border-white/6 bg-white/[0.015]">
      <Container>
        <MotionSection className="mb-16">
          <p className="text-brand-cyan text-sm font-bold tracking-widest uppercase mb-5">
            Como começamos
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.05] max-w-xl">
            Do primeiro contato ao fluxo funcionando.
          </h2>
        </MotionSection>

        <div className="grid md:grid-cols-3 gap-px bg-white/6 rounded-[24px] overflow-hidden">
          {STEPS.map((step, i) => (
            <MotionSection
              key={step.number}
              delay={0.12 * i}
              className="bg-[#060b19] px-8 py-10 lg:px-10 lg:py-14 relative group hover:bg-white/[0.02] transition-colors"
            >
              <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none leading-none">
                {step.number}
              </div>
              <step.icon className="w-9 h-9 text-brand-cyan mb-7" />
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
