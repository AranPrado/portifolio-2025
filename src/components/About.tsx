import TitleText from "./TitleText";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col  justify-center items-center  ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4">
            <TitleText text="Sobre mim" />
          </div>
          <p className=" leading-relaxed">
            Olá! Meu nome é <span className="text-blue-400">Aran</span>, sou
            desenvolvedor front-end com paixão por criar experiências digitais
            envolventes e funcionais. Tenho experiência no desenvolvimento de
            interfaces modernas, responsivas e acessíveis, sempre buscando unir
            design e performance.
          </p>
          <p className=" leading-relaxed mt-4">
            Nos últimos tempos venho expandindo meus conhecimentos para além do
            front-end, explorando áreas como back-end, arquitetura de sistemas e
            serviços em nuvem. Meu objetivo é me tornar um desenvolvedor cada
            vez mais completo, capaz de entregar soluções robustas de ponta a
            ponta. 🚀
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <ModalComponent textOne="+2" textTwo="Anos de Experiência" />
          <ModalComponent textOne="+15" textTwo="Projetos Concluídos" />
          <ModalComponent textOne="100%" textTwo="Foco em Qualidade" />
          <ModalComponent textOne="∞" textTwo="Vontade de Aprender" />
        </div>
      </div>
    </section>
  );
}

interface IModalComponent {
  textOne: string;
  textTwo: string;
}

export const ModalComponent = ({ textOne, textTwo }: IModalComponent) => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-lg text-center">
      <h3 className="text-2xl font-bold ">{textOne}</h3>
      <p className="">{textTwo}</p>
    </div>
  );
};
