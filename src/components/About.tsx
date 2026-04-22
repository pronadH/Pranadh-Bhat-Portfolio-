export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="reveal text-center mb-12">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-neon-cyan mb-3">
            // 01 — About
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-neon">
            About Me
          </h2>
        </div>

        <div className="reveal glass-strong rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-neon-purple/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-neon-blue/20 blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full glass flex items-center justify-center neon-border animate-pulse-glow">
                <span className="font-display text-6xl md:text-7xl font-black text-gradient-neon">
                  PB
                </span>
              </div>
            </div>
            <div className="md:col-span-2 text-foreground/85 space-y-4 text-lg leading-relaxed">
              <p>
                I'm <span className="text-neon-cyan font-semibold">Pranadh Bhat</span>, a curious 8th-grade student from Udupi
                with a passion for everything that hums, blinks, or burns rubber.
              </p>
              <p>
                Whether I'm exploring how the universe works, breaking down the latest tech, dominating
                a multiplayer match, or watching supercars rip through a circuit — I'm always chasing the
                <span className="text-neon-purple font-semibold"> thrill of discovery</span>.
              </p>
              <p>
                My goal? Build cool things, learn relentlessly, and one day mix tech with motorsport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
