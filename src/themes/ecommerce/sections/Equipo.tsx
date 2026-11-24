import { people } from '../../../data/people';

export default function Equipo() {
  return (
    <section id="equipo" className="max-w-[1360px] mx-auto pt-0 px-6 pb-24">
      <div className="flex justify-between items-baseline gap-4 mb-5 flex-wrap border-t border-e-line pt-14">
        <h2 className="m-0 text-[28px] font-extrabold tracking-[-0.03em]">El equipo</h2>
        <span className="text-sm text-[#6b6b6b] max-w-[520px]">Recursos humanos: una sola profesional, responsable de la gestión del personal y del apoyo transversal a todas las áreas.</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
        {people.map((p) => (
          <div key={p.id} className="flex flex-col gap-[10px]">
            <div className="aspect-[3/4] bg-e-gray overflow-hidden relative">
              <img src={p.photo} alt={p.name} className="w-full h-full object-cover object-[center_25%] block grayscale" />
              {p.tag && <span className="absolute top-[10px] left-[10px] text-[11px] font-extrabold uppercase tracking-[0.06em] py-[5px] px-2 bg-acc">{p.tag}</span>}
            </div>
            <div>
              <div className="text-base font-bold">{p.name}</div>
              <div className="text-[13px] text-[#6b6b6b]">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
