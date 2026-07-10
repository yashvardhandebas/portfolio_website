import { motion } from "framer-motion";
import { LEADERSHIP } from "@/lib/data";
import { Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-32" data-testid="leadership-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          07 — Community
        </motion.p>
        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
          data-testid="leadership-heading"
        >
          Leading rooms,
          <br />
          not <span className="italic text-molten">just projects</span>.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {LEADERSHIP.map((l, i) => (
            <motion.div
              key={l.org}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i}
              className="lg:col-span-2 spot-card bg-ink-900 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/15 transition-colors"
              data-testid={`leadership-item-${i}`}
            >
              <div className="relative z-[1]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-10 w-10 rounded-xl bg-molten/10 border border-molten/25 flex items-center justify-center text-molten">
                    <Users className="h-5 w-5" />
                  </span>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-bone-600">
                    {l.period}
                  </p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">{l.org}</h3>
                <p className="mt-1 italic text-bone-200 font-display">{l.role}</p>
                <ul className="mt-5 space-y-3">
                  {l.highlights.map((h, hi) => (
                    <li key={hi} className="text-bone-400 leading-relaxed pl-5 relative">
                      <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-molten" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp} custom={2}
            className="rounded-3xl border border-white/5 bg-gradient-to-br from-molten/15 to-ink-900 p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-molten">
                Impact — cumulative
              </p>
              <p className="mt-4 font-display text-5xl md:text-6xl leading-none tracking-tight">
                1000<span className="text-molten">+</span>
              </p>
              <p className="mt-2 text-bone-200 font-display italic text-xl">Participants reached</p>
            </div>
            <p className="mt-6 text-bone-400 text-sm leading-relaxed">
              Across 10+ events — hackathons, design jams, dev workshops and marketing sprints.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
