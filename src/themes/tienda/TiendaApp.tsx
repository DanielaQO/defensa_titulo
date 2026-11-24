import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useKey } from '../../hooks/useKey';
import { order } from './chapters';
import { Header, ChapterHero, NextChapter, Footer, Zoom } from './chrome';
import { ZoomCtx, useTiendaNav } from './nav';
import Inicio from './pages/Inicio';
import Intro from './pages/Intro';
import Centro from './pages/Centro';
import Tareas from './pages/Tareas';
import Trabajo from './pages/Trabajo';
import Conclusiones from './pages/Conclusiones';
import Nuevos from './pages/Nuevos';

// key por pathname = estado de galería nuevo al cambiar de pack
function TrabajoKeyed() { return <Trabajo key={useLocation().pathname} />; }

export default function TiendaApp() {
  const { route, go } = useTiendaNav();
  const [zoom, setZoom] = useState<string | null>(null);
  useEffect(() => { window.scrollTo(0, 0); }, [route]);

  const isTrabajo = route.startsWith('trabajo/');
  useKey({
    ArrowRight: () => !isTrabajo && !zoom && stepCh(1),
    ArrowLeft: () => !isTrabajo && !zoom && stepCh(-1),
  });
  function stepCh(d: number) {
    if (document.activeElement?.getAttribute('role') === 'slider') return;
    const i = Math.max(0, order.indexOf(route)); const n = Math.min(order.length - 1, Math.max(0, i + d));
    if (n !== i) go(order[n]);
  }

  return (
    <ZoomCtx.Provider value={setZoom}>
      <div className="font-tienda bg-t-cream text-t-ink min-h-screen">
        <Header />
        <ChapterHero />
        <Routes>
          <Route index element={<Navigate to="inicio" replace />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="introduccion" element={<Intro />} />
          <Route path="centro" element={<Centro />} />
          <Route path="tareas" element={<Tareas />} />
          <Route path="trabajo/:id" element={<TrabajoKeyed />} />
          <Route path="conclusiones" element={<Conclusiones />} />
          <Route path="nuevos" element={<Nuevos />} />
          <Route path="*" element={<Navigate to="inicio" replace />} />
        </Routes>
        <NextChapter />
        <Footer />
        <Zoom src={zoom} onClose={() => setZoom(null)} />
      </div>
    </ZoomCtx.Provider>
  );
}
