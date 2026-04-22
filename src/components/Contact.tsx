import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:pranadhbhat@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-purple/15 blur-3xl" />

      <div className="container mx-auto max-w-5xl relative">
        <div className="reveal text-center mb-14">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-neon-cyan mb-3">
            // 04 — Connect
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-neon">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal space-y-4">
            <a
              href="mailto:pranadhbhat@gmail.com"
              className="group glass-strong rounded-2xl p-6 flex items-center gap-4 hover:neon-border-cyan hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Mail className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-foreground/60">Email</p>
                <p className="text-foreground font-semibold">pranadhbhat@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:9945202627"
              className="group glass-strong rounded-2xl p-6 flex items-center gap-4 hover:neon-border hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Phone className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-foreground/60">Phone</p>
                <p className="text-foreground font-semibold">+91 99452 02627</p>
              </div>
            </a>

            <div className="glass-strong rounded-2xl p-6">
              <p className="font-display text-sm uppercase tracking-widest text-neon-cyan mb-2">
                Status
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-neon-cyan" />
                </span>
                <span className="text-foreground/85">Open to chat & collaborate</span>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="reveal glass-strong rounded-2xl p-8 space-y-5">
            {[
              { key: "name", label: "Your Name", type: "text" },
              { key: "email", label: "Your Email", type: "email" },
            ].map((f) => (
              <div key={f.key}>
                <label className="font-display text-xs uppercase tracking-widest text-foreground/60 mb-2 block">
                  {f.label}
                </label>
                <input
                  required
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none transition-all focus:border-neon-cyan focus:shadow-[0_0_20px_var(--neon-cyan)] focus:bg-input/60"
                />
              </div>
            ))}
            <div>
              <label className="font-display text-xs uppercase tracking-widest text-foreground/60 mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none transition-all focus:border-neon-purple focus:shadow-[0_0_20px_var(--neon-purple)] focus:bg-input/60 resize-none"
              />
            </div>
            <button
              type="submit"
              className="ripple-btn w-full py-3 rounded-xl font-display uppercase tracking-widest text-sm border border-neon-cyan/60 text-foreground flex items-center justify-center gap-2 hover:text-background transition-colors"
            >
              {sent ? "Sent!" : "Send Message"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
