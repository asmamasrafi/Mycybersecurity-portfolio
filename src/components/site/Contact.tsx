import { Mail, Flag, Send, type LucideProps } from "lucide-react";

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

type IconComp = (props: { size?: number }) => JSX.Element;

const socials: { icon: IconComp | ((p: LucideProps) => JSX.Element); label: string; href: string }[] = [
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: Mail as unknown as IconComp, label: "Email", href: "#" },
  { icon: Flag as unknown as IconComp, label: "TryHackMe", href: "#" },
  { icon: Send as unknown as IconComp, label: "Telegram", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-mono text-xs text-muted-foreground">// let&apos;s talk</p>
        <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
          Message me <span className="neon-text text-glow">before the hackers do.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Open to internships, CTF teams and any project where I can learn by defending something
          real.
        </p>

        <div className="glass glow-neon mx-auto mt-10 flex w-fit flex-wrap justify-center gap-3 rounded-2xl p-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="glow-hover flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-20 border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 font-mono text-[11px] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Assma Masrafi. All rights reserved.</span>
          <span>built at 3am with caffeine &amp; curiosity</span>
        </div>
      </footer>
    </section>
  );
}
