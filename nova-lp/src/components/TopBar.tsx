const items = [
  "✦ Acesso imediato após o pagamento",
  "🛡️ Garantia total de 7 dias",
  "🔥 De R$67 por apenas R$27",
  "📧 PDF no seu e-mail em minutos",
  "🔮 Protocolo exclusivo — neurociência & espiritualidade",
];

const TopBar = () => (
  <div className="w-full overflow-hidden py-2.5 border-b border-energy-violet/20" style={{ background: 'linear-gradient(90deg, hsl(260 30% 8%), hsl(280 30% 10%), hsl(260 30% 8%))' }}>
    <div className="animate-marquee whitespace-nowrap flex gap-12">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-sm font-body text-energy-violet tracking-wide">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TopBar;
