import { motion } from "framer-motion";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarAmanda from "@/assets/avatar-amanda.jpg";
import avatarRenata from "@/assets/avatar-renata.jpg";

const testimonials = [
  {
    name: "Camila M.",
    phone: "+55 11 98374-4821",
    hideDigits: "8374",
    avatar: avatarCamila,
    clockTime: "12:28",
    dateLabel: "sexta-feira",
    message:
      "Eu estava me sentindo completamente travada, principalmente no dinheiro, por que eu estava desempregada. Comecei a aplicar o protocolo todos os dias e em 1 semana apareceu uma oportunidade que eu já estava tentando há meses. Gratidão a vocês 🙏",
    messageTime: "12:26",
    reply: "Obrigada pelo feedBack!",
    replyTime: "12:28",
  },
  {
    name: "Amanda S.",
    phone: "+55 21 97652-7153",
    hideDigits: "7652",
    avatar: avatarAmanda,
    clockTime: "14:18",
    dateLabel: "quinta-feira",
    message:
      "Eu era super cética com esse tipo de coisa, mas resolvi tentar. Em 2 semanas as coisas começaram a fluir de um jeito que eu não consigo explicar. Oportunidades aparecendo, pessoas certas chegando, a ansiedade sumiu. Acordo leve, com vontade de viver 💜",
    messageTime: "14:15",
    reply: "Que lindo!! Amamos saber 💜",
    replyTime: "14:18",
  },
  {
    name: "Renata L.",
    phone: "+55 31 99481-0392",
    hideDigits: "9481",
    avatar: avatarRenata,
    clockTime: "20:36",
    dateLabel: "quarta-feira",
    message:
      "Preciso compartilhar com vocês. Fiz uma entrevista hoje e me senti OUTRA PESSOA. Fui contratada!! E ainda recebi um pix que me deviam há 8 meses, do nada. Esse protocolo é real, mudou minha vida em menos de 10 dias 🙏🔥",
    messageTime: "20:31",
    reply: "Arrasou Renata!! 🥹",
    replyTime: "20:36",
  },
];

/* Realistic WhatsApp doodle wallpaper SVG pattern */
const whatsappWallpaper = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='%23c4b998' fill-opacity='0.13' transform='scale(0.8)'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Crect x='50' y='10' width='8' height='6' rx='1'/%3E%3Cpath d='M90 15l5 8h-10z'/%3E%3Ccircle cx='130' cy='18' r='4'/%3E%3Crect x='160' y='12' width='6' height='8' rx='1'/%3E%3Cpath d='M25 55a4 4 0 1 1 8 0 4 4 0 0 1-8 0'/%3E%3Crect x='65' y='50' width='10' height='7' rx='2'/%3E%3Ccircle cx='110' cy='55' r='3'/%3E%3Cpath d='M145 50l6 10h-12z'/%3E%3Crect x='180' y='48' width='7' height='9' rx='1'/%3E%3Ccircle cx='30' cy='95' r='3.5'/%3E%3Cpath d='M70 90l4 7h-8z'/%3E%3Crect x='100' y='88' width='9' height='6' rx='1'/%3E%3Ccircle cx='145' cy='92' r='4'/%3E%3Crect x='175' y='90' width='6' height='8' rx='2'/%3E%3Cpath d='M20 130a3 3 0 1 1 6 0 3 3 0 0 1-6 0'/%3E%3Crect x='55' y='125' width='8' height='7' rx='1'/%3E%3Ccircle cx='100' cy='130' r='3'/%3E%3Cpath d='M135 125l5 9h-10z'/%3E%3Crect x='170' y='127' width='7' height='6' rx='1'/%3E%3Ccircle cx='25' cy='170' r='4'/%3E%3Crect x='60' y='165' width='9' height='7' rx='2'/%3E%3Cpath d='M105 168l4 7h-8z'/%3E%3Ccircle cx='140' cy='172' r='3'/%3E%3Crect x='178' y='168' width='6' height='8' rx='1'/%3E%3C/g%3E%3C/svg%3E")`;

