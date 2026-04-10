'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type WhatsAppVolumeLevel = 'low' | 'medium' | 'high' | 'very-high';
type MainChallenge = 'routing' | 'speed' | 'context' | 'reporting' | 'integration' | 'other';
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface LeadCaptureFormProps {
  onSuccess?: () => void;
  redirectUrl?: string;
  className?: string;
}

const VOLUME_OPTIONS = [
  { value: 'low', label: '< 100 mensagens/dia' },
  { value: 'medium', label: '100-500 mensagens/dia' },
  { value: 'high', label: '500-2000 mensagens/dia' },
  { value: 'very-high', label: '> 2000 mensagens/dia' },
];

const CHALLENGE_OPTIONS = [
  { value: 'routing', label: 'Roteamento inteligente de mensagens' },
  { value: 'speed', label: 'Velocidade de resposta' },
  { value: 'context', label: 'Contexto e histórico do cliente' },
  { value: 'reporting', label: 'Relatórios e análises' },
  { value: 'integration', label: 'Integração com outras ferramentas' },
  { value: 'other', label: 'Outro' },
];

export function LeadCaptureForm({
  onSuccess,
  redirectUrl,
  className,
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    whatsappVolume: 'medium' as WhatsAppVolumeLevel,
    mainChallenge: 'routing' as MainChallenge,
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    // Validation
    if (!formData.companyName.trim()) {
      setError('Por favor, informe o nome da empresa');
      setStatus('idle');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Por favor, informe um email válido');
      setStatus('idle');
      return;
    }

    try {
      // Send to WhatsApp API or your backend
      const message = `
Nova solicitação de mapeamento:
- Empresa: ${formData.companyName}
- Email: ${formData.email}
- Telefone: ${formData.phone || 'Não informado'}
- Volume: ${VOLUME_OPTIONS.find((o) => o.value === formData.whatsappVolume)?.label}
- Desafio: ${CHALLENGE_OPTIONS.find((o) => o.value === formData.mainChallenge)?.label}
      `.trim();

      const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(
        message
      )}`;

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      if (onSuccess) onSuccess();

      // Redirect to WhatsApp or specified URL after success
      setTimeout(() => {
        if (redirectUrl) {
          window.location.href = redirectUrl;
        } else {
          window.open(whatsappLink, '_blank');
        }
      }, 1500);
    } catch (err) {
      setStatus('error');
      setError('Erro ao enviar formulário. Tente novamente.');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={cn(
        'w-full max-w-md mx-auto space-y-5 p-6 md:p-8 rounded-2xl',
        'bg-white/[0.03] border border-white/[0.08]',
        'backdrop-blur-sm',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-1">
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-slate-300"
        >
          Nome da empresa *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          placeholder="FastAtende"
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-white/5 border border-white/15',
            'text-white placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200'
          )}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          placeholder="contato@empresa.com"
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-white/5 border border-white/15',
            'text-white placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200'
          )}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
          Telefone (opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          placeholder="(11) 99999-9999"
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-white/5 border border-white/15',
            'text-white placeholder:text-slate-500',
            'focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200'
          )}
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="whatsappVolume"
          className="block text-sm font-medium text-slate-300"
        >
          Volume de mensagens por dia
        </label>
        <select
          id="whatsappVolume"
          name="whatsappVolume"
          value={formData.whatsappVolume}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-white/5 border border-white/15',
            'text-white',
            'focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200',
            'appearance-none'
          )}
        >
          {VOLUME_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="mainChallenge"
          className="block text-sm font-medium text-slate-300"
        >
          Qual é seu principal desafio? *
        </label>
        <select
          id="mainChallenge"
          name="mainChallenge"
          value={formData.mainChallenge}
          onChange={handleChange}
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            'w-full px-4 py-3 rounded-lg',
            'bg-white/5 border border-white/15',
            'text-white',
            'focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-all duration-200',
            'appearance-none'
          )}
        >
          {CHALLENGE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
          >
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-8 gap-4"
          >
            <CheckCircle2 className="w-12 h-12 text-brand-cyan" />
            <div className="text-center">
              <p className="text-lg font-semibold text-white mb-1">Obrigado!</p>
              <p className="text-sm text-slate-400">
                Entraremos em contato em breve.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'w-full py-3 px-4 rounded-lg font-semibold',
              'bg-brand-cyan text-[#060b19]',
              'hover:brightness-110 active:scale-95',
              'disabled:opacity-70 disabled:cursor-not-allowed',
              'transition-all duration-200',
              'flex items-center justify-center gap-2'
            )}
          >
            {status === 'loading' ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-[#060b19] border-t-transparent rounded-full"
                />
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <p className="text-xs text-slate-500 text-center pt-2">
        Respeitamos sua privacidade. Nunca compartilharemos seus dados.
      </p>
    </motion.form>
  );
}
