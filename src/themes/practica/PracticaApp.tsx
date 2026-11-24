import { type CSSProperties, useState } from 'react';
import { useLoader } from '../../hooks/useLoader';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import AccentPicker from '../../ui/AccentPicker';
import { ACCENTS, sections } from './sections';
import { LbCtx } from './lb';
import { Loader, Header, Menu, Progress } from './chrome';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Words from './sections/Words';
import Empresa from './sections/Empresa';
import Equipo from './sections/Equipo';
import Infra from './sections/Infra';
import Tareas from './sections/Tareas';
import Cifras from './sections/Cifras';
import Trabajos from './sections/Trabajos';
import Cierre from './sections/Cierre';
import PracticaLightbox from './Lightbox';

const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const ids = sections.map((s) => s.id);
const threshold = () => window.innerHeight * 0.4;

export default function PracticaApp() {
  const [acc, setAcc] = useState(ACCENTS[0]);
  const [menu, setMenu] = useState(false);
  const [lb, setLb] = useState<string | null>(null);
  const loader = useLoader(1400, !reduce);
  const spy = useScrollSpy(ids, threshold);
  return (
    <LbCtx.Provider value={setLb}>
      <div className="font-practica bg-p-bg text-p-ink min-h-screen overflow-x-clip" style={{ '--acc': acc } as CSSProperties}>
        {!loader.gone && <Loader pct={loader.pct} loaded={loader.loaded} />}
        <Header active={spy.active} menu={menu} onToggle={() => setMenu((m) => !m)} onTop={() => setMenu(false)} />
        <Progress value={spy.progress} />
        <Menu open={menu} active={spy.active} onClose={() => setMenu(false)} />
        <Hero loaded={loader.loaded} />
        <Intro />
        <Words />
        <Empresa /><Equipo /><Infra /><Tareas /><Cifras /><Trabajos /><Cierre />
        <PracticaLightbox key={lb ?? 'none'} id={lb} onClose={() => setLb(null)} />
        <AccentPicker options={ACCENTS} value={acc} onChange={setAcc} />
      </div>
    </LbCtx.Provider>
  );
}
