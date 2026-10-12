import { useEffect, useRef } from "react";

export function MatrixRain({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let drops: number[] = [];
    const size = 14;
    const chars = "01アイウエオカキクケコｱｲｳ$#%&*<>{}[]/\\";
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops = new Array(Math.ceil(canvas.width / size)).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      frame += 1;
      if (frame % 3 !== 0) return;
      ctx.fillStyle = "rgba(6, 6, 18, 0.16)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${size}px monospace`;
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)] ?? "0";
        ctx.fillStyle = Math.random() > 0.9 ? "rgba(170,200,255,0.75)" : "rgba(140,110,255,0.45)";
        ctx.fillText(char, i * size, y * size);
        drops[i] = y * size > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    const updateMotion = () => {
      if (motionPreference.matches) {
        cancelAnimationFrame(raf);
        raf = 0;
        return;
      }
      if (!raf) draw();
    };
    updateMotion();
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      motionPreference.removeEventListener("change", updateMotion);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 h-dvh w-full opacity-20 ${className}`}
    />
  );
}
