import { useState } from 'react';
import { deptsAll, people } from '../../../data/people';

export default function Equipo() {
  const [hov, setHov] = useState<string | null>(null);
  return (
    <section id="equipo" className="py-[14vh] px-7 border-t border-p-line">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <h2 className="m-0 font-black [font-stretch:62%] uppercase text-[clamp(56px,10vw,168px)] leading-[0.85]">El equipo</h2>
        <div className="max-w-[460px] text-base leading-[1.6] text-p-soft">
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc mb-3">03 — Recursos humanos y organigrama</div>
          El área de recursos humanos está conformada por una sola profesional, responsable de la gestión del personal y del apoyo transversal a todas las áreas de la empresa.
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6 mb-14">
        {deptsAll.map((d) => (
          <div key={d.name} className="border-t-2 border-p-ink pt-[14px]">
            <div className="text-lg font-extrabold mb-2">{d.name}</div>
            <div className="text-[15px] leading-[1.5] text-p-dim">{d.desc}</div>
          </div>
        ))}
      </div>
      <div className="border-t border-p-line">
        {people.map((p) => {
          const h = hov === p.id;
          return (
            <div key={p.id} onMouseEnter={() => setHov(p.id)} onMouseLeave={() => setHov(null)} className={`flex flex-wrap items-center gap-x-6 gap-y-3 py-4 border-b border-p-line cursor-default transition-[color,padding] duration-300 ${h ? 'text-acc pl-4' : 'text-p-ink pl-0'}`}>
              <div className="w-14 h-14 overflow-hidden flex-none bg-p-ink"><img src={p.photo} alt={p.name} className="w-full h-full object-cover object-[center_25%] block grayscale" /></div>
              <div className="flex-[1_1_300px] text-[clamp(28px,4.2vw,58px)] font-black [font-stretch:62%] uppercase leading-none">{p.name}</div>
              {p.tag && <span className="text-xs font-bold uppercase tracking-[0.08em] px-[10px] py-[5px] bg-acc text-p-bg">{p.tag === 'Tutora' ? 'Tutora de práctica' : p.tag}</span>}
              <div className="flex-[0_1_260px] text-sm text-p-dim uppercase tracking-[0.06em]">{p.role}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
