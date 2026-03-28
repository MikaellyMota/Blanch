import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const steps = [
  {
    time: "Ao acordar e antes de dormir",
    desc: "Ative seu campo energético nos momentos de maior receptividade do subconsciente.",
    icon: "🌙",
    gradient: "from-energy-violet/10 to-energy-indigo/5",
  },
  {
    time: "Todos os dias",
    desc: "Reforce um novo padrão vibracional com repetições estratégicas.",
    icon: "🔄",
    gradient: "from-energy-magenta/10 to-energy-pink/5",
  },
  {
    time: "Em dias específicos da semana",
    desc: "Aprofunde a mudança com ativações energéticas guiadas.",
    icon: "⚡",
    gradient: "from-energy-teal/10 to-energy-violet/5",
  },
];

const SolutionSection = () => (
  <section className="py-24 bg-section-alt relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-72 h-72 bg-energy-teal/5 rounded-full blur-3xl translate-x-1/3" />
    <div className="container max-w-3xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-energy-teal text-sm font-body tracking-[0.2em] uppercase mb-4 block">✦ A solução</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-5">
          O protocolo de 20 minutos que{" "}
          <em className="text-gradient-energy not-italic">destrava sua energia</em>
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
          Atua direto na raiz: seu subconsciente, seu campo energético e seu padrão vibracional.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`flex items-start gap-6 p-7 rounded-2xl bg-gradient-to-r ${step.gradient} border border-energy-violet/10 hover:border-energy-violet/25 transition-all duration-300`}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-card flex items-center justify-center text-3xl shadow-energy">
              {step.icon}
            </div>
            <div>
              <p className="text-energy-violet font-body font-bold text-sm uppercase tracking-[0.15em] mb-2">{step.time}</p>
              <p className="text-foreground font-body text-base leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground font-body mb-8 text-lg">
          Menos de <strong className="text-energy-teal">20 minutos por dia</strong>. O processo já está pronto — você só precisa seguir.
        </p>
        <CTAButton size="md">Quero ativar minha energia →</CTAButton>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
