import { motion } from "motion/react";
import { BookOpenCheck, GraduationCap, Target } from "lucide-react";

const approach = [
  {
    icon: BookOpenCheck,
    title: "Ma démarche",
    description:
      "Comprendre une menace, la détecter, puis traduire les constats en actions concrètes.",
    details: ["Comprendre", "Détecter", "Agir"],
  },
  {
    icon: Target,
    title: "Ma priorité",
    description:
      "Associer analyse technique et besoins métier pour proposer des améliorations réalistes et utiles.",
    details: ["Sécurité des données", "Clarté", "Amélioration continue"],
  },
];

const interests = [
  {
    title: "Détection & SOC",
    description: "Analyse de journaux, règles de détection, alertes et investigation.",
    tools: "Splunk · Snort · AIDE · Wireshark · IoC",
    image: "/about-interests/soc-detection.svg",
  },
  {
    title: "Gouvernance & conformité",
    description: "Évaluation de maturité, analyse de risques et priorisation des remédiations.",
    tools: "ISO/IEC 27001 · CMRPI/AUSIM · NIST CSF · CIS/SCAP · CVSS",
    image: "/about-interests/governance.svg",
  },
  {
    title: "Tests & sécurité applicative",
    description: "Audit d’applications, validation des contrôles et sécurisation des données.",
    tools: "Kali Linux · Nmap · Burp Suite · OWASP",
    image: "/about-interests/app-security.svg",
  },
  {
    title: "Développement & automatisation",
    description: "Des outils et scripts au service de pratiques de sécurité reproductibles.",
    tools: "Python · Bash · Git · Docker · PostgreSQL",
    image: "/about-interests/automation.svg",
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
            <div className="group relative mt-6 aspect-[16/8] overflow-hidden rounded-xl border border-border">
              <img
                src="/ensa-agadir.jpeg"
                alt="Entrée de l’École Nationale des Sciences Appliquées d’Agadir"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/15 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan">
                    Ma formation
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-white">
                    ENSA Agadir
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-white/75">
                    Cycle ingénieur · Promotion 2027
                  </p>
                </div>
                <GraduationCap size={22} className="shrink-0 text-cyan" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="grid content-stretch gap-3">
            {approach.map(({ icon: Icon, title, description, details }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass glow-hover flex flex-col rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/50">
                    <Icon size={19} className="text-neon" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                  {details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-border bg-secondary/35 px-2.5 py-1 font-mono text-[10px] text-cyan"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
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
            {interests.map(({ title, description, tools, image }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="glass glow-hover overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[8/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`Illustration du domaine ${title}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <p className="mt-4 border-t border-border pt-3 font-mono text-xs leading-relaxed text-cyan">
                    {tools}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
