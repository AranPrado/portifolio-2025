import { Heart } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import info from "../InfoJson.json";
import { clearPhoneCaracter } from "@/utils/functions";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: info.github,
      label: "GitHub",
    },
    {
      href: info.linkedin,
      label: "LinkedIn",
    },
    {
      href: `mailto:${info.email}`,
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experiência" },
    { href: "#education", label: "Projetos" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkRedirect = (type: "email" | "whatsapp", link: string) => {
    if (type === "email") {
      window.open(`mailto:${link}`, "_blank");
    } else {
      window.open(`https://wa.me/+55${clearPhoneCaracter(link)}`, "_blank");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div className="space-y-4">
          <div className="text-2xl font-bold  ">&lt;{info.name}/&gt;</div>
          <p className="text-muted-foreground max-w-xs">{info.initialPhrase}</p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              return (
                <RainbowButton
                  key={social.label}
                  variant="outline"
                  size={"sm"}
                  onClick={() => window.open(social.href, "_blank")}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary  smooth-transition hover:scale-110"
                  aria-label={social.label}
                >
                  {social.label}
                </RainbowButton>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Links Rápidos</h3>
          <nav className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-muted-foreground cursor-pointer hover:text-foreground smooth-transition"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contato</h3>
          <div className="space-y-2 text-muted-foreground hover:text-foreground smooth-transition">
            <p>Serra, ES - Brasil</p>
            <p
              className="hover:cursor-pointer hover:text-foreground smooth-transition"
              onClick={() => linkRedirect("email", info.email)}
            >
              {info.email}
            </p>
            <p
              className="hover:cursor-pointer hover:text-foreground smooth-transition"
              onClick={() => linkRedirect("whatsapp", info.phone)}
            >
              {info.phone}
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Disponível para projetos
            </span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          © {currentYear} {info.role}. Feito com
          <Heart size={16} className="text-red-500 animate-pulse" />
          usando React.
        </p>
      </div>
    </div>
  );
}
