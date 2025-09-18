import { Meteors } from "./magicui/meteors";

export default function MeteorsBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Meteors number={50} minDuration={3} />
    </div>
  );
}
