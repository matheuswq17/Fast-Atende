"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MotionSection } from "@/components/motion/MotionSection";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Isso é um chatbot?",
    a: "Não apenas. O FastAtende é uma camada de triagem, qualificação e roteamento que organiza o fluxo de mensagens antes do atendente humano entrar. Não é um bot que tenta resolver tudo — é uma estrutura que garante que o humano entra na hora certa, com o contexto certo.",
  },
  {
    q: "Vou perder o toque humano no atendimento?",
    a: "O FastAtende é projetado exatamente para o contrário. O handoff para o humano é feito com histórico completo, contexto da situação e perfil do contato. Seu time entra sabendo exatamente o que precisa — e o cliente sente que está sendo bem atendido desde o início.",
  },
  {
    q: "Quanto tempo leva para a operação sair do ar?",
    a: "O mapeamento leva de 1 a 3 dias úteis. A configuração inicial dos fluxos costuma levar outra semana. Operações mais simples podem estar rodando em menos de 15 dias do primeiro contato.",
  },
  {
    q: "Preciso de conta empresa no WhatsApp?",
    a: "Para operações de médio e alto volume, trabalhamos com WhatsApp Business API. Podemos ajudar na homologação caso necessário — isso faz parte do processo de onboarding.",
  },
  {
    q: "Funciona para o meu segmento?",
    a: "Trabalhamos com clínicas e consultórios, equipes comerciais, centrais de suporte e negócios com alto volume de WhatsApp. Se o WhatsApp é um canal de operação real para você, provavelmente temos um fluxo configurado ou podemos construir um.",
  },
  {
    q: "Como é o suporte depois que a operação está no ar?",
    a: "Acompanhamos de perto nas primeiras semanas para ajustar o que for necessário. Depois, você tem acesso a um canal de suporte direto para dúvidas e configurações. Não é um produto de autoatendimento — estamos junto.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-40">
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <MotionSection className="lg:sticky lg:top-32">
            <p className="text-brand-cyan text-sm font-bold tracking-widest uppercase mb-5">FAQ</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.05]">
              Perguntas frequentes.
            </h2>
            <p className="mt-5 text-slate-400 text-lg leading-relaxed">
              Não encontrou o que precisava? Fale com a gente direto pelo WhatsApp.
            </p>
          </MotionSection>

          <div className="flex flex-col divide-y divide-white/8">
            {FAQS.map((faq, i) => (
              <MotionSection key={i} delay={0.05 * i} className="py-0">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <span
                    className={cn(
                      "text-base font-semibold leading-snug transition-colors",
                      open === i ? "text-white" : "text-slate-300 group-hover:text-white"
                    )}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 mt-0.5">
                    {open === i ? (
                      <Minus className="w-5 h-5 text-brand-cyan" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-slate-400 text-sm leading-[1.8]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MotionSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
