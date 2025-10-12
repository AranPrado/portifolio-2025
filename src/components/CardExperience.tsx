import { BriefcaseBusiness } from "lucide-react";
import { MagicCard } from "./ui/magic-card";

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

interface CardExperienceProps {
  experience: Experience;
}

export default function CardExperience({ experience }: CardExperienceProps) {
  return (
    <>
      <MagicCard className="p-6 flex flex-col gap-2 shadow-sm rounded-3xl hover:scale-[1.02] transition-transform max-w-lg ">
        {experience.current && (
          <div className="absolute top-0 right-0 text-primary hidden sm:block">
            <BriefcaseBusiness className="w-5 h-5 hover:scale-x-105 hover:translate-x-1 transition-transform" />
          </div>
        )}
        <h3 className="text-xl font-semibold">{experience.role}</h3>
        <p className="text-sm text-muted-foreground">
          {experience.company} • {experience.period}
        </p>
        <p className="text-sm leading-relaxed">{experience.description}</p>
      </MagicCard>
    </>
  );
}
