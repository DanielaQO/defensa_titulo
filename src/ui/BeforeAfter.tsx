import { type PointerEvent, type ReactNode, useRef, useState } from 'react';

/** Comparador por arrastre. `value` 0-100 = % visible de `before` desde la izquierda. */
export default function BeforeAfter({ before, after, className = '', lineClass = '', handle, children, value, onChange }: { before: string; after: string; className?: string; lineClass?: string; handle?: ReactNode; children?: ReactNode; value?: number; onChange?: (v: number) => void }) {
  const [inner, setInner] = useState(50);
  const v = value ?? inner;
  const set = onChange ?? setInner;
  const drag = useRef(false);
  const from = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    set(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  };
  return (
    <div
      className={`relative overflow-hidden cursor-ew-resize touch-none select-none ${className}`}
      onPointerDown={(e) => { drag.current = true; try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* jsdom */ } from(e); }}
      onPointerMove={(e) => drag.current && from(e)}
      onPointerUp={() => { drag.current = false; }}
      onPointerLeave={() => { drag.current = false; }}
      role="slider" aria-label="Comparar antes y después" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(v)} tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') { e.stopPropagation(); set(Math.max(0, v - 5)); } if (e.key === 'ArrowRight') { e.stopPropagation(); set(Math.min(100, v + 5)); } }}
    >
      <img src={after} alt="Ahora" draggable={false} className="absolute inset-0 w-full h-full object-cover block" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}>
        <img src={before} alt="Antes" draggable={false} className="w-full h-full object-cover block" />
      </div>
      <div className={`absolute top-0 bottom-0 w-[3px] pointer-events-none ${lineClass}`} style={{ left: `calc(${v}% - 1.5px)` }}>{handle}</div>
      {children}
    </div>
  );
}
