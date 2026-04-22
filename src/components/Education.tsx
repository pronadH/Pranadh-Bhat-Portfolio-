import { GraduationCap, MapPin, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="reveal text-center mb-14">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-neon-cyan mb-3">
            // 03 — Journey
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-neon">
            Education
          </h2>
        </div>

        <div className="reveal relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-purple to-transparent" />

          <div className="relative glass-strong rounded-2xl p-8 md:p-10 ml-12 md:ml-0 md:max-w-xl md:mx-auto hover:neon-border transition-all duration-500 group">
            <div className="absolute -left-[3.25rem] md:left-1/2 md:-translate-x-1/2 md:-top-6 top-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center neon-border-cyan animate-pulse-glow">
              <GraduationCap className="w-6 h-6 text-neon-cyan" />
            </div>

            <div className="md:mt-6">
              <p className="font-display text-xs uppercase tracking-widest text-neon-cyan mb-2">
                Currently Studying
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gradient-neon">
                8th Standard
              </h3>
              <div className="space-y-3 text-foreground/85">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-neon-purple shrink-0" />
                  <span>Podar International School</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-neon-blue shrink-0" />
                  <span>Udupi, Karnataka</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Curious", "Tech-driven", "Future-ready"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full glass border border-neon-purple/40 text-foreground/80 font-display uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
