import { motion } from "framer-motion";
import { STATS } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-7 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
            data-testid="about-heading"
          >
            I build the <span className="italic text-molten">bridge</span>
            <br />
            between what a
            <br />
            product <span className="italic">looks like</span> and
            <br />
            what it <span className="italic">knows</span>.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-5 flex flex-col gap-6 text-bone-400 text-lg leading-relaxed"
            data-testid="about-copy"
          >
            <p>
              I'm Yashvardhan, an Information Technology undergrad at VIT with a
              habit of moving across the whole stack — from Figma to XGBoost —
              until an idea feels inevitable.
            </p>
            <p>
              At <span className="text-bone-200">To The New</span> I designed
              WCAG-compliant interfaces and component systems. At{" "}
              <span className="text-bone-200">Infinite Computer Solutions</span>{" "}
              I shipped Power BI dashboards and shored up Java modules for
              government electricity data. In between: agentic LLM systems,
              quant portfolios, and case studies I'm proud of.
            </p>
            <p className="font-mono text-sm text-bone-600 uppercase tracking-[0.2em]">
              Currently — B.Tech IT · Vellore, IN
            </p>
          </motion.div>
        </div>

        {/* Stats bento */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" data-testid="about-stats">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i}
              className="spot-card bg-ink-900 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/15 transition-colors duration-500"
              data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="relative z-[1]">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-bone-600 mb-4">
                  {s.label}
                </p>
                <p className="font-display text-5xl md:text-6xl leading-none tracking-tight">
                  {s.value}
                  {s.suffix && (
                    <span className="text-bone-600 text-2xl align-top ml-1">
                      {s.suffix}
                    </span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
