import { motion } from "motion/react";
import { Award, BadgeCheck, Flag, LockKeyhole, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "NSE 1 — Cybersecurity and Cloud Fundamentals",
    issuer: "Fortinet",
    icon: ShieldCheck,
  },
  {
    title: "NSE 2 — Introduction to Next Generation Firewall 1.0",
    issuer: "Fortinet",
    icon: LockKeyhole,
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    icon: BadgeCheck,
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: LockKeyhole,
  },
  {
    title: "ISO/IEC 27001 Information Security Associate™",
    issuer: "SkillFront",
    icon: Award,
  },
  {
    title: "Introduction to Splunk",
    issuer: "Splunk",
    icon: BadgeCheck,
  },
];

const competitions = [
  "Hack The Box Morocco — Summer CTF Cup",
  "NullOrigin CTF 2026",
  "CTF Info Days — ENSA Agadir",
];

export function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      <div className="pointer-events-none absolute top-1/3 right-0 h-80 w-80 rounded-full bg-accent/15 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          CERTIFICATIONS <span className="neon-text"> &amp; CTF</span>
        </h2>
        <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          // Des bases en sécurité, gouvernance, protection des terminaux et analyse des menaces, //
          complétées par une pratique en compétition.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map(({ title, issuer, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="glass glow-hover flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50">
                <Icon size={19} className="text-neon" />
              </span>
              <div>
                <h3 className="font-display text-sm leading-relaxed font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 font-mono text-[11px] text-cyan">{issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="glass mt-10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Flag size={20} className="text-cyan" />
            <h3 className="font-display text-xl font-semibold text-foreground">Capture The Flag</h3>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Les compétitions CTF complètent les projets et les laboratoires par une pratique
            orientée investigation, résolution de problèmes et expérimentation technique.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((competition, index) => (
              <motion.li
                key={competition}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="flex items-start gap-2 rounded-xl border border-border bg-secondary/35 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-0.5 text-neon">›</span>
                {competition}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
