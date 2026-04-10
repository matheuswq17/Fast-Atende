"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BRIEFING_STEPS, BriefingField } from "@/lib/briefingSteps";
import {
  FormData,
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
  downloadCSV,
  openGmailDraft,
} from "@/lib/briefingUtils";
import { CheckCircle2, ChevronLeft, ChevronRight, Download, Trash2, RotateCcw, Save } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = BRIEFING_STEPS.length;

// ─── Individual field renderer ───────────────────────────────────────────────
function FieldInput({ field, value, onChange }: { field: BriefingField; value: string | string[] | boolean; onChange: (v: string | string[] | boolean) => void }) {
  const base = "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/60 focus:bg-white/[0.07] focus:ring-1 focus:ring-brand-cyan/30 transition-all duration-200 text-sm";

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.id}
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        rows={4}
        className={cn(base, "resize-none leading-relaxed")}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select
        id={field.id}
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className={cn(base, "cursor-pointer appearance-none bg-[#0d1829]")}
      >
        <option value="">Selecione uma opção</option>
        {field.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    );
  }

  if (field.type === "radio") {
    return (
      <div className="flex flex-col gap-3">
        {field.options?.map((opt) => (
          <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
            <div className={cn(
              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0",
              value === opt.value ? "border-brand-cyan" : "border-white/20 group-hover:border-white/40"
            )}>
              {value === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />}
            </div>
            <input
              type="radio"
              name={field.id}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
          </label>
        ))}
      </div>
    );
  }

  if (field.type === "checkbox-group") {
    const checked = Array.isArray(value) ? value : [];
    const toggle = (v: string) => {
      const next = checked.includes(v) ? checked.filter((x) => x !== v) : [...checked, v];
      onChange(next);
    };
    return (
      <div className="flex flex-col gap-3">
        {field.options?.map((opt) => (
          <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
            <div className={cn(
              "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 shrink-0",
              checked.includes(opt.value) ? "border-brand-cyan bg-brand-cyan/20" : "border-white/20 group-hover:border-white/40"
            )}>
              {checked.includes(opt.value) && <CheckCircle2 className="w-3 h-3 text-brand-cyan" />}
            </div>
            <input
              type="checkbox"
              value={opt.value}
              checked={checked.includes(opt.value)}
              onChange={() => toggle(opt.value)}
              className="sr-only"
            />
            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
          </label>
        ))}
      </div>
    );
  }

  if (field.type === "checkbox") {
    return (
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className={cn(
          "w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all duration-200 shrink-0",
          value === true ? "border-brand-cyan bg-brand-cyan/20" : "border-white/20 group-hover:border-white/40"
        )}>
          {value === true && <CheckCircle2 className="w-3 h-3 text-brand-cyan" />}
        </div>
        <input
          type="checkbox"
          checked={value === true}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">{field.label}</span>
      </label>
    );
  }

  return (
    <input
      id={field.id}
      type={field.type}
      value={(value as string) ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={field.placeholder}
      className={base}
    />
  );
}

