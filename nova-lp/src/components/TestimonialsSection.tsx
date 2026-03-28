import { motion } from "framer-motion";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarAmanda from "@/assets/avatar-amanda.jpg";
import avatarRenata from "@/assets/avatar-renata.jpg";

const testimonials = [
  {
    name: "Camila M.",
    avatar: avatarCamila,
    time: "09:42",
    messages: [
      "Gente eu preciso contar isso 😭🙏",
      "Estava travada no dinheiro e desempregada há 4 meses",
      "Comecei o protocolo segunda e apliquei TODOS os dias",
      "Hoje recebi ligação pra uma vaga que eu tentava há meses!! 🥹✨",
    ],
    reply: "Que incrível!! 💜 Quanto tempo usando?",
    replyTime: "09:45",
    answer: "Uma semana certinha!! 7 dias mudaram tudo",
    answerTime: "09:46",
  },
  {
    name: "Amanda S.",
    avatar: avatarAmanda,
    time: "14:18",
    messages: [
      "Vim dar meu depoimento 🙌",
      "Eu era super cética mas em 2 semanas as coisas começaram a FLUIR",
      "Oportunidades aparecendo, pessoas certas chegando 🦋",
    ],
    reply: "Amoo! O que mais mudou?",
    replyTime: "14:22",
    answer: "A ansiedade sumiu!! Acordo leve, com vontade de viver 💜",
    answerTime: "14:23",
  },
  {
    name: "Renata L.",
    avatar: avatarRenata,
    time: "20:31",
    messages: [
      "Preciso compartilhar 🔥",
      "Fiz entrevista hoje e me senti OUTRA PESSOA",
      "FUI CONTRATADA 🎉🎉",
      "E recebi um pix que me deviam há 8 meses!! Do nada ✨",
    ],
    reply: "Arrasou Renata!! 🥹🔥",
    replyTime: "20:35",
    answer: "Esse protocolo é REAL 🙏",
    answerTime: "20:36",
  },
];

const Bubble = ({ text, time, isReply = false }: { text: string; time: string; isReply?: boolean }) => (
  <div className={`flex ${isReply ? "justify-start" : "justify-end"} mb-0.5`}>
    <div
      className={`max-w-[88%] px-2.5 py-1.5 rounded-lg text-xs font-body leading-relaxed ${
        isReply
          ? "bg-[hsl(260_25%_18%)] text-foreground rounded-tl-none"
          : "bg-[hsl(152_60%_18%)] text-foreground rounded-tr-none"
      }`}
    >
      <span>{text}</span>
      <span className="text-[9px] text-muted-foreground ml-1.5 float-right mt-0.5 leading-none whitespace-nowrap">
        {time}
        {!isReply && (
          <svg className="inline-block ml-0.5 w-3 h-3 text-[hsl(var(--energy-teal))]" viewBox="0 0 16 15" fill="currentColor">
            <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
          </svg>
        )}
      </span>
    </div>
  </div>
);

const WhatsAppChat = ({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12 }}
    className="rounded-xl overflow-hidden border border-energy-violet/15 hover:border-energy-violet/30 transition-colors duration-300"
  >
    {/* Header */}
    <div className="flex items-center gap-2.5 px-3 py-2 bg-[hsl(260_25%_12%)]">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-8 h-8 rounded-full object-cover"
        loading="lazy"
        width={32}
        height={32}
      />
      <div className="min-w-0">
        <p className="text-xs font-body font-semibold text-foreground truncate">{testimonial.name}</p>
        <p className="text-[10px] font-body text-energy-teal">online</p>
      </div>
      <div className="ml-auto flex items-center gap-2 text-muted-foreground">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
    </div>

    {/* Chat */}
    <div
      className="px-2.5 py-3 space-y-0.5"
      style={{
        backgroundColor: "hsl(260 28% 7%)",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <div className="flex justify-center mb-2">
        <span className="text-[10px] font-body text-muted-foreground bg-[hsl(260_25%_14%)] px-2.5 py-0.5 rounded">
          Hoje
        </span>
      </div>

      {testimonial.messages.map((msg, i) => (
        <Bubble key={i} text={msg} time={testimonial.time} />
      ))}

      <div className="pt-0.5">
        <Bubble text={testimonial.reply} time={testimonial.replyTime} isReply />
      </div>
      <Bubble text={testimonial.answer} time={testimonial.answerTime} />
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <section className="py-24 bg-section-alt relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-energy-magenta/5 rounded-full blur-3xl -translate-x-1/3" />
    <div className="container max-w-5xl px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
          Vidas que mudaram{" "}
          <em className="text-gradient-violet not-italic">em dias, não meses</em>
        </h2>
        <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
          Essas mulheres estavam exatamente onde você está agora.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <WhatsAppChat key={i} testimonial={t} index={i} />
        ))}
      </div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-energy-teal/20 bg-energy-teal/5">
          <div className="flex -space-x-2">
            {[avatarCamila, avatarAmanda, avatarRenata].map((src, i) => (
              <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-background object-cover" loading="lazy" width={28} height={28} />
            ))}
          </div>
          <span className="text-xs font-body text-foreground">
            <strong className="text-energy-teal">+2.400</strong> mulheres já transformaram sua energia
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-energy-violet text-xs">★</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
