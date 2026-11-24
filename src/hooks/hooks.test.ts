// src/hooks/hooks.test.ts
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useGallery, wrap } from './useGallery';
import { ALL, applyFilter, countBy } from './useFilter';
import { useAccordion } from './useAccordion';

describe('wrap', () => {
  it('envuelve en ambos sentidos', () => {
    expect(wrap(-1, 5)).toBe(4);
    expect(wrap(5, 5)).toBe(0);
    expect(wrap(2, 5)).toBe(2);
  });
});

describe('useGallery', () => {
  it('prev desde 0 va al último, next desde último va a 0', () => {
    const { result } = renderHook(() => useGallery(3));
    act(() => result.current.prev());
    expect(result.current.i).toBe(2);
    act(() => result.current.next());
    expect(result.current.i).toBe(0);
  });
  it('se resetea a 0 si cambia length', () => {
    const { result, rerender } = renderHook(({ n }) => useGallery(n), { initialProps: { n: 5 } });
    act(() => result.current.set(4));
    rerender({ n: 2 });
    expect(result.current.i).toBe(0);
  });
});

const items = [
  { t: 'Beta', g: 'A', n: 2 },
  { t: 'alfa', g: 'B', n: 9 },
  { t: 'Gamma', g: 'A', n: 5 },
];
const base = { groupOf: (x: typeof items[0]) => x.g, text: (x: typeof items[0]) => x.t };

describe('applyFilter', () => {
  it('Todos devuelve todo en orden original', () => {
    expect(applyFilter(items, { ...base, active: ALL }).map((x) => x.t)).toEqual(['Beta', 'alfa', 'Gamma']);
  });
  it('filtra por grupo', () => {
    expect(applyFilter(items, { ...base, active: 'A' }).map((x) => x.t)).toEqual(['Beta', 'Gamma']);
  });
  it('query sin mayúsculas y con espacios', () => {
    expect(applyFilter(items, { ...base, active: ALL, query: '  ALF ' }).map((x) => x.t)).toEqual(['alfa']);
  });
  it('sort no muta el input', () => {
    const out = applyFilter(items, { ...base, active: ALL, sort: (a, b) => b.n - a.n });
    expect(out.map((x) => x.n)).toEqual([9, 5, 2]);
    expect(items[0].t).toBe('Beta');
  });
});

describe('countBy', () => {
  it('cuenta por grupo respetando query', () => {
    expect(countBy(items, [ALL, 'A', 'B'], base)).toEqual({ Todos: 3, A: 2, B: 1 });
    expect(countBy(items, [ALL, 'A', 'B'], { ...base, query: 'a' })).toEqual({ Todos: 3, A: 2, B: 1 });
    expect(countBy(items, [ALL, 'A', 'B'], { ...base, query: 'gam' })).toEqual({ Todos: 1, A: 1, B: 0 });
  });
});

describe('useAccordion', () => {
  it('uno abierto a la vez, toggle cierra', () => {
    const { result } = renderHook(() => useAccordion('a'));
    expect(result.current.isOpen('a')).toBe(true);
    act(() => result.current.toggle('b'));
    expect(result.current.openId).toBe('b');
    act(() => result.current.toggle('b'));
    expect(result.current.openId).toBe(null);
  });
});
