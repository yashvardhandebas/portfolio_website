import { useEffect } from "react";
import "@/App.css";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

function App() {
  // Cursor-follow spotlight variables for .spot-card
  useEffect(() => {
    const handler = (e) => {
      const targets = document.querySelectorAll(".spot-card");
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink-950 text-bone-50 font-sans antialiased" data-testid="portfolio-root">
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Resume />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#121212",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#F4F4F5",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
