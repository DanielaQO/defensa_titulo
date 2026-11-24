import { conclusiones } from '../../../data/content';

export default function Conclusiones() {
  return (
    <section id="conclusiones" className="bg-e-ink text-white">
      <div className="max-w-[1360px] mx-auto py-28 px-6">
        <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-acc mb-6">05 · Conclusiones y comentarios</div>
        <p className="m-0 mb-12 max-w-[1100px] text-[clamp(28px,3.6vw,52px)] leading-[1.12] font-bold tracking-[-0.03em] text-pretty">{conclusiones.cita}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-[1100px] text-[17px] leading-[1.65] text-[#cfcfcf]">
          <p className="m-0 text-pretty">{conclusiones.tareas}</p>
          <p className="m-0 text-pretty">{conclusiones.vinculacion}</p>
        </div>
      </div>
    </section>
  );
}
