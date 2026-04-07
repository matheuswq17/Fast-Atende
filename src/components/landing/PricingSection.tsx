import { Container } from "@/components/layout/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { CTA_LINKS } from "@/lib/cta";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Essencial",
    focus: "Negócios simples (pequeno volume)",
    setup: "R$ 1.590",
    monthly: "R$ 259,90",
    features: [
      "Fluxo básico de atendimento",
      "FAQ e respostas automáticas",
      "1 serviço principal",
    ],
    ctaText: "Quero entender o Essencial",
    popular: false,
  },
  {
    name: "Profissional",
    focus: "Clínicas, estética, restaurantes e operações com múltiplos serviços",
    setup: "R$ 2.290",
    monthly: "R$ 299,90",
    features: [
      "Tudo do Essencial",
      "Agendamento automático e qualificação de leads",
      "Múltiplos funis e serviços",
      "Suporte em tempo real na implantação",
    ],
    ctaText: "Quero avaliar o Profissional",
    popular: true,
  },
  {
    name: "Avançado",
    focus: "Grandes operações (alto volume e lógica complexa)",
    setup: "R$ 3.290",
    monthly: "R$ 389,90",
    features: [
      "Tudo do Profissional",
      "Integrações externas (CRM, ERP, prontuários)",
      "Transcrição por voz e lógica complexa",
    ],
    ctaText: "Quero falar do Avançado",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="planos" className="relative py-24 lg:py-40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Planos e investimento transparente
          </h2>
          <p className="text-lg text-slate-400">
            Sem taxas ocultas. Valores de implantação sob medida para a sua
            realidade.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative group flex flex-col p-[1px] overflow-hidden rounded-[24px] transition-transform duration-300",
                plan.popular ? "scale-105 shadow-[0_0_40px_-10px_rgba(0,210,255,0.3)] z-10" : "hover:scale-[1.02] z-0"
              )}
            >
              {/* Animated border using conic-gradient */}
              {plan.popular ? (
                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,rgba(0,210,255,0.8)_100%)] opacity-100" />
              ) : (
                <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,rgba(255,255,255,0.2)_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Inner Card content container */}
              <div className="relative z-10 h-full flex flex-col p-8 rounded-[23px] bg-[#0A101C] bg-[radial-gradient(ellipse_at_bottom,rgba(0,210,255,0.05)_0%,transparent_70%)] shadow-[inset_0_-8px_24px_-8px_rgba(255,255,255,0.1)]">
                {/* Header */}
                <div className="flex justify-between items-start min-h-[4rem]">
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-none">
                      {plan.name}
                    </h3>
                    <p className="text-[13px] text-slate-400 mt-2 max-w-[200px] leading-snug">
                      {plan.focus}
                    </p>
                  </div>
                  {plan.popular && (
                    <span className="bg-brand-cyan text-[#060b19] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shrink-0">
                      Mais usado
                    </span>
                  )}
                </div>

                <hr className="w-full h-px bg-white/10 border-0 my-6" />

                {/* Price block */}
                <div className="flex flex-col gap-2 mb-2">
                  <div className="flex justify-between items-baseline text-sm">
                    <span className="text-slate-400">Implantação</span>
                    <span className="text-white font-medium">{plan.setup}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm">
                    <span className="text-slate-400">Mensalidade</span>
                    <span className="text-brand-cyan text-2xl font-black">
                      {plan.monthly}
                    </span>
                  </div>
                </div>

                <hr className="w-full h-px bg-white/10 border-0 my-6" />

                {/* Features List */}
                <ul className="flex flex-col gap-4 flex-grow mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="flex items-center justify-center min-w-5 w-5 h-5 mt-0.5 rounded-full bg-brand-cyan shrink-0">
                        <svg
                          className="w-3 h-3 text-[#060b19]"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-[14px] text-slate-300 leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA */}
                <CTAButton
                  href={CTA_LINKS.mapear}
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-auto w-full justify-center rounded-full text-sm font-semibold shadow-[inset_0_-2px_15px_-4px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform"
                >
                  {plan.ctaText}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-500 bg-white/[0.03] border border-white/[0.05] inline-block px-6 py-3 rounded-full">
            50% de sinal na implantação. Custos da API do Meta faturados
            separadamente conforme volume e uso.
          </p>
        </div>
      </Container>
    </section>
  );
}
