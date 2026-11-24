import { empresa } from '../../../data/empresa';

export default function Infra() {
  return (
    <section id="infraestructura" className="pt-[14vh] border-t border-p-line">
      <div className="px-7 flex flex-wrap justify-between items-end gap-6 mb-10">
        <h2 className="m-0 font-black [font-stretch:62%] uppercase text-[clamp(56px,10vw,168px)] leading-[0.85]">Infraestructura</h2>
        <div className="max-w-[420px]">
          <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc mb-3">04 — Planta física</div>
          <div className="text-[22px] font-bold leading-[1.25]">{empresa.direccion}</div>
        </div>
      </div>
      <div className="h-[72vh] min-h-[360px] overflow-hidden relative">
        <img src="assets/p17_1.jpg" alt="Instalaciones de Agupa SpA" className="absolute left-0 top-0 w-full h-[130%] object-cover block grayscale contrast-[1.08]" />
      </div>
      <div className="pt-12 px-7 pb-[14vh] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
        <div className="flex flex-col gap-4">
          {empresa.plantaFisica.map((t) => <p key={t} className="m-0 text-lg leading-[1.6] text-p-soft text-pretty">{t}</p>)}
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="grid grid-cols-2 gap-2">
            <img src="assets/p18_1.jpg" alt="Bodega" className="w-full aspect-[3/4] object-cover block grayscale" />
            <img src="assets/p18_2.jpg" alt="Bodega" className="w-full aspect-[3/4] object-cover block grayscale" />
          </div>
          <div className="text-2xl font-black [font-stretch:62%] uppercase">Bodega</div>
          <p className="m-0 text-[15px] leading-[1.55] text-p-dim">Amplios espacios destinados al almacenamiento y organización de productos, con estanterías industriales para optimizar la gestión del inventario.</p>
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="grid grid-cols-1 gap-2">
            <img src="assets/p18_3.jpg" alt="Oficina" className="w-full aspect-[3/2] object-cover block grayscale" />
          </div>
          <div className="text-2xl font-black [font-stretch:62%] uppercase">Oficina</div>
          <p className="m-0 text-[15px] leading-[1.55] text-p-dim">En el segundo nivel están las oficinas de gerencia, contabilidad, recursos humanos, diseño y marketing. Durante mi práctica me desempeñé en el departamento de diseño y marketing.</p>
        </div>
      </div>
    </section>
  );
}
