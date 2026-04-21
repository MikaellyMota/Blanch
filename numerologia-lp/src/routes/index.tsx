import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DiscoverNumberDialog } from "@/components/discover-number-dialog";
import { getMapaLead, getPaymentHref } from "@/lib/mapa-lead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroCosmic from "@/assets/hero-cosmic.jpg";
import mandala from "@/assets/mandala.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const CTA_URL = "#oferta";

const COUNTDOWN_KEY = "mapa_countdown_deadline";
const COUNTDOWN_DURATION_MS = 24 * 60 * 60 * 1000;

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<number>(COUNTDOWN_DURATION_MS);
  useEffect(() => {
    let deadline = Number(localStorage.getItem(COUNTDOWN_KEY));
    const now = Date.now();
    if (!deadline || isNaN(deadline) || deadline <= now) {
      deadline = now + COUNTDOWN_DURATION_MS;
      localStorage.setItem(COUNTDOWN_KEY, String(deadline));
    }
    const tick = () => setTimeLeft(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const totalSeconds = Math.floor(timeLeft / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

function CountdownTimer() {
  const { hours, minutes, seconds } = useCountdown();
  const units = [
    { label: "Horas", value: hours },
    { label: "Minutos", value: minutes },
    { label: "Segundos", value: seconds },
  ];

  return (
    <div className="mb-10">
      <p className="text-sm tracking-[0.3em] uppercase text-magenta mb-4 animate-pulse-glow">
        ⏳ Esta oferta expira em
      </p>
      <div className="flex items-center justify-center gap-3 md:gap-5">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3 md:gap-5">
            <div className="flex flex-col items-center">
              <div className="min-w-[72px] md:min-w-[96px] px-3 py-3 md:px-4 md:py-4 rounded-2xl bg-deep border border-gold/40 shadow-gold">
                <div className="text-4xl md:text-6xl font-display font-bold text-gradient-gold leading-none tabular-nums">
                  {u.value}
                </div>
              </div>
              <span className="mt-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-cream/60">
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="text-3xl md:text-5xl font-display text-gold/60 -mt-6">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StickyOfferBar({
  hasLead,
  onOpenDiscover,
}: {
  hasLead: boolean;
  onOpenDiscover: () => void;
}) {
  const { hours, minutes, seconds } = useCountdown();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = window.scrollY;
      const max = doc.scrollHeight - window.innerHeight;
      setVisible(max > 0 && scrolled / max >= 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-deep/95 backdrop-blur-md border-b border-gold/40 shadow-glow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            <span className="hidden sm:inline text-xs md:text-sm tracking-[0.2em] uppercase text-magenta animate-pulse-glow">
              ⏳ Oferta expira em
            </span>
            <span className="sm:hidden text-base">⏳</span>
            <div className="flex items-center gap-1 md:gap-2 font-display font-bold text-gradient-gold tabular-nums text-xl md:text-2xl">
              <span>{hours}</span>
              <span className="text-gold/60">:</span>
              <span>{minutes}</span>
              <span className="text-gold/60">:</span>
              <span>{seconds}</span>
            </div>
          </div>
          <div className="flex flex-shrink-0 flex-col items-end gap-1.5 sm:flex-row sm:items-center sm:gap-2 md:gap-3">
            <button
              type="button"
              onClick={onOpenDiscover}
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient text-deep font-semibold px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm shadow-gold hover:scale-105 transition-transform whitespace-nowrap"
            >
              {hasLead ? "Revisar meus dados" : "Descobrir meu número"}
            </button>
            {hasLead && (
              <a
                href={getPaymentHref()}
                className="text-[10px] md:text-xs text-cream/80 underline underline-offset-2 decoration-gold/40 hover:text-gold"
              >
                Ir direto ao pagamento
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type Testimonial = {
  name: string;
  handle: string;
  avatar: string;
  type: "whatsapp" | "instagram";
  message: string;
  time: string;
  stars?: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carla M.",
    handle: "+55 11 9****-2210",
    avatar: avatar1,
    type: "whatsapp",
    time: "14:32",
    stars: 5,
    message: "Meu Deus, você não tem ideia do quanto o mapa mexeu comigo!! Em 2 semanas eu finalmente fechei aquele contrato que estava travado há meses 🥹✨ Obrigada de coração!",
  },
  {
    name: "Juliana S.",
    handle: "@ju.santos",
    avatar: avatar2,
    type: "instagram",
    time: "agora",
    stars: 5,
    message: "Eu chorei lendo o mapa. Era exatamente o que eu vivia e não conseguia explicar. Hoje tomo decisões com muito mais clareza, principalmente sobre dinheiro 💰",
  },
  {
    name: "Mariana C.",
    handle: "@marianaoficial",
    avatar: avatar3,
    type: "instagram",
    time: "2h",
    stars: 5,
    message: "Gente, esse mapa é REAL. Identifiquei o padrão de autossabotagem financeira na hora 😱 já estou aplicando os ajustes e percebendo diferença na primeira semana!",
  },
  {
    name: "Patrícia R.",
    handle: "+55 21 9****-7843",
    avatar: avatar4,
    type: "whatsapp",
    time: "09:15",
    stars: 5,
    message: "Investimento mais certeiro que fiz esse ano. Sério. Em 30 dias minha relação com dinheiro mudou completamente, estou guardando pela primeira vez na vida ❤️🔥",
  },
  {
    name: "Renata L.",
    handle: "+55 31 9****-1129",
    avatar: avatar5,
    type: "whatsapp",
    time: "21:04",
    stars: 5,
    message: "Não acreditava muito mas resolvi testar. CHOQUE total. Cada coisa que tava escrito ali era a minha vida descrita em detalhes. Os direcionamentos práticos foram o que mais me ajudaram 🙌",
  },
  {
    name: "Tais B.",
    handle: "@taisbeauty",
    avatar: avatar6,
    type: "instagram",
    time: "5h",
    stars: 5,
    message: "Amiga eu PRECISO te contar... aquela proposta que tava parada há 3 meses fechou essa semana 🤯 depois que eu ajustei o que o mapa mostrou. Surreal! 💛",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" style={{ color: "oklch(0.85 0.16 82)" }}>
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77 4.8 17.5l.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const isWA = t.type === "whatsapp";
  return (
    <div className="w-[300px] sm:w-[340px] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl bg-white">
      {/* Header */}
      {isWA ? (
        <div className="px-4 py-3 flex items-center gap-3" style={{ background: "#075E54" }}>
          <img src={t.avatar} alt={t.name} width={512} height={512} loading="lazy" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">{t.name}</p>
            <p className="text-white/70 text-xs truncate">{t.handle}</p>
          </div>
          <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
        </div>
      ) : (
        <div className="px-4 py-3 flex items-center gap-3 bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf]">
          <img src={t.avatar} alt={t.name} width={512} height={512} loading="lazy" className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">{t.handle}</p>
            <p className="text-white/80 text-xs">Direct · Instagram</p>
          </div>
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 01-1.38-.9 3.71 3.71 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.41a4.43 4.43 0 100 8.86 4.43 4.43 0 000-8.86zm5.6-.2a1.04 1.04 0 11-2.07 0 1.04 1.04 0 012.07 0zM12 14.3a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6z"/></svg>
        </div>
      )}

      {/* Body */}
      <div className={isWA ? "px-4 py-5" : "px-4 py-5 bg-white"} style={isWA ? { background: "#ECE5DD" } : {}}>
        <div className={`relative max-w-[88%] ${isWA ? "ml-auto" : ""} px-4 py-3 rounded-2xl text-[15px] leading-snug text-gray-900`}
          style={{
            background: isWA ? "#DCF8C6" : "#F1F1F1",
            borderTopRightRadius: isWA ? "4px" : undefined,
            borderTopLeftRadius: !isWA ? "4px" : undefined,
          }}
        >
          {t.message}
          <div className={`flex items-center gap-1 mt-2 ${isWA ? "justify-end" : "justify-start"} text-[11px] text-gray-500`}>
            <span>{t.time}</span>
            {isWA && (
              <svg className="w-4 h-4" viewBox="0 0 16 15" fill="#34B7F1"><path d="M15.01 3.316l-.478-.372a.365.365 0 00-.51.063L8.666 9.879a.32.32 0 01-.484.033l-.358-.325a.319.319 0 00-.484.032l-.378.483a.418.418 0 00.036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 00-.064-.512zm-4.1 0l-.478-.372a.365.365 0 00-.51.063L4.566 9.879a.32.32 0 01-.484.033L1.891 7.769a.366.366 0 00-.515.006l-.423.433a.364.364 0 00.006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 00-.063-.51z"/></svg>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200/60">
          <Stars count={t.stars ?? 5} />
          <span className="text-[11px] text-gray-500 uppercase tracking-wider">Cliente verificada</span>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  // Duplicate for seamless infinite marquee
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="relative px-6 py-24 md:py-32 bg-deep/60 border-y border-gold-soft/20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">⭐ Depoimentos reais</p>
        <h2 className="text-3xl md:text-5xl font-display mb-4">
          O que mulheres como você
          <br />
          <span className="italic text-gradient-gold">estão vivendo</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Stars count={5} />
          <span className="text-cream/80 text-sm ml-2">+1.200 mulheres já destravaram</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-deep to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-deep to-transparent pointer-events-none" />
        <div className="flex gap-6 animate-marquee w-max py-4">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <p className="text-center text-cream/60 text-xs mt-10 italic">
        Depoimentos enviados por clientes via WhatsApp e Instagram · Identidades parcialmente preservadas
      </p>
    </section>
  );
}

function goldButtonClass(size: "lg" | "xl") {
  return size === "xl" ? "px-10 py-6 text-lg md:text-xl" : "px-8 py-5 text-base md:text-lg";
}

const goldButtonShared =
  "group relative inline-flex items-center justify-center font-bold tracking-wide uppercase rounded-full bg-gold-gradient text-deep shadow-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-glow active:scale-[0.98]";

function GoldButton({
  children,
  href = CTA_URL,
  size = "lg",
  onPress,
}: {
  children: React.ReactNode;
  href?: string;
  size?: "lg" | "xl";
  onPress?: () => void;
}) {
  const sizing = goldButtonClass(size);
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </>
  );
  if (onPress) {
    return (
      <button type="button" onClick={onPress} className={`${goldButtonShared} ${sizing}`}>
        {content}
      </button>
    );
  }
  return (
    <a href={href} className={`${goldButtonShared} ${sizing}`}>
      {content}
    </a>
  );
}

/**
 * Sempre abre o formulário (dados anteriores vêm preenchidos se existirem).
 * Se já houver lead, mostra atalho para a Kiwify quem quiser pular a revisão.
 */
function DiscoverCtaBlock({
  hasLead,
  openDiscover,
  size = "lg",
  labelNew = "✨ Descobrir meu número",
  labelReturning = "✨ Revisar meus dados",
}: {
  hasLead: boolean;
  openDiscover: () => void;
  size?: "lg" | "xl";
  labelNew?: React.ReactNode;
  labelReturning?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <GoldButton size={size} onPress={openDiscover}>
        {hasLead ? labelReturning : labelNew}
      </GoldButton>
      {hasLead && (
        <a
          href={getPaymentHref()}
          className="text-sm text-cream/65 underline underline-offset-4 transition-colors hover:text-gold"
        >
          Ir direto ao pagamento
        </a>
      )}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-16 md:my-24">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <div className="mx-4 text-gold/70 text-2xl">✦</div>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

function Index() {
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [hasLead, setHasLead] = useState(false);
  useEffect(() => {
    setHasLead(!!getMapaLead());
  }, []);
  const openDiscover = () => setDiscoverOpen(true);

  return (
    <>
      <DiscoverNumberDialog
        open={discoverOpen}
        onOpenChange={setDiscoverOpen}
        onCaptured={() => setHasLead(true)}
      />
      <main className="min-h-screen text-foreground overflow-hidden">
        <StickyOfferBar hasLead={hasLead} onOpenDiscover={openDiscover} />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCosmic}
            alt="Código numerológico cósmico"
            width={1536}
            height={1024}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/70 to-deep" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold-soft bg-deep/60 backdrop-blur">
            <span className="text-gold text-sm">✦</span>
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold/90">Mapa Numerológico</span>
            <span className="text-gold text-sm">✦</span>
          </div>

          <p className="text-sm md:text-base tracking-[0.25em] uppercase text-gold/80 italic font-display mb-8 -mt-4">
            Correção Energética do seu nome
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Você faz tudo certo<span className="text-gold">…</span>
            <br />
            <span className="italic font-light text-gradient-gold">então por que</span>
            <br />
            sua vida continua <span className="italic">travada?</span>
          </h1>

          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Existe um padrão invisível que você ativa todos os dias —
            <br className="hidden md:block" /> e ele pode estar no seu <span className="text-gold font-medium">nome</span>.
          </p>
          <p className="text-base md:text-lg text-cream/60 max-w-xl mx-auto mb-10 italic font-display">
            Enquanto você não entende isso… você continua repetindo os mesmos bloqueios.
          </p>

          <p className="text-xl md:text-2xl font-display text-cream mb-10 max-w-2xl mx-auto">
            Descubra como destravar seu <span className="text-gold">dinheiro</span>, sua <span className="text-gold">clareza</span>
            <br className="hidden md:block" /> e parar de viver no automático.
          </p>

          <DiscoverCtaBlock hasLead={hasLead} openDiscover={openDiscover} size="xl" />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/70">
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Entrega em até 48h</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Garantia de 7 dias</span>
            <span className="flex items-center gap-2"><span className="text-gold">✓</span> Acesso imediato</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 animate-pulse-glow text-xs tracking-[0.3em]">
          ROLE PARA DESCOBRIR ↓
        </div>
      </section>

      {/* ABERTURA */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-display leading-tight mb-6">
            O seu nome não é só um nome.
          </p>
          <p className="text-3xl md:text-5xl font-display italic text-gradient-gold mb-12">
            Ele é um código.
          </p>
          <p className="text-lg md:text-xl text-cream/80 mb-8">Um padrão que influencia:</p>
          <ul className="space-y-3 text-lg md:text-xl text-cream/90 mb-12">
            <li className="flex items-center justify-center gap-3"><span className="text-gold">◆</span> como você pensa</li>
            <li className="flex items-center justify-center gap-3"><span className="text-gold">◆</span> como você decide</li>
            <li className="flex items-center justify-center gap-3"><span className="text-gold">◆</span> o que você atrai</li>
          </ul>
          <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
            E o problema é que…
            <br /><br />
            👉 você ativa esse código <span className="text-gold font-medium">todos os dias</span> sem perceber se ele está te <span className="italic">favorecendo</span>… ou te <span className="text-magenta italic">travando</span>
          </p>
        </div>
      </section>

      {/* ESCALADA + CONFRONTO */}
      <section className="relative px-6 py-24 bg-deep/60 border-y border-gold-soft/20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-cream/90 mb-10 text-center font-display">
            E enquanto você não enxerga isso:
          </p>
          <div className="space-y-4 mb-16">
            {[
              "você continua se esforçando mais do que precisa",
              "toma decisões no automático",
              "vive ciclos que parecem não ter fim",
            ].map((t) => (
              <div key={t} className="p-5 rounded-2xl border border-gold-soft/20 bg-deep/40 backdrop-blur text-lg text-cream/90">
                <span className="text-magenta mr-3">✕</span>{t}
              </div>
            ))}
          </div>

          <div className="text-center py-12 border-t border-b border-gold-soft/30">
            <p className="text-2xl md:text-3xl font-display italic text-cream/95 mb-6">
              E se nada mudar…
            </p>
            <div className="space-y-2 text-3xl md:text-5xl font-display">
              <p className="text-cream/70">daqui a <span className="text-gold">3 meses</span></p>
              <p className="text-cream/85">daqui a <span className="text-gold">6 meses</span></p>
              <p className="text-cream">daqui a <span className="text-gold">1 ano</span>…</p>
            </div>
            <p className="mt-8 text-xl md:text-2xl font-display italic text-magenta/90">
              sua vida pode estar exatamente no mesmo lugar.
            </p>
          </div>
        </div>
      </section>

      {/* QUEBRA DE CRENÇA */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-cream/80 mb-8">E não…</p>
          <div className="space-y-4 text-2xl md:text-3xl font-display mb-12">
            <p className="line-through text-cream/50">isso não é falta de capacidade</p>
            <p className="line-through text-cream/50">não é falta de esforço</p>
            <p className="line-through text-cream/50">não é azar</p>
          </div>
          <p className="text-4xl md:text-6xl font-display">
            👉 é <span className="text-gradient-gold italic">padrão</span>
          </p>
        </div>
      </section>

      {/* FRASE FORTE */}
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight">
            Você não está <span className="italic text-cream/60">travada</span>…
            <br />
            você só está repetindo o que <span className="text-gradient-gold italic">nunca foi ajustado.</span>
          </p>
          <div className="mt-12">
            <DiscoverCtaBlock hasLead={hasLead} openDiscover={openDiscover} />
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="relative px-6 py-24 md:py-32 bg-deep/60 border-y border-gold-soft/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-6">A solução</p>
            <h2 className="text-4xl md:text-6xl font-display mb-4">
              ✦Mapa Numerológico✦
            </h2>
            <p className="text-2xl md:text-3xl font-display italic text-gradient-gold">
              Código do Seu Nome
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={mandala}
                alt="Mandala numerológica dourada"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-3xl shadow-glow animate-float"
              />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-display text-cream mb-8">
                É o que revela exatamente:
              </p>
              <ul className="space-y-5">
                {[
                  "quais padrões você está repetindo",
                  "onde estão os bloqueios que travam seu dinheiro",
                  "o que sabota suas decisões financeiras — e como parar",
                  "e o que precisa ser ajustado",
                ].map((t) => (
                  <li key={t} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center text-deep text-sm font-bold">✓</span>
                    <span className="text-lg text-cream/90">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-display italic text-cream leading-tight">
              Quando você entende seu padrão,
              <br />
              você para de lutar contra si mesma —
              <br />
              <span className="text-gradient-gold">e começa a se mover com menos esforço e mais resultado.</span>
            </p>
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">A jornada</p>
            <h2 className="text-3xl md:text-5xl font-display">
              O que acontece quando você
              <br />
              <span className="italic text-gradient-gold">entende seu código</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            {[
              { icon: "⚡", time: "IMEDIATAMENTE", text: "Você entende o que antes não fazia sentido." },
              { icon: "🧠", time: "EM ATÉ 7 DIAS", text: "Você começa a perceber seus padrões no dia a dia e mudanças na forma como pensa, sente e reage." },
              { icon: "🔥", time: "EM ATÉ 30 DIAS", text: "Você começa a agir de forma diferente e situações que antes se repetiam começam a se quebrar." },
              { icon: "💰", time: "DE 3 A 6 MESES", text: "Seus resultados começam a refletir esse novo padrão e sua vida entra em um fluxo mais leve, alinhado e próspero." },
              { icon: "♾", time: "PARA A VIDA TODA", text: "Você passa a entender seus ciclos, suas decisões e seu comportamento sem voltar aos mesmos padrões." },
            ].map((item, i) => (
              <div key={item.time} className={`relative mb-12 md:mb-16 md:flex ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 md:px-12 pl-20 md:pl-0">
                  <div className="p-6 md:p-8 rounded-2xl border border-gold-soft bg-deep/60 backdrop-blur">
                    <p className="text-xs tracking-[0.25em] text-gold mb-3">{item.time}</p>
                    <p className="text-lg text-cream/90 leading-relaxed">{item.text}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold-gradient flex items-center justify-center text-2xl md:text-3xl shadow-gold">
                  {item.icon}
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <DiscoverCtaBlock hasLead={hasLead} openDiscover={openDiscover} size="xl" />
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="px-6 py-24 md:py-32 bg-deep/60 border-y border-gold-soft/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-16">
            Dois caminhos. <span className="italic text-gradient-gold">Uma escolha.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-3xl border border-magenta/30 bg-deep/80">
              <p className="text-xs tracking-[0.25em] uppercase text-magenta mb-4">Se nada mudar</p>
              <h3 className="text-2xl md:text-3xl font-display mb-8 text-cream/90">
                O que acontece se você continuar assim
              </h3>
              <ul className="space-y-4">
                {[
                  "você continua tentando… sem sair do lugar",
                  "o dinheiro continua não ficando",
                  "os mesmos ciclos se repetem",
                  "você se sente perdida",
                  "sua vida não evolui",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-cream/70">
                    <span className="text-magenta">✕</span>{t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent shadow-gold relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl" />
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 relative">A virada</p>
              <h3 className="text-2xl md:text-3xl font-display mb-8 text-cream relative">
                O que muda quando você entende seu código
              </h3>
              <ul className="space-y-4 relative">
                {[
                  "clareza sobre o que te trava",
                  "decisões mais conscientes",
                  "direção",
                  "mais controle da sua vida",
                  "sensação de evolução",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-cream">
                    <span className="text-gold">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-16 text-2xl md:text-4xl font-display italic text-gradient-gold">
            Nada muda… até você mudar o padrão.
          </p>
        </div>
      </section>

      {/* PROVA - NOMES */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Prova</p>
            <h2 className="text-3xl md:text-5xl font-display">
              Como o nome influencia
              <br />
              <span className="italic text-gradient-gold">qualquer pessoa</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-cream/85 leading-relaxed mb-16">
            <p>O nome que você usa todos os dias <span className="text-gold">não é neutro</span>.</p>
            <p>Ele carrega uma vibração. Um padrão.</p>
            <p>E isso pode ser observado até em pessoas de alto nível que escolheram usar nomes diferentes do seu nome de nascimento:</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { used: "Anitta", real: "Larissa de Macedo Machado" },
              { used: "Xuxa", real: "Maria da Graça Meneghel" },
              { used: "Silvio Santos", real: "Senor Abravanel" },
              { used: "William Bonner", real: "William Bonemer Júnior" },
            ].map((p) => (
              <div key={p.used} className="p-6 rounded-2xl border border-gold-soft bg-deep/60 backdrop-blur">
                <p className="text-2xl font-display text-gold mb-1">{p.used}</p>
                <p className="text-sm text-cream/60 italic">{p.real}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-2xl md:text-3xl font-display italic mb-16">
            👉 <span className="text-gradient-gold">Coincidência?</span>
          </p>

          <div className="max-w-3xl mx-auto mb-16 space-y-4 text-lg text-cream/85 text-center">
            <p>Essas pessoas usam nomes que <span className="text-gold">comunicam ao mundo</span> e reforçam diariamente.</p>
            <p>E esse nome influencia:</p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["percepção", "comportamento", "posicionamento", "resultados"].map((t) => (
                <span key={t} className="px-5 py-2 rounded-full border border-gold-soft bg-gold/5 text-gold">{t}</span>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display text-center mb-10">
              🔎 Padrões que o <span className="italic text-gradient-gold">nome carrega</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { t: "Padrão de Liderança", d: "o nome que domina" },
                { t: "Padrão de Autossabotagem Financeira", d: "o nome que ganha e perde" },
                { t: "Padrão de Sensibilidade", d: "o nome que absorve" },
                { t: "Padrão de Dispersão", d: "o nome que começa e não termina" },
              ].map((p) => (
                <div key={p.t} className="p-6 rounded-2xl border border-gold-soft/40 bg-deep/40">
                  <p className="text-lg text-gold font-medium mb-1">{p.t}</p>
                  <p className="text-cream/70 italic">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 text-center">⚠️ Importante</p>
            <div className="space-y-3 text-center text-cream/90 text-lg">
              <p>Você <span className="text-gold font-medium">não precisa</span> mudar seu nome de nascimento.</p>
              <p>Não precisa alterar documentos.</p>
              <p>Não precisa ser famosa.</p>
              <p className="pt-4 italic font-display text-xl">
                O Mapa trabalha com o que você já tem
                <br />
                e te mostra como usar isso a seu favor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <TestimonialsSection />

      {/* PARA QUEM É / NÃO É */}
      <section className="relative px-6 py-24 bg-deep/60 border-y border-gold-soft/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Antes de continuar</p>
            <h2 className="text-3xl md:text-5xl font-display">
              Isso é <span className="italic text-gradient-gold">pra você?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-gold-soft bg-deep/80 backdrop-blur">
              <p className="text-sm tracking-[0.25em] uppercase text-gold mb-5">✓ É pra você se…</p>
              <ul className="space-y-4 text-cream/85">
                {[
                  "Você sente que se esforça e ainda assim a vida não destrava",
                  "Tem ciclos que se repetem (dinheiro, relacionamentos, decisões)",
                  "Quer entender por que certos bloqueios voltam sempre",
                  "Está pronta(o) para enxergar o padrão invisível e mudar",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-magenta/30 bg-deep/80 backdrop-blur">
              <p className="text-sm tracking-[0.25em] uppercase text-magenta mb-5">✗ Não é pra você se…</p>
              <ul className="space-y-4 text-cream/70">
                {[
                  "Você quer uma solução mágica sem precisar agir",
                  "Não está disposta(o) a olhar pra dentro com honestidade",
                  "Acredita que nada pode mudar na sua vida",
                  "Quer apenas curiosidade, sem aplicar nada",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-magenta mt-1">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="relative px-6 py-24 md:py-32 bg-deep border-y border-gold/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.16_78/0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">🎁 Oferta especial</p>
            <h2 className="text-3xl md:text-5xl font-display">
              Tudo que você recebe <span className="italic text-gradient-gold">hoje</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: "🧬",
                title: "Mapa Numerológico",
                subtitle: "Código do Seu Nome",
                price: "R$ 97",
                desc: "Leitura completa do seu código energético com identificação de padrões, bloqueios e direcionamento para dinheiro, decisões e emoções.",
              },
              {
                icon: "🧠",
                title: "Direcionamento Prático",
                subtitle: "Personalizado",
                price: "R$ 47",
                desc: "O que ajustar no seu dia a dia para mudar sua realidade — orientação sobre decisões financeiras e ciclos que se repetem.",
              },
              {
                icon: "🔥",
                title: "BÔNUS Exclusivo",
                subtitle: "Protocolo Destrave Sua Energia",
                price: "R$ 67",
                desc: "Guia prático com técnicas baseadas em neurociência e espiritualidade para reprogramar seus padrões em 20 min/dia.",
                bonus: true,
              },
            ].map((item) => (
              <div key={item.title} className={`relative p-6 rounded-3xl border backdrop-blur flex flex-col ${item.bonus ? "border-magenta/50 bg-magenta/5 shadow-glow" : "border-gold-soft bg-deep/60"}`}>
                {item.bonus && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-magenta text-cream text-[10px] tracking-[0.2em] uppercase font-bold">
                    Grátis
                  </div>
                )}
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-display text-cream leading-tight">{item.title}</h3>
                <p className="text-sm text-gold/90 italic mb-3">{item.subtitle}</p>
                <p className="text-cream/75 text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                <div className="pt-4 border-t border-gold-soft/30">
                  <span className="text-xs text-cream/60">Valor: </span>
                  <span className="text-lg font-display line-through text-cream/50">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent border-2 border-gold p-8 md:p-12 text-center shadow-glow">
            <CountdownTimer />
            <p className="text-lg text-cream/80 mb-2">💰 Total:</p>
            <p className="text-3xl md:text-4xl font-display line-through text-cream/50 mb-6">De R$ 211</p>
            <p className="text-sm tracking-[0.3em] uppercase text-magenta mb-3 animate-pulse-glow">🚨 Hoje por apenas</p>
            <p className="text-7xl md:text-9xl font-display font-bold text-gradient-gold mb-2 leading-none">
              R$47
            </p>
            <p className="text-cream/60 mb-10">pagamento único · acesso imediato</p>

            <DiscoverCtaBlock hasLead={hasLead} openDiscover={openDiscover} size="xl" />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-cream/70">
              <span>🔒 Compra 100% segura</span>
              <span>⚡ Acesso imediato</span>
              <span>📱 Acesse de qualquer lugar</span>
            </div>

            <div className="mt-6 pt-6 border-t border-gold-soft/30">
              <p className="text-xs tracking-[0.25em] uppercase text-cream/60 mb-3">🔒 Pagamento 100% Seguro</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-3 py-1.5 rounded-md bg-cream/10 border border-cream/20 text-xs font-bold text-cream/80 tracking-wider">VISA</span>
                <span className="px-3 py-1.5 rounded-md bg-cream/10 border border-cream/20 text-xs font-bold text-cream/80 tracking-wider">MASTERCARD</span>
                <span className="px-3 py-1.5 rounded-md bg-cream/10 border border-cream/20 text-xs font-bold text-cream/80 tracking-wider">ELO</span>
                <span className="px-3 py-1.5 rounded-md bg-cream/10 border border-cream/20 text-xs font-bold text-cream/80 tracking-wider">PIX</span>
                <span className="px-3 py-1.5 rounded-md bg-cream/10 border border-cream/20 text-xs font-bold text-cream/80 tracking-wider">BOLETO</span>
              </div>
            </div>
          </div>

          {/* GARANTIA */}
          <div className="mt-12 p-8 md:p-10 rounded-3xl border border-gold-soft bg-deep/60 backdrop-blur flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full bg-gold-gradient flex items-center justify-center text-deep shadow-gold">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold leading-none">7</div>
                <div className="text-[10px] md:text-xs tracking-widest font-bold">DIAS</div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm tracking-[0.3em] uppercase text-gold mb-2">🛡 Garantia incondicional</p>
              <h3 className="text-2xl md:text-3xl font-display mb-3">Teste por 7 dias.</h3>
              <p className="text-cream/80">Se não fizer sentido… seu dinheiro é devolvido. <span className="text-gold">Sem perguntas.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-24 bg-deep/60 border-y border-gold-soft/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Dúvidas frequentes</p>
            <h2 className="text-3xl md:text-5xl font-display">
              Antes de você <span className="italic text-gradient-gold">decidir</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Como funciona o Mapa Numerológico?",
                a: "Após a compra, você preenche um formulário com seu nome completo e data de nascimento. A partir desses dados, é feita a leitura completa do seu código energético, identificando padrões, bloqueios e direcionamentos práticos para sua vida.",
              },
              {
                q: "Em quanto tempo eu recebo meu mapa?",
                a: "Seu mapa personalizado é entregue em até 48 horas no seu e-mail. Em muitos casos a entrega é ainda mais rápida.",
              },
              {
                q: "Em que formato eu recebo?",
                a: "Você recebe em PDF digital, organizado e fácil de ler, podendo acessar pelo celular, tablet ou computador, quantas vezes quiser.",
              },
              {
                q: "Eu preciso mudar meu nome?",
                a: "Não. O mapa não exige mudança de nome. Ele revela o padrão que seu nome ativa todos os dias e te dá direcionamentos práticos para destravar áreas específicas — sem precisar mudar nada no documento.",
              },
              {
                q: "Como funciona a garantia de 7 dias?",
                a: "Se em até 7 dias você sentir que o mapa não fez sentido pra você, basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas, sem burocracia.",
              },
              {
                q: "Como é feito o pagamento?",
                a: "Pagamento único e 100% seguro via cartão de crédito (parcelado), Pix ou boleto. O acesso é imediato após a confirmação.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border border-gold-soft rounded-2xl bg-deep/80 backdrop-blur px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-display text-cream hover:text-gold hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-cream/80 leading-relaxed pb-5 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={mandala} alt="" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/80 to-deep" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-8">A verdade é simples</p>
          <p className="text-3xl md:text-5xl font-display mb-12 leading-tight">
            Se você continuar como está…
            <br />
            <span className="italic text-magenta/90">nada muda.</span>
          </p>

          <div className="my-16 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="text-2xl md:text-3xl font-display text-cream/80 mb-4">
            Você pode continuar tentando…
          </p>
          <p className="text-2xl md:text-4xl font-display text-gradient-gold italic mb-16">
            ou entender o padrão que está te travando.
          </p>

          <p className="text-3xl md:text-5xl font-display leading-tight mb-12">
            O seu nome pode estar te <span className="italic text-cream/60">limitando</span>…
            <br />
            ou pode ser a <span className="text-gradient-gold italic">chave da sua virada.</span>
          </p>

          <DiscoverCtaBlock hasLead={hasLead} openDiscover={openDiscover} size="xl" />

          <p className="mt-10 text-sm text-cream/60 tracking-wide">
            Acesso imediato · Garantia de 7 dias · Pagamento único
          </p>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-gold-soft/20 text-center text-cream/50 text-xs tracking-wider">
        <p>✦ MAPA NUMEROLÓGICO · Código do Seu Nome ✦</p>
        <p className="mt-2">Todos os direitos reservados.</p>
      </footer>
    </main>
    </>
  );
}
