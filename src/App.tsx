import { useEffect, useState } from "react";
import "./App.css";
import MeteorsBackground from "./components/MeteorsBackground";
import Navigation from "./components/Navigation";
import TerminalHome from "./components/TerminalHome";
import { Button } from "./components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import InitialContent from "./components/InitialContent";
import About from "./components/About";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { useActiveSection } from "./utils/useActiveSection";

function App() {
  const [finishTerminal, setFinishTerminal] = useState(false);
  const [newContent, setNewContent] = useState(false);

  const sectionIds = [
    "home",
    "about",
    "skills",
    "experience",
    "education",
    "footer",
  ];

  const activeSection = useActiveSection(sectionIds);

  // Atualiza a URL conforme o scroll
  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, "", `#${activeSection}`);
    }
  }, [activeSection]);

  // Rola até o hash inicial (se houver)
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Quando terminal termina → mostra o conteúdo
  useEffect(() => {
    if (finishTerminal) {
      const timer = setTimeout(() => setNewContent(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [finishTerminal]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <ScrollProgress />
      <MeteorsBackground />

      {!newContent ? (
        <div className="border flex justify-center items-center flex-col min-h-screen">
          <TerminalHome onFinish={(data) => setFinishTerminal(data)} />
          {finishTerminal && (
            <motion.div
              className="z-50 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Button
                className="animate-bounce hover:cursor-pointer"
                size={"icon"}
                variant={"link"}
                onClick={() => setNewContent(true)}
              >
                <ChevronDown />
              </Button>
            </motion.div>
          )}
        </div>
      ) : (
        <>
          <main className="w-6xl mx-auto min-h-screen">
            <section id="home">
              <InitialContent />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="education">
              <Education />
            </section>
          </main>

          <footer id="footer" className="border-t border-border">
            <Footer />
          </footer>

          {activeSection !== "footer" && (
            <Navigation activeSection={activeSection} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
