import { intro, stats } from '../../../data/content';

export default function Practica() {
  return (
    <section id="practica" className="max-w-[1360px] mx-auto pt-24 px-6 pb-[72px]">
      <div className="flex flex-wrap gap-12 items-start">
        <div className="flex-[1_1_260px] text-[13px] font-bold uppercase tracking-[0.08em] text-[#6b6b6b]">01 · Introducción</div>
        <div className="flex-[3_1_560px] min-w-0">
          <p className="m-0 mb-6 text-[clamp(26px,3vw,40px)] leading-[1.2] font-bold tracking-[-0.025em] text-pretty">{intro.parrafos[0]}</p>
          <p className="m-0 text-lg leading-[1.6] text-[#4a4a4a] max-w-[720px] text-pretty">{intro.parrafos[1]}</p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px bg-e-line border border-e-line mt-16">
        {stats.map((s, i) => (
          <div key={s.v} className="bg-white py-7 px-6">
            <div className="text-[clamp(40px,4.4vw,60px)] font-extrabold tracking-[-0.04em] leading-none">{s.v}</div>
            <div className="text-[15px] font-bold mt-[10px]">{i === 2 ? 'Canales de venta' : s.label}</div>
            <div className="text-sm text-[#6b6b6b] mt-1 leading-[1.45]">{i === 2 ? 'Marketplaces y página web oficial' : s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
