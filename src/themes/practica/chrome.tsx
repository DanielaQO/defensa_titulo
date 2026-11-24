import { useKey } from '../../hooks/useKey';
import { scrollToId } from '../../lib/scroll';
import { sections } from './sections';

export function Loader({ pct, loaded }: { pct: number; loaded: boolean }) {
  return (
    <div className={`fixed inset-0 z-[100] bg-acc text-p-bg flex flex-col justify-between py-6 px-7 transition-transform duration-[900ms] ease-[cubic-bezier(.77,0,.18,1)] ${loaded ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex justify-between text-[13px] font-bold uppercase tracking-[0.08em]">
        <span>Daniela Quiñones</span><span>Presentación de título</span>
      </div>
      <div className="text-[clamp(120px,26vw,380px)] font-black [font-stretch:62%] leading-[0.8] tracking-[-0.02em]">{pct}%</div>
    </div>
  );
}

export function Header({ active, menu, onToggle, onTop }: { active: string; menu: boolean; onToggle: () => void; onTop: () => void }) {
  const cur = sections.findIndex((s) => s.id === active);
  const label = cur > 0 ? `${String(cur).padStart(2, '0')} — ${sections[cur].label}` : 'Presentación de práctica laboral';
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between gap-4 py-[18px] px-7 mix-blend-difference text-p-ink">
      <button type="button" onClick={() => { onTop(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer text-[22px] font-black [font-stretch:75%] tracking-[-0.01em] uppercase hover:text-acc">D.Quiñones</button>
      <div className="text-xs font-semibold uppercase tracking-[0.1em] flex-auto text-left pl-[8vw] whitespace-nowrap overflow-hidden text-ellipsis">{label}</div>
      <button type="button" onClick={onToggle} className="cursor-pointer flex items-center gap-[10px] text-[13px] font-bold uppercase tracking-[0.1em] py-2">
        <span>{menu ? 'Cerrar' : 'Menú'}</span>
        <span className={`inline-block text-[22px] leading-none transition-transform duration-[400ms] ${menu ? 'rotate-45' : ''}`}>+</span>
      </button>
    </header>
  );
}

export function Progress({ value }: { value: number }) {
  return <div className="fixed top-0 left-0 h-[3px] z-[60] bg-acc" style={{ width: `${(value * 100).toFixed(2)}%` }} />;
}

export function Menu({ open, active, onClose }: { open: boolean; active: string; onClose: () => void }) {
  useKey({ Escape: onClose }, open);
  return (
    <div inert={!open} className="fixed inset-0 z-40 bg-p-bg flex flex-col justify-end pt-24 px-7 pb-7 transition-[clip-path] duration-700 ease-[cubic-bezier(.77,0,.18,1)]"
      style={{ clipPath: open ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)', pointerEvents: open ? 'auto' : 'none' }}>
      <nav className="flex flex-col border-t border-p-line">
        {sections.map((s, i) => (
          <button key={s.id} type="button" onClick={() => { onClose(); scrollToId(s.id); }}
            className={`cursor-pointer text-left flex items-baseline gap-5 py-[6px] border-b border-p-line hover:text-acc hover:pl-4 ${active === s.id ? 'text-acc' : 'text-p-ink'}`}>
            <span className="text-[13px] font-semibold w-8">{String(i).padStart(2, '0')}</span>
            <span className="text-[clamp(32px,6.4vw,84px)] font-black [font-stretch:62%] uppercase leading-none tracking-[-0.01em]">{s.label}</span>
          </button>
        ))}
      </nav>
      <div className="flex flex-wrap gap-6 justify-between mt-6 text-[13px] text-p-muted">
        <span>Técnico en Diseño Digital y Publicitario</span>
        <span>Agupa SpA · Santiago · 27/07/2026</span>
      </div>
    </div>
  );
}
