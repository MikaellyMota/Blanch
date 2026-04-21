/** Lead da pré-captura (nome, e-mail, nascimento, WhatsApp) — persiste no browser. */

export type MapaLead = {
  fullName: string;
  email: string;
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

export function saveMapaLead(data: Pick<MapaLead, "fullName" | "email" | "birthDate" | "whatsappDigits">): MapaLead {
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
    if (!p?.fullName || !p?.email || !p?.birthDate || !p?.whatsappDigits) return null;
    return p;
  } catch {
    return null;
  }
}

/** URL do checkout com nome, e-mail, nascimento e telefone na query. A Kiwify pode ou não mapear estes parâmetros ao formulário. */
function checkoutUrlWithLead(lead: MapaLead): string {
  const base = getCheckoutBaseUrl();
  try {
    const u = new URL(base);
    u.searchParams.set("name", lead.fullName);
    u.searchParams.set("email", lead.email);
    u.searchParams.set("birthDate", lead.birthDate);
    u.searchParams.set("phone", lead.whatsappDigits);
    return u.toString();
  } catch {
    return base;
  }
}

/**
 * Redireciona para a Kiwify com os dados do lead na URL.
 * (Se a Kiwify não preencher o checkout, confere no painel deles o suporte a “URL com parâmetros” / docs de checkout.)
 */
export function redirectToCheckoutIfConfigured(lead: MapaLead): boolean {
  const url = checkoutUrlWithLead(lead);
  window.location.assign(url);
  return true;
}

export function scrollToOferta() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Link de pagamento: se houver lead no `localStorage`, inclui `name`, `email`, `birthDate`, `phone` na query.
 * Sem lead, devolve só o link base (ex.: CTA “continuar” antes de preencher).
 */
export function getPaymentHref(): string {
  const lead = getMapaLead();
  if (lead) return checkoutUrlWithLead(lead);
  return getCheckoutBaseUrl();
}
