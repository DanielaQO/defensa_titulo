import { projects } from '../../data/projects';
import { scrollToId } from '../../lib/scroll';
import { useStore } from './store';

export default function Bag() {
  const { bag, bagOpen, setBagOpen, toggleBag, openPd } = useStore();
  const items = bag.map((id) => projects.find((p) => p.id === id)!);
  const close = () => setBagOpen(false);
  const go = (id: string) => { close(); scrollToId(id, 70); };
  return (
    <>
      <div onClick={close} className={`fixed inset-0 z-80 bg-e-ink/40 transition-opacity duration-300 ${bagOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />
      <aside aria-hidden={!bagOpen} inert={!bagOpen} className={`fixed top-0 right-0 bottom-0 z-[81] w-[min(420px,100vw)] bg-white flex flex-col transition-transform duration-[450ms] ease-expo ${bagOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center py-5 px-6 border-b border-e-line">
          <div className="text-lg font-extrabold">Mi selección ({bag.length})</div>
          <button type="button" aria-label="Cerrar" onClick={close} className="w-9 h-9 rounded-full bg-e-gray cursor-pointer text-[15px]">✕</button>
        </div>
        <div className="flex-auto overflow-auto py-2 px-6">
          {items.length === 0 && (
            <div className="py-12 flex flex-col gap-[14px]">
              <div className="text-[17px] font-bold">Tu selección está vacía</div>
              <p className="m-0 text-[15px] leading-[1.55] text-[#6b6b6b]">Marca con ♡ los trabajos que quieras revisar durante la presentación.</p>
              <button type="button" onClick={() => go('trabajos')} className="self-start h-[46px] px-5 bg-e-ink text-white font-bold text-sm cursor-pointer">Ver trabajos →</button>
            </div>
          )}
          {items.map((p) => (
            <div key={p.id} className="flex gap-[14px] py-4 border-b border-e-line">
              <button type="button" aria-label={p.title} onClick={() => { openPd(p.id); close(); }} className="w-20 h-20 bg-e-gray cursor-pointer flex-none"><img src={p.cover} alt="" className="w-full h-full object-cover block" /></button>
              <div className="flex-auto min-w-0 flex flex-col gap-[3px]">
                <div className="text-xs text-[#6b6b6b]">{p.brand}</div>
                <div className="text-[15px] font-bold">{p.title}</div>
                <div className="text-[13px] text-[#6b6b6b]">{p.imgs.length} piezas · {p.cat}</div>
              </div>
              <button type="button" onClick={() => toggleBag(p.id)} className="self-start cursor-pointer text-[13px] underline text-[#6b6b6b]">Quitar</button>
            </div>
          ))}
        </div>
        <div className="py-5 px-6 border-t border-e-line flex flex-col gap-3">
          <div className="flex justify-between text-[15px]"><span className="text-[#6b6b6b]">Total de piezas</span><span className="font-extrabold">{items.reduce((a, p) => a + p.imgs.length, 0)}</span></div>
          <button type="button" onClick={() => go('conclusiones')} className="h-[54px] bg-e-ink text-white text-[15px] font-bold cursor-pointer flex justify-between items-center px-5 hover:bg-[#333]">Finalizar recorrido · Conclusiones <span>→</span></button>
        </div>
      </aside>
    </>
  );
}
