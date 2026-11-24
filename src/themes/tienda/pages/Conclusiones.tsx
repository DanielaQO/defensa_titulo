import { biblio, conclusiones } from '../../../data/content';

const [citaA, citaB] = conclusiones.cita.split('Diseño Digital y Publicitario');

export default function Conclusiones() {
  return (
    <div className="max-w-[1100px] mx-auto py-[72px] px-6">
      <p className="mt-0 mx-auto mb-12 max-w-[920px] text-center text-[clamp(24px,2.8vw,36px)] leading-[1.3] font-extrabold tracking-[-0.02em] text-pretty">“{citaA}<span className="text-t-red">Diseño Digital y Publicitario</span>{citaB}”</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mb-14">
        <div className="bg-white rounded-[22px] p-[30px]">
          <div className="text-[13px] font-extrabold text-t-red mb-2.5">Observaciones sobre las tareas</div>
          <p className="m-0 text-base leading-[1.7] text-pretty">{conclusiones.tareas}</p>
        </div>
        <div className="bg-t-red text-t-cream rounded-[22px] p-[30px]">
          <div className="text-[13px] font-extrabold mb-2.5">Vinculación con el área</div>
          <p className="m-0 text-base leading-[1.7] text-pretty">{conclusiones.vinculacion}</p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 border-t border-t-line pt-10">
        <div>
          <h3 className="mt-0 mx-0 mb-3 text-2xl font-black">Agradecimientos</h3>
          <p className="m-0 text-[15px] leading-[1.7] text-pretty">{conclusiones.agradecimientos}</p>
        </div>
        <div>
          <h3 className="mt-0 mx-0 mb-3 text-2xl font-black">Bibliografía y linkografía</h3>
          {biblio.map((b) => (
            <a key={b.url} href={b.url} target="_blank" rel="noopener" className="flex justify-between gap-3 py-[9px] border-b border-t-line text-sm font-semibold"><span>{b.name}</span><span className="text-t-red">↗</span></a>
          ))}
        </div>
      </div>
    </div>
  );
}
