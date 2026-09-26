import { motion } from "motion/react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MatrixRain } from "./MatrixRain";

type Cat = "Tools" | "Labs" | "Web";

type Project = {
  title: string;
  desc: string;
  cat: Cat;
  tags: string[];
  problem: string;
  solution: string;
  stack: string[];
  lessons: string[];
  skills: string[];
  proof: string;
  preview?: "cybershield";
};

const projects: Project[] = [
  {
    title: "CyberShield",
    desc: "AI-powered real-time threat detection system for malicious traffic analysis and attack classification.",
    cat: "Web",
    tags: ["AI Security", "Big Data", "Kafka", "Spark", "Threat Detection"],
    problem: "Modern infrastructures require real-time visibility to detect and classify malicious patterns such as SQL injection, path traversal, DDoS and brute-force attacks before they spread.",
    solution: "I designed a Lambda architecture with Kafka, Spark, Hadoop and an AI decision service to ingest traffic, detect threats in real time, and expose attack analytics through a monitoring dashboard and attack map.",
    stack: ["Kafka", "Spark", "Hadoop", "HBase", "Cassandra", "Python", "Flask", "Decision Tree", "Threat analytics"],
    lessons: ["Real-time detection requires both distributed processing and clean data modeling.", "AI is most valuable when tied to actionable monitoring and attack classification.", "A detection dashboard makes technical findings easier to interpret and prioritize."],
    skills: ["AI security", "Big Data", "Intrusion detection", "System design", "Threat analysis"],
    proof: "The project demonstrates a practical cyber defense architecture with live detection, historical attack analysis, and visual threat intelligence for decision support.",
  },
  {
    title: "Blue Team Lab",
    desc: "Internal attack simulation on Kali Linux with IDS deployment and custom detection rules.",
    cat: "Labs",
    tags: ["Blue Team", "Snort", "Kali", "Detection"],
    problem: "It is important to understand how attackers move through a system in order to build effective defensive controls.",
    solution: "I performed internal penetration tests, including port scanning and SSH brute-force attempts, then deployed Snort rules to detect the activity in real time.",
    stack: ["Kali Linux", "Nmap", "SSH", "Snort", "DPI rules"],
    lessons: ["Detection improvement starts with realistic attack simulation.", "Offensive testing and defensive monitoring are complementary skills."],
    skills: ["Red/blue team", "Threat detection", "Network security"],
    proof: "This lab gave me direct experience in translating attacker behavior into actionable detection strategies.",
  },
  {
    title: "LeanMass & AndroGoat",
    desc: "Mobile security project covering dynamic instrumentation, traffic interception and OWASP MASVS compliance.",
    cat: "Labs",
    tags: ["Android", "Frida", "Burp", "OWASP"],
    problem: "Mobile apps can leak sensitive data or expose weak protections if security testing is not embedded early in development.",
    solution: "I performed application security testing using Frida and Burp Suite and built an Android app aligned with OWASP MASVS, including SHA-256 encryption and FLAG_SECURE protection.",
    stack: ["Android", "Frida", "Burp Suite", "OWASP MASVS", "Security hardening"],
    lessons: ["Security must be designed during development, not added after the fact.", "Application testing is essential for data protection and user trust."],
    skills: ["Mobile security", "OWASP", "Secure development", "Threat modeling"],
    proof: "This strengthened my ability to audit and secure mobile applications with protection at both code and configuration levels.",
  },
  {
    title: "User Research App",
    desc: "UX/UI study for a mobile application based on user interviews and requirement analysis.",
    cat: "Web",
    tags: ["UX", "Research", "Mobile", "Requirements"],
    problem: "A product can only be valuable if it matches real user needs and expected experience.",
    solution: "I conducted user interviews and questionnaires to capture behavioral needs before designing and developing the application experience.",
    stack: ["UX research", "User interviews", "Questionnaires", "Design thinking"],
    lessons: ["User needs should drive the solution, not the opposite.", "Good requirement analysis helps reduce risk and improve product quality."],
    skills: ["User research", "UX/UI", "Requirement capture", "Client listening"],
    proof: "This project reflects my ability to translate business and user needs into clear, actionable technical decisions.",
  },
  {
    title: "Cyber Maturity Platform",
    desc: "Assessment platform for cybersecurity maturity, scoring and governance workflow for SMEs.",
    cat: "Web",
    tags: ["Governance", "Risk", "React", "PostgreSQL"],
    problem: "SMEs often struggle to evaluate their cybersecurity maturity and prioritize actions from a clear governance perspective.",
    solution: "I contributed to a maturity assessment platform with automated scoring, audit workflows and role-based access controls to improve governance and remediation tracking.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    lessons: ["Governance is a security tool, not only a compliance requirement.", "Scalable risk assessment requires clarity, structure and measurable indicators."],
    skills: ["Risk assessment", "Access control", "Governance", "Agile delivery"],
    proof: "This reinforced my interest in the business side of cybersecurity and in advising clients through structured decisions.",
  },
  {
    title: "Secure Web & Encryption",
    desc: "Web application built for data encryption and classification with security-first design.",
    cat: "Tools",
    tags: ["Cryptography", "Web", "Regex", "Security"],
    problem: "Sensitive data needs clear handling rules and secure processing, especially in business and web-facing environments.",
    solution: "I developed a web app for encryption and decryption using AES and RSA, combined with sensitivity analysis powered by regex and NLP-based logic.",
    stack: ["AES", "RSA", "Python", "Regex", "Web security"],
    lessons: ["Security design must account for both cryptography and usability.", "Sensitive data classification improves decision-making and protection quality."],
    skills: ["Cryptography", "Data protection", "Web security", "Applied security"],
    proof: "This project showed my interest in combining secure development with real-world data protection requirements.",
  },
];

