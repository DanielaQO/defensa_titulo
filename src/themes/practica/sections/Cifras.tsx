import { useContext } from 'react';
import { LbCtx } from '../lb';
import { planilla } from '../../../data/projects';
import { stats } from '../../../data/content';

export default function Cifras() {
  const open = useContext(LbCtx);
  return (
    <section className="py-[14vh] px-7">
      <div className="flex flex-wrap gap-12 mb-12">
        <div className="flex-[1_1_360px]">
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc mb-4">Catálogo online Carry All</div>
          <p className="m-0 text-[clamp(22px,2.4vw,34px)] leading-[1.25] font-bold tracking-[-0.01em] text-pretty">Para los layouts de 117 productos usamos una planilla de Excel que registraba el estado de cada pack, las correcciones, los enlaces de Google Drive y su publicación en cada marketplace.</p>
        </div>
        <button type="button" onClick={() => open('planilla')} className="flex-[1_1_360px] p-0 border-0 bg-p-panel cursor-zoom-in block">
          <img src={planilla} alt="Planilla de seguimiento" className="w-full block opacity-90" />
        </button>
      </div>
      <div className="border-t border-p-line">
        {stats.map((s, i) => (
          <div key={s.v} className="flex flex-wrap items-baseline gap-x-8 gap-y-2 py-4 border-b border-p-line">
            <span className="text-[13px] font-semibold w-8 text-p-muted">{String(i + 1).padStart(2, '0')}</span>
            <span className="flex-none min-w-[200px] text-[clamp(56px,8vw,128px)] font-black [font-stretch:62%] leading-[0.9] text-acc">{s.v}</span>
            <span className="flex-[1_1_260px] text-xl font-bold">{i === 2 ? 'Canales de publicación' : s.label}</span>
            <span className="flex-[1_1_260px] text-[15px] text-p-dim">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
