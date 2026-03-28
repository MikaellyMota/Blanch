import { motion } from "framer-motion";

const timelineData = [
  { time: "3 meses", result: "Mesma energia baixa, mesmos bloqueios", color: "bg-energy-magenta" },
  { time: "6 meses", result: "Os mesmos problemas se repetindo", color: "bg-energy-violet" },
  { time: "1 ano", result: "A mesma frustração, o mesmo ciclo travado", color: "bg-energy-teal" },
];

const UrgencySection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-energy-magenta/5 rounded-full blur-3xl translate-x-1/2" />
    <div className="container max-w-3xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-energy-magenta text-sm font-body tracking-[0.2em] uppercase mb-4 block">✦ A realidade</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Se você continuar assim…{" "}
          <em className="text-gradient-violet not-italic">sua energia já decidiu por você.</em>
        </h2>
      </motion.div>

      <div className="relative pl-10 space-y-10">
        <div className="absolute left-4 top-2 bottom-2 w-[2px]" style={{ background: 'linear-gradient(to bottom, hsl(280 70% 65%), hsl(320 80% 60%), hsl(175 70% 50%))' }} />
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <div className={`absolute -left-[calc(1.5rem+5px)] top-1.5 w-4 h-4 rounded-full ${item.color} shadow-energy`} />
            <p className="text-energy-violet font-body font-bold text-sm uppercase tracking-[0.15em]">{item.time}</p>
            <p className="text-foreground font-body text-lg mt-1">{item.result}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-14 text-xl font-body text-muted-foreground"
      >
        Se nada muda na sua energia…{" "}
        <strong className="text-foreground">nada muda na sua vida.</strong>
      </motion.p>
    </div>
  </section>
);

export default UrgencySection;
