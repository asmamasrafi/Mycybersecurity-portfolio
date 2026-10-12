import { motion } from "motion/react";
import { Award, BadgeCheck, ExternalLink, Flag, LockKeyhole, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "NSE 1 — Cybersecurity and Cloud Fundamentals",
    issuer: "Fortinet",
    icon: ShieldCheck,
    image:
      "https://images.credly.com/images/0dc7965b-8507-4312-9c12-1add6c50fa49/linkedin_thumb_blob",
    url: "https://www.credly.com/badges/66459f2d-34a1-4f6e-b8a1-061091cacad2/public_url",
  },
  {
    title: "NSE 2 — Introduction to Next Generation Firewall 1.0",
    issuer: "Fortinet",
    icon: LockKeyhole,
    image:
      "https://images.credly.com/images/a30952f3-f354-4233-b02a-690ffe95d190/linkedin_thumb_blob",
    url: "https://www.credly.com/badges/08c391b1-5e4c-4f4d-9822-f2e0de036459/public_url",
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    icon: BadgeCheck,
    image:
      "https://images.credly.com/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/linkedin_thumb_EndpointSecurity.png",
    url: "https://www.credly.com/badges/f7d65b7e-f2ce-4fe5-8941-a1c164b78963/linked_in_profile",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
    image:
      "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/linkedin_thumb_image.png",
    url: "https://www.credly.com/badges/f848fa58-8165-482c-ae14-3f777bc00df5/linked_in_profile",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: LockKeyhole,
    image:
      "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png",
    url: "https://www.credly.com/badges/8417c305-8659-4640-9925-9da09dc8263d/linked_in_profile",
  },
  {
    title: "ISO/IEC 27001 Information Security Associate™",
    issuer: "SkillFront",
    icon: Award,
    image: "/company-logos/skillfront.png",
    url: "https://www.skillfront.com/certifications/SkillFront-SFE01625779158f3-74261895868279.pdf",
  },
  {
    title: "Introduction to Splunk",
    issuer: "Splunk",
    icon: BadgeCheck,
    image: "/ctf-certificates/splunk-logo.png",
  },
];

const competitions = [
  {
    title: "Hack The Box Morocco — Summer CTF Cup",
    image: "/ctf-certificates/hackthebox-summer-ctf-2026.png",
    date: "31 août – 1er septembre 2026",
    result: "141e / 311 équipes · 3/12 challenges · 1 975 points",
    team: "XOR masters",
  },
  {
    title: "NullOrigin CTF 2026",
    image: "/ctf-certificates/nullorigin-ctf-2026.jpg",
    date: "19 septembre 2026",
  },
  {
    title: "CTF Info Days — ENSA Agadir",
    image: "/ctf-certificates/info-days-ctf-2026.png",
    date: "24–26 avril 2026",
  },
  {
    title: "GopwnIt CTF — Ibn Zohr, Agadir",
    image: "/ctf-certificates/gopwnit-ctf.png",
  },
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
          CERTIFICATIONS
        </h2>
        <p className="mt-2 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          // Parcours de formation et certifications en cybersécurité.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map(({ title, issuer, icon: Icon, image, url }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="glass glow-hover flex flex-col rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                {image ? (
                  <img
                    src={image}
                    alt={`${issuer} — ${title}`}
                    className="h-16 w-16 shrink-0 rounded-xl border border-border bg-white object-contain p-1"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50">
                    <Icon size={24} className="text-neon" />
                  </span>
                )}
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Certification
                </span>
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-display text-sm leading-relaxed font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 font-mono text-[11px] text-cyan">{issuer}</p>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-cyan transition-colors hover:text-foreground"
                  >
                    {issuer === "SkillFront" ? "Voir le certificat" : "Vérifier le badge"}
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10">
              <Flag size={20} className="text-cyan" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                COMPÉTITIONS <span className="neon-text">&amp; CTF</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Pratique offensive, investigation et résolution de challenges.
              </p>
            </div>
            <span className="ml-auto rounded-full border border-cyan/25 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan">
              {competitions.length} événements
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitions.map((competition, index) => (
              <motion.article
                key={competition.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="glass glow-hover flex flex-col overflow-hidden rounded-2xl"
              >
                {competition.image ? (
                  <a
                    href={competition.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ouvrir le certificat de ${competition.title}`}
                    className="block aspect-[3/2] bg-white"
                  >
                    <img
                      src={competition.image}
                      alt={`Certificat de participation — ${competition.title}`}
                      className="h-full w-full object-contain p-1"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ) : (
                  <div className="flex aspect-[3/2] items-center justify-center bg-secondary/30">
                    <Flag size={36} className="text-cyan/70" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
                    CTF · {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 font-display text-base font-semibold leading-relaxed text-foreground">
                    {competition.title}
                  </h4>
                  {competition.date && (
                    <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                      {competition.date}
                    </p>
                  )}
                  {competition.result && (
                    <p className="mt-3 border-t border-border pt-3 font-mono text-[10px] leading-relaxed text-foreground/80">
                      {competition.result}
                      {competition.team && (
                        <span className="mt-1 block text-cyan">Équipe : {competition.team}</span>
                      )}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
