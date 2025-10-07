import CardSkills from "./CardSkills";
import TitleText from "./TitleText";
import info from "../InfoJson.json";
import * as LucideIcons from "lucide-react";

export default function Skills() {
  return (
    <section className="min-h-screen flex  justify-center  ">
      <div className="max-w-6xl w-full items-center">
        <div>
          <div className="mb-4  w-full ">
            <TitleText text="Minhas Habilidades e Conhecimentos" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {info.skills.map((card, index) => (
              <CardSkills
                key={index}
                icon={card.icon as keyof typeof LucideIcons}
                title={card.title}
                skills={card.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
