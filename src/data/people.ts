import type { Dept, Person } from './types';

export const people: Person[] = [
  { id: 'ct', name: 'Cristian Torres', role: 'Gerencia General (CEO)', photo: 'assets/p13_1.jpg' },
  { id: 'pg', name: 'Pamela Gómez', role: 'Contabilidad y RR.HH.', photo: 'assets/p13_3.jpg' },
  { id: 'rg', name: 'Rosana Guzmán', role: 'Diseño y Marketing', photo: 'assets/p14_1.jpg', tag: 'Tutora' },
  { id: 'dq', name: 'Daniela Quiñones', role: 'Diseño y Marketing', photo: 'assets/p14_3.jpg', tag: 'Practicante' },
  { id: 'wc', name: 'William Cruz', role: 'Bodega y Logística', photo: 'assets/p15_1.jpg' },
  { id: 're', name: 'Raúl Escobar', role: 'Bodega y Logística', photo: 'assets/p15_3.jpg' },
];
const by = (id: string) => people.find((p) => p.id === id)!;
export const ceo = by('ct');

/** Organigrama Tienda: depts bajo el CEO, con fotos */
export const deptsOrg: Dept[] = [
  { name: 'Contabilidad y RR.HH.', desc: 'Gestión financiera, administrativa, contable y de los procesos relacionados con el personal.', people: [by('pg')] },
  { name: 'Diseño y Marketing', desc: 'Material gráfico, contenido visual, gestión de imagen de marca y apoyo a las estrategias de marketing digital.', people: [by('rg'), by('dq')] },
  { name: 'Bodega y Logística', desc: 'Recepción, almacenamiento, preparación y despacho de productos, asegurando la cadena logística.', people: [by('wc'), by('re')] },
];

/** Lista Practica: 4 depts incluyendo gerencia */
export const deptsAll = [
  { name: 'Gerencia General (CEO)', desc: 'Dirección estratégica, toma de decisiones y supervisión general de las operaciones de la empresa.' },
  { name: 'Contabilidad y Recursos Humanos', desc: 'Gestión financiera, administrativa, contable y de los procesos relacionados con el personal.' },
  { name: 'Diseño y Marketing', desc: 'Material gráfico, contenido visual, gestión de imagen de marca y apoyo a las estrategias de marketing digital.' },
  { name: 'Bodega y Logística', desc: 'Recepción, almacenamiento, preparación y despacho de productos, asegurando la cadena logística.' },
];

export const levels = [
  { area: 'Gerencia General', desc: 'Dirección estratégica, toma de decisiones y supervisión general de las operaciones de la empresa.' },
  { area: 'Contabilidad y RR.HH.', desc: 'Una sola profesional a cargo de la gestión del personal y del apoyo transversal a todas las áreas.' },
  { area: 'Diseño y Marketing', desc: 'Directora de Diseño y practicante a cargo del catálogo digital, contenido visual e imagen de marca.' },
  { area: 'Bodega y Logística', desc: 'Encargados de la recepción, almacenamiento, preparación y despacho de productos.' },
];
