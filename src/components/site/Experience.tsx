import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  CalendarDays,
  KeyRound,
  MapPin,
  RadioTower,
} from "lucide-react";

const experiences = [
  {
    role: "Stagiaire — Plateforme de Maturité Cyber",
    company: "CMRPI — Espace Maroc Cyberconfiance",
    logo: "/company-logos/cmrpi.png",
    location: "Kénitra",
    period: "Juillet – Août 2026",
    accent: "text-cyan",
    summary:
      "Conception d’une plateforme d’évaluation de la maturité cybersécurité destinée aux PME.",
    contributions: [
      "Référentiel CMRPI/AUSIM, scoring automatisé, comparaison à ISO/IEC 27001 et rapports de remédiation.",
      "PostgreSQL RLS, triggers métier et workflow sécurisé de demande, validation et suivi des audits.",
    ],
    technologies: ["CMRPI/AUSIM", "PostgreSQL RLS", "ISO/IEC 27001"],
  },
  {
    role: "Stagiaire en Développement Web Sécurisé",
    company: "Vala-Orange",
    logo: "/company-logos/vala-orange.png",
    location: "Agadir",
    period: "Juillet – Août 2025",
    accent: "text-neon",
    summary:
      "Développement d’outils web pour protéger les données et repérer les informations sensibles.",
    contributions: [
      "Application de chiffrement et déchiffrement fondée sur AES et RSA.",
      "Détection de données sensibles par règles Regex et analyse NLP dans une interface responsive.",
    ],
    technologies: ["AES / RSA", "Regex", "NLP", "JavaScript", "Bootstrap"],
  },
  {
    role: "Stagiaire de Fin d’Études",
    company: "CGI — Projet client Michelin",
    logo: "/company-logos/cgi.webp",
    location: "Salé",
    period: "Avril – Août 2024",
    accent: "text-cyan",
    summary:
      "Contribution à une application de synthèse et d’amélioration de la lisibilité des factures.",
    contributions: [
      "Prise en compte de la sécurité et de la confidentialité des données clients.",
      "Conception, modélisation et intégration technique dans un environnement entreprise.",
    ],
    technologies: ["COBOL", "JEE", "Spring", "DB2", "MySQL", "PowerDesigner"],
  },
  {
    role: "Stagiaire de Fin d’Études",
    company: "IRONDEV",
    logo: "/company-logos/irondev.webp",
    location: "Agadir",
    period: "Avril – Juin 2023",
    accent: "text-neon",
    summary: "Réalisation d’applications web de gestion d’entreprise et d’un site vitrine.",
    contributions: [
      "Développement full-stack avec une interface responsive et des services connectés à MongoDB.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

const learning = [
  {
    icon: RadioTower,
    title: "Opérations SOC & SIEM",
    description:
      "Approfondir l’analyse des événements, le développement de détections et la qualification des alertes.",
  },
  {
    icon: BookOpen,
    title: "Gouvernance & gestion des risques",
    description:
      "Relier les référentiels, l’évaluation des risques et les recommandations à des mesures de sécurité applicables.",
  },
  {
    icon: Bot,
    title: "Automatisation en cybersécurité",
    description:
      "Continuer à développer des outils et des scripts qui facilitent l’analyse et la réponse aux incidents.",
  },
  {
    icon: KeyRound,
    title: "Gestion des secrets",
    description:
      "Explorer les bonnes pratiques de gestion des identifiants et des accès avec HashiCorp Vault.",
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            EXPÉRIENCES <span className="neon-text">PROFESSIONNELLES</span>
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            // des missions concrètes, de la cybersécurité au développement logiciel
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Quatre expériences en cybersécurité et en développement, avec une attention constante à
            la sécurité des données, à la qualité technique et aux besoins métier.
          </p>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-2">
          <div className="pointer-events-none absolute top-5 bottom-5 left-[1.35rem] hidden w-px bg-gradient-to-b from-neon/70 via-cyan/30 to-transparent lg:block" />
          {experiences.map(
            (
              {
                role,
                company,
                logo,
                location,
                period,
                accent,
                summary,
                contributions,
                technologies,
              },
              index,
            ) => (
              <motion.article
                key={`${company}-${period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass glow-hover group relative overflow-hidden rounded-2xl p-6 sm:p-7"
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-neon/10 blur-3xl transition-colors group-hover:bg-cyan/15" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cyan">
                        Expérience · {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-foreground">
                        {role}
                      </h3>
                    </div>
                    <div className="flex shrink-0 flex-col items-center gap-2">
                      <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-neon/35 bg-white p-2 shadow-[0_0_22px_-8px_var(--neon)]">
                        <img
                          src={logo}
                          alt={`Logo ${company}`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px]">
                    <span className="text-foreground/90">{company}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <MapPin size={12} /> {location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <CalendarDays size={12} /> {period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className={`mt-0.5 ${accent}`} aria-hidden="true">
                          ›
                        </span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border bg-secondary/35 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <div className="mb-8 max-w-3xl">
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              EN <span className="neon-text">APPRENTISSAGE</span>
            </h3>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              // les sujets que je continue d’approfondir
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              La cybersécurité demande une pratique continue. Je poursuis l’approfondissement des
              domaines qui soutiennent une défense plus efficace.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {learning.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass glow-hover flex gap-4 rounded-2xl p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50">
                  <Icon size={19} className="text-neon" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
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
