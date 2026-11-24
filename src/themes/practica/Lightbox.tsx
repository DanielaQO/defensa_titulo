import { planilla, projects } from '../../data/projects';
import { useGallery } from '../../hooks/useGallery';
import { useKey } from '../../hooks/useKey';
import Modal from '../../ui/Modal';
import Thumbs from '../../ui/Thumbs';

const pad = (n: number) => String(n).padStart(2, '0');
const nav = 'bg-transparent border border-p-line text-p-ink cursor-pointer w-14 h-14 text-[22px] flex-none hover:bg-acc hover:border-acc';

export default function PracticaLightbox({ id, onClose }: { id: string | null; onClose: () => void }) {
  const p = id === 'planilla'
    ? { id: 'planilla', title: 'Planilla de seguimiento', brand: 'Carry All', cat: 'Catálogo online', imgs: [planilla] }
    : projects.find((x) => x.id === id);
  const g = useGallery(p?.imgs.length ?? 1);
  useKey({ ArrowLeft: g.prev, ArrowRight: g.next }, !!p);
  if (!p) return null;
  return (
    <Modal open onClose={onClose} className="z-[90] bg-p-bg flex flex-col">
      <div className="flex items-center gap-5 py-[18px] px-7 border-b border-p-line">
        <div className="flex-auto min-w-0">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-p-muted">{p.brand} · {p.cat}</div>
          <div className="text-[clamp(24px,3vw,40px)] font-black [font-stretch:62%] uppercase leading-none">{p.title}</div>
        </div>
        <div className="text-[15px] font-bold">{pad(g.i + 1)} / {pad(p.imgs.length)}</div>
        <button type="button" onClick={onClose} className="bg-p-ink text-p-bg border-0 cursor-pointer text-[13px] font-bold uppercase tracking-[0.08em] px-4 py-3">Cerrar ✕</button>
      </div>
      <div className="flex-auto min-h-0 flex items-center gap-3 py-5 px-7">
        <button type="button" aria-label="Anterior" onClick={g.prev} className={nav}>←</button>
        <div className="flex-auto h-full min-w-0 flex items-center justify-center">
          <img src={p.imgs[g.i] ?? p.imgs[0]} alt={p.title} className="max-w-full max-h-full object-contain block" />
        </div>
        <button type="button" aria-label="Siguiente" onClick={g.next} className={nav}>→</button>
      </div>
      <Thumbs srcs={p.imgs} active={g.i} onPick={g.set} className="pt-3 px-7 pb-5 border-t border-p-line"
        itemClass={(on) => `w-[72px] h-[72px] bg-p-ink border-2 ${on ? 'border-acc opacity-100' : 'border-transparent opacity-55'}`} />
    </Modal>
  );
}
