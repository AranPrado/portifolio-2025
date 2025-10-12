import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Briefcase,
  CodeXml,
  FileText,
  GraduationCap,
  Home,
} from "lucide-react";
import type React from "react";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { motion } from "framer-motion";

export type IconProps = React.HTMLAttributes<SVGElement>;

interface IconsMenuProps {
  icon: React.ReactElement<IconProps> | React.ReactNode;
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

interface NavigationProps {
  activeSection: string | null;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const currentHash = activeSection ? `#${activeSection}` : "#home";

  return (
    <motion.div
      className="fixed bottom-1 left-0 right-0  justify-center z-50 hidden sm:flex"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <Dock direction="middle" className="space-x-2">
        {icons.map((item, idx) => (
          <div key={item.key} className="flex items-center">
            <DockIcon
              magnification={2}
              className={`rounded-full transition-colors duration-300 ${
                item.href && item.href === currentHash
                  ? "bg-secondary text-primary"
                  : "hover:bg-secondary/80"
              }`}
            >
              {item.href || item.onClick ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="w-full h-full flex items-center justify-center"
                >
                  {item.icon}
                </a>
              ) : (
                item.icon
              )}
            </DockIcon>

            {item.separator && idx < icons.length - 1 && (
              <DockIcon magnification={0}>
                <span className="w-px h-4 bg-gray-400/50 block" />
              </DockIcon>
            )}
          </div>
        ))}
      </Dock>
    </motion.div>
  );
}
