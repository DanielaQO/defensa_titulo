import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAccordion } from '../../../hooks/useAccordion';
import { empresa, numbered, tools } from '../../../data/empresa';
import { ceo, deptsOrg, levels } from '../../../data/people';
import type { NumItem } from '../../../data/types';

const subs = [['desc', 'Descripción'], ['rrhh', 'Recursos humanos'], ['infra', 'Infraestructura']] as const;
type Sub = typeof subs[number][0];
interface Faq { id: string; q: string; items?: NumItem[]; paras?: string[] }
const faqTienda: Faq[] = [
  { id: 'obj', q: '¿Cuáles son sus objetivos?', items: numbered(empresa.objetivos) },
  { id: 'func', q: '¿Qué funciones cumple?', items: numbered(empresa.funciones) },
  { id: 'serv', q: '¿Qué servicios ofrece?', items: numbered(empresa.servicios) },
  { id: 'hist', q: 'Reseña histórica', paras: empresa.historia },
  { id: 'pub', q: '¿Cuál es su público objetivo?', paras: empresa.publico },
  { id: 'dep', q: '¿Qué departamentos tiene?', items: numbered(['Gerencia General (CEO): dirección estratégica, toma de decisiones y supervisión general de las operaciones.', 'Contabilidad y Recursos Humanos: gestión financiera, administrativa, contable y del personal.', 'Diseño y Marketing: material gráfico, contenido visual, imagen de marca y apoyo al marketing digital.', 'Bodega y Logística: recepción, almacenamiento, preparación y despacho de productos.']) },
];
const wrap = 'max-w-[1100px] mx-auto pt-14 px-6 pb-[72px]';
const h2 = 'mt-0 mx-0 text-[clamp(30px,3.4vw,44px)] font-black tracking-[-0.03em]';
const h2s = 'mt-0 mx-0 mb-2 text-center text-[clamp(28px,3vw,40px)] font-black tracking-[-0.03em]';
const cols = 'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mb-14';

