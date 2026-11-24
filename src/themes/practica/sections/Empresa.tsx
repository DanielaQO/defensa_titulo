import { empresa, numbered } from '../../../data/empresa';
import { useAccordion } from '../../../hooks/useAccordion';

const rows = [
  { id: 'desc', title: 'Descripción', hint: 'Retail digital', paras: empresa.descripcion },
  { id: 'mision', title: 'Misión', hint: 'Propósito', paras: [empresa.mision] },
  { id: 'vision', title: 'Visión', hint: 'Hacia dónde va', paras: [empresa.vision] },
  { id: 'obj', title: 'Objetivos', hint: '5 objetivos', items: numbered(empresa.objetivos) },
  { id: 'func', title: 'Funciones', hint: '6 funciones', items: numbered(empresa.funciones) },
  { id: 'serv', title: 'Servicios', hint: '5 servicios', items: numbered(empresa.servicios) },
  { id: 'hist', title: 'Reseña histórica', hint: 'Desde 2020', paras: empresa.historia },
  { id: 'pub', title: 'Público objetivo', hint: '25 a 60 años', paras: empresa.publico },
];

export default function Empresa() {
  const a = useAccordion('desc');
  return (
    <section id="empresa" className="py-[14vh] px-7">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
        <h2 className="m-0 font-black [font-stretch:62%] uppercase text-[clamp(56px,10vw,168px)] leading-[0.85] tracking-[-0.01em]">Centro de<br />práctica</h2>
        <div className="max-w-[420px] text-base leading-[1.6] text-p-soft">
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc mb-3">02 — Agupa SpA</div>
          Empresa chilena de retail digital y e-commerce. Toca cada fila para desplegar su contenido.
        </div>
      </div>
      <div className="border-t border-p-line">
        {rows.map((r, i) => {
          const open = a.isOpen(r.id);
          return (
            <div key={r.id} className="border-b border-p-line">
              <button type="button" aria-expanded={open} onClick={() => a.toggle(r.id)} className={`w-full bg-transparent border-0 cursor-pointer flex items-center gap-6 py-5 text-left hover:text-acc ${open ? 'text-acc' : 'text-p-ink'}`}>
                <span className="text-[13px] font-semibold w-8 flex-none">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-auto text-[clamp(30px,4.6vw,64px)] font-black [font-stretch:62%] uppercase leading-none">{r.title}</span>
                <span className="text-[13px] text-p-muted uppercase tracking-[0.08em]">{r.hint}</span>
                <span className={`text-[34px] font-light leading-none transition-transform duration-[400ms] ${open ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open && (
                <div className="pt-0 pr-0 pb-9 pl-14 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-12 gap-y-4 max-w-[1240px]">
                  {r.paras?.map((p) => <p key={p} className="m-0 text-xl leading-[1.5] text-p-bright text-pretty">{p}</p>)}
                  {r.items?.map((it) => (
                    <div key={it.n} className="flex gap-4 py-3 border-t border-p-line text-[17px] leading-[1.45] text-p-bright">
                      <span className="text-acc font-bold">{it.n}</span><span>{it.t}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
