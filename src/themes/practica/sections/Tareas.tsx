import { proceso, responsabilidades } from '../../../data/content';

export default function Tareas() {
  return (
    <section id="tareas" className="py-[14vh] px-7 bg-p-ink text-p-bg">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <h2 className="m-0 font-black [font-stretch:62%] uppercase text-[clamp(40px,10vw,168px)] leading-[0.85]">Cómo<br />trabajé</h2>
        <div className="max-w-[460px] text-base leading-[1.6]">
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-p-red-dark mb-3">05 — Proceso de trabajo</div>
          Planificación diaria en conjunto con mi supervisora, con revisión de avances antes del cierre de cada jornada.
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t-2 border-p-bg mb-24">
        {proceso.map((s, i) => (
          <div key={s.num} className="pt-5 pr-6 pb-6 pl-0 border-r border-p-soft flex flex-col gap-3">
            <div className={`text-[72px] font-black [font-stretch:62%] leading-[0.9] ${i === 3 ? 'text-p-red-dark' : 'text-p-bg'}`}>{'0' + s.num}</div>
            <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#5a5756]">{s.when}</div>
            <div className="text-[22px] font-extrabold leading-[1.15]">{i === 3 ? 'Asana → reuniones diarias' : s.title}</div>
            <p className="m-0 text-[15px] leading-[1.55] text-p-line">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-p-red-dark mb-5">Mis responsabilidades</div>
      <div className="flex flex-wrap gap-[10px]">
        {responsabilidades.map((r) => <span key={r} className="text-[clamp(17px,1.7vw,24px)] font-semibold px-5 py-3 border-2 border-p-bg leading-[1.2] transition-colors duration-200 hover:bg-p-bg hover:text-p-ink">{r}</span>)}
      </div>
    </section>
  );
}
