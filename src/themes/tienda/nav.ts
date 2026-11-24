import { createContext, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ZoomCtx = createContext<(src: string) => void>(() => {});
export const useZoom = () => useContext(ZoomCtx);

export function useTiendaNav() {
  const loc = useLocation(); const nav = useNavigate();
  const route = loc.pathname.replace(/^\/tienda\/?/, '') || 'inicio';
  return { route, go: (r: string) => nav('/tienda/' + r) };
}

export function useCarousel(step = 256) {
  const ref = useRef<HTMLDivElement>(null);
  return { ref, prev: () => ref.current?.scrollBy({ left: -step, behavior: 'smooth' }), next: () => ref.current?.scrollBy({ left: step, behavior: 'smooth' }) };
}
