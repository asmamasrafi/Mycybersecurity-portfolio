import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ShieldCheck, Terminal, Fingerprint } from "lucide-react";

const TITLES = ["AI & Cybersecurity Student", "Security Engineer", "Blue Team Learner", "AI Security Enthusiast"];

function useTypingCycle(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1400 : cleared ? 200 : deleting ? 40 : 85;

    const id = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        return setI((v) => v + 1);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, i, words]);

  return text;
}

const stats = [
  { value: "3", label: "CTF challenges solved" },
  { value: "6", label: "Projects completed" },
  { value: "3", label: "Internships completed" },
];

function Silhouette() {
  return (
    <svg viewBox="0 0 320 400" className="h-full w-full" role="img" aria-label="Avatar silhouette">
      <defs>
        <linearGradient id="sil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.24 300)" />
          <stop offset="100%" stopColor="oklch(0.8 0.15 220)" />
        </linearGradient>
      </defs>
      <text
        x="160"
        y="215"
        textAnchor="middle"
        className="font-display"
        fontSize="180"
        fontWeight="700"
        fill="oklch(0.96 0.01 270 / 0.07)"
      >
        AM
      </text>
      <circle cx="160" cy="150" r="58" fill="url(#sil)" opacity="0.9" />
      <path
        d="M52 400c0-62 48-112 108-112s108 50 108 112z"
        fill="url(#sil)"
        opacity="0.85"
      />
    </svg>
  );
}

export function Hero() {
  const typed = useTypingCycle(TITLES);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-neon/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <ShieldCheck size={13} className="text-cyan" /> AI security • cybersecurity
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-[-0.04em] sm:text-6xl">
            Hi, I&apos;m <span className="neon-text text-glow">Assma Masrafi</span>
          </h1>

          <p className="mt-5 font-mono text-base text-cyan sm:text-lg">
            <span className="text-muted-foreground">&gt;_ </span>
            {typed}
            <span className="caret">|</span>
          </p>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Engineering student specialized in cybersecurity, with a focus on secure AI systems,
            intrusion detection, governance and defensive architecture. I build practical projects
            and apply security thinking to real environments and business use cases.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow-hover rounded-full border border-neon/60 bg-[linear-gradient(135deg,rgba(132,94,247,0.25),rgba(34,211,238,0.12))] px-6 py-3 font-mono text-sm text-foreground glow-neon"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="glow-hover rounded-full border border-border bg-secondary/40 px-6 py-3 font-mono text-sm text-muted-foreground hover:text-foreground"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="neon-text font-display text-3xl font-bold sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 font-mono text-[11px] leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass glow-hover group relative rounded-3xl p-3">
            <div className="relative overflow-hidden rounded-2xl bg-secondary/60">
              <div className="aspect-[4/5]">
                <Silhouette />
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="glitch-layer absolute inset-0 bg-cyan/15 mix-blend-screen" />
              </div>
              <div className="absolute inset-x-3 top-3 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>ID · 0xA55M4</span>
                <span className="text-cyan">● LIVE</span>
              </div>
              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between font-mono text-[10px]">
                <span className="glass rounded-md px-2 py-1 text-foreground">@assma_sec</span>
                <span className="text-right leading-tight text-muted-foreground">
                  SECURITY
                  <br />
                  ID.2026-001
                </span>
              </div>
              {/* corner brackets */}
              {["top-2 left-2 border-t border-l", "top-2 right-2 border-t border-r", "bottom-2 left-2 border-b border-l", "bottom-2 right-2 border-b border-r"].map(
                (c) => (
                  <span key={c} className={`absolute h-5 w-5 border-neon/70 ${c}`} />
                ),
              )}
            </div>
          </div>

          <div className="glass float-slow absolute -top-5 -left-6 hidden rounded-xl px-3 py-2 font-mono text-[10px] text-muted-foreground sm:block">
            <Terminal size={12} className="mb-1 text-neon" /> nmap -sV
          </div>
          <div className="glass float-slow absolute -right-5 bottom-14 hidden rounded-xl px-3 py-2 font-mono text-[10px] text-muted-foreground sm:block [animation-delay:1.5s]">
            <Fingerprint size={12} className="mb-1 text-cyan" /> auth: ok
          </div>
        </motion.div>
      </div>
    </section>
  );
}
