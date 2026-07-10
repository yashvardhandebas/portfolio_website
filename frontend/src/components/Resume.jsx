import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { PROFILE } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Resume() {
  return (
    <section id="resume" className="relative py-28 md:py-40" data-testid="resume-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          05 — Resume
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} className="lg:col-span-6"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight" data-testid="resume-heading">
              The one-pager,
              <br />
              <span className="italic text-molten">unabridged</span>.
            </h2>
            <p className="mt-6 text-bone-400 text-lg max-w-lg leading-relaxed">
              A crisp summary of my education, internships, projects and
              certifications — updated for the 2026 recruiting cycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="resume-view-btn"
                className="inline-flex items-center gap-2 rounded-full bg-bone-50 text-ink-950 px-6 py-3.5 font-medium hover:bg-molten hover:text-white hover:-translate-y-0.5 transition-[transform,background-color,color] duration-300"
              >
                <ExternalLink className="h-4 w-4" /> View Resume
              </a>
              <a
                href={PROFILE.resume}
                download
                data-testid="resume-download-btn"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium hover:border-white/40 hover:bg-white/5 transition-colors"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} className="lg:col-span-6"
          >
            <div className="spot-card relative rounded-3xl border border-white/10 bg-ink-900 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                <div className="flex items-center gap-2 font-mono text-xs text-bone-400 uppercase tracking-widest">
                  <FileText className="h-4 w-4" /> yashvardhan.pdf
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-molten" />
                </div>
              </div>
              <div className="aspect-[3/4] bg-ink-950 relative">
                <object
                  data={PROFILE.resume + "#toolbar=0&navpanes=0"}
                  type="application/pdf"
                  className="h-full w-full"
                  aria-label="Resume PDF preview"
                >
                  <div className="h-full w-full flex items-center justify-center p-8 text-center">
                    <p className="text-bone-400 text-sm">
                      Preview unavailable —{" "}
                      <a href={PROFILE.resume} className="text-molten underline" target="_blank" rel="noopener noreferrer">
                        open the PDF directly
                      </a>
                      .
                    </p>
                  </div>
                </object>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
