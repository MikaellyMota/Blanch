import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import heroPoster from "@/assets/hero-bg.jpg";

const mediaUrl = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

const LOAD_ERROR_MSG =
  "Não foi possível carregar o vídeo. Confirme que IMG_1852.mp4 ou IMG_1852.MOV está em nova-lp/public/media/ e reinicie o servidor. " +
  "No Chrome ou Edge no Windows use preferencialmente MP4 (H.264); ficheiros .MOV costumam falhar nesses browsers.";

const HeroHeadlineVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pendingLoadErrorRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingListenerRef = useRef<(() => void) | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [paused, setPaused] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const clearLoadErrorState = useCallback(() => {
    if (pendingLoadErrorRef.current) {
      clearTimeout(pendingLoadErrorRef.current);
      pendingLoadErrorRef.current = null;
    }
    setHasError(false);
    setErrorMsg("");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setPaused(false);
    const onPause = () => setPaused(true);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  // Não chamar video.load() aqui: no 1.º mount o browser já está a carregar os <source>;
  // load() aborta e reinicia, o que atrasa buffer (pior no Instagram / WebView).

  useEffect(
    () => () => {
      if (pendingLoadErrorRef.current) clearTimeout(pendingLoadErrorRef.current);
    },
    []
  );

  const showPlayError = (msg: string) => {
    setHasError(true);
    setErrorMsg(msg);
  };

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    clearLoadErrorState();
    setIsStarting(true);

    if (playingListenerRef.current) {
      video.removeEventListener("playing", playingListenerRef.current);
      playingListenerRef.current = null;
    }

    const onPlaying = () => {
      setIsPlaying(true);
      setIsStarting(false);
      if (playingListenerRef.current) {
        video.removeEventListener("playing", playingListenerRef.current);
        playingListenerRef.current = null;
      }
    };
    playingListenerRef.current = onPlaying;
    video.addEventListener("playing", onPlaying, { once: true });

    const fail = () => {
      setIsStarting(false);
      if (playingListenerRef.current) {
        video.removeEventListener("playing", playingListenerRef.current);
        playingListenerRef.current = null;
      }
      showPlayError("Não foi possível reproduzir. Atualize a página ou tente em outro navegador.");
    };

    const tryMutedThenSound = async () => {
      try {
        // Muitos browsers começam a descodificar mais depressa com muted; no mesmo gesto do utilizador ligamos o som.
        video.muted = true;
        await video.play();
        video.muted = false;
        video.volume = 1;
      } catch {
        try {
          video.muted = false;
          video.volume = 1;
          await video.play();
        } catch {
          fail();
        }
      }
    };

    void tryMutedThenSound();
  }, [clearLoadErrorState]);

  const togglePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  return (
    <div
      className="max-w-[min(30rem,96vw)] mx-auto mb-6 rounded-[18px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.45)] border border-white/10 bg-black/25"
      role="region"
      aria-label="Vídeo do protocolo"
    >
      {/* Proporção 9:16 fixa desde o 1.º paint — evita o layout “saltar” quando o vídeo carrega ou dá play */}
      <div className="relative w-full aspect-[9/16] max-h-[min(88dvh,880px)] mx-auto min-h-0">
        <video
          ref={videoRef}
          className="absolute inset-0 block h-full w-full object-cover object-center align-middle pointer-events-none bg-black/40"
          loop
          playsInline
          preload="auto"
          fetchPriority="high"
          poster={heroPoster}
          width={1080}
          height={1920}
          onLoadedMetadata={clearLoadErrorState}
          onCanPlay={clearLoadErrorState}
          onError={(e) => {
            const v = e.currentTarget;
            const code = v.error?.code;
            if (import.meta.env.DEV) {
              console.error("[HeroHeadlineVideo] Erro no vídeo", { code, message: v.error?.message });
            }
            if (code === 3) {
              if (pendingLoadErrorRef.current) {
                clearTimeout(pendingLoadErrorRef.current);
                pendingLoadErrorRef.current = null;
              }
              showPlayError(
                "O ficheiro MP4 abre, mas o codec não é suportado no browser (ex.: HEVC). Re-exporte em MP4 com codec H.264 (HandBrake: codec H.264)."
              );
              return;
            }
            // Vários <source>: o 1.º pode dar 404 e disparar error antes do browser usar o seguinte
            if (pendingLoadErrorRef.current) clearTimeout(pendingLoadErrorRef.current);
            pendingLoadErrorRef.current = setTimeout(() => {
              pendingLoadErrorRef.current = null;
              const el = videoRef.current;
              if (!el) return;
              if (el.readyState >= HTMLMediaElement.HAVE_METADATA) return;
              showPlayError(LOAD_ERROR_MSG);
            }, 600);
          }}
        >
          <source src={mediaUrl("IMG_1852.mp4")} type="video/mp4" />
          {/* Windows com "extensões ocultas": o ficheiro pode chamar-se IMG_1852.mp4.mp4 */}
          <source src={mediaUrl("IMG_1852.mp4.mp4")} type="video/mp4" />
          <source src={mediaUrl("IMG_1852.MOV")} type="video/quicktime" />
          <source src={mediaUrl("IMG_1852.MOV.MOV")} type="video/quicktime" />
        </video>

        <div
          className={cn(
            "absolute inset-0 z-[2] flex flex-col items-center justify-center gap-2 p-4 rounded-[inherit] transition-[opacity,visibility] duration-300 ease-out",
            "bg-gradient-to-b from-black/15 via-black/45 to-black/55",
            isPlaying && "opacity-0 invisible pointer-events-none"
          )}
        >
          <button
            type="button"
            disabled={isStarting}
            aria-busy={isStarting}
            className={cn(
              "flex flex-col items-center gap-3.5 font-body cursor-pointer border-0 bg-transparent text-white p-2 px-4 rounded-xl transition-transform hover:scale-[1.03] hover:brightness-110",
              "touch-manipulation outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(45_50%_70%)]",
              isStarting && "opacity-90 cursor-wait hover:scale-100"
            )}
            aria-label="Assistir o vídeo com som"
            onClick={startPlayback}
          >
            <span
              className="w-[4.25rem] h-[4.25rem] rounded-full bg-black/45 border-2 border-[rgba(232,192,138,0.65)] shadow-[0_8px_32px_rgba(0,0,0,0.45)] flex items-center justify-center text-[1.35rem] pl-1"
              aria-hidden
            >
              ▶
            </span>
            <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white/[0.88] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
              {isStarting ? "A carregar…" : "Assistir com som"}
            </span>
          </button>
          {hasError ? (
            <p className="mt-1 max-w-[16rem] font-body text-[0.72rem] leading-snug text-[rgba(255,220,200,0.95)] text-center" role="status">
              {errorMsg}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          className={cn(
            "absolute bottom-3 right-3 z-[3] inline-flex items-center gap-1.5 font-body text-[0.68rem] font-bold tracking-[0.07em] uppercase py-2 px-4 rounded-full",
            "border border-white/40 bg-black/60 text-white/95 shadow-md cursor-pointer transition-[opacity,visibility] duration-300",
            "hover:bg-black/75 hover:border-[rgba(232,192,138,0.5)] outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[hsl(45_50%_70%)]",
            isPlaying ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
          aria-label={paused ? "Continuar vídeo" : "Pausar vídeo"}
          onClick={togglePause}
        >
          <span className="text-[0.85rem] leading-none opacity-95" aria-hidden>
            {paused ? "▶" : "⏸"}
          </span>
          <span>{paused ? "Continuar" : "Pausar"}</span>
        </button>
      </div>
    </div>
  );
};

export default HeroHeadlineVideo;
