import type { ReactNode } from 'react';

export default function FilterPills({ options, active, onPick, className = '', itemClass }: { options: { id: string; label: ReactNode }[]; active: string; onPick: (id: string) => void; className?: string; itemClass: (active: boolean) => string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((o) => (
        <button key={o.id} type="button" aria-pressed={o.id === active} onClick={() => onPick(o.id)} className={`cursor-pointer ${itemClass(o.id === active)}`}>{o.label}</button>
      ))}
    </div>
  );
}
