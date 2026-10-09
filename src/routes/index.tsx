import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Intro } from "@/components/site/Intro";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Certifications } from "@/components/site/Certifications";
import { Contact } from "@/components/site/Contact";

const title = "Assma Masrafi — Portfolio cybersécurité";
const description =
  "Portfolio d’Assma Masrafi, élève ingénieure en cybersécurité à l’ENSA Agadir. Projets en détection, audit et gouvernance. Recherche un stage PFE de six mois dès janvier 2027.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Intro onDone={() => setIntroDone(true)} />
      <div
        className={`transition-opacity duration-700 ${introDone ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!introDone}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}
