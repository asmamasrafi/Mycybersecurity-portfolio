import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MatrixRain } from "./MatrixRain";

type Category = "Gouvernance" | "Audit" | "Détection" | "Sécurité réseau" | "Infrastructure";

type Project = {
  title: string;
  category: Category;
  description: string;
  context: string;
  contribution: string;
  highlights: string[];
  stack: string[];
  url: string;
};

const projects: Project[] = [
  {
    title: "CyberAudit",
    category: "Gouvernance",
    description:
      "Une plateforme d’évaluation de la maturité cybersécurité conçue pour aider les PME marocaines à structurer leur démarche de sécurité.",
    context:
      "Évaluer les pratiques de sécurité est une première étape importante, mais les résultats doivent également aider à décider quelles actions entreprendre.",
    contribution:
      "Le projet s’appuie sur le référentiel CMRPI/AUSIM pour organiser l’évaluation. Il automatise la notation, met les résultats en correspondance avec ISO 27001 et le NIST CSF, et présente des recommandations dans des rapports PDF.",
    highlights: [
      "Questionnaire d’évaluation de la maturité cyber adapté au contexte des PME.",
      "Notation automatisée et correspondances avec ISO 27001 et NIST CSF.",
      "Recommandations, rapports PDF et workflow destiné aux auditeurs.",
    ],
    stack: ["CMRPI/AUSIM", "ISO 27001", "NIST CSF", "Évaluation de maturité", "Rapports PDF"],
    url: "https://github.com/asmamasrafi/cybersecurity-maturity-assessment",
  },
  {
    title: "Audit de sécurité Android",
    category: "Audit",
    description:
      "Un audit d’application mobile selon OWASP MASVS, centré sur la protection des secrets, des données sensibles et des journaux.",
    context:
      "Les informations sensibles peuvent être exposées par un stockage de mots de passe inadapté, une interface insuffisamment protégée ou des journaux trop détaillés.",
    contribution:
      "L’audit a identifié puis corrigé plusieurs faiblesses : stockage non sécurisé des mots de passe, exposition de données dans l’interface, politique de mots de passe insuffisante et fuites d’informations sensibles dans Logcat.",
    highlights: [
      "Évaluation structurée à l’aide des recommandations OWASP MASVS.",
      "Identification et remédiation de problèmes liés aux mots de passe.",
      "Réduction de l’exposition des données dans l’interface et dans Logcat.",
    ],
    stack: ["Android", "OWASP MASVS", "Audit mobile", "Protection des données", "Remédiation"],
    url: "https://github.com/asmamasrafi/android-security-audit",
  },
  {
    title: "CyberShield",
    category: "Détection",
    description:
      "Un pipeline de détection d’intrusions en temps réel qui associe traitement distribué, classification du trafic par IA et tableau de bord d’alertes.",
    context:
      "L’analyse de flux réseau doit permettre de faire ressortir les événements suspects et de rendre les alertes compréhensibles pour leur suivi.",
    contribution:
      "Le projet met en œuvre une architecture de streaming avec Kafka et Spark Streaming. Une classification du trafic assistée par IA alimente un tableau de bord destiné au suivi des alertes.",
    highlights: [
      "Ingestion et traitement de flux au moyen de Kafka et Spark Streaming.",
      "Classification du trafic réseau assistée par IA.",
      "Présentation des alertes dans un tableau de bord de suivi.",
    ],
    stack: ["Kafka", "Spark Streaming", "Cassandra", "Classification IA", "Détection d’intrusions"],
    url: "https://github.com/asmamasrafi/CyberShield-Lambda-Architecture",
  },
  {
    title: "Détection de brute force SSH avec Splunk",
    category: "Détection",
    description:
      "Un cas d’usage SOC consacré à l’analyse des authentifications SSH et à la détection des tentatives répétées de connexion.",
    context:
      "Les tentatives de connexion par force brute laissent des traces dans les journaux d’authentification. L’enjeu est de repérer ces motifs et de les transformer en alertes exploitables.",
    contribution:
      "Le projet consiste à analyser des journaux d’authentification SSH, écrire des recherches de détection en SPL, configurer des alertes à seuil et construire un tableau de bord de supervision.",
    highlights: [
      "Analyse de journaux d’authentification SSH.",
      "Requêtes SPL et alertes basées sur des seuils.",
      "Tableau de bord de supervision pour le suivi des événements.",
    ],
    stack: ["Splunk", "SPL", "Journaux SSH", "Alertes SOC", "Supervision"],
    url: "https://github.com/asmamasrafi/splunk-soc-bruteforce-detection",
  },
  {
    title: "Blue Team Lab",
    category: "Sécurité réseau",
    description:
      "Un laboratoire de détection réseau consacré aux scans de ports et aux tentatives de brute force SSH.",
    context:
      "Les règles de détection sont plus pertinentes lorsqu’elles sont confrontées à des activités réseau observables et à des scénarios d’attaque concrets.",
    contribution:
      "Le laboratoire utilise des règles Snort personnalisées pour détecter les scans de ports et les tentatives de brute force SSH, puis Wireshark pour analyser le trafic capturé.",
    highlights: [
      "Création de règles Snort adaptées aux scénarios étudiés.",
      "Détection de scans de ports et de tentatives de brute force SSH.",
      "Analyse du trafic réseau avec Wireshark.",
    ],
    stack: ["Snort", "Wireshark", "Sécurité réseau", "Détection", "Blue Team"],
    url: "https://github.com/asmamasrafi/Blue-Team-Lab",
  },
  {
    title: "Gestion des secrets avec Vault",
    category: "Infrastructure",
    description:
      "Un laboratoire conteneurisé qui montre comment une application Flask peut récupérer des secrets PostgreSQL depuis HashiCorp Vault.",
    context:
      "Les identifiants de base de données ne devraient pas être intégrés directement au code applicatif. Leur accès doit être centralisé et limité au besoin de l’application.",
    contribution:
      "L’application s’authentifie auprès de Vault via AppRole, lit les identifiants dans un secret KV v2 avec une politique de moindre privilège, puis se connecte à PostgreSQL.",
    highlights: [
      "Authentification de l’application avec AppRole.",
      "Lecture d’un secret KV v2 protégée par une politique de moindre privilège.",
      "Connexion de l’application Flask à PostgreSQL dans un environnement Docker.",
    ],
    stack: ["HashiCorp Vault", "AppRole", "KV v2", "Flask", "Docker", "PostgreSQL"],
    url: "https://github.com/asmamasrafi/vault-secrets-management",
  },
];

