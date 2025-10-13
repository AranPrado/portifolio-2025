import { FileUser, Linkedin } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import { TextAnimate } from "./ui/text-animate";
import info from "../InfoJson.json";
import { downloadResume, handleOpenLink } from "@/utils/functions";

export default function InitialContent() {
  return (
    <div
      className="
        min-h-screen flex flex-col justify-center items-center
        text-center px-4 sm:px-8
      "
    >
      {/* Nome e título animados */}
      <h4
        className="
          text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 
          leading-snug sm:leading-tight
        "
      >
        <TextAnimate>{`Olá, eu sou o ${info.name}`}</TextAnimate>
      </h4>

      <h2
        className="
          text-lg sm:text-2xl md:text-4xl font-semibold mb-4 sm:mb-6
          leading-snug sm:leading-tight
        "
      >
        <TextAnimate>{info.role}</TextAnimate>
      </h2>

      {/* Breve descrição */}
      <p
        className="
          text-sm sm:text-base md:text-xl text-muted-foreground
          max-w-xs sm:max-w-xl md:max-w-2xl 
        "
      >
        {info.initialPhrase}
      </p>

      {/* Botões */}
      <div
        className="
          flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8
          w-full sm:w-auto justify-center items-center
        "
      >
        <RainbowButton
          onClick={() => downloadResume()}
          variant="outline"
          className="w-10/12 sm:w-auto text-sm sm:text-base py-2 sm:py-3"
        >
          <FileUser className="w-4 h-4 sm:w-5 sm:h-5" />
          Currículo
        </RainbowButton>

        <RainbowButton
          onClick={() => handleOpenLink(String(info.linkedin))}
          variant="outline"
          className="w-10/12 sm:w-auto text-sm sm:text-base py-2 sm:py-3"
        >
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          Linkedin
        </RainbowButton>
      </div>
    </div>
  );
}
