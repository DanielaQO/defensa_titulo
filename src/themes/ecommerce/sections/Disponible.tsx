import { marketplaces } from '../../../data/content';

export default function Disponible() {
  return (
    <section className="max-w-[1360px] mx-auto py-7 px-6 flex flex-wrap items-center gap-x-9 gap-y-3 border-b border-e-line">
      <span className="text-[13px] font-semibold text-[#6b6b6b]">Piezas publicadas en</span>
      {marketplaces.map((m) => <span key={m} className="text-lg font-extrabold tracking-[-0.02em] text-[#2a2a2a]">{m}</span>)}
    </section>
  );
}
