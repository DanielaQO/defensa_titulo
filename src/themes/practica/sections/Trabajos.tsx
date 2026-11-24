import { useContext, useState } from 'react';
import { LbCtx } from '../lb';
import { projects } from '../../../data/projects';
import { GROUPS } from '../../../data/types';
import { ALL, applyFilter } from '../../../hooks/useFilter';
import FilterPills from '../../../ui/FilterPills';

const options = [ALL, ...GROUPS].map((g) => ({ id: g as string, label: g === 'Layouts e-commerce' ? 'Layouts' : g }));
const canHover = () => window.matchMedia?.('(hover: hover)').matches;

export default function Trabajos() {
  const [active, setActive] = useState<string>(ALL);
  const [hov, setHov] = useState<string | null>(null);
  const [m, setM] = useState({ x: 0, y: 0 });
  const open = useContext(LbCtx);
  const list = applyFilter(projects, { groupOf: (p) => p.group, active });
  const cover = hov && canHover() ? projects.find((p) => p.id === hov)?.cover : undefined;
  return (
    <section id="trabajos" className="py-[14vh] px-7 border-t border-p-line">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
        <h2 className="m-0 font-black [font-stretch:62%] uppercase text-[clamp(40px,10vw,168px)] leading-[0.85]">Trabajos<br />realizados <sup className="text-[0.28em] align-top text-acc">{String(list.length).padStart(2, '0')}</sup></h2>
        <div className="flex flex-col gap-[14px] max-w-[520px]">
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc">06 — Portafolio de práctica</div>
          <FilterPills options={options} active={active} onPick={setActive}
            itemClass={(on) => `text-[13px] font-bold uppercase tracking-[0.06em] px-[14px] py-[9px] border border-p-ink ${on ? 'bg-p-ink text-p-bg' : 'bg-transparent text-p-ink'}`} />
        </div>
      </div>
      <div className="border-t border-p-line" onMouseMove={(e) => setM({ x: e.clientX, y: e.clientY })}>
        {list.map((p, i) => (
          <button key={p.id} type="button" onMouseEnter={() => setHov(p.id)} onMouseLeave={() => setHov(null)} onClick={() => { setHov(null); open(p.id); }}
            className={`w-full bg-transparent border-0 border-b border-p-line cursor-pointer flex flex-wrap items-center gap-x-7 gap-y-2 py-[18px] text-left transition-colors duration-200 ${hov === p.id ? 'text-acc' : 'text-p-ink'}`}>
            <span className="text-[13px] font-semibold w-8">{String(i + 1).padStart(2, '0')}</span>
            <span className={`flex-[1_1_360px] text-[clamp(34px,6vw,96px)] font-black [font-stretch:62%] uppercase leading-[0.95] transition-transform duration-[400ms] ease-expo ${hov === p.id ? 'translate-x-4' : ''}`}>{p.title}</span>
            <span className="flex flex-wrap gap-x-[18px] gap-y-[6px] text-[13px] font-semibold uppercase tracking-[0.06em] text-p-dim">
              <span>● {p.brand}</span><span>△ {p.cat}</span><span>⁂ {p.imgs.length} piezas</span>
            </span>
          </button>
        ))}
      </div>
      {cover && (
        <div className="fixed z-30 pointer-events-none w-[300px] -translate-x-1/2 -translate-y-1/2 -rotate-3 shadow-[0_20px_60px_rgba(0,0,0,.5)]" style={{ left: m.x, top: m.y }}>
          <img src={cover} alt="" className="w-full block bg-p-ink" />
        </div>
      )}
    </section>
  );
}
