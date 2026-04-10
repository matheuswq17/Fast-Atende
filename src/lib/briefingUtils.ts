import { BRIEFING_STEPS } from "./briefingSteps";

export const LOCAL_STORAGE_KEY = "fastatende_briefing_v1";

export type FormData = Record<string, string | string[] | boolean>;

export function saveToLocalStorage(data: FormData, step: number): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ data, step, updatedAt: Date.now() }));
  } catch {
    // silently fail
  }
}

export function loadFromLocalStorage(): { data: FormData; step: number; updatedAt: number } | null {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearLocalStorage(): void {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch {
    // silently fail
  }
}

export function generateCSV(data: FormData): string {
  const rows: string[] = ["Seção,Campo,Resposta"];

  for (const step of BRIEFING_STEPS) {
    for (const field of step.fields) {
      const val = data[field.id];
      let answer = "";
      if (Array.isArray(val)) {
        answer = val.join(" | ");
      } else if (typeof val === "boolean") {
        answer = val ? "Sim" : "Não";
      } else {
        answer = val ?? "";
      }
      const safe = (s: string) => `"${s.replace(/"/g, '""')}"`;
      rows.push(`${safe(step.title)},${safe(field.label)},${safe(answer)}`);
    }
  }

  return rows.join("\n");
}

export function downloadCSV(data: FormData, filename: string): void {
  const csv = generateCSV(data);
  const bom = "\uFEFF"; // UTF-8 BOM for Excel compatibility
  const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

export function openGmailDraft(companyName: string): void {
  const to = "fastatende.comercial@gmail.com";
  const subject = encodeURIComponent(`Briefing FastAtende - ${companyName || "Empresa"}`);
  const body = encodeURIComponent(
    "Olá,\n\nSegue em anexo o briefing preenchido da operação para avaliação da FastAtende.\n\n⚠️ IMPORTANTE: Por favor, anexe o arquivo CSV que foi baixado automaticamente na sua pasta de Downloads antes de enviar este e-mail.\n\nAtenciosamente,"
  );
  window.open(`https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`, "_blank");
}
