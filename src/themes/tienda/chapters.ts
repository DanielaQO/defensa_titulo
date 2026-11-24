export const chapters: { id: 'introduccion' | 'centro' | 'tareas' | 'conclusiones' | 'nuevos'; label: string; isNew?: boolean }[] = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'centro', label: 'Centro de práctica' },
  { id: 'tareas', label: 'Tareas ejecutadas' },
  { id: 'conclusiones', label: 'Conclusiones' },
  { id: 'nuevos', label: 'Proyectos nuevos', isNew: true },
];
export const order: string[] = ['inicio', ...chapters.map((c) => c.id)];
export const covers: Record<string, string> = { introduccion: 'assets/p22_3.jpg', centro: 'assets/p17_1.jpg', tareas: 'assets/p23_1.jpg', conclusiones: 'assets/p32_1.jpg', nuevos: 'assets/p31_3.jpg' };
export const heroMap: Record<string, { kicker: string; title: string; sub: string; imgA: string; imgB: string }> = {
  introduccion: { kicker: 'Capítulo 01', title: 'Introducción', sub: 'Qué es este informe y en qué consistió la práctica.', imgA: 'assets/p22_4.jpg', imgB: 'assets/p26_3.jpg' },
  centro: { kicker: 'Capítulo 02', title: 'Centro de práctica', sub: 'Descripción de la empresa, recursos humanos e infraestructura de Agupa SpA.', imgA: 'assets/p18_1.jpg', imgB: 'assets/p18_3.jpg' },
  tareas: { kicker: 'Capítulo 03', title: 'Tareas ejecutadas', sub: 'Proceso y descripción técnica de los trabajos, con imágenes de cada pieza.', imgA: 'assets/p24_2.jpg', imgB: 'assets/p28_3.jpg' },
  conclusiones: { kicker: 'Capítulo 04', title: 'Conclusiones finales y comentarios', sub: 'Observaciones sobre las tareas realizadas y vinculación con el área.', imgA: 'assets/p32_2.jpg', imgB: 'assets/p31_2.jpg' },
  nuevos: { kicker: 'Capítulo 05 · Después de la práctica', title: 'Proyectos nuevos', sub: 'Tras la práctica continué trabajando en Agupa SpA. Estos son mis proyectos nuevos y versiones mejoradas.', imgA: 'assets/p23_3.jpg', imgB: 'assets/p30_2.jpg' },
};
export const num = (i: number) => String(i + 1).padStart(2, '0');
