import { useEffect, useState } from "react";

const LiveViewersChip = () => {
  const [count, setCount] = useState(() => 200 + Math.floor(Math.random() * 61));

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((n) => {
        let next = n + Math.floor(Math.random() * 5) - 2;
        if (next < 186) next = 186;
        if (next > 278) next = 278;
        return next;
      });
    }, 13000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-center mt-6 max-w-[22rem] mx-auto relative z-10" aria-live="polite">
      <div className="w-full max-w-[20.5rem] py-3 px-4 rounded-[14px] text-center bg-gradient-to-br from-[rgba(72,48,38,0.92)] to-[rgba(42,28,22,0.96)] border border-[rgba(200,165,110,0.55)] shadow-[0_0_0_1px_rgba(255,255,255,0.07)_inset,0_4px_22px_rgba(0,0,0,0.38),0_0_32px_rgba(184,144,82,0.22)]">
        <div className="inline-flex items-center justify-center gap-1.5 mb-1.5 font-body text-[0.62rem] font-extrabold tracking-[0.16em] uppercase text-[#e8cf9a]">
          <span
            className="w-[7px] h-[7px] rounded-full bg-amber-500 shadow-[0_0_0_2px_rgba(245,158,11,0.5)] shrink-0 motion-reduce:animate-none animate-hero-live-dot"
            aria-hidden
          />
          <span>Ao vivo agora</span>
        </div>
        <p className="m-0 leading-tight">
          <span className="block font-body text-[clamp(1.85rem,6vw,2.35rem)] font-black tabular-nums tracking-tight text-[#fff8ee] [text-shadow:0_2px_18px_rgba(200,165,110,0.45)] mb-0.5">
            {count}
          </span>
          <span className="block font-body text-[0.72rem] font-bold tracking-wide uppercase text-white/[0.72] leading-snug">
            pessoas nesta página agora
          </span>
        </p>
      </div>
    </div>
  );
};

export default LiveViewersChip;
