import { biblio, conclusiones } from '../../../data/content';

export default function Cierre() {
  return (
    <>
      <section id="conclusiones" className="py-[14vh] px-7 bg-acc text-p-bg">
        <div className="text-[13px] font-bold uppercase tracking-[0.1em] mb-8">07 — Conclusiones y comentarios</div>
        <p className="m-0 mb-14 max-w-[1280px] text-[clamp(30px,4.6vw,72px)] leading-[1.04] font-extrabold tracking-[-0.025em] text-pretty">{conclusiones.cita}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-[1280px] text-[19px] leading-[1.55] font-medium">
          <p className="m-0 text-pretty">{conclusiones.tareas}</p>
          <p className="m-0 text-pretty">{conclusiones.vinculacion}</p>
        </div>
      </section>
      <section id="gracias" className="pt-[14vh] px-7 pb-7">
        <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc mb-6">08 — Agradecimientos</div>
        <div className="font-black [font-stretch:62%] uppercase text-[clamp(96px,24vw,420px)] leading-[0.8] tracking-[-0.02em] mb-14">Gracias</div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 border-t border-p-line pt-8">
          <p className="m-0 text-[17px] leading-[1.6] text-p-soft text-pretty">{conclusiones.agradecimientos}</p>
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-p-muted mb-3">Bibliografía y linkografía</div>
            <div className="flex flex-col">
              {biblio.map((b) => (
                <a key={b.url} href={b.url} target="_blank" rel="noopener" className="flex justify-between gap-4 py-[9px] border-b border-p-line text-[15px]">
                  <span>{b.name}</span><span className="text-p-muted">{b.host} →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mt-24 text-[13px] text-p-muted uppercase tracking-[0.08em]">
          <span>Daniela Quiñones · Técnico en Diseño Digital y Publicitario</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-transparent border-0 text-p-ink cursor-pointer text-[13px] font-bold uppercase tracking-[0.1em]">Volver arriba ↑</button>
        </div>
      </section>
    </>
  );
}
