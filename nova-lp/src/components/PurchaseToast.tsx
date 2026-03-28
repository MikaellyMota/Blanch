import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const people: [string, string][] = [
  ["Bianca", "Fortaleza"],
  ["Renata", "São Paulo"],
  ["Ana Paula", "Curitiba"],
  ["Larissa", "Belo Horizonte"],
  ["Camila", "Brasília"],
  ["Juliana", "Recife"],
  ["Fernanda", "Salvador"],
  ["Patrícia", "Porto Alegre"],
  ["Mariana", "Manaus"],
  ["Beatriz", "Goiânia"],
  ["Amanda", "Rio de Janeiro"],
  ["Priscila", "Campinas"],
  ["Carla", "Florianópolis"],
  ["Daniela", "Natal"],
  ["Gabriela", "João Pessoa"],
  ["Letícia", "Vitória"],
  ["Isabela", "Maceió"],
  ["Tatiane", "Sorocaba"],
  ["Vanessa", "Ribeirão Preto"],
  ["Rafaela", "Belém"],
];

const pick = () => people[Math.floor(Math.random() * people.length)];

const PurchaseToast = () => {
  const [visible, setVisible] = useState(false);
  const [nameLine, setNameLine] = useState("");
  const [subLine, setSubLine] = useState("");
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const push = (id: number) => {
      timeoutsRef.current.push(id);
    };

    const clearAll = () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };

    const showToast = () => {
      const p = pick();
      const mins = Math.floor(Math.random() * 11) + 1;
      setNameLine(`${p[0]} de ${p[1]}`);
      setSubLine(`acabou de garantir o protocolo há ${mins} min`);
      setVisible(true);
      push(
        window.setTimeout(() => {
          setVisible(false);
        }, 5200)
      );
    };

    const loop = () => {
      const delay = 20000 + Math.floor(Math.random() * 20001);
      push(
        window.setTimeout(() => {
          showToast();
          loop();
        }, delay)
      );
    };

    push(
      window.setTimeout(() => {
        showToast();
        loop();
      }, 4000)
    );

    return () => {
      clearAll();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed left-3 z-[1000] max-w-[min(252px,calc(100vw-24px))] flex items-center gap-2 py-2 px-2.5 bg-white rounded-[10px] shadow-[0_6px_22px_rgba(47,38,35,0.14),0_1px_6px_rgba(0,0,0,0.05)] text-left font-sans",
        "bottom-[max(100px,calc(88px+env(safe-area-inset-bottom,0px)))]",
        "transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2.5 invisible pointer-events-none"
      )}
      aria-hidden={!visible}
    >
      <div
        className="w-8 h-8 rounded-md bg-green-600 shrink-0 flex items-center justify-center text-white"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div>
        <strong className="block text-[0.8rem] font-bold text-[#1a1512] leading-tight mb-0.5">{nameLine}</strong>
        <span className="text-[0.66rem] text-[#6b6560] leading-snug">{subLine}</span>
      </div>
    </div>
  );
};

export default PurchaseToast;
