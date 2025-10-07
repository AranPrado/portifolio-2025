import { FileUser, Linkedin } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import { TextAnimate } from "./ui/text-animate";
import info from "../InfoJson.json";
import { downloadResume, handleOpenLink } from "@/utils/functions";

export default function InitialContent() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Nome e título animados */}
      <h4 className="text-xl md:text-6xl font-bold  mb-4">
        <TextAnimate>{`Olá, eu sou o ${info.name}`}</TextAnimate>
      </h4>
      <h2 className="text-2xl md:text-4xl font-semibold  mb-6">
        <TextAnimate>{info.role}</TextAnimate>
      </h2>

      {/* Breve descrição */}
      <p className="text-lg md:text-xl max-w-2xl">{info.initialPhrase}</p>
      <div className=" flex gap-3.5 mt-5">
        <RainbowButton onClick={() => downloadResume()} variant={"outline"}>
          <FileUser />
          Curriculo
        </RainbowButton>
        <RainbowButton
          onClick={() => {
            handleOpenLink(String(info.linkedin));
          }}
          variant={"outline"}
        >
          <Linkedin />
          Linkedin
        </RainbowButton>
      </div>
    </div>
  );
}
