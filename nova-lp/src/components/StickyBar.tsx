const CHECKOUT_URL = "https://pay.kiwify.com.br/LUn9cFg";

const StickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t border-energy-violet/20 py-3 px-4" style={{ background: 'hsla(260, 30%, 6%, 0.92)' }}>
    <div className="container max-w-3xl flex items-center justify-between gap-4">
      <div className="hidden sm:block">
        <p className="font-display font-bold text-foreground text-sm">Destrave Sua Energia</p>
        <p className="text-xs font-body text-muted-foreground">R$27 · acesso imediato · garantia 7 dias</p>
      </div>
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center font-body font-semibold text-sm px-8 py-3 rounded-full bg-gradient-cta text-foreground glow-pulse w-full sm:w-auto text-center transition-all hover:opacity-90"
      >
        ✨ Mudar de vida agora →
      </a>
    </div>
  </div>
);

export default StickyBar;
