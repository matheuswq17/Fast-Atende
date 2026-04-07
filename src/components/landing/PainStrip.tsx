import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { AlertCircle, Shuffle, EyeOff } from "lucide-react";

const pains = [
  {
    icon: AlertCircle,
    title: "Leads esfriando",
    body: "Contatos comerciais sem resposta rápida viram concorrência. Cada minuto sem triagem é uma oportunidade desperdiçada.",
  },
  {
    icon: Shuffle,
    title: "Suporte misturado com comercial",
    body: "Sem separação, o vendedor responde dúvida de produto e o suporte fecha lead. A equipe se perde e o cliente desiste.",
  },
  {
    icon: EyeOff,
    title: "Zero visibilidade",
    body: "Você não sabe o que ocupa sua equipe, quanto tempo cada resposta demora nem quais fluxos estão com gargalo.",
  },
];

export function PainStrip() {
  return (
    <section className="border-y border-white/6 bg-white/[0.015]">
      <Container>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {pains.map((pain, i) => (
            <MotionSection key={pain.title} delay={i * 0.1} className="px-6 py-10 md:px-8 md:py-12">
              <pain.icon className="w-7 h-7 text-brand-cyan mb-5 opacity-90" />
              <h3 className="text-lg font-bold text-white mb-2">{pain.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pain.body}</p>
            </MotionSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
