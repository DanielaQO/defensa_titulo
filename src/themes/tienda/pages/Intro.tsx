import { brands, intro } from '../../../data/content';

export default function Intro() {
  return (
    <div className="max-w-[1100px] mx-auto py-[72px] px-6">
      <p className="mt-0 mx-auto mb-10 max-w-[900px] text-center text-[clamp(22px,2.6vw,32px)] leading-[1.35] font-bold tracking-[-0.015em] text-pretty">{intro.lead.replace(/Agupa SpA\.$/, '')}<span className="text-t-red">Agupa SpA</span>.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 text-[17px] leading-[1.65] mb-14">
        {intro.parrafos.map((p) => <p key={p} className="m-0 text-pretty">{p}</p>)}
      </div>
      <h2 className="mt-0 mx-0 mb-5 text-center text-[30px] font-black tracking-[-0.03em]">Marcas con las que <span className="text-t-red">trabajé</span></h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {brands.map((b) => (
          <div key={b.name} className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-t-red">
            <img src={b.img} alt={b.name} className="absolute inset-0 w-full h-full object-cover block" />
            <div className="absolute inset-x-0 bottom-0 pt-[60px] px-[18px] pb-[18px] bg-gradient-to-t from-[rgba(110,8,6,.92)] to-[rgba(110,8,6,0)] text-t-cream">
              <div className="text-2xl font-black">{b.name}</div>
              <div className="text-[13px] font-semibold">{b.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
