import { useNavigate } from 'react-router-dom';
import Marquee from '../../../ui/Marquee';
import { stats } from '../../../data/content';
import { projects } from '../../../data/projects';
import { scrollToId } from '../../../lib/scroll';
import { CarouselTrack } from '../Carousel';
import { chapters, covers, num } from '../chapters';
import { useCarousel, useTiendaNav } from '../nav';

const circles = ['p22_2', 'p23_2', 'p24_3', 'p25_2', 'p26_2', 'p28_2', 'p30_1', 'p31_1', 'p32_2', 'p33_1', 'p23_5', 'p26_5'].map((x) => `assets/${x}.jpg`);
const photo = 'absolute aspect-square rounded-[28px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,.3)]';

export default function Inicio() {
  const { go } = useTiendaNav();
  const navigate = useNavigate();
  const car = useCarousel();
  const goTrabajos = () => { go('tareas'); setTimeout(() => scrollToId('trabajos', 70), 80); };
  return (
    <div>
      <section className="bg-t-red text-t-cream relative overflow-hidden">
        <div className={`${photo} hidden md:block -left-10 top-10 w-[clamp(140px,18vw,240px)] -rotate-[14deg]`}><img src="assets/p22_1.jpg" alt="" className="w-full h-full object-cover block" /></div>
        <div className={`${photo} hidden md:block -right-[30px] top-[70px] w-[clamp(130px,16vw,220px)] rotate-12`}><img src="assets/p24_1.jpg" alt="" className="w-full h-full object-cover block" /></div>
        <div className={`${photo} left-[18%] -bottom-[60px] w-[clamp(120px,14vw,200px)] rotate-[9deg]`}><img src="assets/p26_1.jpg" alt="" className="w-full h-full object-cover block" /></div>
        <div className={`${photo} right-[16%] -bottom-[50px] w-[clamp(120px,14vw,200px)] -rotate-[10deg]`}><img src="assets/p28_1.jpg" alt="" className="w-full h-full object-cover block" /></div>
        <div className="relative max-w-[860px] mx-auto pt-14 md:pt-24 px-6 pb-[150px] text-center flex flex-col items-center gap-[22px]">
          <div className="text-sm font-semibold">Presentación de título · Técnico en Diseño Digital y Publicitario</div>
          <h1 className="m-0 text-[clamp(42px,6.4vw,86px)] leading-[1.02] font-black tracking-[-0.035em] text-balance">Presentación de Práctica Laboral en Agupa SpA</h1>
          <p className="m-0 text-lg leading-[1.55] max-w-[560px] font-medium">Catálogos digitales, layouts y piezas gráficas para e-commerce y marketplaces.</p>
          <div className="flex gap-3 flex-wrap justify-center mt-1.5">
            <button onClick={() => go('introduccion')} className="h-[50px] px-[26px] rounded-full border-0 bg-t-cream text-t-red text-[15px] font-extrabold cursor-pointer hover:bg-white">Comenzar presentación</button>
            <button onClick={goTrabajos} className="h-[50px] px-[26px] rounded-full border-2 border-t-cream bg-transparent text-t-cream text-[15px] font-extrabold cursor-pointer hover:bg-t-red-dark">Ver mis trabajos</button>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto pt-16 px-6 pb-6 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 text-center">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="text-[clamp(40px,4.4vw,56px)] font-black text-t-red tracking-[-0.03em] leading-none">{s.v}</div>
            <div className="text-sm font-semibold mt-2">{s.v === '3' ? 'Marcas: Carry All, Gama y Tozo' : s.label}</div>
          </div>
        ))}
      </section>

      <section className="max-w-[1280px] mx-auto pt-10 px-6 pb-[72px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {chapters.map((c, i) => (
            <button key={c.id} onClick={() => go(c.id)} className="group relative p-0 border-0 cursor-pointer aspect-[3/4] rounded-[22px] overflow-hidden bg-t-red text-left text-t-cream">
              <img src={covers[c.id]} alt="" className="absolute inset-0 w-full h-full object-cover block transition-transform duration-[600ms] ease-expo group-hover:scale-[1.06]" />
              <div className="absolute inset-x-0 bottom-0 pt-[60px] px-[18px] pb-[18px] bg-gradient-to-t from-[rgba(110,8,6,.92)] to-[rgba(110,8,6,0)] pointer-events-none">
                <div className="text-xs font-bold mb-1">{num(i)}</div>
                <div className="text-[21px] font-extrabold leading-[1.1]">{c.label}</div>
              </div>
              {c.isNew && <span className="absolute top-[14px] right-[14px] text-[11px] font-extrabold px-2.5 py-1.5 rounded-full bg-t-cream text-t-red">NUEVO</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto pt-6 px-6 pb-[72px] flex flex-wrap gap-10 items-center">
        <div className="flex-[1_1_380px] text-center">
          <h2 className="m-0 mb-[18px] text-[clamp(32px,3.6vw,48px)] font-black tracking-[-0.03em]"><span className="text-t-red">Daniela</span> &amp; el equipo</h2>
          <p className="mx-auto mb-[22px] max-w-[460px] text-base leading-[1.65] text-pretty">Me desempeñé en el departamento de Diseño y Marketing de Agupa SpA, bajo la supervisión de la Directora de Diseño, desarrollando el catálogo digital de productos de la empresa.</p>
          <button onClick={() => navigate('/tienda/centro', { state: { sub: 'rrhh' } })} className="h-11 px-[22px] rounded-full border-2 border-t-ink bg-transparent text-sm font-bold cursor-pointer text-t-ink hover:bg-t-ink hover:text-t-cream">Conocer al equipo</button>
        </div>
        <div className="flex-[1_1_380px] grid grid-cols-2 gap-3">
          <div className="aspect-[3/4] rounded-[22px] overflow-hidden bg-white"><img src="assets/p14_1.jpg" alt="Rosana Guzmán" className="w-full h-full object-cover object-[center_25%] block" /></div>
          <div className="aspect-[3/4] rounded-[22px] overflow-hidden bg-white"><img src="assets/p14_3.jpg" alt="Daniela Quiñones" className="w-full h-full object-cover object-[center_25%] block" /></div>
        </div>
      </section>

      <section className="pb-[72px] overflow-hidden">
        <Marquee duration="45s">
          {circles.map((src, i) => (
            <div key={src} className={`shrink-0 w-[clamp(110px,12vw,160px)] aspect-square rounded-full overflow-hidden mr-4 bg-white border-4 ${i % 3 === 1 ? 'border-t-red' : 'border-t-cream'}`}>
              <img src={src} alt="" className="w-full h-full object-cover block" />
            </div>
          ))}
        </Marquee>
      </section>

      <section className="bg-t-red text-t-cream">
        <div className="max-w-[1280px] mx-auto px-6 py-16 flex flex-wrap gap-8 items-center">
          <div className="flex-[0_1_260px] text-center">
            <div className="text-[13px] font-semibold mb-1.5">Diseñados durante la práctica</div>
            <h2 className="m-0 mb-[18px] text-[clamp(32px,3.4vw,44px)] font-black tracking-[-0.03em] leading-[1.05]">Mis trabajos</h2>
            <div className="flex gap-2 justify-center">
              <button type="button" onClick={car.prev} aria-label="Anterior" className="w-10 h-10 rounded-[10px] border-0 bg-t-cream text-t-red text-lg font-extrabold cursor-pointer">‹</button>
              <button type="button" onClick={car.next} aria-label="Siguiente" className="w-10 h-10 rounded-[10px] border-0 bg-t-cream text-t-red text-lg font-extrabold cursor-pointer">›</button>
            </div>
          </div>
          <CarouselTrack trackRef={car.ref} className="flex-[1_1_500px] min-w-0">
            {projects.map((p) => (
              <div key={p.id} className="flex-[0_0_240px] snap-start bg-t-cream text-t-ink rounded-[18px] p-2.5 flex flex-col gap-2.5">
                <div className="aspect-square rounded-xl overflow-hidden bg-white"><img src={p.cover} alt={p.title} className={`w-full h-full block ${p.fit === 'contain' ? 'object-contain' : 'object-cover'}`} /></div>
                <div className="px-1 flex justify-between gap-2 items-baseline">
                  <div className="text-sm font-extrabold leading-[1.2]">{p.title}</div>
                  <div className="text-[13px] font-extrabold text-t-red whitespace-nowrap">{p.imgs.length} pzs</div>
                </div>
                <div className="px-1 text-xs leading-[1.4] text-t-muted">{p.brand} · {p.cat}</div>
                <button onClick={() => go('trabajo/' + p.id)} className="h-[38px] rounded-[10px] border-0 bg-t-red text-t-cream text-[13px] font-bold cursor-pointer hover:bg-t-red-dark">Ver pack</button>
              </div>
            ))}
          </CarouselTrack>
        </div>
      </section>

      <section className="max-w-[860px] mx-auto py-[72px] px-6">
        <h2 className="m-0 mb-2.5 text-center text-[clamp(30px,3.4vw,44px)] font-black tracking-[-0.03em]">El recorrido</h2>
        <p className="m-0 mb-7 text-center text-[15px] text-t-muted">La presentación está organizada por capítulos. Usa ← → del teclado para avanzar entre capítulos.</p>
        {chapters.map((c, i) => (
          <button key={c.id} onClick={() => go(c.id)} className="w-full flex items-center gap-4 py-[18px] border-0 border-b border-t-line bg-transparent cursor-pointer text-left text-t-ink hover:text-t-red">
            <span className="text-[13px] font-extrabold text-t-red w-7">{num(i)}</span>
            <span className="flex-auto text-[17px] font-bold">{c.label}</span>
            <span className="w-[30px] h-[30px] rounded-full border-2 border-t-red text-t-red flex items-center justify-center text-[15px] font-extrabold">→</span>
          </button>
        ))}
      </section>
    </div>
  );
}
