import type { ReactNode, RefObject } from 'react';

export function CarouselTrack({ trackRef, className = '', children }: { trackRef: RefObject<HTMLDivElement | null>; className?: string; children: ReactNode }) {
  return <div ref={trackRef} className={`flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth ${className}`}>{children}</div>;
}
