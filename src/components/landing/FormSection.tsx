'use client';

import { Container } from '@/components/layout/Container';
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm';
import { cn } from '@/lib/utils';

interface FormSectionProps {
  className?: string;
}

export function FormSection({ className }: FormSectionProps) {
  return (
    <section
      id="form"
      className={cn('relative py-24 lg:py-40', className)}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/8 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Mapeie sua operação
            </h2>
            <p className="text-lg text-slate-400">
              Descreva seu caso e entraremos em contato para estruturar a melhor solução para sua empresa.
            </p>
          </div>

          {/* Form */}
          <LeadCaptureForm />
        </div>
      </Container>
    </section>
  );
}