const filters: ("Tous" | Category)[] = [
  "Tous",
  "Détection",
  "Audit",
  "Gouvernance",
  "Sécurité réseau",
  "Infrastructure",
];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");
  const [selected, setSelected] = useState<Project | null>(null);
  const shown =
    active === "Tous" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <motion.section
        id="projects"
        className="relative scroll-mt-24 overflow-hidden py-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65 }}
      >
        <MatrixRain className="opacity-20" />
        <div className="relative mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            MES <span className="neon-text">PROJETS</span>
          </h2>
          <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
            // Des réalisations pratiques en détection, audit applicatif, gouvernance et sécurité
            des infrastructures.
          </p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Filtrer les projets par domaine">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] transition-all ${
                  active === filter
                    ? "border-neon/70 text-foreground glow-neon"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="glass glow-hover flex flex-col overflow-hidden rounded-2xl"
              >
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
                  <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-cyan">
                        + autres outils
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-2 font-mono text-xs text-cyan transition-colors hover:text-foreground"
                    >
                      Détails du projet <ArrowUpRight size={14} />
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Voir le dépôt GitHub de ${project.title}`}
                      className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto border border-border bg-background/95 sm:rounded-2xl">
            <DialogHeader className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon">
                {selected.category}
              </span>
              <DialogTitle className="font-display text-2xl text-foreground">
                {selected.title}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                {selected.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-2">
              <section className="rounded-xl border border-border bg-secondary/40 p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">Contexte</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {selected.context}
                </p>
              </section>
              <section className="rounded-xl border border-border bg-secondary/40 p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Démarche et réalisation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {selected.contribution}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {selected.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-cyan">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="rounded-xl border border-border bg-secondary/40 p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Outils et notions
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
              <a
                href={selected.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-cyan transition-colors hover:text-foreground"
              >
                Consulter le dépôt GitHub <ExternalLink size={15} />
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
