import { projects } from '../../../data/projects';
import { GROUPS } from '../../../data/types';
import { scrollToId } from '../../../lib/scroll';
import { useStore } from '../store';

const imgs = ['assets/p23_1.jpg', 'assets/p31_3.jpg', 'assets/p34_2.jpg'];

export default function Categorias() {
  const { setFilter, setQuery } = useStore();
  const go = (g: string) => { setFilter(g); setQuery(''); scrollToId('trabajos', 70); };
  return (
    <section className="max-w-[1360px] mx-auto pt-0 px-6 pb-[72px]">
      <div className="flex justify-between items-baseline gap-4 mb-5 flex-wrap">
        <h2 className="m-0 text-[28px] font-extrabold tracking-[-0.03em]">Comprar por categoría</h2>
        <span className="text-sm text-[#6b6b6b]">Tres líneas de trabajo</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {GROUPS.map((g, i) => {
          const ps = projects.filter((p) => p.group === g);
          return (
            <button key={g} type="button" onClick={() => go(g)} className="group relative p-0 cursor-pointer bg-e-gray aspect-[4/5] overflow-hidden text-left text-e-ink">
              <img src={imgs[i]} alt={g} className="absolute inset-0 w-full h-full object-cover block transition-transform duration-[700ms] ease-expo group-hover:scale-[1.05]" />
              <div className="absolute left-4 right-4 bottom-4 bg-white py-[14px] px-4 flex justify-between items-center gap-3">
                <div>
                  <div className="text-[17px] font-extrabold">{g}</div>
                  <div className="text-[13px] text-[#6b6b6b]">{ps.length} proyectos · {ps.reduce((a, p) => a + p.imgs.length, 0)} piezas</div>
                </div>
                <span className="text-lg">→</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
