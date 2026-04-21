/** Lead da pré-captura (nome, nascimento, WhatsApp) — persiste no browser. */

export type MapaLead = {
  fullName: string;
  birthDate: string;
  whatsappDigits: string;
  capturedAt: string;
};

const STORAGE_KEY = "mapa_numerologico_lead_v1";

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

/** Se `VITE_CHECKOUT_URL` existir, redireciona com query params (ajuste ao teu gateway). */
export function redirectToCheckoutIfConfigured(lead: MapaLead): boolean {
  const base = import.meta.env.VITE_CHECKOUT_URL as string | undefined;
  if (!base?.trim()) return false;
  try {
    const u = new URL(base.trim(), window.location.origin);
    u.searchParams.set("name", lead.fullName);
    u.searchParams.set("birthDate", lead.birthDate);
    u.searchParams.set("phone", lead.whatsappDigits);
    window.location.assign(u.toString());
    return true;
  } catch {
    window.location.assign(base.trim());
    return true;
  }
}

export function scrollToOferta() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Link de pagamento (env) ou âncora da oferta na própria página. */
export function getPaymentHref(): string {
  const u = (import.meta.env.VITE_CHECKOUT_URL as string | undefined)?.trim();
  if (u) return u;
  return "#oferta";
}
