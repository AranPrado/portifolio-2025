import { useState } from "react";
import {
  Briefcase,
  CodeXml,
  FileText,
  GraduationCap,
  Home,
} from "lucide-react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { motion, AnimatePresence } from "framer-motion";

interface IconsMenuProps {
  icon: React.ReactNode;
  key: string;
  separator?: boolean;
  href?: string;
  onClick?: () => void;
}

const icons: IconsMenuProps[] = [
  { icon: <Home />, key: "home", separator: true, href: "#home" },
  { icon: <FileText />, key: "about", href: "#about" },
  { icon: <CodeXml />, key: "skills", href: "#skills" },
  { icon: <Briefcase />, key: "experience", href: "#experience" },
  {
    icon: <GraduationCap />,
    key: "education",
    separator: true,
    href: "#education",
  },
  { icon: <AnimatedThemeToggler />, key: "theme" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden fixed top-2 left-2 z-50">
      {/* Botão hamburguer */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex flex-col justify-center items-center gap-1 p-1 bg-card rounded-lg shadow-md"
      >
        <span
          className={`block h-1 w-6 bg-primary rounded transform transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-1 w-6 bg-primary rounded transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1 w-6 bg-primary rounded transform transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Drawer lateral */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-card shadow-lg z-50 flex flex-col p-4 gap-2"
            >
              {icons.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-2 py-3 hover:bg-secondary/20 rounded transition-colors"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.key}</span>
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
