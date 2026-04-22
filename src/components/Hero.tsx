import gamingPc from "@/assets/gaming-pc.png";
import racingCar from "@/assets/racing-car.png";
import { TypingText } from "./TypingText";
import { Particles } from "./Particles";
import { useEffect, useState } from "react";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated-gradient"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Particles count={40} />

      {/* Floating Gaming PC */}
      <div
        className="absolute right-[5%] top-[18%] hidden lg:block animate-float"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <div className="group relative">
          <div className="absolute inset-0 rounded-full bg-neon-purple/40 blur-3xl scale-90 animate-pulse-glow" />
          <img
            src={gamingPc}
            alt="RGB Gaming PC"
            width={280}
            height={280}
            className="relative w-[260px] xl:w-[320px] drop-shadow-[0_0_40px_oklch(0.65_0.3_300/0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          />
        </div>
      </div>

      {/* Floating Racing Car */}
      <div
        className="absolute left-[3%] bottom-[12%] hidden lg:block animate-float-slow"
        style={{ transform: `translateY(${-offset * 0.1}px)` }}
      >
        <div className="group relative">
          <div className="absolute inset-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent blur-sm animate-streak" />
          <div className="absolute inset-0 rounded-full bg-neon-blue/30 blur-3xl animate-pulse-glow" />
          <img
            src={racingCar}
            alt="Neon Racing Car"
            width={420}
            height={262}
            className="relative w-[380px] xl:w-[460px] drop-shadow-[0_0_30px_oklch(0.7_0.25_250/0.7)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_60px_oklch(0.85_0.18_200/0.9)]"
          />
        </div>
      </div>

      {/* Mobile floating accents */}
      <div className="lg:hidden absolute right-4 top-24 animate-float opacity-60">
        <img src={gamingPc} alt="" width={120} height={120} className="w-28" />
      </div>
      <div className="lg:hidden absolute left-0 bottom-16 animate-float-slow opacity-70">
        <img src={racingCar} alt="" width={200} height={125} className="w-48" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <p className="font-display text-sm md:text-base uppercase tracking-[0.4em] text-neon-cyan mb-6 animate-fade-up">
          // Welcome to my world
        </p>
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="text-gradient-neon glow-text">
            <TypingText text="Hi, I'm Pranadh" />
          </span>
        </h1>
        <p
          className="font-display text-base md:text-2xl text-foreground/85 mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-neon-cyan">Tech Enthusiast</span>
          <span className="text-foreground/40 mx-3">|</span>
          <span className="text-neon-purple">Gamer</span>
          <span className="text-foreground/40 mx-3">|</span>
          <span className="text-neon-blue">Science Lover</span>
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#interests"
            className="ripple-btn glass-strong px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm text-foreground hover:text-background transition-colors"
          >
            Explore
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-neon-cyan/60 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-neon-cyan animate-pulse" />
        </div>
      </div>
    </section>
  );
}
