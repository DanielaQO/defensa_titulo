import { useEffect, useState } from 'react';

/** Loader 0→100% en `ms`; loaded +150ms; gone +1200ms (tiempos de Practica). */
export function useLoader(ms: number, enabled: boolean) {
  const [s, setS] = useState(enabled ? { pct: 0, loaded: false, gone: false } : { pct: 100, loaded: true, gone: true });
  useEffect(() => {
    if (!enabled) return;
    let raf = 0; let t1 = 0; let t2 = 0;
    const t0 = performance.now();
    const tick = () => {
      const pct = Math.min(100, Math.round(((performance.now() - t0) / ms) * 100));
      setS((x) => ({ ...x, pct }));
      if (pct < 100) raf = requestAnimationFrame(tick);
      else {
        t1 = window.setTimeout(() => setS((x) => ({ ...x, loaded: true })), 150);
        t2 = window.setTimeout(() => setS((x) => ({ ...x, gone: true })), 1200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); };
  }, [ms, enabled]);
  return s;
}
