import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { PROFILE } from "@/lib/data";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setSubmitting(true);
    // Frontend-only: open mail client
    const body =
      `Hi Yashvardhan,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(form.name)}`;
    const subject = encodeURIComponent(form.subject || "Hello from your portfolio");
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your mail client…");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.28em] text-molten mb-6"
        >
          08 — Say Hello
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} className="lg:col-span-6"
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight" data-testid="contact-heading">
              Let's build
              <br />
              <span className="italic text-molten">something</span>
              <br />
              worth using.
            </h2>
            <p className="mt-8 text-bone-400 text-lg max-w-md leading-relaxed">
              Recruiter, collaborator, or a friend of a friend — I read every
              message. Expect a reply within 48 hours.
            </p>

            <div className="mt-10 flex flex-col gap-4 text-bone-200">
              <a
                href={PROFILE.socials.email}
                data-testid="contact-email"
                className="group inline-flex items-center gap-3 hover:text-molten transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="link-underline">{PROFILE.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin"
                  aria-label="LinkedIn"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center hover:border-molten hover:text-molten transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-github"
                  aria-label="GitHub"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center hover:border-molten hover:text-molten transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-6 rounded-3xl border border-white/10 bg-ink-900/60 backdrop-blur p-6 md:p-8 flex flex-col gap-4"
            data-testid="contact-form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-600">Name</span>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  data-testid="contact-input-name"
                  className="bg-ink-950 border border-white/10 rounded-xl px-4 py-3 text-bone-50 placeholder:text-bone-600 focus:border-molten focus:outline-none focus:ring-2 focus:ring-molten/30 transition-[border-color,box-shadow]"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-600">Email</span>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  data-testid="contact-input-email"
                  className="bg-ink-950 border border-white/10 rounded-xl px-4 py-3 text-bone-50 placeholder:text-bone-600 focus:border-molten focus:outline-none focus:ring-2 focus:ring-molten/30 transition-[border-color,box-shadow]"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-600">Subject</span>
              <input
                name="subject" value={form.subject} onChange={handleChange}
                data-testid="contact-input-subject"
                className="bg-ink-950 border border-white/10 rounded-xl px-4 py-3 text-bone-50 placeholder:text-bone-600 focus:border-molten focus:outline-none focus:ring-2 focus:ring-molten/30 transition-[border-color,box-shadow]"
                placeholder="What's this about?"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone-600">Message</span>
              <textarea
                name="message" rows={5} value={form.message} onChange={handleChange} required
                data-testid="contact-input-message"
                className="bg-ink-950 border border-white/10 rounded-xl px-4 py-3 text-bone-50 placeholder:text-bone-600 focus:border-molten focus:outline-none focus:ring-2 focus:ring-molten/30 transition-[border-color,box-shadow] resize-none"
                placeholder="Tell me what you're building..."
              />
            </label>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-bone-600 font-mono uppercase tracking-widest">
                Opens your mail client
              </p>
              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit-btn"
                className="inline-flex items-center gap-2 rounded-full bg-molten text-white px-6 py-3 font-medium hover:bg-molten-hover hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,77,0,0.35)] transition-[transform,background-color,box-shadow] disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Message"}
                {submitting ? <ArrowUpRight className="h-4 w-4 animate-pulse" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
