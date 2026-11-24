import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../../../data/projects';
import { useGallery, wrap } from '../../../hooks/useGallery';
import { useKey } from '../../../hooks/useKey';
import Thumbs from '../../../ui/Thumbs';
import { useTiendaNav } from '../nav';

const arrow = 'absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl border-0 bg-t-red text-t-cream text-[20px] font-extrabold cursor-pointer';

export default function Trabajo() {
  const { id } = useParams();
  const { go } = useTiendaNav();
  const ci = projects.findIndex((p) => p.id === id);
  const p = projects[ci];
  const g = useGallery(p?.imgs.length ?? 1);
  useKey({ ArrowLeft: g.prev, ArrowRight: g.next }, !!p);
  if (!p) return <Navigate to="/tienda/tareas" replace />;
  const goRel = (d: number) => go('trabajo/' + projects[wrap(ci + d, projects.length)].id);
  return (
    <div className="max-w-[1280px] mx-auto pt-7 px-6 pb-20">
      <div className="flex gap-2 text-[13px] font-semibold mb-5 flex-wrap">
        <Link to="/tienda/tareas" className="text-t-red">Tareas ejecutadas</Link><span>/</span><span>{p.group}</span><span>/</span><span className="font-extrabold">{p.title}</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex-[1.4_1_480px] min-w-0 flex flex-col gap-3">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white flex items-center justify-center">
            <img src={p.imgs[g.i] ?? p.imgs[0]} alt={p.title} className="max-w-full max-h-full object-contain block" />
            <button type="button" aria-label="Anterior" onClick={g.prev} className={`${arrow} left-3.5`}>‹</button>
            <button type="button" aria-label="Siguiente" onClick={g.next} className={`${arrow} right-3.5`}>›</button>
            <span className="absolute bottom-3.5 right-3.5 text-xs font-extrabold py-1.5 px-2.5 rounded-full bg-t-ink text-t-cream">{g.i + 1} / {p.imgs.length}</span>
          </div>
          <Thumbs srcs={p.imgs} active={g.i} onPick={g.set} className="pb-1" itemClass={(on) => `w-[72px] h-[72px] rounded-full bg-white border-[3px] ${on ? 'border-t-red' : 'border-transparent'}`} />
        </div>
        <div className="flex-[1_1_340px] min-w-0 flex flex-col gap-[18px]">
          <div>
            <div className="text-sm font-bold text-t-red mb-1.5">{p.brand}</div>
            <h1 className="m-0 text-[clamp(32px,3.6vw,48px)] font-black tracking-[-0.035em] leading-[1.05]">{p.title}</h1>
          </div>
          <div className="text-[22px] font-black text-t-red">{p.imgs.length} piezas</div>
          <p className="m-0 text-base leading-[1.65] text-pretty">{p.desc}</p>
          <div className="border-t border-t-line">
            {p.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3 px-0 border-b border-t-line text-sm"><span className="text-t-muted">{k}</span><span className="font-bold text-right">{v}</span></div>
            ))}
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <button onClick={() => goRel(-1)} className="flex-[1_1_140px] h-[50px] rounded-full border-2 border-t-red bg-transparent text-t-red text-sm font-extrabold cursor-pointer">← Anterior</button>
            <button onClick={() => goRel(1)} className="flex-[1_1_140px] h-[50px] rounded-full border-0 bg-t-red text-t-cream text-sm font-extrabold cursor-pointer hover:bg-t-red-dark">Siguiente trabajo →</button>
          </div>
          <div className="text-[13px] text-t-muted">← → para cambiar de imagen</div>
        </div>
      </div>
    </div>
  );
}
