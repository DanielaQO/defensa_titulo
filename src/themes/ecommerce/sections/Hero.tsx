import { scrollToId } from '../../../lib/scroll';
import { useStore } from '../store';

const lbl = 'text-xs font-bold uppercase tracking-[0.08em] py-[6px] px-[10px]';
const info: [string, string][] = [['Estudiante', 'Daniela Quiñones Olea'], ['Profesora guía', 'Desirée Alvarado Díaz'], ['Tutora', 'Rosana Guzmán']];

export default function Hero() {
  const { openPd } = useStore();
  return (
    <section id="inicio" className="max-w-[1360px] mx-auto pt-6 px-6 pb-0">
      <div className="flex flex-wrap gap-6 items-stretch">
        <div className="flex-[1_1_420px] bg-e-gray p-[clamp(28px,5vw,64px)] flex flex-col justify-between gap-10 min-h-[520px]">
          <div className="flex gap-2 flex-wrap">
            <span className={`${lbl} bg-acc`}>Nueva colección</span>
            <span className={`${lbl} border border-e-ink`}>E-commerce</span>
          </div>
          <div>
            <h1 className="m-0 mb-5 text-[clamp(44px,6.4vw,92px)] leading-[0.96] font-extrabold tracking-[-0.045em] text-balance">Informe de práctica laboral</h1>
            <p className="m-0 mb-7 text-lg leading-[1.55] text-[#4a4a4a] max-w-[460px] text-pretty">Diseño de catálogos digitales, packs de imágenes y piezas gráficas para marketplaces. Una práctica en el área de e-commerce de Agupa SpA.</p>
            <div className="flex gap-[10px] flex-wrap">
              <button type="button" onClick={() => scrollToId('trabajos', 70)} className="h-[52px] px-[26px] bg-e-ink text-white cursor-pointer text-[15px] font-bold flex items-center gap-[10px] hover:bg-[#333333]">Ver trabajos <span>→</span></button>
              <button type="button" onClick={() => scrollToId('empresa', 70)} className="h-[52px] px-[26px] bg-transparent text-e-ink border border-e-ink cursor-pointer text-[15px] font-bold hover:bg-white">Conocer la empresa</button>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 border-t border-e-border pt-[18px] text-sm">
            {info.map(([k, v]) => <div key={k}><div className="text-[#6b6b6b] mb-[2px]">{k}</div><div className="font-bold">{v}</div></div>)}
          </div>
        </div>
        <div className="flex-[1_1_420px] relative min-h-[520px] overflow-hidden bg-[#e9e9e6]">
          <img src="assets/p32_1.jpg" alt="Rebranding Carry All" className="absolute inset-0 w-full h-full object-cover block" />
          <button type="button" onClick={() => openPd('rebrand')} className="absolute left-5 bottom-5 bg-white py-[14px] px-4 flex items-center gap-[14px] cursor-pointer text-left text-e-ink hover:bg-acc">
            <div>
              <div className="text-xs text-[#6b6b6b] font-semibold">Destacado · Identidad visual</div>
              <div className="text-base font-extrabold">Rebranding Carry All</div>
            </div>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
