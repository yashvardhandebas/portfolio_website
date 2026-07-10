import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/data";
import { Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32" data-testid="certifications-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          06 — Learning in Public
        </motion.p>
        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
          data-testid="certifications-heading"
        >
          <span className="italic text-molten">Certifications</span> &<br />
          simulations completed.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i}
              className="spot-card group flex items-start gap-5 bg-ink-900 border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-colors"
              data-testid={`cert-item-${i}`}
            >
              <span className="h-11 w-11 rounded-xl bg-molten/10 border border-molten/25 flex items-center justify-center text-molten shrink-0">
                <Award className="h-5 w-5" />
              </span>
              <div className="relative z-[1] flex-1">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-bone-600 mb-1">
                  {c.year} · {c.issuer}
                </p>
                <h3 className="font-display text-xl md:text-2xl leading-tight tracking-tight">
                  {c.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
