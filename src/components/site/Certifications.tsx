import { motion } from "motion/react";
import { Award, BadgeCheck, Cpu, Lock, ShieldHalf, Wifi } from "lucide-react";

type Status = "Earned" | "In progress" | "Planned";

const certs: { title: string; issuer: string; year: string; status: Status; icon: typeof Award }[] = [
  { title: "Cybersecurity and Cloud Fundamentals 1.0", issuer: "Fortinet", year: "2026", status: "Earned", icon: Wifi },
  { title: "Endpoint Security", issuer: "Cisco Networking Academy", year: "2026", status: "Earned", icon: BadgeCheck },
  { title: "Cyber Threat Management", issuer: "Cisco Networking Academy", year: "2025", status: "Earned", icon: ShieldHalf },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2025", status: "Earned", icon: Lock },
];

const styles: Record<Status, string> = {
  Earned: "border-cyan/50 text-cyan",
  "In progress": "border-chart-4/60 text-foreground",
  Planned: "border-border text-muted-foreground",
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="pointer-events-none absolute top-1/3 right-0 h-80 w-80 rounded-full bg-accent/15 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          CERTIFI<span className="neon-text">CATIONS</span>
        </h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">// proof of the grind, step by step</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass glow-hover rounded-2xl p-6 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/50">
                <c.icon size={22} className="text-neon" />
              </div>
              <span
                className={`mt-4 inline-block rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide ${styles[c.status]}`}
              >
                {c.status.toUpperCase()}
              </span>
              <h3 className="mt-3 font-display text-sm font-semibold">{c.title}</h3>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {c.issuer} · {c.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
