"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { VideoShell } from "@/components/media/VideoShell";
import { MascotVideo } from "@/components/media/MascotVideo";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "caos",
    number: "01",
    eyebrow: "O problema",
    title: "Tudo chegando ao mesmo tempo, sem direção.",
    body: "Leads comerciais chegam no mesmo número que dúvidas simples de suporte. Sem separação, o time perde tempo e o cliente perde a paciência. Ninguém sabe o que é urgente.",
    video: "/videos/11_mascote_reacao_caos_controlado.mp4",
    poster: "/posters/11_mascote_reacao_caos_controlado.jpeg",
  },
  {
    id: "leitura",
    number: "02",
    eyebrow: "Leitura e contexto",
    title: "Seu cliente não quer repetir o mesmo problema três vezes.",
    body: "O FastAtende captura o contexto antes do primeiro atendente tocar na conversa. Nome, motivo, histórico — tudo coletado com inteligência e sem desgastar o cliente.",
    video: "/videos/05_mascote_lendo_mensagens.mp4",
    poster: "/posters/05_mascote_lendo_mensagens.jpeg",
  },
  {
    id: "triagem",
    number: "03",
    eyebrow: "Triagem inteligente",
    title: "Cada mensagem vai para o lugar certo, sozinha.",
    body: "Urgências separadas das dúvidas triviais. Suporte de um lado, comercial do outro. Sem depender de alguém para fazer essa triagem toda hora, sem deixar lead esperando.",
    video: "/videos/06_mascote_modo_triagem_scanner.mp4",
    poster: "/posters/06_mascote_modo_triagem_scanner.jpeg",
  },
  {
    id: "fluxos",
    number: "04",
    eyebrow: "Organização dos fluxos",
    title: "Suporte, comercial, agendamento — cada um no seu ritmo.",
    body: "A equipe só recebe o que é de sua competência. Fluxos estruturados, regras definidas, repetição eliminada. A operação ganha velocidade sem perder controle.",
    video: "/videos/07_mascote_organizando_fluxos.mp4",
    poster: "/posters/07_mascote_organizando_fluxos.jpeg",
  },
  {
    id: "handoff",
    number: "05",
    eyebrow: "Handoff para o humano",
    title: "Quando o cliente precisa de um humano, nada se perde.",
    body: "A passagem é feita com todo o histórico da conversa. O atendente entra sabendo o contexto, o problema e o tom da situação. Sem recomeçar do zero. Sem frustração.",
    video: "/videos/08_mascote_handoff_humano.mp4",
    poster: "/posters/08_mascote_handoff_humano.jpeg",
  },
  {
    id: "dashboard",
    number: "06",
    eyebrow: "Visibilidade operacional",
    title: "Sem dados, não há gestão.",
    body: "Quantas mensagens entraram? Qual o tempo médio de resposta? Quais fluxos estão com gargalo? O dashboard entrega visibilidade real para você tomar decisões baseadas em fatos.",
    video: "/videos/09_mascote_apresentando_dashboard.mp4",
    poster: "/posters/09_mascote_apresentando_dashboard.jpeg",
  },
] as const;

type StepId = (typeof STEPS)[number]["id"];

export function ScrollStory() {
  const [activeId, setActiveId] = useState<StepId>(STEPS[0].id);
  const stepRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeStep = STEPS.find((s) => s.id === activeId) ?? STEPS[0];

  const setRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      stepRefs.current[id] = el;
    },
    []
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    STEPS.forEach(({ id }) => {
      const el = stepRefs.current[id];
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            setActiveId(id);
          }
        },
        { threshold: 0.45, rootMargin: "-15% 0px -30% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="como-funciona" className="relative py-24 lg:py-40">
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/2 w-[500px] h-[700px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="mb-20 max-w-xl">
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-4">
            Como funciona
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
            Do caos à<br />
            <span className="text-slate-300">operação estruturada.</span>
          </h2>
        </div>

        {/*
          DESKTOP: 2-column grid.
          Left column = steps (scrolls normally).
          Right column = sticky media (sticks within the grid row).
          The grid row height is driven by the left column content.
          When left column ends, sticky is naturally released.
        */}
        <div className="hidden lg:grid grid-cols-[1fr_380px] gap-16 xl:gap-24">
          {/* LEFT — Steps column */}
          <div>
            {STEPS.map((step) => (
              <div
                key={step.id}
                ref={setRef(step.id)}
                className={cn(
                  "py-16 border-b border-white/6 last:border-b-0 transition-opacity duration-500 min-h-[280px]",
                  activeId === step.id ? "opacity-100" : "opacity-30 hover:opacity-50"
                )}
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-black text-white/[0.06] leading-none mt-1 select-none w-12 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <p
                      className={cn(
                        "text-xs font-bold tracking-widest uppercase mb-3 transition-colors duration-300",
                        activeId === step.id ? "text-brand-cyan" : "text-slate-600"
                      )}
                    >
                      {step.eyebrow}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-lg">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Sticky media column.
              position: sticky keeps this in view while the left column scrolls.
              top: 120px accounts for header + breathing room.
              self-start is critical: without it, the grid cell stretches
              to match the left column height and sticky has no room to work. */}
          <div className="sticky top-[120px] self-start">
            <div className="flex flex-col items-center gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <VideoShell variant="portrait" className="w-[340px]">
                    <MascotVideo
                      src={activeStep.video}
                      poster={activeStep.poster}
                      priority={activeStep.id === STEPS[0].id}
                    />
                  </VideoShell>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex gap-2">
                {STEPS.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => {
                      stepRefs.current[step.id]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    aria-label={`Ir para ${step.eyebrow}`}
                    className={cn(
                      "rounded-full transition-all duration-300",
                      activeId === step.id
                        ? "w-6 h-2 bg-brand-cyan"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                {activeStep.eyebrow}
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE: vertical stack — no sticky */}
        <div className="lg:hidden flex flex-col gap-16">
          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col gap-6">
              <div>
                <p className="text-brand-cyan text-xs font-bold tracking-widest uppercase mb-3">
                  {step.number} — {step.eyebrow}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">{step.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed">{step.body}</p>
              </div>
              <VideoShell variant="portrait" className="w-[240px] mx-auto">
                <MascotVideo src={step.video} poster={step.poster} />
              </VideoShell>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
