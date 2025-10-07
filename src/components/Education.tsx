import TitleText from "./TitleText";
import EducationCard, { type statusEducation } from "./CardEducation";
import CardProjects from "./CardProjects";
import info from "../InfoJson.json";

export default function Education() {
  return (
    <section className="min-h-[150vh]">
      <div className="mb-4">
        <TitleText text="Um pouco mais sobre mim" />
      </div>
      <div>
        <EducationCard
          course={info.education.course}
          institution={info.education.institution}
          period={info.education.period}
          status={info.education.status as statusEducation}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-6">
        {info.projects.map((project) => (
          <CardProjects
            project={{
              description: project.description,
              github: project.link,
              technologies: project.technologies,
              title: project.title,
            }}
          />
        ))}
      </div>
    </section>
  );
}
