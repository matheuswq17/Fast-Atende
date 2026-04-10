import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Team data — easy to edit later
   Order: Victor → Matheus → Henrique
   ───────────────────────────────────────────── */
const TEAM_MEMBERS = [
  {
    name: "Victor Ohanesian",
    role: "Estudante de Medicina · Co-fundador",
    photo: "/team/victor-ohanesian.jpg",
    bio: "Ajuda a traduzir necessidades reais de atendimento, triagem e experiência em operações mais humanas e eficazes.",
    bullets: [
      "Visão prática de atendimento e triagem",
      "Contribui com leitura de contexto humano",
      "Apoia a adaptação para saúde e clínicas",
    ],
    cta: "Ver papel no time",
    accentHue: 200,
    objectPosition: "object-top",
  },
  {
    name: "Matheus Xavier",
    role: "Engenheiro de Software · Co-fundador",
    photo: "/team/matheus-xavier.png",
    bio: "Responsável pela arquitetura técnica, automações, fluxos, integrações e evolução do produto FastAtende.",
    bullets: [
      "Estrutura os fluxos e a lógica da operação",
      "Conecta automação, produto e implantação",
      "Conduz a parte técnica da solução",
    ],
    cta: "Conhecer atuação",
    accentHue: 189,
    objectPosition: "object-[50%_20%]",
  },
  {
    name: "Henrique Busch",
    role: "Estudante de Medicina · Co-fundador",
    photo: "/team/henrique-busch.png",
    bio: "Contribui para estruturar a FastAtende com foco em jornada do usuário, clareza de comunicação e aderência operacional.",
    bullets: [
      "Apoio na leitura de jornada e contexto",
      "Contribui para fluxos mais naturais",
      "Ajuda na aderência por segmento",
    ],
    cta: "Entender contribuição",
    accentHue: 195,
    objectPosition: "object-top",
  },
];

/* ─────────────────────────────────────────────
   Check icon (shared)
   ───────────────────────────────────────────── */
function CheckIcon() {
  return (
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
  );
}

/* ─────────────────────────────────────────────
   Team Section
   ───────────────────────────────────────────── */
export function TeamSection() {
  return (
    <section id="time" className="relative py-24 lg:py-40">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-cyan/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
            Equipe
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Time fundador da FastAtende
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Tecnologia, operação e visão prática de atendimento trabalhando
            juntas para construir uma operação de WhatsApp mais organizada,
            humana e escalável.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="relative group flex flex-col p-[1px] overflow-hidden rounded-[24px] transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Animated border — subtle spinning conic gradient */}
              <div
                className="absolute inset-[-100%] animate-[spin_10s_linear_infinite] opacity-20 group-hover:opacity-80 transition-opacity duration-700"
                style={{
                  background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 60%, hsl(${member.accentHue}, 92%, 58%, 0.7) 100%)`,
                }}
              />

              {/* Inner card */}
              <div
                className={cn(
                  "relative z-10 h-full flex flex-col items-center p-8 rounded-[23px]",
                  "bg-[#0A101C] shadow-[inset_0_-8px_24px_-8px_rgba(255,255,255,0.08)]"
                )}
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 100%, hsl(${member.accentHue}, 80%, 20%, 0.07) 0%, transparent 70%)`,
                }}
              >
                {/* Photo avatar */}
                <div className="mb-6 relative">
                  <div
                    className="relative w-32 h-32 rounded-full overflow-hidden border-[3px] shadow-lg"
                    style={{
                      borderColor: `hsl(${member.accentHue}, 70%, 35%)`,
                      boxShadow: `0 0 28px -6px hsl(${member.accentHue}, 92%, 45%, 0.35), inset 0 0 12px -4px hsl(${member.accentHue}, 92%, 58%, 0.1)`,
                    }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={cn("object-cover", member.objectPosition)}
                      sizes="128px"
                    />
                  </div>
                  {/* Decorative ring on hover */}
                  <div
                    className="absolute inset-[-6px] rounded-full border border-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: `0 0 24px -4px hsl(${member.accentHue}, 92%, 58%, 0.2)`,
                    }}
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white text-center leading-tight">
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mt-1.5 text-center"
                  style={{ color: `hsl(${member.accentHue}, 80%, 60%)` }}
                >
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-[13px] text-slate-400 text-center leading-relaxed mt-4 max-w-[260px]">
                  {member.bio}
                </p>

                <hr className="w-full h-px bg-white/10 border-0 my-6" />

                {/* Bullets */}
                <ul className="flex flex-col gap-3 w-full flex-grow">
                  {member.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="flex items-center justify-center min-w-5 w-5 h-5 mt-0.5 rounded-full shrink-0"
                        style={{
                          backgroundColor: `hsl(${member.accentHue}, 92%, 58%)`,
                        }}
                      >
                        <CheckIcon />
                      </span>
                      <span className="text-[13px] text-slate-300 leading-snug">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA + accent bar */}
                <div className="w-full mt-8 flex flex-col items-center gap-4">
                  <button
                    type="button"
                    className={cn(
                      "w-full py-2.5 rounded-full text-sm font-semibold text-white/90",
                      "transition-all duration-300",
                      "bg-white/[0.06] border border-white/[0.08]",
                      "hover:bg-white/[0.1] hover:border-white/[0.15]",
                      "shadow-[inset_0_-2px_12px_-4px_rgba(255,255,255,0.15)]"
                    )}
                  >
                    {member.cta}
                  </button>

                  {/* Bottom gradient bar */}
                  <div
                    className="w-full h-1 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, hsl(${member.accentHue}, 92%, 58%), transparent)`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
