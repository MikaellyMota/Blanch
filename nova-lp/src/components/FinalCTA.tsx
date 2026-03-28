import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const FinalCTA = () => (
  <section className="py-24 bg-section-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-energy-violet/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-orb" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-energy-magenta/15 rounded-full blur-3xl animate-orb-delay" />
    </div>
    <div className="container max-w-2xl px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground font-body text-xl mb-3">Você não precisa acreditar.</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
          Só precisa <em className="text-gradient-energy not-italic">ativar.</em>
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-2">Se você sair agora… <strong className="text-foreground">nada muda.</strong></p>
        <p className="text-foreground font-body text-xl mb-10">
          Mas se você começar hoje…{" "}
          <strong className="text-energy-violet">sua energia começa a se destravar.</strong>
        </p>
        <CTAButton>✨ Quero ativar minha energia — R$ 27</CTAButton>
        <div className="mt-8 flex items-center justify-center gap-5 text-xs text-muted-foreground font-body">
          <span>🔒 Pagamento seguro</span>
          <span>⚡ Acesso imediato</span>
          <span>🛡️ Garantia 7 dias</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
