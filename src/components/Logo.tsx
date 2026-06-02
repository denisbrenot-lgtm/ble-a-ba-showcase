import { Wheat } from "./Wheat";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#accueil" className="flex items-center gap-2 group">
      <Wheat className="text-[var(--gold)]" size={compact ? 22 : 28} />
      <span className="font-display text-2xl md:text-3xl text-cream tracking-tight">
        <span className="text-[var(--gold)]">B</span>lé <span className="italic text-[var(--gold)]">à</span> <span className="text-[var(--gold)]">B</span>a
      </span>
      <Wheat className="text-[var(--gold)] -scale-x-100" size={compact ? 22 : 28} />
    </a>
  );
}
