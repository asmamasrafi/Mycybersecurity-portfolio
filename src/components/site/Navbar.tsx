import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[0_10px_40px_-30px_black]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-mono text-sm tracking-widest text-muted-foreground transition-colors hover:text-foreground">
          &lt;<span className="neon-text font-semibold">AM</span>/&gt;
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 font-mono text-xs tracking-wide text-muted-foreground transition-all hover:text-foreground hover:text-glow"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="glass glow-hover ml-2 rounded-full px-4 py-2 font-mono text-xs text-foreground"
          >
            Contact
          </a>
        </div>

        <button
          className="text-muted-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="glass flex flex-col gap-1 px-5 pb-4 md:hidden">
          {[...links, { label: "Contact", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
