import TitleText from "./TitleText";
import info from "../InfoJson.json";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col  justify-center items-center  ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-4">
            <TitleText text="Sobre mim" />
          </div>
          <p className=" leading-relaxed">{info.aboutMe.text}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {info.aboutMe.cards.map((card, index) => (
            <ModalComponent
              key={index}
              textOne={card.title}
              textTwo={card.subtitle}
            />
          ))}
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
