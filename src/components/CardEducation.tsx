// components/EducationCard.tsx
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export type statusEducation = "Formado" | "Cursando" | "Trancado";

interface EducationCardProps {
  course: string;
  institution: string;
  period: string;
  status: statusEducation;
  description?: string;
}

export default function EducationCard({
  course,
  institution,
  period,
  status,
  description,
}: EducationCardProps) {
  const statusColors: Record<typeof status, string> = {
    Formado: "text-green-600 bg-green-100",
    Cursando: "text-blue-600 bg-blue-100",
    Trancado: "text-red-600 bg-red-100",
  };

  return (
    <Card className="p-6 rounded-2xl shadow-lg bg-card text-card-foreground flex gap-4 items-start hover:shadow-xl transition">
      <div className="p-3 bg-primary/10 rounded-full">
        <GraduationCap className="w-8 h-8 text-primary" />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{course}</h2>
        <p className="text-sm text-muted-foreground">{institution}</p>
        <p className="text-sm text-muted-foreground italic">{period}</p>
        {description && <p className="mt-2 text-sm">{description}</p>}
        <span
          className={`inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
    </Card>
  );
}
