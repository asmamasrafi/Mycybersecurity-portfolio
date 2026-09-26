import { motion } from "motion/react";
import { BriefcaseBusiness, Building2, ShieldCheck } from "lucide-react";

function CompanyLogo({ name }: { name: string }) {
  const styles: Record<string, { bg: string; text: string; border: string }> = {
    irondev: { bg: "bg-[#5e2a8f]", text: "text-white", border: "border-[#7a40b7]" },
    cmrpi: { bg: "bg-[#f4f4f4]", text: "text-[#2b2b2b]", border: "border-[#d1d1d1]" },
    vala: { bg: "bg-[#f4f4f4]", text: "text-[#2e2e2e]", border: "border-[#d9d9d9]" },
    cgi: { bg: "bg-[linear-gradient(90deg,#ef3c76_0%,#c430d7_50%,#5b4ae8_100%)]", text: "text-white", border: "border-white/30" },
  };

  const config = styles[name] ?? { bg: "bg-secondary", text: "text-foreground", border: "border-border" };

  const logoText: Record<string, string> = {
    irondev: "IRONDEV",
    cmrpi: "CMRPI",
    vala: "VALA",
    cgi: "CGI",
  };

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border ${config.bg} ${config.text} ${config.border} font-black tracking-tight`}
    >
      <span className="text-[10px] leading-none">{logoText[name] ?? name.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}

const experiences = [
  {
    title: "Stagiaire — Plateforme de Maturité Cyber",
    company: "Espace Maroc Cyberconfiance / CMRPI",
    period: "Juil. – Août 2026",
    icon: BriefcaseBusiness,
    logo: "cmrpi",
    bullets: [
      "Conception d’une plateforme d’audit de maturité cybersécurité pour PME selon le référentiel CMRPI/AUSIM, avec questionnaire d’auto-évaluation et score automatisé.",
      "Mise en place d’un modèle de sécurité PostgreSQL avec Row Level Security (RLS) et triggers métier pour garantir l’isolation des données par utilisateur.",
      "Production de rapports PDF de remédiation et workflow d’audit pour accompagner les actions de sécurisation.",
      "Stack : React 19, TypeScript, Supabase, PostgreSQL, Tailwind CSS — travail en méthode agile sur 3 jalons.",
    ],
  },
  {
    title: "Stagiaire — Développement Web Sécurisé",
    company: "Vala-Orange, Agadir",
    period: "Juil. – Août 2025",
    icon: ShieldCheck,
    logo: "vala",
    bullets: [
      "Développement d’une application web de chiffrement/déchiffrement AES et RSA en gardant un focus sur la protection des données sensibles.",
      "Utilisation d’un moteur Regex/NLP pour analyser la sensibilité des données et améliorer les traitements applicatifs.",
    ],
  },
  {
    title: "Stagiaire de Fin d’Études",
    company: "CGI, Salé",
    period: "Avr. – Août 2024",
    icon: Building2,
    logo: "cgi",
    bullets: [
      "Contact client direct avec Michelin pour le recueil des besoins métier et fonctionnels.",
      "Développement sécurisé d’une application de synthèse de factures sur une stack COBOL, JEE, Spring, DB2 et MySQL.",
      "Contribution à la protection des données clients dans un contexte applicatif d’entreprise.",
    ],
  },
  {
    title: "Stagiaire de Fin d’Études",
    company: "IRONDEV, Agadir",
    period: "Avril 2023 — Juin 2023",
    icon: Building2,
    logo: "irondev",
    bullets: [
      "Développement d’une application web complète de gestion d’entreprise (inventaire, ventes, achats) ainsi qu’un site vitrine optimisé.",
      "Réalisation avec Next.js, TypeScript, Tailwind CSS, Node.js et MongoDB.",
      "Mise en place d’une solution fonctionnelle, cohérente et adaptée aux besoins d’une entreprise locale.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            EXPÉRIE<span className="neon-text">NCE</span>
          </h2>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            // stages & internships
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map(({ title, company, period, icon: Icon, logo, bullets }, index) => (
            <motion.article
              key={`${title}-${company}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass glow-hover relative overflow-hidden rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50">
                  <CompanyLogo name={logo} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                      {period}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <Icon size={15} className="text-neon" />
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {company}
                    </p>
                  </div>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
