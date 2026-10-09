import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";

const FOCUSES = ["Détection des menaces", "Audit de sécurité", "Gouvernance cyber"];

function useTypingCycle(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length] ?? "";
    const finished = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = finished ? 1500 : cleared ? 250 : deleting ? 38 : 80;

    const timer = window.setTimeout(() => {
      if (finished) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setWordIndex((index) => index + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

export function Hero() {
  const focus = useTypingCycle(FOCUSES);

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-neon/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <ShieldCheck size={13} className="text-cyan" />
            Étudiante ingénieure · Cybersécurité
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold tracking-[-0.04em] sm:text-6xl">
            <span className="neon-text text-glow">Assma Masrafi</span>
          </h1>

          <p className="mt-5 min-h-7 font-mono text-base text-cyan sm:text-lg" aria-live="polite">
            <span className="text-muted-foreground">&gt;_ </span>
            {focus}
            <span className="caret">|</span>
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Élève ingénieure en cybersécurité à l’ENSA Agadir, je conçois des projets concrets
            autour de la détection, de l’audit et de la gouvernance de la sécurité. J’aime
            transformer l’analyse technique en recommandations claires et en actions de remédiation
            utiles.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-neon" />
              Agadir, Maroc · Disponible au Maroc, en France et à l’international
            </span>
            <span className="text-cyan">Stage PFE de 6 mois · Dès janvier 2027</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow-hover inline-flex items-center gap-2 rounded-full border border-neon/60 bg-[linear-gradient(135deg,rgba(132,94,247,0.25),rgba(34,211,238,0.12))] px-6 py-3 font-mono text-sm text-foreground glow-neon"
            >
              Découvrir mes projets
              <ArrowDown size={15} />
            </a>
            <a
              href="#contact"
              className="glow-hover inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 font-mono text-sm text-muted-foreground hover:text-foreground"
            >
              Me contacter
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass glow-hover group relative rounded-3xl p-3">
            <div className="relative overflow-hidden rounded-2xl bg-secondary/60">
              <img
                src="/profile.jpeg"
                alt="Assma Masrafi, élève ingénieure en cybersécurité"
                className="aspect-[4/5] w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-x-3 top-3 flex justify-between font-mono text-[10px]">
                <span className="glass rounded-md px-2 py-1 text-foreground">ENSA AGADIR</span>
                <span className="glass rounded-md px-2 py-1 text-cyan">PROMOTION 2027</span>
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-display text-lg font-semibold text-white">Assma Masrafi</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
                  Audit · Détection · Gouvernance
                </p>
              </div>
              {[
                "top-2 left-2 border-t border-l",
                "top-2 right-2 border-t border-r",
                "bottom-2 left-2 border-b border-l",
                "bottom-2 right-2 border-b border-r",
              ].map((corner) => (
                <span key={corner} className={`absolute h-5 w-5 border-neon/70 ${corner}`} />
              ))}
            </div>
          </div>
          <div className="glass float-slow absolute -right-4 bottom-10 hidden rounded-xl px-3 py-2 font-mono text-[10px] text-muted-foreground sm:block">
            <span className="text-cyan">PFE</span> · Janvier 2027
          </div>
        </motion.div>
      </div>
    </section>
  );
}
