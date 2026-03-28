import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Preciso de experiência com manifestação?",
    a: "Não. As técnicas são explicadas do zero, passo a passo. Funciona tanto para quem está começando quanto para quem já pratica.",
  },
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "Depende da consistência. Muitas pessoas relatam mudanças de energia em poucos dias. Resultados concretos costumam aparecer em 2 a 4 semanas de prática diária.",
  },
  {
    q: "Quanto tempo preciso por dia?",
    a: "Cada técnica leva entre 5 e 15 minutos. É totalmente possível encaixar na rotina sem reorganizar nada.",
  },
  {
    q: "Como recebo o material?",
    a: "Acesso imediato após o pagamento. Você recebe o PDF no e-mail e pode ler no celular, tablet ou computador.",
  },
  {
    q: "E se eu não gostar?",
    a: "Garantia total de 7 dias. Devolvemos 100% do valor, sem perguntas.",
  },
  {
    q: "A compra é segura?",
    a: "Sim. O pagamento é feito na Kiwify, plataforma especializada em produtos digitais no Brasil. Seus dados são protegidos e o acesso ao PDF é liberado na hora.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">Perguntas & Respostas</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-energy-violet/10 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-energy-violet/25 transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-body font-medium text-foreground hover:text-energy-violet transition-colors"
              >
                {faq.q}
                <span className="text-energy-violet ml-4 flex-shrink-0 text-xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-6 text-sm font-body text-muted-foreground leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
