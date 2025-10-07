import type { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ExternalLink,
  Github,
  Code,
  Braces,
  Server,
  Globe,
  Database,
  Terminal,
  FileJson,
  Cpu,
  Cloud,
  Atom,
  Layers,
  Box,
  Rocket,
  Wrench,
  Monitor,
  Zap,
  Palette,
  Coffee,
  Smartphone,
  Axe,
} from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string | null;
  github: string;
  isUnderConstruction?: boolean;
}

interface CardProjectsProps {
  project: Project;
}

const techIconMap: Record<string, JSX.Element> = {
  javascript: <FileJson className="w-3.5 h-3.5" />,
  typescript: <Code className="w-3.5 h-3.5" />,
  python: <Terminal className="w-3.5 h-3.5" />,
  java: <Coffee className="w-3.5 h-3.5" />,
  dotnet: <Braces className="w-3.5 h-3.5" />,
  php: <Braces className="w-3.5 h-3.5" />,
  go: <Rocket className="w-3.5 h-3.5" />,

  react: <Atom className="w-3.5 h-3.5" />,
  nextjs: <Box className="w-3.5 h-3.5" />,
  vue: <Layers className="w-3.5 h-3.5" />,
  angular: <Zap className="w-3.5 h-3.5" />,
  tailwindcss: <Palette className="w-3.5 h-3.5" />,
  shadcn: <Monitor className="w-3.5 h-3.5" />,
  reactnative: <Smartphone className="w-3.5 h-3.5" />,
  jest: <Axe className="w-3.5 h-3.5" />,

  nodejs: <Server className="w-3.5 h-3.5" />,
  express: <Server className="w-3.5 h-3.5" />,
  nestjs: <Box className="w-3.5 h-3.5" />,
  fastify: <Zap className="w-3.5 h-3.5" />,
  docker: <Layers className="w-3.5 h-3.5" />,
  aws: <Cloud className="w-3.5 h-3.5" />,
  vercel: <Rocket className="w-3.5 h-3.5" />,

  mongodb: <Database className="w-3.5 h-3.5" />,
  postgresql: <Database className="w-3.5 h-3.5" />,
  mysql: <Database className="w-3.5 h-3.5" />,
  prisma: <Cpu className="w-3.5 h-3.5" />,

  git: <Github className="w-3.5 h-3.5" />,
  github: <Github className="w-3.5 h-3.5" />,
  api: <Globe className="w-3.5 h-3.5" />,
  rest: <Wrench className="w-3.5 h-3.5" />,
  graphql: <Braces className="w-3.5 h-3.5" />,
};

const normalizeTechKey = (tech: string) => {
  return tech
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
};

const getTechIcon = (tech: string) => {
  const key = normalizeTechKey(tech);
  return techIconMap[key] || <Code className="w-3.5 h-3.5" />;
};

export default function CardProjects({ project }: CardProjectsProps) {
  return (
    <Card className="group relative p-6 flex flex-col justify-between h-full rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 bg-background/60 backdrop-blur-sm">
      {project.link && (
        <div className="absolute top-4 right-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-5 h-5 hover:translate-x-1 transition-transform" />
        </div>
      )}

      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-lg font-semibold tracking-tight">
          {project.title} {project.isUnderConstruction && "- (Em construção)"}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 flex flex-col justify-between flex-grow gap-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-4">
          {project.github && (
            <RainbowButton
              variant={"outline"}
              onClick={() => window.open(project.github, "_blank")}
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition ${
                project.link ? "w-1/2" : "w-full"
              }`}
            >
              <Github className="w-4 h-4" />
              GitHub
            </RainbowButton>
          )}
          {project.link && (
            <RainbowButton
              variant={"outline"}
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank");
                }
              }}
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition"
            >
              <ExternalLink className="w-4 h-4" />
              Acessar
            </RainbowButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
