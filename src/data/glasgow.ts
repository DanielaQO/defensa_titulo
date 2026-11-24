const pairs = [
  { o: 1, n: 1, old: 'Carrito de compras Glasgow', neu: 'Todo esto cabe aquí' },
  { o: 2, n: 2, old: 'Bolsillo exterior cooler', neu: 'Frío siempre a mano' },
  { o: 3, n: 3, old: 'Medidas bolso', neu: 'Bolso de calidad' },
  { o: 4, n: 7, old: 'Medidas completas', neu: 'Medidas del carro' },
  { o: 5, n: 6, old: 'Resistencia y ergonomía', neu: 'Detalles que hacen la diferencia' },
];
export const glPairs = pairs.map((p) => ({ before: `assets/gl_old_${p.o}.jpg`, after: `assets/gl_new_${p.n}.jpg`, old: p.old, neu: p.neu }));
export const glNew = [1, 2, 3, 4, 5, 6, 7].map((n) => `assets/gl_new_${n}.jpg`);
export const glOld = [1, 2, 3, 4, 5].map((n) => `assets/gl_old_${n}.jpg`);
