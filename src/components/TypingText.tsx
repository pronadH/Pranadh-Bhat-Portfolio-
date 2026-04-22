import { useEffect, useState } from "react";

export function TypingText({ text, speed = 55 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-[3px] h-[1em] bg-neon-cyan align-middle ml-1 animate-blink" />
    </span>
  );
}
