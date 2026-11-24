import { useState } from 'react';
import { projects } from '../../../data/projects';
import { GROUPS, type Project } from '../../../data/types';
import { ALL, applyFilter, countBy } from '../../../hooks/useFilter';
import { searchText, sorters, useStore } from '../store';

const groups = [ALL, ...GROUPS];

export default function Catalogo() {
  const { query, setQuery, filter, setFilter, bag, toggleBag, openPd } = useStore();
  const [sort, setSort] = useState<'dest' | 'az' | 'piezas'>('dest');
  const [hov, setHov] = useState<string | null>(null);
  const base = { groupOf: (p: Project) => p.group, query, text: searchText };
  const counts = countBy(projects, groups, base);
  const list = applyFilter(projects, { ...base, active: filter, sort: sorters.find((s) => s.id === sort)!.fn });
  return (
    <section id="trabajos" className="max-w-[1360px] mx-auto pt-[72px] px-6 pb-24 border-t border-e-line">
      <div className="flex flex-wrap justify-between items-end gap-5 mb-7">
        <div>
          <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#6b6b6b] mb-2">02 · Tareas ejecutadas</div>
          <h2 className="m-0 text-[clamp(36px,4.4vw,56px)] font-extrabold tracking-[-0.04em] leading-none">Mis trabajos</h2>
        </div>
        <div className="flex items-center gap-[10px] text-sm">
          <span className="text-[#6b6b6b]">Ordenar</span>
          {sorters.map((o) => (
            <button key={o.id} type="button" onClick={() => setSort(o.id)} className={`py-1 px-0 cursor-pointer text-sm font-bold border-b-2 ${sort === o.id ? 'text-e-ink border-e-ink' : 'text-e-muted border-transparent'}`}>{o.label}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mb-7 items-center">
        {groups.map((g) => (
          <button key={g} type="button" onClick={() => setFilter(g)} className={`h-[38px] px-4 rounded-[19px] cursor-pointer text-sm font-semibold border ${filter === g ? 'bg-e-ink text-white border-e-ink' : 'bg-white text-e-ink border-e-border'}`}>{g} <span className="opacity-60 ml-1">{counts[g]}</span></button>
        ))}
        {query.trim() && <button type="button" onClick={() => setQuery('')} className="h-[38px] px-[14px] bg-e-gray cursor-pointer text-sm font-semibold text-e-ink">“{query}” ✕</button>}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-5 gap-y-9">
        {list.map((p) => {
          const h = hov === p.id;
          const inBag = bag.includes(p.id);
          const fit = p.fit === 'contain' ? 'object-contain' : 'object-cover';
          return (
            <div key={p.id} onMouseEnter={() => setHov(p.id)} onMouseLeave={() => setHov(null)} className="flex flex-col gap-3">
              <div className="relative aspect-square bg-e-gray overflow-hidden">
                <button type="button" aria-label={p.title} onClick={() => openPd(p.id)} className="absolute inset-0 p-0 cursor-pointer">
                  <img src={p.cover} alt={p.title} className={`absolute inset-0 w-full h-full ${fit} block transition-opacity duration-[400ms]`} />
                  <img src={p.alt} alt="" className={`absolute inset-0 w-full h-full ${fit} block transition-opacity duration-[400ms] ${h ? 'opacity-100' : 'opacity-0'}`} />
                </button>
                <span className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-[0.06em] py-[5px] px-2 bg-white pointer-events-none">{p.cat}</span>
                <button type="button" title="Agregar a mi selección" aria-label="Agregar a mi selección" onClick={() => toggleBag(p.id)} className={`absolute top-[10px] right-[10px] w-9 h-9 rounded-full cursor-pointer flex items-center justify-center text-e-ink ${inBag ? 'bg-acc' : 'bg-white'}`}>
                  <svg width="17" height="17" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={inBag ? 'fill-e-ink' : 'fill-none'}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                </button>
                <button type="button" onClick={() => openPd(p.id)} className={`absolute left-3 right-3 bottom-3 h-11 cursor-pointer bg-e-ink text-white text-sm font-bold transition-[transform,opacity] duration-[350ms] ease-expo ${h ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>Vista rápida</button>
              </div>
              <div className="flex justify-between gap-3 items-start">
                <div className="min-w-0">
                  <div className="text-[13px] text-[#6b6b6b] mb-[2px]">{p.brand}</div>
                  <button type="button" onClick={() => openPd(p.id)} className="p-0 cursor-pointer text-[17px] font-bold text-left text-e-ink tracking-[-0.01em]">{p.title}</button>
                </div>
                <div className="text-[15px] font-bold whitespace-nowrap">{p.imgs.length} piezas</div>
              </div>
              <div className="flex gap-[6px]">
                {p.imgs.slice(0, 4).map((d, i) => <span key={d + i} className="w-[22px] h-[22px] border border-e-border overflow-hidden block"><img src={d} alt="" className="w-full h-full object-cover block" /></span>)}
              </div>
            </div>
          );
        })}
      </div>
      {list.length === 0 && <div className="py-16 text-lg text-[#6b6b6b]">No hay trabajos que coincidan con “{query}”.</div>}
    </section>
  );
}
