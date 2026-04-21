import type { MapaLead } from "./mapa-lead";

/** URL da Web App publicada (Extensions → Apps Script → Deploy). */
function getSheetsWebAppUrl(): string | undefined {
  return (import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL as string | undefined)?.trim() || undefined;
}

export function isGoogleSheetsLeadExportConfigured(): boolean {
  return Boolean(getSheetsWebAppUrl());
}

/**
 * Envia uma linha para a planilha (fire-and-forget).
 * Usa `mode: "no-cors"` para contornar limitações de CORS da Web App do Apps Script.
 */
export function submitLeadToGoogleSheets(lead: MapaLead): void {
  const url = getSheetsWebAppUrl();
  if (!url) return;

  const payload = {
    fullName: lead.fullName,
    birthDate: lead.birthDate,
    whatsapp: lead.whatsappDigits,
    capturedAt: lead.capturedAt,
  };

  const body = new URLSearchParams();
  body.set("data", JSON.stringify(payload));

  void fetch(url, {
    method: "POST",
    mode: "no-cors",
    body,
  }).catch(() => {
    /* falha de rede — lead continua no localStorage */
  });
}
