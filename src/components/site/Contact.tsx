import { Github, Linkedin, Mail, Flag, Send } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: Flag, label: "TryHackMe", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
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
