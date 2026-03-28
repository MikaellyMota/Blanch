import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Estava travada no dinheiro e desempregada. Após aplicar o protocolo todos os dias, em uma semana apareceu uma oportunidade que eu já buscava há meses.",
    name: "C.M.",
    detail: "Resultado em 7 dias",
    stars: 5,
  },
  {
    text: "Tinha a sensação de que nada dava certo. Depois do protocolo, pequenas mudanças começaram a aparecer — oportunidades, encontros e respostas que não vinham antes.",
    name: "A.S.",
    detail: "Resultado em 2 semanas",
    stars: 5,
  },
  {
    text: "Fui contratada após uma entrevista onde me senti muito mais segura. E recebi um dinheiro que me deviam há muito tempo. Coincidência? Não acredito mais em coincidência.",
    name: "R.L.",
    detail: "Resultado em 3 semanas",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-section-alt relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-energy-magenta/5 rounded-full blur-3xl -translate-x-1/3" />
    <div className="container max-w-3xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-energy-magenta text-sm font-body tracking-[0.2em] uppercase mb-4 block">✦ Resultados reais</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Quem aplicou — e{" "}
          <em className="text-gradient-violet not-italic">sentiu a energia mudar</em>
        </h2>
      </motion.div>

      <div className="grid gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="p-7 rounded-2xl bg-card/80 backdrop-blur-sm border border-energy-violet/10 hover:border-energy-violet/25 transition-all duration-300"
          >
            <div className="flex items-center gap-1.5 mb-4">
              {[...Array(t.stars)].map((_, j) => (
                <span key={j} className="text-energy-violet text-base">★</span>
              ))}
            </div>
            <p className="text-foreground font-body text-base italic leading-relaxed mb-5">"{t.text}"</p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-body font-semibold text-foreground">— {t.name}</p>
              <span className="text-xs font-body text-energy-teal bg-energy-teal/10 px-3 py-1.5 rounded-full font-medium">{t.detail}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
