import { empresa } from '../../../data/empresa';
import { useAccordion } from '../../../hooks/useAccordion';

const faq: { id: string; q: string; paras?: string[]; items?: string[]; imgs?: string[] }[] = [
  { id: 'que', q: '¿Qué es Agupa SpA?', paras: empresa.descripcion },
  { id: 'mision', q: '¿Cuál es su misión?', paras: [empresa.mision] },
  { id: 'vision', q: '¿Y su visión?', paras: [empresa.vision] },
  { id: 'obj', q: '¿Cuáles son sus objetivos?', items: empresa.objetivos },
  { id: 'func', q: '¿Qué funciones cumple?', items: empresa.funciones },
  { id: 'serv', q: '¿Qué servicios ofrece?', items: empresa.servicios },
  { id: 'hist', q: '¿Desde cuándo existe?', paras: empresa.historia },
  { id: 'pub', q: '¿A quién le vende?', paras: empresa.publico },
  { id: 'donde', q: '¿Dónde está ubicada?', paras: [empresa.ubicacion, 'Incluye baños, una cocina/comedor y un espacio para el lavado de utensilios.'], imgs: ['assets/p18_1.jpg', 'assets/p18_2.jpg', 'assets/p18_3.jpg'] },
];

export default function Empresa() {
  const a = useAccordion('que');
  return (
    <section id="empresa" className="max-w-[1360px] mx-auto py-24 px-6">
      <div className="flex flex-wrap gap-12">
        <div className="flex-[1_1_320px]">
          <div className="sticky top-[100px]">
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#6b6b6b] mb-2">04 · Centro de práctica</div>
            <h2 className="m-0 mb-4 text-[clamp(36px,4.4vw,56px)] font-extrabold tracking-[-0.04em] leading-none">Sobre Agupa SpA</h2>
            <p className="m-0 mb-6 text-base leading-[1.6] text-[#4a4a4a]">Preguntas frecuentes sobre la empresa donde realicé mi práctica.</p>
            <div className="aspect-[4/3] overflow-hidden bg-e-gray">
              <img src="assets/p17_1.jpg" alt="Instalaciones de Agupa SpA" className="w-full h-full object-cover block" />
            </div>
          </div>
        </div>
        <div className="flex-[2_1_520px] min-w-0 border-t border-e-ink">
          {faq.map((f) => {
            const open = a.isOpen(f.id);
            return (
              <div key={f.id} className="border-b border-[#e2e2df]">
                <button type="button" aria-expanded={open} onClick={() => a.toggle(f.id)} className="w-full flex justify-between items-center gap-4 py-[22px] px-0 bg-transparent cursor-pointer text-left text-e-ink">
                  <span className="text-[19px] font-bold tracking-[-0.01em]">{f.q}</span>
                  <span className={`w-8 h-8 rounded-2xl flex-none flex items-center justify-center text-[20px] transition-[transform,background] duration-300 ${open ? 'bg-acc rotate-45' : 'bg-e-gray'}`}>+</span>
                </button>
                {open && (
                  <div className="pt-0 pr-12 pb-[26px] pl-0 flex flex-col gap-3">
                    {f.paras?.map((t) => <p key={t} className="m-0 text-base leading-[1.65] text-[#3a3a3a] text-pretty">{t}</p>)}
                    {f.items?.map((t) => <div key={t} className="flex gap-3 text-base leading-[1.5] text-[#3a3a3a]"><span className="w-[6px] h-[6px] rounded-[3px] bg-e-ink mt-[9px] flex-none" /><span>{t}</span></div>)}
                    {f.imgs && (
                      <div className="grid grid-cols-3 gap-2 mt-[6px]">
                        {f.imgs.map((im) => <img key={im} src={im} alt="" className="w-full aspect-square object-cover block" />)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
