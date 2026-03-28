import { motion } from "framer-motion";

const CHECKOUT_URL = "https://pay.kiwify.com.br/LUn9cFg";

const CTAButton = ({ children, className = "", size = "lg" }: { children: React.ReactNode; className?: string; size?: "lg" | "md" }) => (
  <motion.a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className={`inline-flex items-center justify-center font-body font-semibold tracking-wide rounded-full bg-gradient-cta text-foreground transition-all glow-pulse ${
      size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base"
    } ${className}`}
  >
    {children}
  </motion.a>
);

export default CTAButton;
