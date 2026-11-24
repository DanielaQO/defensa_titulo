import { useState } from 'react';
import { projects, planilla } from '../../../data/projects';
import { proceso, responsabilidades } from '../../../data/content';
import { GROUPS } from '../../../data/types';
import { ALL, applyFilter, countBy } from '../../../hooks/useFilter';
import FilterPills from '../../../ui/FilterPills';
import { useTiendaNav, useZoom } from '../nav';

const h2 = 'mt-0 mx-0 text-center text-[clamp(30px,3.4vw,44px)] font-black tracking-[-0.03em]';
const groups: string[] = [ALL, ...GROUPS];

export default function Tareas() {
  const { go } = useTiendaNav();
  const zoom = useZoom();
  const [active, setActive] = useState<string>(ALL);
  const counts = countBy(projects, groups, { groupOf: (p) => p.group });
  const shown = applyFilter(projects, { groupOf: (p) => p.group, active });
  return (
    <div>
      <section className="max-w-[1100px] mx-auto py-16 px-6">
        <h2 className={`${h2} mb-3`}>Cómo se hizo, <span className="text-t-red">paso a paso</span></h2>
        <p className="mt-0 mx-auto mb-9 max-w-[760px] text-center text-base leading-[1.65] text-pretty">Como parte del área de Diseño y Marketing, y bajo la supervisión de la Directora de Diseño, mi principal función consistió en el desarrollo y actualización del catálogo digital de productos de la empresa.</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 mb-12">
          {proceso.map((s, i) => (
            <div key={s.num} className={`bg-white rounded-[22px] p-[22px] flex flex-col gap-2.5 border-2 ${i === 3 ? 'border-t-red' : 'border-white'}`}>
              <div className="w-11 h-11 rounded-[22px] bg-t-red text-t-cream flex items-center justify-center text-[17px] font-black">{s.num}</div>
              <div className="text-xs font-bold text-t-red">{s.when}</div>
              <div className="text-lg font-extrabold leading-[1.25]">{s.title}</div>
              <p className="m-0 text-sm leading-[1.6] text-t-body">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {responsabilidades.map((r) => <span key={r} className="text-[13px] font-bold py-[9px] px-[14px] rounded-full bg-white border-[1.5px] border-t-line">{r}</span>)}
        </div>
      </section>

      <section className="bg-t-red text-t-cream">
        <div className="max-w-[1100px] mx-auto py-14 px-6 flex flex-wrap gap-10 items-center">
          <div className="flex-[1_1_380px]">
            <div className="text-[13px] font-bold mb-2">Descripción técnica</div>
            <h2 className="mt-0 mx-0 mb-[14px] text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em] leading-[1.05]">Catálogo online Carry All</h2>
            <p className="mt-0 mx-0 mb-5 text-base leading-[1.65] text-pretty">Desarrollé layouts para 117 productos. Cada pack se componía generalmente de 9 a 10 imágenes y, cuando correspondía, un banner. Con mi supervisora usamos una planilla de Excel para controlar el estado de cada pack (“En proceso” / “Listo”), registrar correcciones, adjuntar los enlaces de Google Drive y seguir su publicación en Walmart, Falabella, Paris, Mercado Libre, Ripley y la página web oficial.</p>
            <div className="flex gap-7 flex-wrap">
              {[['117', 'productos'], ['9–10', 'imágenes por pack'], ['6', 'canales']].map(([v, l]) => (
                <div key={l}><div className="text-[40px] font-black leading-none">{v}</div><div className="text-[13px] font-semibold">{l}</div></div>
              ))}
            </div>
          </div>
          <button onClick={() => zoom(planilla)} className="flex-[1_1_380px] p-2 border-0 rounded-[22px] bg-t-cream cursor-zoom-in"><img src={planilla} alt="Planilla de seguimiento" className="w-full block rounded-[14px]" /></button>
        </div>
      </section>

      <section id="trabajos" className="max-w-[1280px] mx-auto pt-16 px-6 pb-20">
        <h2 className={`${h2} mb-2`}>Imágenes de los <span className="text-t-red">trabajos realizados</span></h2>
        <p className="mt-0 mx-0 mb-6 text-center text-[15px] text-t-muted">Abre cada trabajo para ver todas sus piezas.</p>
        <FilterPills options={groups.map((g) => ({ id: g, label: `${g} (${counts[g]})` }))} active={active} onPick={setActive}
          className="justify-center mb-8"
          itemClass={(on) => `h-10 px-[18px] rounded-full text-[13px] font-bold border-2 border-t-red ${on ? 'bg-t-red text-t-cream' : 'bg-transparent text-t-red'}`} />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {shown.map((p) => (
            <div key={p.id} className="bg-white rounded-[20px] p-2.5 flex flex-col gap-2.5">
              <button onClick={() => go('trabajo/' + p.id)} className="group p-0 border-0 cursor-pointer aspect-square rounded-[14px] overflow-hidden bg-t-sand block">
                <img src={p.cover} alt={p.title} className={`w-full h-full ${p.fit === 'contain' ? 'object-contain' : 'object-cover'} block transition-transform duration-500 ease-expo group-hover:scale-[1.05]`} />
              </button>
              <div className="py-0 px-1.5 flex justify-between gap-2 items-baseline">
                <div className="text-[15px] font-extrabold leading-[1.25]">{p.title}</div>
                <div className="text-[13px] font-extrabold text-t-red whitespace-nowrap">{p.imgs.length} pzs</div>
              </div>
              <div className="py-0 px-1.5 text-xs text-t-muted">{p.brand} · {p.cat}</div>
              <button onClick={() => go('trabajo/' + p.id)} className="h-10 rounded-[10px] border-0 bg-t-red text-t-cream text-[13px] font-bold cursor-pointer hover:bg-t-red-dark">Ver pack</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
