import { motion } from "framer-motion";

const bonuses = [
  {
    badge: "Bônus 1",
    title: "Perfume Energético — Guia Completo",
    price: "R$ 47,00",
    desc: "Uma forma prática de ativar sua energia todos os dias e aumentar sua conexão com dinheiro e prosperidade. Inclui ativação de prosperidade (com a força da energia da lua crescente).",
    items: [
      "Ingredientes acessíveis",
      "Passo a passo de preparo",
      "Ativação de prosperidade (com a força da energia da lua crescente)",
    ],
    icon: "✨",
    borderColor: "border-energy-magenta/20 hover:border-energy-magenta/40",
  },
  {
    badge: "Bônus 2",
    title: "Técnica 369 Estruturada — 33 dias",
    price: "R$ 39,00",
    desc: "Técnica de repetição guiada que reprograma seu subconsciente através de escrita e ativação emocional.",
    items: ["Direcionamento claro", "Sequência de 33 dias", "Aplicação de alto impacto"],
    icon: "🔮",
    borderColor: "border-energy-teal/20 hover:border-energy-teal/40",
  },
];

const BonusSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 w-96 h-96 bg-energy-indigo/5 rounded-full blur-3xl -translate-x-1/2" />
    <div className="container max-w-3xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-energy-violet text-base font-body tracking-[0.2em] uppercase mb-4 block">✦ Bônus exclusivos</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Acelere seus <em className="text-gradient-energy not-italic">resultados</em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {bonuses.map((bonus, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative p-7 rounded-2xl bg-card/80 backdrop-blur-sm border ${bonus.borderColor} transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-body font-bold text-energy-violet bg-energy-violet/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                {bonus.badge}
              </span>
              <span className="text-base font-body text-muted-foreground line-through">{bonus.price}</span>
            </div>
            <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${i * 1}s` }}>{bonus.icon}</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">{bonus.title}</h3>
            <p className="text-base md:text-lg font-body text-muted-foreground mb-5 leading-relaxed">{bonus.desc}</p>
            <ul className="space-y-2.5">
              {bonus.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2.5 text-base font-body text-secondary-foreground">
                  <span className="text-energy-teal text-sm">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute top-0 right-0 bg-gradient-cta text-foreground text-xs font-body font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl uppercase tracking-wider">
              Grátis
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BonusSection;
