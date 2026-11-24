import { useCallback, useEffect, useState } from 'react';

export const wrap = (n: number, len: number) => ((n % len) + len) % len;

export function useGallery(length: number) {
  const [i, set] = useState(0);
  useEffect(() => set(0), [length]);
  const prev = useCallback(() => set((x) => wrap(x - 1, length)), [length]);
  const next = useCallback(() => set((x) => wrap(x + 1, length)), [length]);
  return { i, set, prev, next };
}