const WhatsAppChat = ({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12 }}
    className="rounded-2xl overflow-hidden shadow-2xl"
    style={{ maxWidth: 360, margin: "0 auto" }}
  >
    {/* Phone status bar */}
    <div className="flex items-center justify-between px-4 py-1" style={{ backgroundColor: "#efeae2" }}>
      <span className="text-[11px] font-semibold text-[#1b1b1b]">{testimonial.clockTime}</span>
      <div className="flex items-center gap-1">
        {/* Signal bars */}
        <svg className="w-3.5 h-3.5 text-[#1b1b1b]" viewBox="0 0 24 24" fill="currentColor">
          <rect x="1" y="16" width="3" height="6" rx="0.5" />
          <rect x="6" y="12" width="3" height="10" rx="0.5" />
          <rect x="11" y="8" width="3" height="14" rx="0.5" />
          <rect x="16" y="4" width="3" height="18" rx="0.5" />
        </svg>
        {/* WiFi */}
        <svg className="w-3.5 h-3.5 text-[#1b1b1b]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4.24-2.83l1.42 1.42C10.07 17.48 10.99 18 12 18s1.93-.52 2.83-1.41l1.42-1.42C14.68 13.6 13.39 13 12 13s-2.68.6-4.24 2.17zm-2.83-2.83l1.42 1.42C8.6 11.51 10.23 10.5 12 10.5s3.4 1.01 5.66 3.26l1.42-1.42C16.52 9.78 14.35 8.5 12 8.5s-4.52 1.28-7.07 3.84z" />
        </svg>
        {/* Battery */}
        <div className="flex items-center">
          <div className="w-5 h-2.5 rounded-sm border border-[#1b1b1b] relative">
            <div className="absolute inset-[1px] rounded-[1px] bg-[#1b1b1b]" style={{ width: "70%" }} />
          </div>
          <div className="w-[2px] h-1.5 bg-[#1b1b1b] rounded-r-sm" />
        </div>
      </div>
    </div>

    {/* WhatsApp header */}
    <div className="flex items-center gap-2 px-2 py-1.5" style={{ backgroundColor: "#008069" }}>
      {/* Back arrow */}
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-9 h-9 rounded-full object-cover"
        loading="lazy"
        width={36}
        height={36}
      />
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-medium text-white truncate">
          {(() => {
            const idx = testimonial.phone.indexOf(testimonial.hideDigits);
            if (idx === -1) return testimonial.phone;
            const before = testimonial.phone.slice(0, idx);
            const hidden = testimonial.phone.slice(idx, idx + testimonial.hideDigits.length);
            const after = testimonial.phone.slice(idx + testimonial.hideDigits.length);
            return (
              <>
                {before}
                <span className="relative inline-block">
                  {hidden}
                  <span className="absolute left-0 right-0 top-1/2 h-[4px] bg-black rounded-full" style={{ transform: 'translateY(-50%) rotate(-2deg)' }} />
                </span>
                {after}
              </>
            );
          })()}
        </p>
        <p className="text-[10px] text-white/70 -mt-0.5">online</p>
      </div>
      <div className="flex items-center gap-4 text-white">
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
    </div>

    {/* Chat area */}
    <div
      className="px-3 py-3"
      style={{
        backgroundColor: "#efeae2",
        backgroundImage: whatsappWallpaper,
        minHeight: 220,
      }}
    >
      {/* Date labels */}
      <div className="flex flex-col items-center gap-1 mb-3">
        <span className="text-[11px] text-[#54656f] bg-white/90 px-3 py-[3px] rounded-md shadow-sm font-normal">
          {testimonial.dateLabel}
        </span>
        <span className="text-[11px] text-[#54656f] bg-white/90 px-3 py-[3px] rounded-md shadow-sm font-normal">
          Hoje
        </span>
      </div>

      {/* Received message - single long bubble with tail */}
      <div className="flex justify-start mb-1.5">
        <div className="relative max-w-[88%]">
          {/* Tail */}
          <div
            className="absolute top-0 -left-2 w-0 h-0"
            style={{
              borderTop: "8px solid white",
              borderLeft: "8px solid transparent",
            }}
          />
          <div className="bg-white text-[#111b21] rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-sm">
            <p className="text-[14.5px] leading-[1.35] whitespace-pre-wrap" style={{ wordBreak: "break-word" }}>
              {testimonial.message}
            </p>
            <span className="text-[11px] text-[#667781] float-right mt-0.5 ml-2 leading-none">
              {testimonial.messageTime}
            </span>
          </div>
        </div>
      </div>

      {/* Sent reply - green bubble with tail */}
      <div className="flex justify-end mt-2">
        <div className="relative max-w-[75%]">
          {/* Tail */}
          <div
            className="absolute top-0 -right-2 w-0 h-0"
            style={{
              borderTop: "8px solid #d9fdd3",
              borderRight: "8px solid transparent",
            }}
          />
          <div className="bg-[#d9fdd3] text-[#111b21] rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-sm">
            <span className="text-[14.5px] leading-[1.35]">{testimonial.reply}</span>
            <span className="text-[11px] text-[#667781] float-right mt-0.5 ml-2 leading-none whitespace-nowrap">
              {testimonial.replyTime}
              {/* Double blue check */}
              <svg className="inline-block ml-0.5 w-4 h-4 text-[#53bdeb] align-text-bottom" viewBox="0 0 16 15" fill="currentColor">
                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom input bar */}
    <div className="flex items-center gap-2 px-2 py-1.5" style={{ backgroundColor: "#efeae2" }}>
      <div className="flex items-center gap-2 flex-1 bg-white rounded-full px-3 py-1.5">
        <svg className="w-5 h-5 text-[#8696a0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z" />
        </svg>
        <span className="text-[14px] text-[#8696a0] flex-1">Mensagem</span>
        <svg className="w-5 h-5 text-[#8696a0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 003.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 01-2.829 1.171 3.975 3.975 0 01-2.83-1.171 3.973 3.973 0 01-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.606.606 0 00-.854.002l-7.205 7.207c-1.463 1.46-2.272 3.404-2.272 5.47.002.668.092 1.321.267 1.957z" />
        </svg>
        <svg className="w-5 h-5 text-[#8696a0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 20.664a9.163 9.163 0 01-6.521-2.702.977.977 0 01.001-1.381.974.974 0 011.38 0 7.187 7.187 0 005.14 2.127c4.003 0 7.188-3.186 7.188-7.188S15.963 4.332 12 4.332a7.166 7.166 0 00-6.532 4.25h2.676a.974.974 0 01.977.977.974.974 0 01-.977.977H3.18a.974.974 0 01-.977-.977V4.594a.974.974 0 01.977-.977c.27 0 .513.11.69.286l.815.815A9.133 9.133 0 0112 2.377c5.42 0 9.815 4.395 9.815 9.815S17.42 22.007 12 22.007a.974.974 0 010-1.343z" />
        </svg>
      </div>
      <div className="w-10 h-10 rounded-full bg-[#008069] flex items-center justify-center">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.238 6.002s-6.238-2.471-6.238-6.002H3.787c0 4.001 3.178 7.297 7.061 7.885v3.884h2.303v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-1.975z" />
        </svg>
      </div>
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
        <span className="text-energy-magenta text-sm font-body tracking-[0.2em] uppercase mb-4 block">
          ✦ Sem filtro, sem edição
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
          Vidas que mudaram{" "}
          <em className="text-gradient-violet not-italic">em dias, não meses</em>
        </h2>
        <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
          Prints reais do WhatsApp — sem edição, sem filtro. Essas mulheres estavam exatamente onde você está agora.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