const filters = ["All", "Tools", "Labs", "Web"] as const;

function DashboardPreview({ variant }: { variant: "overview" | "map" | "patterns" | "detection" }) {
  const base = "relative h-full w-full overflow-hidden rounded-xl border border-border bg-[#071521] p-3 text-left";

  if (variant === "overview") {
    return (
      <div className={base}>
        <div className="mb-2 flex items-center justify-between text-[8px] text-muted-foreground">
          <span className="font-mono text-[9px] uppercase text-cyan">CyberShield</span>
          <span className="rounded-full border border-border px-1.5 py-0.5">LIVE</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["TOTAL ANALYSE", "518 047", "text-red-400"],
            ["MALICIOUS", "203 295", "text-red-400"],
            ["SUSPICIOUS", "314 752", "text-yellow-300"],
            ["HADOOP", "1.2 GB", "text-cyan-300"],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded-md border border-border bg-secondary/40 p-2">
              <div className="font-mono text-[8px] uppercase text-muted-foreground">{label}</div>
              <div className={`mt-1 font-display text-lg font-bold ${color}`}>{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1.3fr_1fr] gap-2">
          <div className="rounded-md border border-border bg-secondary/30 p-2">
            <div className="mb-2 font-mono text-[8px] uppercase text-muted-foreground">Threat classification</div>
            <div className="mx-auto h-16 w-16 rounded-full border-[6px] border-red-500 border-l-orange-400 border-r-orange-400 border-b-red-500" />
          </div>
          <div className="rounded-md border border-border bg-secondary/30 p-2">
            <div className="mb-2 font-mono text-[8px] uppercase text-muted-foreground">Attacks</div>
            <div className="mt-3 h-12 rounded-sm bg-[linear-gradient(180deg,rgba(16,185,129,0.7),rgba(16,185,129,0.2))]" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "map") {
    return (
      <div className={base}>
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase text-muted-foreground">Attack Map</span>
          <span className="rounded-full border border-border px-1.5 py-0.5 text-[7px] text-cyan">Geo</span>
        </div>
        <div className="relative h-[82%] overflow-hidden rounded-md border border-border bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.1),_transparent_50%),#071521]">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute left-[22%] top-[20%] h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <div className="absolute left-[42%] top-[28%] h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          <div className="absolute left-[58%] top-[38%] h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <div className="absolute left-[68%] top-[52%] h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
          <div className="absolute left-[48%] top-[60%] h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
        </div>
      </div>
    );
  }

  if (variant === "patterns") {
    return (
      <div className={base}>
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase text-muted-foreground">Attack Patterns</span>
          <span className="rounded-full border border-green-500/50 bg-green-500/10 px-1.5 py-0.5 text-[7px] text-green-400">
            SPARK ANALYZED
          </span>
        </div>
        <div className="space-y-2">
          {[
            ["SQL Injection", "40 873", "35 000", "5 873"],
            ["Path Traversal", "102 422", "142 000", "20 422"],
            ["DDoS", "1 097 834", "900 000", "197 834"],
          ].map(([name, total, malicious, blocked]) => (
            <div key={name} className="rounded-md border border-border bg-secondary/30 p-2">
              <div className="mb-1 flex items-center justify-between gap-2 text-[8px]">
                <span className="font-display text-[10px] text-foreground">{name}</span>
                <span className="rounded-full border border-border px-1 text-[7px] text-muted-foreground">LIVE</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[7px] text-muted-foreground">
                <span>TOTAL {total}</span>
                <span className="text-red-400">MALICIOUS {malicious}</span>
                <span className="text-emerald-400">BLOCKED {blocked}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={base}>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase text-muted-foreground">AI Detection</span>
        <span className="rounded-full border border-green-500/50 bg-green-500/10 px-1.5 py-0.5 text-[7px] text-green-400">
          LOW THREAT
        </span>
      </div>
      <div className="rounded-md border border-green-500/40 bg-green-500/10 p-3">
        <div className="font-display text-[14px] font-bold text-emerald-300">LOW THREAT</div>
        <div className="mt-1 text-[8px] text-emerald-200">No immediate threat detected.</div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-[7px] text-muted-foreground">
        {[
          ["TOTAL SCANS", "6"],
          ["HIGH THREATS", "0"],
          ["CONFIDENCE", "100%"],
          ["PROTOCOLS", "1"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-border bg-secondary/40 p-2 text-center">
            <div className="uppercase text-[7px]">{label}</div>
            <div className="mt-1 font-display text-[12px] font-bold text-foreground">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="grid grid-cols-[1.5fr_0.9fr_0.7fr_0.7fr] gap-1 text-[7px] text-muted-foreground">
            <div className="rounded-sm bg-secondary/40 px-1 py-0.5">HTTP</div>
            <div className="rounded-sm bg-secondary/40 px-1 py-0.5 text-center">LOW</div>
            <div className="rounded-sm bg-secondary/40 px-1 py-0.5 text-center">100%</div>
            <div className="rounded-sm bg-secondary/40 px-1 py-0.5 text-center">2 500</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
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
              <motion.button
                type="button"
                key={p.title}
                onClick={() => setSelected(p)}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass glow-hover flex flex-col overflow-hidden rounded-2xl text-left"
              >
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan/60" />
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
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        {selected && (
          <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto border border-border bg-background/95 p-0 sm:rounded-2xl">
            <div className="border-b border-border p-6">
              <DialogHeader className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon">{selected.cat}</span>
                <DialogTitle className="font-display text-2xl text-foreground">{selected.title}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">{selected.desc}</DialogDescription>
              </DialogHeader>
            </div>

            <div className="space-y-6 p-6">
              <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-4">
                  {selected.preview === "cybershield" && (
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        { label: "Dashboard Overview", variant: "overview" },
                        { label: "Attack Map", variant: "map" },
                        { label: "Attack Patterns", variant: "patterns" },
                        { label: "AI Detection", variant: "detection" },
                      ].map(({ label, variant }) => (
                        <div
                          key={label}
                          className="flex h-44 rounded-xl border border-border bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_rgba(15,23,42,0.05)_40%,_rgba(15,23,42,0.2)_100%)] p-2"
                        >
                          <div className="w-full">
                            <div className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                              {label}
                            </div>
                            <DashboardPreview variant={variant as "overview" | "map" | "patterns" | "detection"} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <h3 className="font-display text-lg text-foreground">Problem</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selected.problem}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <h3 className="font-display text-lg text-foreground">Project snapshot</h3>
                    <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between gap-3 border-b border-border pb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Category</span>
                        <span className="font-medium text-foreground">{selected.cat}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3 border-b border-border pb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus</span>
                        <span className="font-medium text-foreground">{selected.tags[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-secondary/40 p-4">
                    <h3 className="font-display text-lg text-foreground">Skills</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.skills.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <h3 className="font-display text-lg text-foreground">What I built</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selected.solution}</p>
                </div>

                <div className="rounded-xl border border-border bg-secondary/40 p-4">
                  <h3 className="font-display text-lg text-foreground">Lessons learned</h3>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {selected.lessons.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <h3 className="font-display text-lg text-foreground">Tools used</h3>
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
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <h3 className="font-display text-lg text-foreground">Proof / impact</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selected.proof}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
