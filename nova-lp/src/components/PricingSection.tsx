import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ h: 2, m: 14, s: 59 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { m--; s = 59; }
        else if (h > 0) { h--; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {[
        { val: time.h, label: "HORAS" },
        { val: time.m, label: "MIN" },
        { val: time.s, label: "SEG" },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center bg-secondary/80 rounded-xl px-4 py-3 min-w-[72px]">
          <span className="text-3xl md:text-4xl font-display font-bold text-energy-magenta animate-countdown tabular-nums">
            {String(unit.val).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-body text-muted-foreground tracking-[0.15em] mt-1">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

const pricingItems = [
  { name: "Destrave Sua Energia — protocolo completo (PDF)", sub: "Ebook + práticas guiadas + protocolo semanal", price: "R$ 67,00" },
  {
    name: "Bônus: Perfume Energético (guia completo)",
    sub: "Preparo, uso e conexão com prosperidade; ativação de prosperidade (com a força da energia da lua crescente)",
    price: "R$ 47,00",
  },
  { name: "Bônus: Técnica 369 estruturada (33 dias)", sub: "Roteiro diário · escrita e ativação emocional", price: "R$ 39,00" },
  { name: "Organização e suporte ao protocolo", sub: "Como encaixar na rotina sem complicar", price: "R$ 29,00" },
];

const PricingSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="container max-w-2xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-energy-teal text-sm font-body tracking-[0.2em] uppercase mb-4 block">✦ Oferta por tempo limitado</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
          De R$67 por apenas{" "}
          <span className="text-gradient-energy">R$27</span>
        </h2>
        <p className="text-muted-foreground font-body">Acesso imediato · pagamento único · garantia de 7 dias</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-energy-violet/25 bg-card/90 backdrop-blur-sm p-8 md:p-10 shadow-energy-lg"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-body font-bold text-foreground bg-gradient-cta px-5 py-2 rounded-full uppercase tracking-wider">
            🔥 Últimas horas
          </span>
          <span className="text-xs font-body text-energy-violet">+180 ativas esta semana</span>
        </div>

        <CountdownTimer />

        <div className="space-y-4 mb-10">
          {pricingItems.map((item, i) => (
            <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-border/30 last:border-0">
              <div>
                <p className="text-sm font-body font-medium text-foreground">{item.name}</p>
                <p className="text-xs font-body text-muted-foreground mt-0.5">{item.sub}</p>
              </div>
              <span className="text-sm font-body text-muted-foreground line-through whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 p-6 rounded-2xl bg-secondary/50">
          <p className="text-sm font-body text-muted-foreground mb-1">Valor total: <span className="line-through">R$ 182,00</span></p>
          <p className="text-sm font-body text-muted-foreground">Seu preço hoje:</p>
          <p className="text-6xl font-display font-bold text-gradient-energy mt-3">R$ 27</p>
          <p className="text-xs font-body text-muted-foreground mt-2">Pagamento único · PIX ou cartão · acesso imediato</p>
        </div>

        <div className="text-center">
          <CTAButton>✨ Quero destravar minha energia agora</CTAButton>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-xs text-muted-foreground font-body">
          <span>🔒 Pagamento seguro</span>
          <span>⚡ Acesso imediato</span>
          <span>🛡️ Garantia 7 dias</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
