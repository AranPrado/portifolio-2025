import {
  BringToFront,
  Database,
  MonitorSmartphone,
  Server,
} from "lucide-react";
import CardSkills from "./CardSkills";
import TitleText from "./TitleText";

export default function Skills() {
  return (
    <section className="min-h-screen flex  justify-center  ">
      <div className="max-w-6xl w-full items-center">
        <div>
          <div className="mb-4  w-full ">
            <TitleText text="Minhas Habilidades e Conhecimentos" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardSkills
              icon={<MonitorSmartphone />}
              title="Front-End"
              skills={[
                {
                  name: "React",
                  level: 90,
                },
                {
                  name: "Next.js",
                  level: 60,
                },
                {
                  name: "Zustand",
                  level: 90,
                },
                {
                  name: "React Query",
                  level: 90,
                },
                {
                  name: "Ant-desing",
                  level: 90,
                },
              ]}
            />
            <CardSkills
              icon={<BringToFront />}
              title="Back-End"
              skills={[
                {
                  name: "Node.js / Nest JS",
                  level: 80,
                },
                {
                  name: "Dot net",
                  level: 50,
                },
              ]}
            />
            <CardSkills
              icon={<Server />}
              title="Cloud"
              skills={[
                {
                  name: "AWS",
                  level: 30,
                },
                {
                  name: "Firebase",
                  level: 60,
                },
                {
                  name: "Docker",
                  level: 50,
                },
              ]}
            />
            <CardSkills
              icon={<Database />}
              title="Banco de dados"
              skills={[
                {
                  name: "Postgres",
                  level: 50,
                },
                {
                  name: "Mongodb",
                  level: 30,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
