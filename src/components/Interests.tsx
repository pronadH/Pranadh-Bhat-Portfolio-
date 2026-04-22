import { Cpu, FlaskConical, Gamepad2, Car } from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Technology",
    desc: "Building, tinkering, and exploring the cutting edge of hardware and software.",
    color: "var(--neon-cyan)",
    glow: "0 0 30px var(--neon-cyan), 0 0 60px var(--neon-cyan)",
  },
  {
    icon: FlaskConical,
    title: "Science",
    desc: "Physics, space, experiments — the universe is my favorite playground.",
    color: "var(--neon-blue)",
    glow: "0 0 30px var(--neon-blue), 0 0 60px var(--neon-blue)",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    desc: "Strategy, action, esports — every match is a new puzzle to crack.",
    color: "var(--neon-purple)",
    glow: "0 0 30px var(--neon-purple), 0 0 60px var(--neon-purple)",
  },
  {
    icon: Car,
    title: "Racing Cars",
    desc: "Speed, engineering, and the roar of an engine — pure adrenaline.",
    color: "var(--neon-pink)",
    glow: "0 0 30px var(--neon-pink), 0 0 60px var(--neon-pink)",
  },
];

export function Interests() {
  return (
    <section id="interests" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="reveal text-center mb-16">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-neon-cyan mb-3">
            // 02 — Passions
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-neon">
            What I Love
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="reveal group glass-strong rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = it.glow;
                  e.currentTarget.style.borderColor = it.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity blur-3xl"
                  style={{ background: it.color }}
                />
                <div
                  className="relative w-14 h-14 rounded-xl glass flex items-center justify-center mb-5 transition-transform group-hover:rotate-12 group-hover:scale-110"
                  style={{ boxShadow: `inset 0 0 20px ${it.color}40` }}
                >
                  <Icon className="w-7 h-7" style={{ color: it.color }} />
                </div>
                <h3
                  className="relative font-display text-2xl font-bold mb-3 transition-colors"
                  style={{ color: "inherit" }}
                >
                  <span className="group-hover:text-gradient-neon">{it.title}</span>
                </h3>
                <p className="relative text-foreground/70 text-sm leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
