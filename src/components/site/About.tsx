import { motion } from "motion/react";
import { GraduationCap, MapPin, Flag, Radar } from "lucide-react";

const details = [
  { icon: GraduationCap, label: "5th-year engineering student in Cybersecurity — ENSA Agadir" },
  { icon: MapPin, label: "Based in Agadir, Morocco · open to 6-month internship / PFE" },
  { icon: Flag, label: "Focused on AI security, red/blue team practices and secure architectures" },
  { icon: Radar, label: "Interested in secure AI systems, Big Data security and risk governance" },
];

const tags = ["#Cybersecurity", "#AI Security", "#Python", "#Big Data", "#Red Team", "#Blue Team", "#OWASP", "#Risk Governance"];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative mb-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-0 font-mono text-[10px] leading-3 tracking-widest text-neon/15 select-none"
          >
            {"01001000 01000001 01000011 01001011 ".repeat(6)}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            ABOUT <span className="neon-text">ME</span>
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">// who is behind the keyboard</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-hover rounded-2xl p-7 md:col-span-2"
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              I&apos;m a cybersecurity engineering student with a strong interest in how AI systems,
              data platforms and business applications can be secured in real-world environments.
              I enjoy exploring offensive and defensive approaches, from intrusion testing to
              secure architecture design and governance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              My work combines cybersecurity, secure software development, risk analysis and hands-on
              labs, with a practical interest in AI security, Big Data security and enterprise
              security audits.
            </p>
            <ul className="mt-6 space-y-3">
              {details.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 font-mono text-xs text-muted-foreground sm:text-sm">
                  <Icon size={15} className="mt-0.5 shrink-0 text-neon" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass glow-hover rounded-2xl p-7"
          >
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground">CURRENT_FOCUS</p>
            <div className="mt-5 space-y-5">
              {[
                { k: "Cybersecurity", v: 85 },
                { k: "AI security", v: 75 },
                { k: "Python & scripting", v: 80 },
                { k: "Risk governance", v: 70 },
              ].map((s) => (
                <div key={s.k}>
                  <div className="flex justify-between font-mono text-[11px] text-muted-foreground">
                    <span>{s.k}</span>
                    <span className="text-cyan">{s.v}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full bg-[image:var(--gradient-neon)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="glass rounded-lg px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-cyan"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
