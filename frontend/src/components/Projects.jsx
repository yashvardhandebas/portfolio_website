import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight, Github, X } from "lucide-react";
import {
  Dialog, DialogContent, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
};

// Editorial cover using project title + tag; SVG poster
function CoverArt({ title, tag, accent = "#FF4D00" }) {
  return (
    <div
      className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-ink-800 to-ink-950 border border-white/5"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(120% 90% at 15% 0%, ${accent}22 0%, transparent 55%), radial-gradient(80% 60% at 90% 100%, ${accent}18 0%, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-bone-400">
            {tag}
          </span>
          <span className="h-2 w-2 rounded-full bg-molten shadow-[0_0_16px_rgba(255,77,0,0.7)]" />
        </div>
        <div>
          <p
            className="font-display italic leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            {title}
          </p>
        </div>
      </div>
      {/* subtle grid lines */}
      <svg className="absolute inset-0 opacity-[0.08]" width="100%" height="100%">
        <defs>
          <pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="relative py-28 md:py-40" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
            >
              02 — Selected Work
            </motion.p>
            <motion.h2
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
              data-testid="projects-heading"
            >
              Things I've <span className="italic text-molten">shipped</span>,
              <br />studied, or shipped again.
            </motion.h2>
          </div>
          <motion.p
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} custom={1}
            className="text-bone-400 max-w-sm"
          >
            A working set of case studies across ML, LLM systems and analytics —
            click any tile to open the full write-up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.id}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i}
              onClick={() => setActive(p)}
              data-testid={`project-card-${p.id}`}
              className={`spot-card text-left bg-ink-900 border border-white/5 rounded-3xl p-4 md:p-5 hover:border-white/15 hover:-translate-y-1 transition-[transform,border-color] duration-500 group ${
                p.span === 2 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative z-[1]">
                <CoverArt title={p.title} tag={p.tag} accent={p.accent} />
                <div className="p-2 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl md:text-[1.7rem] tracking-tight leading-tight">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-bone-400 group-hover:text-molten group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="mt-3 text-bone-400 leading-relaxed">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[0.68rem] text-bone-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-3xl bg-ink-900 border border-white/10 text-bone-50 p-0 overflow-hidden"
          data-testid="project-modal"
        >
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="max-h-[85vh] overflow-y-auto"
              >
                <DialogTitle className="sr-only">{active.title}</DialogTitle>
                <DialogDescription className="sr-only">{active.summary}</DialogDescription>
                <div className="relative">
                  <CoverArt title={active.title} tag={active.tag} accent={active.accent} />
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    data-testid="project-modal-close"
                    className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ink-950/80 border border-white/10 flex items-center justify-center hover:bg-molten hover:text-white transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-molten">
                      {active.tag}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-bone-600">
                      · {active.year}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                    {active.title}
                  </h3>
                  <p className="mt-5 text-bone-300 leading-relaxed">
                    {active.description}
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {active.outcomes.map((o) => (
                      <div
                        key={o}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-bone-600">
                          Outcome
                        </p>
                        <p className="mt-1 font-display text-lg leading-tight">
                          {o}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs text-bone-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {active.github && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="project-modal-github"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 hover:border-white/40 hover:bg-white/5 transition-colors"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    {active.demo && (
                      <a
                        href={active.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="project-modal-demo"
                        className="inline-flex items-center gap-2 rounded-full bg-molten text-white px-5 py-2.5 hover:bg-molten-hover transition-colors"
                      >
                        Live demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}
