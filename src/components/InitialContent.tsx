import { Github, Linkedin } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import { TextAnimate } from "./ui/text-animate";

export default function InitialContent() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Nome e título animados */}
      <h4 className="text-xl md:text-6xl font-bold  mb-4">
        <TextAnimate>Olá, eu sou o Aran</TextAnimate>
      </h4>
      <h2 className="text-2xl md:text-4xl font-semibold  mb-6">
        <TextAnimate>Desenvolvedor Front-End</TextAnimate>
      </h2>

      {/* Breve descrição */}
      <p className="text-lg md:text-xl max-w-2xl">
        Apaixonado por tecnologia, interfaces criativas e experiências digitais
        que unem design e performance. Sempre em busca de aprender e inovar.
      </p>
      <div className=" flex gap-3.5 mt-5">
        <RainbowButton variant={"outline"}>
          <Github />
          Git hub
        </RainbowButton>
        <RainbowButton variant={"outline"}>
          <Linkedin />
          Linkedin
        </RainbowButton>
      </div>
    </div>
  );
}
