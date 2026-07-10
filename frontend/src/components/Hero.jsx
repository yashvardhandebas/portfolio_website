import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { PROFILE } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-32 pb-16 md:pt-40 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Aurora background */}
      <div className="aurora bg-molten/40 h-[520px] w-[520px] -top-40 -left-40" />
      <div className="aurora bg-molten/20 h-[420px] w-[420px] top-1/3 right-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.p
              variants={item}
              className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-8 flex items-center gap-3"
              data-testid="hero-eyebrow"
            >
              <span className="inline-block h-[1px] w-10 bg-molten" />
              Portfolio — 2026
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[3.4rem] sm:text-6xl md:text-7xl lg:text-[6.4rem] leading-[0.95] tracking-tight"
              data-testid="hero-heading"
            >
              Designer,
              <br />
              <span className="italic text-molten">developer</span>
              <span className="text-bone-600"> &</span>
              <br />
              quiet <span className="italic">machine</span>
              <br />
              learner.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg md:text-xl text-bone-400 leading-relaxed"
              data-testid="hero-bio"
            >
              {PROFILE.bio}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToId("work")}
                data-testid="hero-view-projects-btn"
                className="group inline-flex items-center gap-2 rounded-full bg-bone-50 text-ink-950 px-6 py-3.5 font-medium hover:bg-molten hover:text-white hover:-translate-y-1 transition-[transform,background-color,color] duration-300"
              >
                View Selected Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-download-resume-btn"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium hover:border-white/40 hover:bg-white/5 transition-[background-color,border-color] duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-14 flex items-center gap-6 text-sm text-bone-600 font-mono">
              <span className="uppercase tracking-widest">Available for full-time · 2026</span>
            </motion.div>
          </div>

          {/* Right portrait */}
          <motion.div
            variants={item}
            className="lg:col-span-5 relative"
            data-testid="hero-portrait"
          >
            <div className="relative aspect-[3/4] max-w-[420px] mx-auto lg:mx-0 lg:ml-auto animate-float-slow">
              <div className="portrait-frame h-full w-full">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating meta badges */}
              <div className="absolute -left-4 -bottom-4 bg-ink-900 border border-white/10 rounded-2xl px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-bone-600">
                  Now
                </p>
                <p className="font-display italic text-lg leading-none mt-1">B.Tech IT · VIT</p>
              </div>
              <div className="absolute -right-4 top-6 bg-ink-900 border border-white/10 rounded-2xl px-4 py-3">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-molten">
                  8.27 CGPA
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.button
          onClick={() => scrollToId("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="hidden md:flex mt-16 items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-bone-600 hover:text-bone-200 transition-colors"
          data-testid="hero-scroll-cue"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll to explore
        </motion.button>
      </div>
    </section>
  );
}
