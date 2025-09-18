import { Highlighter } from "@/components/ui/highlighter";
import { TextAnimate } from "./ui/text-animate";

interface ITitleText {
  text: string;
}

export default function TitleText({ text }: ITitleText) {
  return (
    <Highlighter
      strokeWidth={1}
      multiline={false}
      action="underline"
      color="#ff0000"
    >
      <TextAnimate duration={0.6} className="text-3xl">
        {text}
      </TextAnimate>
    </Highlighter>
  );
}
