import { motion } from "motion/react";
import { useState } from "react";
import { MatrixRain } from "./MatrixRain";

type Cat = "Tools" | "Labs" | "Web";

const projects: { title: string; desc: string; cat: Cat; tags: string[] }[] = [
  {
    title: "portscan.py",
    desc: "Multithreaded TCP port scanner with service banner grabbing and JSON reports.",
    cat: "Tools",
    tags: ["Python", "Sockets", "CLI"],
  },
  {
    title: "log-hunter",
    desc: "Parses auth logs and flags brute-force patterns, then pushes alerts to a dashboard.",
    cat: "Tools",
    tags: ["Python", "Regex", "SIEM"],
  },
  {
    title: "AD home lab",
    desc: "Windows domain lab: misconfigured shares, Kerberoasting, then detection rules.",
    cat: "Labs",
    tags: ["Active Directory", "Sysmon", "Detection"],
  },
  {
    title: "DVWA walkthrough",
    desc: "Full write-up of injection, XSS and file upload chains with mitigations.",
    cat: "Labs",
    tags: ["Burp Suite", "OWASP", "Write-up"],
  },
  {
    title: "PhishCheck",
    desc: "Web app that scores suspicious URLs using heuristics and public reputation feeds.",
    cat: "Web",
    tags: ["React", "API", "Tailwind"],
  },
  {
    title: "CTF notes vault",
    desc: "Searchable knowledge base of every challenge solved, tagged by technique.",
    cat: "Web",
    tags: ["React", "Markdown", "Search"],
  },
];

const filters = ["All", "Tools", "Labs", "Web"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <MatrixRain className="opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          PRO<span className="neon-text">JECTS</span>
        </h2>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          // things I&apos;ve built &amp; broken while learning
        </p>

        <div className="glass mt-6 inline-block rounded-lg px-4 py-2 font-mono text-[11px] text-muted-foreground">
          <span className="text-neon">assma@kali</span>:~/projects$ ./load_projects.sh —{" "}
          <span className="text-cyan">{shown.length} projects loaded</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 font-mono text-[11px] transition-all ${
                active === f
                  ? "border-neon/70 text-foreground glow-neon"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              [ {f.toLowerCase()} ]
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass glow-hover flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70 bg-cyan/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                  {p.title}.sh
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
