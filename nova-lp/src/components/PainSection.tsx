import { motion } from "framer-motion";

const painPoints = [
  { icon: "💸", text: "O dinheiro não flui, por mais que você se esforce", color: "border-energy-magenta/20 hover:border-energy-magenta/40" },
  { icon: "🧠", text: "Sua mente não para — ansiedade, pensamentos repetitivos", color: "border-energy-violet/20 hover:border-energy-violet/40" },
  { icon: "😩", text: "Cansaço constante, mesmo sem saber o porquê", color: "border-energy-teal/20 hover:border-energy-teal/40" },
  { icon: "🔁", text: "Parece que tudo trava e volta ao mesmo lugar", color: "border-energy-pink/20 hover:border-energy-pink/40" },
];

const PainSection = () => (
  <section className="py-24 bg-section-alt relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-energy-violet/5 rounded-full blur-3xl -translate-x-1/2" />
    <div className="container max-w-3xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-energy-teal text-sm font-body tracking-[0.2em] uppercase mb-4 block">✦ Você se reconhece aqui?</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
          Você não está travada{" "}
          <em className="text-gradient-violet not-italic">por falta de esforço.</em>
        </h2>
        <p className="text-muted-foreground font-body text-lg">
          Você tenta. Você se esforça. Você quer mudar. <strong className="text-foreground">Mas nada muda.</strong>
        </p>
      </motion.div>

      <div className="grid gap-4">
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-5 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border ${point.color} transition-all duration-300`}
          >
            <span className="text-3xl animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{point.icon}</span>
            <p className="text-foreground font-body text-base">{point.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 p-8 rounded-2xl border border-energy-violet/20 bg-card/60 backdrop-blur-sm text-center"
      >
        <p className="text-muted-foreground font-body text-base mb-3">
          Não é azar. Não é falta de capacidade.
        </p>
        <p className="text-foreground font-body font-medium text-xl mb-3">
          👉 Você está repetindo o <span className="text-energy-magenta">padrão energético errado</span> todos os dias.
        </p>
        <p className="text-energy-teal font-body font-medium text-lg">
          A boa notícia: energia muda. Com o método certo, muda em 20 minutos por dia.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PainSection;
