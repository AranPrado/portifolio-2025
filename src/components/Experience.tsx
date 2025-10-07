import CardExperience from "./CardExperience";
import { type Experience } from "./CardExperience";
import TitleText from "./TitleText";
import info from "../InfoJson.json";

export default function Experience() {
  return (
    <section className="min-h-screen  ">
      <div>
        <div className="mb-4  w-full ">
          <TitleText text="Minhas Experiências" />
        </div>
        <div className="flex  justify-start gap-6 flex-wrap">
          {info.experiences.map((exp, index) => (
            <>
              <CardExperience
                key={index}
                experience={{
                  company: exp.company,
                  description: exp.description,
                  period: exp.period,
                  role: exp.role,
                  current: exp.current,
                }}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
