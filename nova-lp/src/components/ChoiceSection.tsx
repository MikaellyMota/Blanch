import { motion } from "framer-motion";

const ChoiceSection = () => (
  <section className="py-24 bg-section-alt relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-energy-violet/5 rounded-full blur-3xl" />
    <div className="container max-w-3xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-energy-violet text-sm font-body tracking-[0.2em] uppercase mb-4 block">✦ Sua escolha</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">Agora é escolha sua</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-7 rounded-2xl bg-card/40 border border-border/30 opacity-50"
        >
          <h3 className="font-display font-bold text-xl text-muted-foreground mb-5">❌ Continuar assim</h3>
          <ul className="space-y-3.5 font-body text-muted-foreground text-sm">
            <li>→ Energia travada</li>
            <li>→ Mesmo padrão se repetindo</li>
            <li>→ Esperar algo mudar sozinho</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-7 rounded-2xl bg-card/80 border border-energy-violet/30 shadow-energy relative"
        >
          <div className="absolute -top-3 left-6 bg-gradient-cta text-foreground text-xs font-body font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            ✨ Recomendado
          </div>
          <h3 className="font-display font-bold text-xl text-foreground mb-5">✅ Começar hoje</h3>
          <ul className="space-y-3.5 font-body text-foreground text-sm">
            <li>→ Ativar sua energia com o protocolo</li>
            <li>→ 20 minutos por dia de transformação</li>
            <li>→ Destravar sua vida na prática</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-14 text-center p-10 rounded-2xl border border-energy-teal/20 bg-card/60 backdrop-blur-sm"
      >
        <h3 className="font-display font-bold text-2xl text-foreground mb-3">🛡️ Garantia Total de 7 Dias</h3>
        <p className="text-muted-foreground font-body text-base max-w-md mx-auto leading-relaxed">
          Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.{" "}
          <strong className="text-energy-teal">O risco é todo nosso.</strong>
        </p>
      </motion.div>
    </div>
  </section>
);

export default ChoiceSection;
