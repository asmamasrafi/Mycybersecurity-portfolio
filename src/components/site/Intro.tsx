import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const LINE = "Bienvenue dans mon portfolio.";

export function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(LINE.slice(0, i));
      if (i >= LINE.length) clearInterval(id);
    }, 70);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-background grid-bg"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="px-6 text-center font-mono text-xl tracking-tight text-foreground sm:text-3xl">
            <span className="text-muted-foreground">$ </span>
            {typed}
            <span className="caret ml-0.5 text-neon">_</span>
          </p>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-5 bottom-5 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-neon hover:text-foreground"
          >
            Passer l’introduction →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
