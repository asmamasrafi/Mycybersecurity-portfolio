import type { ComponentType } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import type { FormEvent } from "react";
import { BrandMark } from "./BrandMark";

const contactEmail = "asmamasrafi.2004@gmail.com";

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = `Message depuis le portfolio — ${name}`;
  const body = `Bonjour Assma,\n\n${message}\n\nCordialement,\n${name}\n${email}`;

  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.3 8.65 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.59-2.35 3.24V21h-4V9Z" />
    </svg>
  );
}

const contacts: {
  icon: ComponentType<{ size?: number }>;
  label: string;
  value: string;
  href: string;
}[] = [
  {
    icon: Mail,
    label: "E-mail",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/assma-masrafi",
    href: "https://www.linkedin.com/in/assma-masrafi",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/asmamasrafi",
    href: "https://github.com/asmamasrafi",
  },
];

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      <div className="mx-auto max-w-4xl px-5">
        <div className="glass glow-neon rounded-3xl p-7 text-center sm:p-12">
          <p className="font-mono text-xs text-cyan">// parlons cybersécurité</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-[-0.04em] sm:text-5xl">
            Prête à contribuer à vos{" "}
            <span className="neon-text text-glow">projets de sécurité.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Je recherche un stage de fin d’études de six mois à partir de janvier 2027. Je souhaite
            contribuer à des missions en détection, audit ou gouvernance de la cybersécurité, et
            échanger avec des équipes au Maroc, en France ou à l’international.
          </p>

          <div className="mx-auto mt-9 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="glass glow-hover flex min-w-0 items-center gap-3 rounded-xl p-4"
              >
                <Icon size={18} className="shrink-0 text-neon" />
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-1 block truncate text-xs text-foreground">{value}</span>
                </span>
                <ArrowUpRight size={14} className="ml-auto shrink-0 text-muted-foreground" />
              </a>
            ))}
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-background/35 p-5 text-left sm:p-7"
          >
            <div className="mb-5">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Envoyer un message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Votre application de messagerie s’ouvrira avec le message prêt à envoyer.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 font-mono text-xs text-muted-foreground">
                Votre nom
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Nom et prénom"
                  className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 font-display text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-neon/70 focus:ring-2 focus:ring-neon/20"
                />
              </label>
              <label className="space-y-2 font-mono text-xs text-muted-foreground">
                Votre e-mail
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 font-display text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-neon/70 focus:ring-2 focus:ring-neon/20"
                />
              </label>
              <label className="space-y-2 font-mono text-xs text-muted-foreground sm:col-span-2">
                Votre message
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Comment puis-je vous aider ?"
                  className="w-full resize-y rounded-xl border border-border bg-background/70 px-4 py-3 font-display text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-neon/70 focus:ring-2 focus:ring-neon/20"
                />
              </label>
            </div>
            <button
              type="submit"
              className="glow-hover mt-5 inline-flex items-center gap-2 rounded-full border border-neon/60 bg-[linear-gradient(135deg,rgba(132,94,247,0.25),rgba(34,211,238,0.12))] px-5 py-3 font-mono text-sm text-foreground glow-neon"
            >
              Préparer l’e-mail <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <a
            href="#home"
            aria-label="Assma Masrafi — Accueil"
            className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          >
            <BrandMark className="h-8 w-8" />
            <span className="font-display text-sm font-semibold">Assma Masrafi</span>
          </a>
          <span className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} · Étudiante ingénieure en cybersécurité · ENSA Agadir
          </span>
        </div>
      </footer>
    </motion.section>
  );
}
