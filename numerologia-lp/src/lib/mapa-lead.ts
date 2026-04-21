/** Lead da pré-captura (nome, nascimento, WhatsApp) — persiste no browser. */

export type MapaLead = {
  fullName: string;
  birthDate: string;
  whatsappDigits: string;
  capturedAt: string;
};

const STORAGE_KEY = "mapa_numerologico_lead_v1";

/** Checkout Kiwify (Mapa Numerológico). `VITE_CHECKOUT_URL` na Vercel substitui, se quiseres outro link. */
const DEFAULT_CHECKOUT_URL = "https://pay.kiwify.com.br/OAgPf4T";

function getCheckoutBaseUrl(): string {
  const env = (import.meta.env.VITE_CHECKOUT_URL as string | undefined)?.trim();
  return env || DEFAULT_CHECKOUT_URL;
}

export function saveMapaLead(data: Pick<MapaLead, "fullName" | "birthDate" | "whatsappDigits">): MapaLead {
  const lead: MapaLead = {
    ...data,
    capturedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
  } catch {
    /* ignore quota / private mode */
  }
  return lead;
}

export function getMapaLead(): MapaLead | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as MapaLead;
    if (!p?.fullName || !p?.birthDate || !p?.whatsappDigits) return null;
    return p;
  } catch {
    return null;
  }
}

/**
 * Redireciona para a Kiwify (ou `VITE_CHECKOUT_URL`) com query params
 * (a Kiwify pode ignorar params extra; serve para tracking / remarketing).
 */
export function redirectToCheckoutIfConfigured(lead: MapaLead): boolean {
  const base = getCheckoutBaseUrl();
  try {
    const u = new URL(base, window.location.origin);
    u.searchParams.set("name", lead.fullName);
    u.searchParams.set("birthDate", lead.birthDate);
    u.searchParams.set("phone", lead.whatsappDigits);
    window.location.assign(u.toString());
    return true;
  } catch {
    window.location.assign(base);
    return true;
  }
}

export function scrollToOferta() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Link de pagamento (Kiwify por defeito, ou `VITE_CHECKOUT_URL`). */
export function getPaymentHref(): string {
  return getCheckoutBaseUrl();
}
