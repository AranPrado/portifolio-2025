import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import * as LucideIcons from "lucide-react";
import { type LucideProps } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface CardSkillsProps {
  title: string;
  skills: Skill[];
  icon: string;
}

export default function CardSkills({ title, skills, icon }: CardSkillsProps) {
  const IconComponent = (
    LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>
  )[icon];

  return (
    <Card className="p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {IconComponent ? (
          <IconComponent className="w-6 h-6" />
        ) : (
          <div className="w-6 h-6 bg-gray-300 rounded-sm" />
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="flex flex-col gap-3">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-lg">{skill.name}</span>
              <span className="text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}
