import { motion } from "motion/react";
import { BookOpenCheck, GraduationCap } from "lucide-react";

const approach = [
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Cycle ingénieur en cybersécurité · ENSA Agadir · promotion 2027",
  },
  {
    icon: BookOpenCheck,
    title: "Ma démarche",
    description:
      "Comprendre une menace, la détecter, puis traduire les constats en actions concrètes.",
  },
];

const interests = [
  {
    title: "Détection & SOC",
    description: "Analyse de journaux, règles de détection, alertes et investigation.",
    tools: "Splunk · Snort · AIDE · Wireshark · IoC",
  },
  {
    title: "Gouvernance & conformité",
    description: "Évaluation de maturité, analyse de risques et priorisation des remédiations.",
    tools: "ISO/IEC 27001 · CMRPI/AUSIM · NIST CSF · CIS/SCAP · CVSS",
  },
  {
    title: "Tests & sécurité applicative",
    description: "Audit d’applications, validation des contrôles et sécurisation des données.",
    tools: "Kali Linux · Nmap · Burp Suite · OWASP",
  },
  {
    title: "Développement & automatisation",
    description: "Des outils et scripts au service de pratiques de sécurité reproductibles.",
    tools: "Python · Bash · Git · Docker · PostgreSQL",
  },
];

export function About() {
  return (
    <motion.section
      id="about"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative mb-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 left-0 font-mono text-[10px] leading-3 tracking-widest text-neon/15 select-none"
          >
            {"01001000 01000001 01000011 01001011 ".repeat(6)}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            À PRO<span className="neon-text">POS</span>
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            // une approche concrète et orientée défense
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass glow-hover rounded-2xl p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">Mon profil</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Élève ingénieure en cybersécurité à l’ENSA Agadir (promotion 2027), je m’intéresse à
              la détection des menaces, aux audits et à la gouvernance.
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              J’aime transformer les constats techniques en recommandations claires et concrètes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {approach.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass glow-hover rounded-2xl p-5"
              >
                <Icon size={19} className="text-neon" />
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6">
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Mes domaines d’intérêt
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Des compétences travaillées à travers ma formation, mes laboratoires pratiques et les
              projets présentés dans ce portfolio.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {interests.map(({ title, description, tools }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="glass glow-hover rounded-2xl p-6"
              >
                <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <p className="mt-4 border-t border-border pt-3 font-mono text-xs leading-relaxed text-cyan">
                  {tools}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
