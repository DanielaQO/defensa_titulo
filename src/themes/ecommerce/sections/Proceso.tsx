import { proceso, responsabilidades } from '../../../data/content';

export default function Proceso() {
  return (
    <section id="proceso" className="bg-e-gray">
      <div className="max-w-[1360px] mx-auto py-24 px-6">
        <div className="flex flex-wrap justify-between gap-6 mb-12 items-end">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#6b6b6b] mb-2">03 · Proceso de trabajo</div>
            <h2 className="m-0 text-[clamp(36px,4.4vw,56px)] font-extrabold tracking-[-0.04em] leading-none">Cómo funcionaba</h2>
          </div>
          <p className="m-0 max-w-[460px] text-base leading-[1.6] text-[#4a4a4a]">El trabajo se desarrolló mediante una planificación diaria en conjunto con mi supervisora.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {proceso.map((s, i) => (
            <div key={s.num} className="bg-white py-7 px-6 flex flex-col gap-3">
              <div className={`w-10 h-10 rounded-[20px] flex items-center justify-center font-extrabold text-[15px] ${i === 3 ? 'bg-acc text-e-ink' : 'bg-e-ink text-white'}`}>{s.num}</div>
              <div className="text-[13px] text-[#6b6b6b] font-semibold">{s.when}</div>
              <div className="text-xl font-extrabold tracking-[-0.02em] leading-[1.2]">{s.title}</div>
              <p className="m-0 text-[15px] leading-[1.55] text-[#4a4a4a]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <div className="text-[15px] font-extrabold mb-[14px]">Mis responsabilidades</div>
          <div className="flex flex-wrap gap-2">
            {responsabilidades.map((r) => <span key={r} className="text-sm font-semibold py-[9px] px-[14px] rounded-[18px] bg-white border border-[#e2e2df]">{r}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
