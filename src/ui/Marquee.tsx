import type { CSSProperties, ReactNode } from 'react';

/** Contenido duplicado + translateX(-50%) = loop continuo. */
export default function Marquee({ children, duration, className = '' }: { children: ReactNode; duration: string; className?: string }) {
  return (
    <div className={`flex w-max animate-marquee ${className}`} style={{ '--marquee-dur': duration } as CSSProperties}>
      <div className="flex">{children}</div>
      <div className="flex" aria-hidden="true">{children}</div>
    </div>
  );
}
