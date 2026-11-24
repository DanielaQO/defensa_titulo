import type { Biblio } from './types';

export const stats = [
  { v: '117', label: 'Productos con layout', sub: 'Catálogo online de Carry All' },
  { v: '9–10', label: 'Imágenes por pack', sub: 'Más un banner cuando correspondía' },
  { v: '6', label: 'Canales de venta', sub: 'Walmart, Falabella, Paris, Mercado Libre, Ripley y la web oficial' },
  { v: '3', label: 'Marcas', sub: 'Carry All, Gama y Tozo' },
];

export const proceso = [
  { num: '1', when: 'Inicio de jornada', title: 'Reunión de planificación', text: 'Revisión de tareas pendientes, definición de prioridades del día y organización de los proyectos junto a mi supervisora.' },
  { num: '2', when: 'Durante el día', title: 'Trabajo autónomo', text: 'Desarrollo de las tareas asignadas, manteniendo comunicación con mi supervisora cuando era necesario.' },
  { num: '3', when: '1–2 horas antes del cierre', title: 'Revisión de avances', text: 'Presentación de lo realizado y recepción de observaciones, sugerencias y correcciones.' },
  { num: '4', when: 'Ajuste del método', title: 'De Asana a reuniones diarias', text: 'Se probó Asana, pero por las solicitudes urgentes se volvió a las reuniones diarias, más adaptadas al ritmo de trabajo.' },
];

export const responsabilidades = ['Rebranding de Carry All', 'Packs de imágenes', 'Layouts para e-commerce', 'Banners promocionales', 'Fotomontaje y retoque', 'Catálogos y fichas de productos', 'Videos promocionales', 'Piezas para Google Ads', 'Contenido para redes sociales', 'Etiquetas e impresos', 'Adaptación de formatos'];

export const biblio: Biblio[] = ([
  ['Adobe Express', 'https://www.adobe.com/express/'], ['Adobe Illustrator', 'https://www.adobe.com/cl/products/illustrator.html'],
  ['Adobe Photoshop', 'https://www.adobe.com/cl/products/photoshop.html'], ['Canva', 'https://www.canva.com/'],
  ['CarryAll Chile', 'https://carryall.cl/'], ['Google Drive', 'https://drive.google.com/'],
  ['Mercado Libre Chile', 'https://www.mercadolibre.cl/'], ['Microsoft Excel', 'https://www.microsoft.com/es-cl/microsoft-365/excel'],
  ['TOZO', 'https://www.tozostore.com/'],
] as const).map(([name, url]) => ({ name, url, host: url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] }));

export const brands = [
  { name: 'Carry All', img: 'assets/p23_1.jpg', note: 'Marca propia · organización y transporte' },
  { name: 'GAMA', img: 'assets/p26_1.jpg', note: 'Marca representada vía Closeout SpA' },
  { name: 'TOZO', img: 'assets/p28_1.jpg', note: 'Layouts y banners de producto' },
];

export const marketplaces = ['Mercado Libre', 'Falabella', 'Paris', 'Ripley', 'Walmart', 'carryall.cl'];

export const intro = {
  lead: 'Esta presentación tiene como finalidad dar a conocer el desarrollo de la práctica profesional de la carrera de Técnico en Diseño Digital y Publicitario, realizada en la empresa Agupa SpA.',
  parrafos: [
    'Durante este proceso, las funciones se enfocaron en el área de e-commerce, trabajando en plataformas como Mercado Libre, donde se desarrollaron piezas gráficas y se gestionaron catálogos digitales para marcas como Carry All, Gama y Tozo.',
    'Esta experiencia permitió aplicar conocimientos de diseño y adaptarse a requerimientos reales del entorno laboral, fortaleciendo habilidades técnicas, creativas y de trabajo con lineamientos de marca.',
  ],
};

export const conclusiones = {
  cita: 'Mi práctica profesional en Agupa SpA me permitió comprobar cómo los conocimientos adquiridos durante mi formación en Diseño Digital y Publicitario se aplican directamente en el mundo laboral.',
  tareas: 'A lo largo de este proceso participé en el desarrollo de material para e-commerce, campañas digitales, redes sociales y el rebranding de la marca CarryAll, fortaleciendo mis habilidades en diseño gráfico, retoque fotográfico, comunicación visual y marketing digital.',
  vinculacion: 'Asimismo, aprendí a trabajar con plazos reales, recibir retroalimentación constante y adaptar mis diseños según las necesidades de la empresa. Esta experiencia contribuyó significativamente a mi crecimiento profesional y me entregó las herramientas necesarias para enfrentar futuros desafíos en el área del diseño digital.',
  agradecimientos: 'Agradezco a la empresa Agupa SpA por brindarme la oportunidad de realizar mi práctica profesional, a mi profesora guía, Desirée Alvarado, por su apoyo, orientación y acompañamiento, y a mi tutora de práctica, Rosana, por su disposición, guía y apoyo. Finalmente, a mi familia y cercanos, especialmente a mi madre, Johanna, y a mi pareja, Tomás.',
};
