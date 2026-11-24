export type Group = 'Layouts e-commerce' | 'Publicidad y RRSS' | 'Identidad e impresos';
export const GROUPS = ['Layouts e-commerce', 'Publicidad y RRSS', 'Identidad e impresos'] as const satisfies readonly Group[];
export interface Project { id: string; title: string; brand: string; cat: string; group: Group; imgs: string[]; cover: string; alt: string; fit: 'cover' | 'contain'; desc: string; specs: [string, string][] }
export interface Person { id: string; name: string; role: string; photo: string; tag?: string }
export interface Dept { name: string; desc: string; people: Person[] }
export interface NumItem { n: string; t: string }
export interface Biblio { name: string; url: string; host: string }
