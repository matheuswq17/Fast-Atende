import { Container } from '@/components/layout/Container';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const COMPARISON_FEATURES = [
  {
    feature: 'Organização de mensagens',
    fastAtende: true,
    manual: false,
  },
  {
    feature: 'Roteamento automático',
    fastAtende: true,
    manual: false,
  },
  {
    feature: 'Contexto e histórico do cliente',
    fastAtende: true,
    manual: false,
  },
  {
    feature: 'Transferência para humano',
    fastAtende: true,
    manual: false,
  },
  {
    feature: 'Dashboard e relatórios',
    fastAtende: true,
    manual: false,
  },
  {
    feature: 'Custo transparente',
    fastAtende: true,
    manual: false,
  },
];

interface ComparisonSectionProps {
  className?: string;
}

export function ComparisonSection({ className }: ComparisonSectionProps) {
  return (
    <section
      id="comparacao"
      className={cn('relative py-24 lg:py-40', className)}
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              FastAtende vs WhatsApp Manual
            </h2>
            <p className="text-lg text-slate-400">
              Veja por que empresas escolhem estruturar suas operações conosco.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Header row */}
              <div />
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">FastAtende</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-400">
                  WhatsApp Manual
                </h3>
              </div>

              {/* Features */}
              {COMPARISON_FEATURES.map((item, index) => (
                <div key={index} className="contents">
                  <div className="flex items-center py-5 border-b border-white/10">
                    <span className="text-slate-300 font-medium">
                      {item.feature}
                    </span>
                  </div>
                  <div className="flex items-center justify-center py-5 border-b border-white/10">
                    {item.fastAtende ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-cyan/10">
                        <Check className="w-5 h-5 text-brand-cyan" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500/10">
                        <X className="w-5 h-5 text-slate-500" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center py-5 border-b border-white/10">
                    {item.manual ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-cyan/10">
                        <Check className="w-5 h-5 text-brand-cyan" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500/10">
                        <X className="w-5 h-5 text-slate-500" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {COMPARISON_FEATURES.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]"
              >
                <p className="text-sm font-medium text-slate-300 mb-3">
                  {item.feature}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-xs text-slate-400">FastAtende</span>
                    {item.fastAtende ? (
                      <Check className="w-4 h-4 text-brand-cyan" />
                    ) : (
                      <X className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-xs text-slate-400">WhatsApp</span>
                    {item.manual ? (
                      <Check className="w-4 h-4 text-brand-cyan" />
                    ) : (
                      <X className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">
              Pronto para transformar sua operação no WhatsApp?
            </p>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 bg-brand-cyan text-[#060b19] px-8 py-4 hover:brightness-110 active:scale-95 shadow-[0_0_40px_rgba(0,210,255,0.25)]"
            >
              Mapeie sua operação →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
