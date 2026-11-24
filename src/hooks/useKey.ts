import { useEffect, useRef } from 'react';

/** Listener global de teclado. Ignora teclas tipeadas en inputs. */
export function useKey(map: Partial<Record<string, () => void>>, enabled = true) {
  const ref = useRef(map);
  ref.current = map;
  useEffect(() => {
    if (!enabled) return;
    const on = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /INPUT|TEXTAREA/.test(t.tagName)) return;
      ref.current[e.key]?.();
    };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, [enabled]);
}
