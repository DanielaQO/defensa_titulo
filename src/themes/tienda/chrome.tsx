import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../ui/Modal';
import { chapters, heroMap, num, order } from './chapters';
import { useTiendaNav } from './nav';

const navCls = 'flex gap-[18px] text-[13px] font-semibold overflow-x-auto no-scrollbar';

export function Header() {
  const { route } = useTiendaNav();
  const link = (c: (typeof chapters)[number]) => {
    const active = route === c.id || (route.startsWith('trabajo/') && c.id === 'tareas');
    return <Link key={c.id} to={'/tienda/' + c.id} className={`whitespace-nowrap py-1 border-b-2 ${active ? 'border-t-cream' : 'border-transparent'}`}>{c.label}</Link>;
  };
  return (
    <header className="sticky top-0 z-40 bg-t-red text-t-cream border-b border-t-red-dark">
      <div className="hidden lg:grid max-w-[1280px] mx-auto px-6 py-[14px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
        <nav className={navCls}>{chapters.slice(0, 3).map(link)}</nav>
        <Link to="/tienda/inicio" className="text-[26px] font-black tracking-[-0.03em] whitespace-nowrap">Daniela</Link>
        <nav className={`${navCls} justify-end items-center`}>{chapters.slice(3).map(link)}</nav>
      </div>
      <div className="lg:hidden px-4 pt-2.5 pb-1.5 flex flex-col items-center gap-1.5">
        <Link to="/tienda/inicio" className="text-[22px] font-black tracking-[-0.03em] whitespace-nowrap">Daniela</Link>
        <nav className={`${navCls} max-w-full`}>{chapters.map(link)}</nav>
      </div>
    </header>
  );
}

export function ChapterHero() {
  const { route } = useTiendaNav();
  const h = heroMap[route];
  if (!h) return null;
  return (
    <section className="bg-t-red text-t-cream relative overflow-hidden">
      <div className="hidden md:block absolute -left-[50px] top-1/2 w-[clamp(110px,13vw,190px)] aspect-square rounded-[26px] overflow-hidden -translate-y-1/2 -rotate-12 shadow-[0_20px_44px_rgba(0,0,0,.3)]"><img src={h.imgA} alt="" className="w-full h-full object-cover block" /></div>
      <div className="hidden md:block absolute -right-10 top-1/2 w-[clamp(110px,13vw,190px)] aspect-square rounded-[26px] overflow-hidden -translate-y-[40%] rotate-[11deg] shadow-[0_20px_44px_rgba(0,0,0,.3)]"><img src={h.imgB} alt="" className="w-full h-full object-cover block" /></div>
      <div className="relative max-w-[820px] mx-auto px-6 py-16 text-center">
        <div className="text-[13px] font-bold mb-3">{h.kicker}</div>
        <h1 className="m-0 mb-[14px] text-[clamp(38px,5.6vw,72px)] leading-[1.02] font-black tracking-[-0.035em] text-balance">{h.title}</h1>
        <p className="mx-auto max-w-[560px] text-base leading-[1.55] font-medium">{h.sub}</p>
      </div>
    </section>
  );
}

export function NextChapter() {
  const { route, go } = useTiendaNav();
  const chRoute = route.startsWith('trabajo/') ? 'tareas' : route;
  const idx = order.indexOf(chRoute);
  if (route === 'inicio' || idx < 0 || idx >= order.length - 1) return null;
  const nextId = order[idx + 1];
  const ci = chapters.findIndex((c) => c.id === nextId);
  return (
    <section className="bg-t-red text-t-cream">
      <div className="max-w-[1100px] mx-auto px-6 py-12 flex flex-wrap gap-5 items-center justify-between">
        <div>
          <div className="text-[13px] font-bold mb-1.5">Siguiente capítulo · {num(ci)}</div>
          <div className="text-[clamp(28px,3.4vw,44px)] font-black tracking-[-0.03em] leading-[1.05]">{chapters[ci].label}</div>
        </div>
        <button onClick={() => go(nextId)} className="h-[54px] px-7 rounded-full border-0 bg-t-cream text-t-red text-[15px] font-extrabold cursor-pointer hover:bg-white">Continuar →</button>
      </div>
    </section>
  );
}

const colTitle = 'text-sm font-black mb-2.5';
const colList = 'flex flex-col gap-1.5 text-[13px]';

export function Footer() {
  return (
    <footer className="max-w-[1280px] mx-auto px-6 pt-14 pb-6">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8 mb-6">
        <div>
          <div className="text-base font-black mb-2">Daniela Quiñones</div>
          <div className="text-[13px] leading-[1.6] text-t-muted">Técnico en Diseño Digital y Publicitario. Práctica en Agupa SpA, Santiago, 27/07/2026.</div>
        </div>
        <div>
          <div className={colTitle}>Capítulos</div>
          <div className={colList}>{chapters.map((c) => <Link key={c.id} to={'/tienda/' + c.id}>{c.label}</Link>)}</div>
        </div>
        <div>
          <div className={colTitle}>Equipo guía</div>
          <div className={colList}><span>Profesora guía: Desirée Alvarado Díaz</span><span>Tutora: Rosana Guzmán</span></div>
        </div>
        <div>
          <div className={colTitle}>Marcas</div>
          <div className={colList}><span>Carry All</span><span>GAMA</span><span>TOZO</span></div>
        </div>
      </div>
      <div className="text-[clamp(80px,19vw,280px)] font-black tracking-[-0.06em] leading-[0.82] text-t-red text-center pt-4 pb-2">Daniela</div>
      <div className="flex justify-between flex-wrap gap-3 border-t border-t-line pt-4 text-xs text-t-muted">
        <span>© 2026 Daniela Esperanza Quiñones Olea</span>
        <span>Walmart · Falabella · Paris · Mercado Libre · Ripley</span>
      </div>
    </footer>
  );
}

export function Zoom({ src, onClose }: { src: string | null; onClose: () => void }) {
  // 1er clic en la imagen: tamaño completo con scroll; 2º clic: vuelve a ajustarse a la pantalla.
  // Clic en el fondo, ✕ o Escape: cerrar.
  const [full, setFull] = useState(false);
  useEffect(() => { setFull(false); }, [src]);
  return (
    <Modal open={!!src} onClose={onClose} closeOnBackdrop className={`z-[90] bg-[rgba(30,20,18,.88)] overflow-auto flex p-6 ${full ? 'items-start justify-center' : 'items-center justify-center'}`}>
      <img src={src ?? ''} alt="Ampliación" onClick={() => setFull((f) => !f)}
        className={`block rounded-xl ${full ? 'max-w-none w-auto h-auto my-auto cursor-zoom-out' : 'max-w-full max-h-full cursor-zoom-in'}`}
        style={full ? { maxWidth: 'min(100%, 1600px)' } : undefined} />
      <button type="button" aria-label="Cerrar" onClick={onClose} className="fixed top-4 right-4 w-11 h-11 rounded-full border-0 bg-t-cream text-t-red text-lg font-extrabold cursor-pointer">✕</button>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-t-cream/80 bg-black/40 rounded-full px-3 py-1.5 pointer-events-none whitespace-nowrap">{full ? 'Clic para ajustar a la pantalla' : 'Clic en la imagen para ver a tamaño completo'}</div>
    </Modal>
  );
}
