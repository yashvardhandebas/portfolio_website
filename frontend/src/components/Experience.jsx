import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          03 — Experience
        </motion.p>
        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
          data-testid="experience-heading"
        >
          Places I've <span className="italic text-molten">shipped</span> for.
        </motion.h2>

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-molten/0 via-white/10 to-molten/0" />

          <div className="flex flex-col gap-14 md:gap-20">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp} custom={i}
                className="relative pl-14 md:pl-24 group"
                data-testid={`experience-item-${i}`}
              >
                <span className="absolute left-[9px] md:left-[25px] top-2 h-3 w-3 rounded-full bg-molten shadow-[0_0_0_6px_rgba(255,77,0,0.18)] group-hover:shadow-[0_0_0_10px_rgba(255,77,0,0.22)] transition-[box-shadow] duration-500" />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-bone-600">
                    {exp.period}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-bone-600 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {exp.location}
                  </p>
                </div>
                <h3 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
                  {exp.company}
                </h3>
                <p className="mt-2 text-bone-200 text-lg italic font-display">
                  {exp.role}
                </p>
                <ul className="mt-6 space-y-3 max-w-2xl">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="text-bone-400 leading-relaxed pl-5 relative">
                      <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-molten" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] font-mono text-xs text-bone-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
