import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import HeroHeadlineVideo from "./HeroHeadlineVideo";
import LiveViewersChip from "./LiveViewersChip";
import heroBg from "@/assets/hero-bg.jpg";

const EnergyOrb = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
);

const HeroSection = () => (
  <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

    {/* Floating energy orbs */}
    <EnergyOrb className="w-64 h-64 bg-energy-violet/20 top-20 -left-20 animate-orb" />
    <EnergyOrb className="w-48 h-48 bg-energy-magenta/15 top-40 right-10 animate-orb-delay" />
    <EnergyOrb className="w-56 h-56 bg-energy-teal/10 bottom-20 left-1/3 animate-orb-delay-2" />

    <div className="relative z-10 container max-w-3xl text-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-8 px-6 py-2.5 rounded-full border border-energy-violet/30 bg-secondary/60 backdrop-blur-md"
      >
        <span className="text-sm font-body text-energy-violet tracking-[0.2em] uppercase">
          🔮 Protocolo Exclusivo · Neurociência & Espiritualidade
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8"
      >
        O protocolo de 20 minutos que reprograma sua mente e{" "}
        <em className="text-gradient-energy not-italic">destrava sua energia.</em>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mb-8"
      >
        <HeroHeadlineVideo />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto font-body leading-relaxed"
      >
        Se você não mudar o que faz nos próximos 20 minutos do seu dia…
        daqui a 1 ano, sua vida continua{" "}
        <strong className="text-foreground">exatamente igual.</strong>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center justify-center gap-4 mb-10"
      >
        <span className="text-muted-foreground font-body line-through text-lg">R$ 67,00</span>
        <span className="text-5xl font-display font-bold text-gradient-energy">R$ 27</span>
        <span className="bg-energy-magenta/20 text-energy-magenta text-xs px-3 py-1 rounded-full font-body font-semibold">
          -60% OFF
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <CTAButton>✨ Quero destravar minha energia agora</CTAButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground font-body"
      >
        <span className="flex items-center gap-1.5">🔒 Pagamento seguro</span>
        <span className="flex items-center gap-1.5">⚡ Acesso imediato</span>
        <span className="flex items-center gap-1.5">🛡️ Garantia 7 dias</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <LiveViewersChip />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
