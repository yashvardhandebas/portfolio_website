import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/lib/data";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 md:py-16" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="font-display italic text-5xl md:text-7xl tracking-tight leading-none">
              Yash<span className="text-molten">·</span>D
            </p>
            <p className="mt-4 text-bone-400 max-w-sm">
              Designed, built and maintained by {PROFILE.name}. Built with React,
              Framer Motion and a decent playlist.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <button
              onClick={scrollTop}
              data-testid="footer-scroll-top"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 hover:border-molten hover:text-molten transition-colors"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
              Back to top
            </button>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-bone-600">
              © {new Date().getFullYear()} · Vellore, IN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
