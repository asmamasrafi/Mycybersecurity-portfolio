import { motion } from "motion/react";
import { BookOpen, Bot, KeyRound, RadioTower } from "lucide-react";

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
            EN <span className="neon-text">APPRENTISSAGE</span>
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            // les sujets que je continue d’approfondir
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            La cybersécurité demande une pratique continue. En complément de mes projets et de ma
            formation, je souhaite renforcer mes connaissances opérationnelles et approfondir les
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
