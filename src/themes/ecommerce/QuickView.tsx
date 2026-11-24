import { projects } from '../../data/projects';
import { useGallery } from '../../hooks/useGallery';
import { useKey } from '../../hooks/useKey';
import Modal from '../../ui/Modal';
import Thumbs from '../../ui/Thumbs';
import { useStore } from './store';

const arrow = 'absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,.12)] cursor-pointer text-lg text-e-ink';

export default function QuickView({ id, onClose }: { id: string | null; onClose: () => void }) {
  const { bag, toggleBag } = useStore();
  const p = projects.find((x) => x.id === id);
  const g = useGallery(p?.imgs.length ?? 1);
  useKey({ ArrowLeft: g.prev, ArrowRight: g.next }, !!p);
  if (!p) return null;
  const inBag = bag.includes(p.id);
  return (
    <Modal open onClose={onClose} closeOnBackdrop className="z-[80] bg-e-ink/50 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-[1180px] max-h-[calc(100vh-40px)] overflow-auto flex flex-wrap">
        <div className="flex-[1.3_1_420px] min-w-0 flex flex-col gap-[10px] p-5 bg-e-gray">
          <div className="relative aspect-square bg-white flex items-center justify-center overflow-hidden">
            <img src={p.imgs[g.i] ?? p.imgs[0]} alt={p.title} className="max-w-full max-h-full object-contain block" />
            <button type="button" aria-label="Anterior" onClick={g.prev} className={`${arrow} left-[10px]`}>←</button>
            <button type="button" aria-label="Siguiente" onClick={g.next} className={`${arrow} right-[10px]`}>→</button>
            <span className="absolute bottom-[10px] right-[10px] text-xs font-bold bg-e-ink text-white py-[5px] px-[9px]">{g.i + 1} / {p.imgs.length}</span>
          </div>
          <Thumbs srcs={p.imgs} active={g.i} onPick={g.set} className="pb-1" itemClass={(on) => `w-16 h-16 bg-white border-2 ${on ? 'border-e-ink' : 'border-transparent'}`} />
        </div>
        <div className="flex-[1_1_340px] min-w-0 py-8 px-7 flex flex-col gap-[18px]">
          <div className="flex justify-between gap-3 items-center">
            <span className="text-[13px] text-[#6b6b6b]">Trabajos / {p.group}</span>
            <button type="button" aria-label="Cerrar" onClick={onClose} className="w-9 h-9 rounded-full bg-e-gray cursor-pointer text-[15px]">✕</button>
          </div>
          <div>
            <div className="text-sm text-[#6b6b6b] mb-1">{p.brand}</div>
            <h3 className="m-0 text-[clamp(28px,3vw,40px)] font-extrabold tracking-[-0.035em] leading-[1.05]">{p.title}</h3>
          </div>
          <div className="text-xl font-bold">{p.imgs.length} piezas</div>
          <p className="m-0 text-base leading-[1.6] text-[#3a3a3a] text-pretty">{p.desc}</p>
          <div className="border-t border-[#e2e2df]">
            {p.specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-[11px] border-b border-[#e2e2df] text-sm">
                <span className="text-[#6b6b6b]">{k}</span><span className="font-semibold text-right">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-[10px] mt-auto flex-wrap">
            <button type="button" onClick={() => toggleBag(p.id)} className={`flex-[1_1_200px] h-[52px] cursor-pointer text-[15px] font-bold flex items-center justify-between px-5 ${inBag ? 'bg-acc text-e-ink' : 'bg-e-ink text-white'}`}>
              {inBag ? 'En tu selección' : 'Agregar a mi selección'} <span>{inBag ? '✓' : '♡'}</span>
            </button>
          </div>
          <div className="text-[13px] text-[#6b6b6b]">Usa ← → para navegar · Esc para cerrar</div>
        </div>
      </div>
    </Modal>
  );
}
