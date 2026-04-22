export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-foreground/60">
          © {new Date().getFullYear()} <span className="text-gradient-neon font-bold">Pranadh Bhat</span> — Built with ⚡ & neon.
        </p>
        <p className="font-display text-xs uppercase tracking-widest text-neon-cyan">
          // Powered by curiosity
        </p>
      </div>
    </footer>
  );
}