// ─── Review screen ───────────────────────────────────────────────────────────
function ReviewScreen({ data, onBack, onSubmit }: { data: FormData; onBack: () => void; onSubmit: () => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Revisão do briefing</h2>
        <p className="text-slate-400 text-sm">Confira tudo antes de exportar. Clique em qualquer seção para editar.</p>
      </div>
      {BRIEFING_STEPS.map((step) => (
        <div key={step.id} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">{step.icon}</span>
            <h3 className="font-bold text-white">{step.title}</h3>
          </div>
          <div className="space-y-3">
            {step.fields.map((field) => {
              const val = data[field.id];
              if (!val || (Array.isArray(val) && val.length === 0)) return null;
              let display = "";
              if (Array.isArray(val)) display = val.join(", ");
              else if (typeof val === "boolean") display = val ? "✓ Autorizado" : "";
              else display = val;
              if (!display) return null;
              return (
                <div key={field.id} className="flex gap-3 text-sm">
                  <span className="text-slate-500 shrink-0 w-48 leading-relaxed">{field.label}</span>
                  <span className="text-slate-300 leading-relaxed">{display}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex gap-4 pt-4">
        <button onClick={onBack} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-all duration-200 text-sm font-medium">
          <ChevronLeft className="w-4 h-4" /> Voltar e editar
        </button>
        <button onClick={onSubmit} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-[#060b19] font-bold hover:opacity-90 transition-all duration-200 text-sm">
          <Download className="w-4 h-4" /> Baixar CSV e abrir Gmail
        </button>
      </div>
    </div>
  );
}

// ─── Export success screen ────────────────────────────────────────────────────
function ExportScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-12 space-y-8 max-w-xl mx-auto">
      <div className="w-20 h-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-10 h-10 text-brand-cyan" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white mb-3">Briefing exportado!</h2>
        <p className="text-slate-400">O CSV foi baixado e o rascunho do Gmail foi aberto.</p>
      </div>

      <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-6 text-left space-y-4">
        <p className="text-brand-cyan font-bold text-sm uppercase tracking-wider">📎 Próximo passo — anexe o CSV</p>
        <ol className="space-y-3">
          {[
            "O arquivo CSV foi baixado automaticamente na sua pasta de Downloads.",
            "O Gmail foi aberto com um rascunho pronto para fastatende.comercial@gmail.com.",
            "Abra o rascunho do Gmail e clique no ícone de anexo (📎).",
            "Encontre o arquivo CSV na pasta Downloads e anexe-o.",
            "Revise o e-mail e clique em Enviar.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-300">
              <span className="w-6 h-6 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-xs text-slate-500 border-t border-white/8 pt-4">
          ⚠️ O arquivo foi gerado, mas o navegador não consegue anexar arquivos automaticamente no Gmail. O anexo precisa ser feito manualmente.
        </p>
      </div>

      <button onClick={onReset} className="flex items-center gap-2 mx-auto px-6 py-3 rounded-xl border border-white/15 text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200 text-sm">
        <Trash2 className="w-4 h-4" /> Limpar formulário e começar de novo
      </button>
    </div>
  );
}

// ─── Main briefing form ───────────────────────────────────────────────────────
export function BriefingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [showReview, setShowReview] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [savedLabel, setSavedLabel] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showResume, setShowResume] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Load persisted data
  useEffect(() => {
    const saved = loadFromLocalStorage();
    if (saved && Object.keys(saved.data).length > 0) {
      setShowResume(true);
      setHasSaved(true);
    }
  }, []);

  const resumeForm = () => {
    const saved = loadFromLocalStorage();
    if (saved) {
      setFormData(saved.data);
      setCurrentStep(saved.step);
    }
    setShowResume(false);
  };

  const dismissResume = () => setShowResume(false);

  // Auto-save
  const autoSave = useCallback((data: FormData, step: number) => {
    saveToLocalStorage(data, step);
    setSavedLabel(true);
    setTimeout(() => setSavedLabel(false), 2000);
  }, []);

  const updateField = (fieldId: string, value: string | string[] | boolean) => {
    const next = { ...formData, [fieldId]: value };
    setFormData(next);
    autoSave(next, currentStep);
    if (errors[fieldId]) setErrors((e) => { const copy = { ...e }; delete copy[fieldId]; return copy; });
  };

  const scrollTop = () => topRef.current?.scrollIntoView({ behavior: "smooth" });

  const validate = (): boolean => {
    const step = BRIEFING_STEPS[currentStep];
    const newErrors: Record<string, string> = {};
    for (const field of step.fields) {
      if (!field.required) continue;
      const val = formData[field.id];
      const empty = val === undefined || val === null || val === "" || val === false || (Array.isArray(val) && val.length === 0);
      if (empty) newErrors[field.id] = "Campo obrigatório";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (!validate()) return;
    if (currentStep === TOTAL_STEPS - 1) {
      setShowReview(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
    scrollTop();
  };

  const goBack = () => {
    if (showReview) { setShowReview(false); return; }
    setCurrentStep((s) => Math.max(0, s - 1));
    scrollTop();
  };

  const handleExport = () => {
    const companyName = (formData["nome_fantasia"] as string) || (formData["nome_empresa"] as string) || "Empresa";
    downloadCSV(formData, `briefing-fastatende-${companyName.toLowerCase().replace(/\s+/g, "-")}.csv`);
    setTimeout(() => openGmailDraft(companyName), 800);
    setShowExport(true);
    setShowReview(false);
    scrollTop();
  };

  const handleReset = () => {
    clearLocalStorage();
    setFormData({});
    setCurrentStep(0);
    setShowExport(false);
    setShowReview(false);
    setHasSaved(false);
    scrollTop();
  };

  const progressPct = showReview || showExport ? 100 : Math.round(((currentStep) / TOTAL_STEPS) * 100);
  const step = BRIEFING_STEPS[currentStep];

  return (
    <div ref={topRef} className="min-h-screen">
      {/* Resume banner */}
      {showResume && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl bg-[#0d1829] border border-brand-cyan/30 rounded-2xl p-4 shadow-2xl shadow-brand-cyan/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">Continuar de onde parou?</p>
            <p className="text-slate-400 text-xs mt-0.5">Encontramos um briefing salvo localmente.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button onClick={dismissResume} className="px-4 py-2 rounded-xl border border-white/10 text-slate-400 text-xs hover:text-white transition-colors">Ignorar</button>
            <button onClick={resumeForm} className="px-4 py-2 rounded-xl bg-brand-cyan text-[#060b19] text-xs font-bold hover:opacity-90 transition-all">Continuar</button>
          </div>
        </div>
      )}

      {/* Auto-save indicator */}
      {savedLabel && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 bg-[#0d1829] border border-white/10 rounded-xl px-3 py-2 text-xs text-brand-cyan shadow-lg animate-pulse">
          <Save className="w-3 h-3" /> Progresso salvo
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {!showExport ? (
          <div className="flex gap-10">
            {/* Stepper sidebar (desktop) */}
            <aside className="hidden lg:flex flex-col gap-1 w-60 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar pb-4">
              {BRIEFING_STEPS.map((s, i) => {
                const done = i < currentStep || showReview;
                const active = i === currentStep && !showReview;
                return (
                  <div key={s.id} className="flex items-center gap-3 px-3 py-2.5 rounded-xl group cursor-default">
                    <div className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-200",
                      done ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40" :
                      active ? "bg-brand-cyan text-[#060b19]" :
                      "bg-white/5 text-slate-500 border border-white/10"
                    )}>
                      {done ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className={cn(
                      "text-xs leading-snug transition-colors",
                      active ? "text-white font-semibold" : done ? "text-slate-400" : "text-slate-600"
                    )}>
                      {s.title}
                    </span>
                  </div>
                );
              })}
              {/* Review step */}
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl">
                <div className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200",
                  showReview ? "bg-brand-cyan text-[#060b19]" : "bg-white/5 border border-white/10"
                )}>
                  <span className="text-xs font-bold text-slate-500">{TOTAL_STEPS + 1}</span>
                </div>
                <span className={cn("text-xs transition-colors", showReview ? "text-white font-semibold" : "text-slate-600")}>Revisão final</span>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>{showReview ? "Revisão" : `Etapa ${currentStep + 1} de ${TOTAL_STEPS}`}</span>
                  <span className="text-brand-cyan font-semibold">{progressPct}% concluído</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-cyan rounded-full transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Step content */}
              {showReview ? (
                <ReviewScreen data={formData} onBack={goBack} onSubmit={handleExport} />
              ) : (
                <div className="space-y-8">
                  {/* Step header */}
                  <div className="pb-6 border-b border-white/8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{step.icon}</span>
                      <div>
                        <p className="text-brand-cyan text-xs font-bold tracking-wider uppercase">Etapa {currentStep + 1}</p>
                        <h2 className="text-2xl lg:text-3xl font-black text-white">{step.title}</h2>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Fields */}
                  <div className="space-y-7">
                    {step.fields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        {field.type !== "checkbox" && (
                          <label htmlFor={field.id} className="block text-sm font-medium text-slate-200">
                            {field.label}
                            {field.required && <span className="text-brand-cyan ml-1">*</span>}
                          </label>
                        )}
                        {field.hint && <p className="text-xs text-slate-500">{field.hint}</p>}
                        <FieldInput
                          field={field}
                          value={formData[field.id] ?? (field.type === "checkbox-group" ? [] : field.type === "checkbox" ? false : "")}
                          onChange={(v) => updateField(field.id, v)}
                        />
                        {errors[field.id] && (
                          <p className="text-xs text-red-400 flex items-center gap-1">
                            <span>⚠</span> {errors[field.id]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3 pt-6 border-t border-white/8">
                    {currentStep > 0 && (
                      <button
                        onClick={goBack}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-all duration-200 text-sm font-medium"
                      >
                        <ChevronLeft className="w-4 h-4" /> Voltar
                      </button>
                    )}
                    <button
                      onClick={goNext}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-[#060b19] font-bold hover:opacity-90 transition-all duration-200 text-sm shadow-lg shadow-brand-cyan/10"
                    >
                      {currentStep === TOTAL_STEPS - 1 ? "Revisar e exportar" : "Próxima etapa"}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clear button */}
                  {hasSaved && (
                    <div className="flex justify-center pt-2">
                      <button
                        onClick={() => { if (confirm("Tem certeza? Isso apagará todo o progresso salvo.")) handleReset(); }}
                        className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-red-400 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" /> Limpar formulário
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <ExportScreen onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
