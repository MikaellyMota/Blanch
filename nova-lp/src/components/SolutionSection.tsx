import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const pillars = [
  {
    icon: "🧬",
    title: "Reprogramação Subconsciente",
    desc: "Elimina crenças limitantes que sabotam sua energia há anos — sem você perceber.",
    highlight: "93% das pessoas carregam bloqueios invisíveis",
  },
  {
    icon: "⚡",
    title: "Ativação do Campo Energético",
    desc: "Frequências específicas que realinham seus chakras e destravam o fluxo de abundância.",
    highlight: "Resultados desde os primeiros 7 dias",
  },
  {
    icon: "🔮",
    title: "Elevação Vibracional Diária",
    desc: "Um ritual simples que mantém sua vibração alta o dia inteiro — mesmo nos dias difíceis.",
    highlight: "Apenas 20 minutos por dia",
  },
];

const results = [
  "Dinheiro começa a fluir com mais facilidade",
  "Ansiedade e peso mental diminuem drasticamente",
  "Relacionamentos se transformam naturalmente",
  "Oportunidades começam a aparecer 'do nada'",
  "Você acorda com energia e clareza mental",
];

const SolutionSection = () => (
  <section id="solucao" className="py-28 bg-section-alt relative overflow-hidden">
    {/* Ambient effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-energy-teal/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-energy-violet/8 rounded-full blur-3xl translate-x-1/3" />

    <div className="container max-w-4xl px-4 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="text-energy-teal text-sm font-body tracking-[0.25em] uppercase mb-4 block">
          ✦ O método que vai mudar tudo
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight">
          O Protocolo de 20 Minutos que{" "}
          <em className="text-gradient-energy not-italic block mt-1">
            Destrava Sua Energia de Vez
          </em>
        </h2>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto">
          Não é meditação genérica. Não é pensamento positivo.
          É um <strong className="text-foreground">sistema comprovado</strong> que atua direto na raiz do problema.
        </p>
      </motion.div>

      {/* Social proof badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-14"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-energy-teal/30 bg-energy-teal/5 backdrop-blur-sm">
          <span className="text-energy-teal text-2xl">⭐</span>
          <span className="font-body text-sm text-foreground">
            <strong>+2.400 mulheres</strong> já transformaram sua energia com este protocolo
          </span>
        </div>
      </motion.div>

      {/* 3 Pillars */}
      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative group"
          >
            <div className="h-full p-7 rounded-2xl bg-card/80 backdrop-blur-sm border border-energy-violet/15 hover:border-energy-violet/40 transition-all duration-500 hover:shadow-energy">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-energy-violet/20 to-energy-magenta/10 flex items-center justify-center text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {pillar.desc}
              </p>
              <div className="px-3 py-1.5 rounded-full bg-energy-teal/10 border border-energy-teal/20 inline-block">
                <p className="font-body text-energy-teal text-xs font-medium">
                  {pillar.highlight}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What happens when you activate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-energy-violet/20 bg-gradient-to-br from-energy-violet/5 via-card/60 to-energy-magenta/5 backdrop-blur-sm p-8 md:p-12 mb-16"
      >
        <div className="text-center mb-8">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
            O que acontece quando sua energia{" "}
            <span className="text-gradient-energy">destrava:</span>
          </h3>
          <p className="font-body text-muted-foreground text-sm">
            Resultados reais relatados por quem já aplicou o protocolo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-energy-teal/10"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-energy-teal/20 flex items-center justify-center text-energy-teal text-sm font-bold">
                ✓
              </span>
              <p className="font-body text-foreground text-sm">{result}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How it works - simple steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
          Simples. Rápido. <span className="text-energy-teal">Poderoso.</span>
        </h3>
        <p className="font-body text-muted-foreground">Seu protocolo diário em 3 momentos:</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 mb-14">
        {[
          { step: "01", time: "Ao acordar", desc: "5 min de ativação energética no momento de maior receptividade", icon: "🌅" },
          { step: "02", time: "Durante o dia", desc: "10 min de reprogramação com frequências específicas", icon: "🔄" },
          { step: "03", time: "Antes de dormir", desc: "5 min de ancoragem para o subconsciente trabalhar à noite", icon: "🌙" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-6 rounded-2xl bg-card/60 border border-energy-violet/10 text-center"
          >
            <span className="text-5xl font-display font-bold text-energy-violet/20 absolute top-4 right-4">
              {item.step}
            </span>
            <span className="text-3xl mb-3 block">{item.icon}</span>
            <p className="font-body font-bold text-energy-violet text-sm uppercase tracking-[0.15em] mb-2">
              {item.time}
            </p>
            <p className="font-body text-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Final CTA block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-block p-8 md:p-10 rounded-3xl border border-energy-violet/20 bg-card/40 backdrop-blur-sm">
          <p className="text-muted-foreground font-body mb-2 text-base">
            Menos de <strong className="text-energy-teal">20 minutos por dia</strong>
          </p>
          <p className="text-foreground font-display font-bold text-xl md:text-2xl mb-6">
            O processo já está pronto — você só precisa{" "}
            <span className="text-gradient-energy">dar play.</span>
          </p>
          <CTAButton size="lg">Quero ativar minha energia agora →</CTAButton>
          <p className="mt-4 text-xs font-body text-muted-foreground">
            🔒 Acesso imediato · Garantia de 7 dias · Pagamento 100% seguro
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
