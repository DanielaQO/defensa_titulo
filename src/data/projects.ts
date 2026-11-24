import type { Group, Project } from './types';

const I = (p: string, n: number, webpFrom?: number) =>
  Array.from({ length: n }, (_, i) => `assets/${p}_${i + 1}.${webpFrom && i + 1 >= webpFrom ? 'webp' : 'jpg'}`);
const LAY = 'Pack de imágenes para el catálogo online, compuesto generalmente por 9 a 10 imágenes y, cuando correspondía, un banner. Cada pack se controlaba en una planilla con estados “En proceso” y “Listo”.';
const CH = 'Walmart, Falabella, Paris, Mercado Libre, Ripley y web oficial';
const L: Group = 'Layouts e-commerce', P: Group = 'Publicidad y RRSS', ID: Group = 'Identidad e impresos';

type Raw = Omit<Project, 'cover' | 'alt' | 'fit'> & Partial<Pick<Project, 'cover' | 'fit'>>;
const raw: Raw[] = [
  { id: 'four', title: 'Línea Four Season', brand: 'Carry All', cat: 'Layout', group: L, imgs: I('p22', 8), desc: LAY, specs: [['Marca', 'Carry All'], ['Tipo', 'Layout e-commerce'], ['Canales', CH]] },
  { id: 'mini', title: 'Línea Minimalista', brand: 'Carry All', cat: 'Layout', group: L, imgs: I('p23', 9), desc: LAY, specs: [['Marca', 'Carry All'], ['Tipo', 'Layout e-commerce'], ['Canales', CH]] },
  { id: 'van', title: 'Carritos Vancouver', brand: 'Carry All', cat: 'Layout', group: L, imgs: I('p24', 8), desc: LAY, specs: [['Producto', 'Carritos de compra'], ['Tipo', 'Layout e-commerce'], ['Canales', CH]] },
  { id: 'titan', title: 'Carro TITAN 360', brand: 'Carry All', cat: 'Layout', group: L, imgs: I('p25', 9), desc: LAY, specs: [['Producto', 'Carro de carga'], ['Tipo', 'Layout e-commerce'], ['Canales', CH]] },
  { id: 'gama', title: 'Layouts GAMA', brand: 'GAMA', cat: 'Layout', group: L, imgs: I('p26', 9), desc: 'Pack de imágenes para la depiladora IPL HERA de GA.MA, marca representada en Chile a través de Closeout SpA.', specs: [['Marca', 'GAMA'], ['Tipo', 'Layout e-commerce']] },
  { id: 'tozo-h100', title: 'Audífonos TOZO H100', brand: 'TOZO', cat: 'Layout', group: L, imgs: I('p28', 9), desc: 'Pack de imágenes y banner para los audífonos inalámbricos TOZO H100.', specs: [['Marca', 'TOZO'], ['Producto', 'Audífonos on-ear H100'], ['Tipo', 'Layout e-commerce y banner']] },
  { id: 'tozo', title: 'Audífonos TOZO OpenOrb', brand: 'TOZO', cat: 'Layout', group: L, imgs: I('p29', 9), desc: 'Pack de imágenes y banner para los audífonos open-ear TOZO OpenOrb.', specs: [['Marca', 'TOZO'], ['Producto', 'Audífonos open-ear OpenOrb'], ['Tipo', 'Layout e-commerce y banner']] },
  { id: 'ads', title: 'Campaña para Ads', brand: 'Google Ads', cat: 'Publicidad', group: P, imgs: I('p30', 4), cover: 'assets/p30_3.jpg', desc: 'Diseño de piezas publicitarias para campañas digitales en Google Ads y redes sociales.', specs: [['Tipo', 'Publicidad digital'], ['Formato', 'Banners en distintos tamaños']] },
  { id: 'ig', title: 'Contenido Instagram', brand: 'Redes sociales', cat: 'RRSS', group: P, imgs: I('p31', 9, 5), cover: 'assets/p31_3.jpg', desc: 'Generación de contenido gráfico para redes sociales: publicaciones e historias de producto.', specs: [['Tipo', 'Contenido para redes sociales'], ['Plataforma', 'Instagram']] },
  { id: 'rebrand', title: 'Rebranding Carry All', brand: 'Carry All', cat: 'Identidad', group: ID, imgs: I('p32', 2), desc: 'Participación en la actualización y estandarización de la identidad visual de Carry All, para fortalecer su posicionamiento y coherencia gráfica en los distintos canales.', specs: [['Tipografía', 'Montserrat Bold'], ['Versiones de logo', 'Compacta y perfil'], ['Colores', '#333F50 · #0292D4 · #FFFFFF · #E2BE14 · #253B4F']] },
  { id: 'etiqueta', title: 'Etiqueta Carry All', brand: 'Carry All', cat: 'Impreso', group: ID, imgs: I('p33', 2), desc: 'Diseño de material impreso: etiqueta de producto para Carry All.', specs: [['Tipo', 'Material impreso']] },
  { id: 'manual', title: 'Manual de instrucciones', brand: 'Carry All', cat: 'Impreso', group: ID, imgs: I('p34', 3), cover: 'assets/p34_2.jpg', desc: 'Manual de instrucciones de armado para producto Carry All.', specs: [['Tipo', 'Material impreso']] },
  { id: 'stickers', title: 'Stickers para packs', brand: 'Carry All', cat: 'Impreso', group: ID, imgs: ['assets/p35_1.webp', 'assets/p35_2.webp', 'assets/p35_3.webp'], fit: 'contain', desc: 'Stickers para identificar productos vendidos en packs.', specs: [['Tipo', 'Material impreso']] },
];

export const projects: Project[] = raw.map((p) => {
  const cover = p.cover ?? p.imgs[0];
  return { ...p, cover, alt: p.imgs.find((x) => x !== cover) ?? cover, fit: p.fit ?? 'cover', specs: [...p.specs, ['Piezas', String(p.imgs.length)]] };
});
export const planilla = 'assets/p21_1.jpg';
