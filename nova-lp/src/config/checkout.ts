/**
 * Checkout da LP /3tecnicas — CTAs (`CTAButton`) e barra fixa (`StickyBar`).
 * Opcional: defina `VITE_CHECKOUT_URL` no build (ex.: painel da hospedagem) para não alterar código.
 */
export const CHECKOUT_URL =
  (import.meta.env.VITE_CHECKOUT_URL as string | undefined)?.trim() ||
  "https://pay.kiwify.com.br/XK75rBX";
