import { createContext, useContext } from 'react';
import type { Project } from '../../data/types';

export const nav = [{ id: 'practica', label: 'La práctica' }, { id: 'trabajos', label: 'Trabajos' }, { id: 'proceso', label: 'Proceso' }, { id: 'empresa', label: 'Empresa' }, { id: 'conclusiones', label: 'Conclusiones' }];
export const ACCENTS = ['#e2be14', '#0292d4', '#ec3013'];
export const sorters: { id: 'dest' | 'az' | 'piezas'; label: string; fn?: (a: Project, b: Project) => number }[] = [
  { id: 'dest', label: 'Destacados' },
  { id: 'az', label: 'A–Z', fn: (a, b) => a.title.localeCompare(b.title) },
  { id: 'piezas', label: 'Más piezas', fn: (a, b) => b.imgs.length - a.imgs.length },
];
export const searchText = (p: Project) => `${p.title} ${p.brand} ${p.cat} ${p.group}`;

export interface Store { query: string; setQuery(q: string): void; filter: string; setFilter(g: string): void; bag: string[]; toggleBag(id: string): void; openPd(id: string): void; bagOpen: boolean; setBagOpen(b: boolean): void }
export const StoreCtx = createContext<Store>(null!);
export const useStore = () => useContext(StoreCtx);
