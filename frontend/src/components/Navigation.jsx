import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/lib/data";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,padding] duration-500 ${
        scrolled
          ? "bg-ink-950/70 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <button
          onClick={() => scrollToId("home")}
          className="group flex items-center gap-2"
          data-testid="nav-logo"
          aria-label="Home"
        >
          <span className="font-display text-xl md:text-2xl italic tracking-tight">
            Yash<span className="text-molten">·</span>D
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              data-testid={`nav-${item.id}-link`}
              className="px-4 py-2 text-sm text-bone-200 hover:text-bone-50 transition-colors duration-300"
            >
              <span className="link-underline">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-resume-cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-molten text-white px-5 py-2.5 text-sm font-medium hover:bg-molten-hover hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(255,77,0,0.35)] transition-[transform,background-color,box-shadow] duration-300"
          >
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            className="md:hidden h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-ink-950/95 backdrop-blur-xl border-t border-white/5"
            data-testid="nav-mobile-panel"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToId(item.id);
                    setOpen(false);
                  }}
                  data-testid={`nav-mobile-${item.id}-link`}
                  className="text-left px-3 py-3 text-bone-200 hover:text-molten text-lg font-display"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-mobile-resume-cta"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-molten text-white px-5 py-3 text-sm font-medium"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
