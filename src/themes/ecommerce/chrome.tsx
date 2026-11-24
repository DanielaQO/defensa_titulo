import { biblio } from '../../data/content';
import { scrollToId } from '../../lib/scroll';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { nav, useStore } from './store';

// '' como centinela: nunca coincide con un elemento, así ningún enlace queda activo en el tope (como el original)
const ids = ['', ...nav.map((n) => n.id)];

export function TopBar() {
  return (
    <div className="bg-e-ink text-white text-[13px] font-medium py-[9px] px-6 flex justify-between gap-4 flex-wrap">
      <span>Práctica profesional · Agupa SpA · Diseño y Marketing</span>
      <span className="text-e-sub">Técnico en Diseño Digital y Publicitario · 27/07/2026</span>
    </div>
  );
}

export function Header() {
  const { query, setQuery, bag, setBagOpen } = useStore();
  const { active } = useScrollSpy(ids, 160);
  return (
    <header className="sticky top-0 z-40 bg-white/92 backdrop-blur-[12px] border-b border-e-line">
      <div className="max-w-[1360px] mx-auto py-[14px] px-6 flex items-center gap-5 flex-nowrap">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer text-[21px] font-extrabold tracking-[-0.03em] flex-none whitespace-nowrap">daniela<span className="text-acc">.</span>q</button>
        <nav className="flex gap-[22px] flex-auto min-w-0 flex-nowrap overflow-x-auto [scrollbar-width:none] text-sm font-semibold">
          {nav.map((n) => (
            <button key={n.id} type="button" onClick={() => scrollToId(n.id, 70)} className={`cursor-pointer py-1 px-0 whitespace-nowrap flex-none border-b-2 hover:text-[#6b6b6b] ${active === n.id ? 'border-e-ink' : 'border-transparent'}`}>{n.label}</button>
          ))}
        </nav>
        <div className="flex items-center gap-2 bg-e-gray px-3 h-10 min-w-[140px] flex-[0_1_220px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar trabajos…" aria-label="Buscar trabajos" className="border-0 px-0.5 bg-transparent text-sm flex-auto min-w-0 h-full outline-none text-e-ink placeholder:text-e-muted" />
          {query && <button type="button" aria-label="Limpiar búsqueda" onClick={() => setQuery('')} className="cursor-pointer text-[13px] text-e-muted">✕</button>}
        </div>
        <button type="button" onClick={() => setBagOpen(true)} className="flex items-center gap-2 h-10 px-[14px] border border-e-ink bg-white cursor-pointer text-sm font-bold text-e-ink whitespace-nowrap flex-none hover:bg-e-ink hover:text-white">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
          <span>Mi selección</span>
          <span className="min-w-[22px] h-[22px] px-[6px] inline-flex items-center justify-center bg-acc text-e-ink text-xs font-extrabold rounded-[11px]">{bag.length}</span>
        </button>
      </div>
    </header>
  );
}

const foot = 'text-[13px] font-extrabold uppercase tracking-[0.08em] mb-[14px]';

export function Footer() {
  return (
    <footer className="max-w-[1360px] mx-auto pt-[72px] px-6 pb-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
        <div>
          <div className="text-[26px] font-extrabold tracking-[-0.03em] mb-3">Gracias<span className="text-acc">.</span></div>
          <p className="m-0 text-sm leading-[1.6] text-[#4a4a4a] text-pretty">A Agupa SpA por la oportunidad; a mi profesora guía, Desirée Alvarado; a mi tutora de práctica, Rosana; y a mi familia, especialmente a mi madre, Johanna, y a mi pareja, Tomás.</p>
        </div>
        <div>
          <div className={foot}>Presentación</div>
          <div className="flex flex-col gap-2 text-sm items-start">
            {nav.map((n) => <button key={n.id} type="button" onClick={() => scrollToId(n.id, 70)} className="cursor-pointer hover:text-[#6b6b6b]">{n.label}</button>)}
          </div>
        </div>
        <div>
          <div className={foot}>Bibliografía</div>
          <div className="flex flex-col gap-2 text-sm">
            {biblio.map((b) => <a key={b.url} href={b.url} target="_blank" rel="noopener" className="hover:text-[#6b6b6b]">{b.name}</a>)}
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-3 border-t border-e-line mt-12 pt-5 text-[13px] text-[#6b6b6b]">
        <span>Daniela Esperanza Quiñones Olea · Técnico en Diseño Digital y Publicitario</span>
        <span>Santiago, 27/07/2026</span>
      </div>
    </footer>
  );
}
