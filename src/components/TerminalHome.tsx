import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { useEffect } from "react";

interface ITerminalHome {
  onFinish: (data: boolean) => void;
}

export default function TerminalHome({ onFinish }: ITerminalHome) {
  const tempoTotal = 1.8 + 3.5;

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish(true);
    }, tempoTotal * 1000);

    return () => clearTimeout(timeout);
  }, [onFinish, tempoTotal]);

  return (
    <Terminal sequence>
      <TypingAnimation delay={0.5}>
        $ Olá, seja bem-vindo ao meu portfólio!
      </TypingAnimation>
      <AnimatedSpan className="text-green-500">
        $ ✔ Verificando os últimos ajustes...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        $ ✓ Preparando as telas...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        $ ✓ Carregando animações...
      </AnimatedSpan>
      <TypingAnimation delay={3.5}>
        $ Sucesso! Tudo pronto, vamos lá...
      </TypingAnimation>
    </Terminal>
  );
}