function Desc() {
  const acc = useAccordion('obj');
  return (
    <div className={wrap}>
      <div className="flex flex-wrap gap-10 items-center mb-14">
        <div className="flex-[1_1_380px]">
          <h2 className={`${h2} mb-4 leading-[1.05]`}>Sobre <span className="text-t-red">Agupa SpA</span></h2>
          <p className="mt-0 mx-0 mb-[14px] text-[17px] leading-[1.65] text-pretty">{empresa.descripcion[0]}</p>
          <p className="m-0 text-[17px] leading-[1.65] text-pretty">{empresa.descripcion[1]}</p>
        </div>
        <div className="flex-[1_1_380px] aspect-[4/3] rounded-[22px] overflow-hidden bg-[#efe2cf]"><img src="assets/p17_1.jpg" alt="Agupa SpA" className="w-full h-full object-cover block" /></div>
      </div>
      <div className={cols}>
        <div className="bg-t-red text-t-cream rounded-[22px] p-[30px]">
          <div className="text-[28px] font-black mb-3">Misión</div>
          <p className="m-0 text-base leading-[1.6] text-pretty">{empresa.mision}</p>
        </div>
        <div className="bg-white border-2 border-t-red rounded-[22px] p-[30px]">
          <div className="text-[28px] font-black mb-3 text-t-red">Visión</div>
          <p className="m-0 text-base leading-[1.6] text-pretty">{empresa.vision}</p>
        </div>
      </div>
      <h2 className={h2s}>Preguntas <span className="text-t-red">frecuentes</span></h2>
      <p className="mt-0 mx-0 mb-6 text-center text-[15px] text-t-muted">Objetivos, funciones, servicios, historia, público y departamentos.</p>
      <div className="max-w-[820px] mx-auto">
        {faqTienda.map((q) => {
          const open = acc.isOpen(q.id);
          return (
            <div key={q.id} className="border-b border-t-line">
              <button onClick={() => acc.toggle(q.id)} aria-expanded={open} className="w-full flex justify-between items-center gap-4 py-[18px] px-0 border-0 bg-transparent cursor-pointer text-left text-t-ink">
                <span className="text-[17px] font-bold">{q.q}</span>
                <span className={`w-7 h-7 rounded-[14px] shrink-0 flex items-center justify-center text-base font-extrabold border-2 border-t-red ${open ? 'bg-t-red text-t-cream' : 'bg-transparent text-t-red'}`}>{open ? '−' : '+'}</span>
              </button>
              {open && (
                <div className="pt-0 pr-11 pb-[22px] pl-0 flex flex-col gap-2.5">
                  {q.paras?.map((t) => <p key={t} className="m-0 text-[15px] leading-[1.7] text-t-body text-pretty">{t}</p>)}
                  {q.items?.map((it) => <div key={it.n} className="flex gap-3 text-[15px] leading-[1.55] text-t-body"><span className="font-extrabold text-t-red min-w-[22px]">{it.n}</span><span>{it.t}</span></div>)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Rrhh() {
  return (
    <div className={wrap}>
      <div className="text-center max-w-[720px] mx-auto mb-12">
        <h2 className={`${h2} mb-[14px]`}>Recursos <span className="text-t-red">humanos</span></h2>
        <p className="m-0 text-[17px] leading-[1.65] text-pretty">El área de recursos humanos está conformada por una sola profesional, quien es responsable de la gestión del personal y del apoyo transversal a todas las áreas de la empresa. Su labor permite coordinar procesos administrativos, mantener una comunicación efectiva entre los equipos y contribuir al desarrollo de las actividades de cada departamento.</p>
      </div>
      <h3 className="mt-0 mx-0 mb-5 text-center text-2xl font-black">Organigrama empresarial</h3>
      <div className="flex flex-col items-center gap-0 mb-14">
        <div className="bg-t-red text-t-cream rounded-[18px] p-3 flex items-center gap-3 min-w-[260px]">
          <div className="w-14 h-14 rounded-[28px] overflow-hidden bg-t-cream shrink-0"><img src={ceo.photo} alt={ceo.name} className="w-full h-full object-cover object-[center_25%] block" /></div>
          <div><div className="text-xs font-semibold">{ceo.role}</div><div className="text-base font-extrabold">{ceo.name}</div></div>
        </div>
        <div className="w-0.5 h-7 bg-t-red" />
        <div className="w-[min(100%,980px)] h-0.5 bg-t-red" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4 w-full mt-0">
          {deptsOrg.map((d) => (
            <div key={d.name} className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-t-red" />
              <div className="w-full border-2 border-t-red rounded-[22px] p-4 bg-white flex flex-col gap-3">
                <div className="text-[15px] font-black text-t-red text-center">{d.name}</div>
                <div className="text-[13px] leading-[1.5] text-center text-t-body min-h-[58px]">{d.desc}</div>
                <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-2">
                  {d.people.map((p) => (
                    <div key={p.id} className="flex flex-col gap-1.5 items-center text-center">
                      <div className="w-full aspect-square rounded-[14px] overflow-hidden bg-t-sand"><img src={p.photo} alt={p.name} className="w-full h-full object-cover object-[center_25%] block" /></div>
                      <div className="text-[13px] font-extrabold leading-[1.2]">{p.name}</div>
                      {p.tag && <span className="text-[10px] font-extrabold py-[3px] px-2 rounded-full bg-t-red text-t-cream">{p.tag}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {levels.map((l) => (
          <div key={l.area} className="bg-white rounded-[18px] p-5">
            <div className="text-xs font-bold text-t-red mb-1.5">{l.area}</div>
            <div className="text-[15px] leading-[1.5]">{l.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Infra() {
  const card = 'bg-white rounded-[22px] p-[14px] flex flex-col gap-[14px]';
  const cardTitle = 'text-[20px] font-black text-t-red mb-1.5';
  return (
    <div className={wrap}>
      <div className="flex flex-wrap gap-10 items-center mb-12">
        <div className="flex-[1_1_380px]">
          <h2 className={`${h2} mb-2`}>Planta <span className="text-t-red">física</span></h2>
          <div className="text-base font-extrabold mb-[14px]">{empresa.direccion}</div>
          <p className="mt-0 mx-0 mb-3 text-base leading-[1.65] text-pretty">{empresa.plantaFisica[0]}</p>
          <p className="m-0 text-base leading-[1.65] text-pretty">{empresa.plantaFisica[1]}</p>
        </div>
        <div className="flex-[1_1_380px] aspect-[4/3] rounded-[22px] overflow-hidden"><img src="assets/p17_1.jpg" alt="Instalaciones" className="w-full h-full object-cover block" /></div>
      </div>
      <div className={cols}>
        <div className={card}>
          <div className="grid grid-cols-[1fr_1fr] gap-2">
            <img src="assets/p18_1.jpg" alt="Bodega" className="w-full aspect-[3/4] object-cover rounded-[14px] block" />
            <img src="assets/p18_2.jpg" alt="Bodega" className="w-full aspect-[3/4] object-cover rounded-[14px] block" />
          </div>
          <div className="pt-0 px-1.5 pb-1.5"><div className={cardTitle}>Bodega</div><p className="m-0 text-[15px] leading-[1.6]">{empresa.bodega}</p></div>
        </div>
        <div className={card}>
          <img src="assets/p18_3.jpg" alt="Oficina" className="w-full aspect-[3/2] object-cover rounded-[14px] block" />
          <div className="pt-0 px-1.5 pb-1.5"><div className={cardTitle}>Oficina</div><p className="m-0 text-[15px] leading-[1.6]">{empresa.oficina}</p></div>
        </div>
      </div>
      <h2 className={h2s}>Maquinarias y <span className="text-t-red">tecnología</span></h2>
      <p className="mt-0 mx-0 mb-6 text-center text-[15px] text-t-muted">Herramientas utilizadas en el área de Diseño y Marketing.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
        {tools.map((t) => (
          <div key={t.name} className="border-2 border-t-red rounded-[18px] py-4 px-[18px] bg-t-cream flex flex-col gap-1">
            <div className="text-base font-extrabold">{t.name}</div>
            <div className="text-[13px] text-t-muted leading-[1.45]">{t.use}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Centro() {
  const loc = useLocation();
  const [sub, setSub] = useState<Sub>((loc.state as { sub?: Sub } | null)?.sub ?? 'desc');
  return (
    <div>
      <div className="sticky top-[61px] z-20 bg-t-cream border-b border-t-line">
        <div className="max-w-[1100px] mx-auto py-[14px] px-6 flex gap-2 justify-center flex-wrap">
          {subs.map(([id, label], i) => (
            <button key={id} onClick={() => { setSub(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-pressed={sub === id} className={`h-[42px] px-5 rounded-full cursor-pointer text-sm font-bold border-2 border-t-red ${sub === id ? 'bg-t-red text-t-cream' : 'bg-transparent text-t-red'}`}>{String(i + 1).padStart(2, '0')} · {label}</button>
          ))}
        </div>
      </div>
      {sub === 'desc' && <Desc />}
      {sub === 'rrhh' && <Rrhh />}
      {sub === 'infra' && <Infra />}
    </div>
  );
}
