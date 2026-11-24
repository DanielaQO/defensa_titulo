import { useEffect, useState } from 'react';

/** active = último id cuyo top está por encima del umbral (px desde arriba). */
export function useScrollSpy(ids: string[], threshold: number | (() => number)) {
  const [s, setS] = useState({ active: ids[0] ?? '', progress: 0, y: 0 });
  useEffect(() => {
    const on = () => {
      const lim = typeof threshold === 'function' ? threshold() : threshold;
      let active = ids[0] ?? '';
      for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < lim) active = id; }
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setS({ active, progress: h > 0 ? window.scrollY / h : 0, y: window.scrollY });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
    // ids es constante por tema
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return s;
}
