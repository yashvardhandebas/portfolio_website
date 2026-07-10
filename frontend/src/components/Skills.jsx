import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import {
  Code2, Database, Palette, BrainCircuit,
} from "lucide-react";

const iconFor = (group) => {
  switch (group) {
    case "Engineering": return Code2;
    case "Data & ML": return Database;
    case "AI & LLM Systems": return BrainCircuit;
    case "Design": return Palette;
    default: return Code2;
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
};

export default function Skills() {
  const marqueeItems = SKILLS.flatMap((g) => g.items).slice(0, 24);
  return (
    <section id="skills" className="relative py-28 md:py-40" data-testid="skills-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          04 — Toolkit
        </motion.p>
        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
          data-testid="skills-heading"
        >
          The <span className="italic text-molten">stack</span> I reach for.
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} custom={1}
          className="mt-4 text-bone-400 max-w-xl"
        >
          A working tool-belt that keeps growing. Grouped by intent, not hype.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SKILLS.map((group, gi) => {
            const Icon = iconFor(group.group);
            return (
              <motion.div
                key={group.group}
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp} custom={gi}
                className="spot-card bg-ink-900 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/15 transition-colors duration-500"
                data-testid={`skills-group-${group.group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="relative z-[1]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-10 w-10 rounded-xl bg-molten/10 border border-molten/25 flex items-center justify-center text-molten">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl tracking-tight">{group.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        data-testid={`skill-tag-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs text-bone-200 hover:text-molten hover:border-molten/40 transition-colors duration-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 overflow-hidden border-y border-white/5 py-8 bg-ink-900/40" aria-hidden="true">
        <div className="flex gap-14 marquee-track whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="font-display text-3xl md:text-5xl italic text-bone-600 hover:text-molten transition-colors"
            >
              {s} <span className="text-molten not-italic">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
