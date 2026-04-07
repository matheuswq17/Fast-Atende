/**
 * FastAtende CTA helper
 * Troque o número em .env.local — NEXT_PUBLIC_FASTATENDE_WHATSAPP
 * Format: país + DDD + número, sem espaços ou símbolos (ex: 5511999999999)
 */

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_FASTATENDE_WHATSAPP ?? "5511999999999";

export function getWhatsAppLink(message = "Quero mapear minha operação no WhatsApp") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const CTA_LINKS = {
  mapear: getWhatsAppLink("Quero mapear minha operação no WhatsApp"),
  entenderFluxo: "#como-funciona",
  segmentos: "#segmentos",
  faq: "#faq",
} as const;
