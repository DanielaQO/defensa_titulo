import type { NumItem } from './types';

export const numbered = (xs: string[]): NumItem[] => xs.map((t, i) => ({ n: String(i + 1).padStart(2, '0'), t }));

export const empresa = {
  descripcion: [
    'AGUPA SPA es una empresa chilena enfocada en el retail digital y e-commerce, dedicada principalmente a la importación, comercialización y distribución de productos para el hogar, organización y transporte bajo distintas marcas propias y representadas.',
    'La compañía opera principalmente a través de canales online y marketplaces, utilizando marcas como Carry All y vinculaciones comerciales con Closeout SpA, empresa relacionada con la representación de marcas como GAMA en Chile.',
  ],
  mision: 'Ofrecer soluciones innovadoras y de calidad para el hogar, la organización y el transporte, mediante un modelo de retail digital eficiente, brindando una experiencia de compra confiable y orientada al cliente.',
  vision: 'Ser una empresa líder en e-commerce y retail digital, reconocida por la calidad de sus productos, la fortaleza de sus marcas y su compromiso con la innovación y la satisfacción de sus clientes.',
  objetivos: ['Comercializar productos de calidad a través de plataformas digitales.', 'Potenciar el crecimiento de las marcas propias y representadas.', 'Garantizar una experiencia de compra eficiente y satisfactoria.', 'Mantener altos estándares de servicio y gestión logística.', 'Impulsar el crecimiento sostenible de la empresa.'],
  funciones: ['Importación y comercialización de productos para el hogar, organización y transporte.', 'Gestión y desarrollo de marcas propias y representadas.', 'Administración de canales de venta online y marketplaces.', 'Coordinación de procesos logísticos, almacenamiento y distribución.', 'Desarrollo de estrategias de marketing digital y promoción de productos.', 'Atención y soporte a clientes durante el proceso de compra y postventa.'],
  servicios: ['Venta de productos a través de plataformas de e-commerce.', 'Distribución y despacho de productos a nivel nacional.', 'Gestión de marcas y representación comercial.', 'Servicio de atención al cliente y postventa.', 'Promoción y comercialización digital mediante marketplaces y canales propios.'],
  historia: [
    'AGUPA SPA es una empresa chilena constituida en el año 2020, orientada al retail digital y al comercio electrónico. Desde sus inicios, ha enfocado sus operaciones en la importación, comercialización y distribución de productos para el hogar, la organización y el transporte, adaptándose a las nuevas tendencias de consumo y al crecimiento del e-commerce en Chile.',
    'A lo largo de su desarrollo, la empresa ha fortalecido su presencia en canales digitales y marketplaces, impulsando marcas propias como Carry All y estableciendo relaciones comerciales con empresas vinculadas al sector de la representación y distribución de marcas.',
  ],
  publico: [
    'AGUPA SPA orienta sus productos a personas y familias que buscan soluciones prácticas, funcionales y accesibles para la organización del hogar, almacenamiento y transporte. Su público objetivo está compuesto principalmente por hombres y mujeres adultos, entre 25 y 60 años, interesados en optimizar espacios, mantener el orden y mejorar la funcionalidad de sus hogares.',
    'Asimismo, se dirige a consumidores que realizan compras a través de canales digitales y marketplaces, valorando la comodidad, la variedad de productos y la rapidez en el proceso de compra y despacho. También atiende a clientes que buscan productos de apoyo para el transporte y la movilidad.',
  ],
  direccion: 'Nueva 1661, Bodega C, Huechuraba, Región Metropolitana',
  ubicacion: 'En Nueva 1661, Bodega C, comuna de Huechuraba, Región Metropolitana. Cuenta con una bodega de almacenamiento de gran tamaño con estanterías industriales y, en el segundo nivel, oficinas de gerencia, contabilidad, recursos humanos, diseño y marketing, donde me desempeñé.',
  plantaFisica: [
    'Sus instalaciones están compuestas por una bodega de almacenamiento de gran tamaño y un área de oficinas administrativas, lo que permite integrar las actividades operativas y de gestión de la empresa en un mismo recinto.',
    'Las instalaciones también cuentan con servicios complementarios para el personal, incluyendo baños, una cocina/comedor y un espacio habilitado para el lavado de utensilios, proporcionando condiciones adecuadas para el desarrollo de las actividades laborales diarias.',
  ],
  bodega: 'La bodega principal cuenta con amplios espacios destinados al almacenamiento y organización de productos, utilizando estanterías industriales para optimizar la gestión del inventario.',
  oficina: 'En el segundo nivel se encuentran las oficinas administrativas, donde se desarrollan las labores de gerencia, contabilidad, recursos humanos, diseño y marketing. Durante mi práctica profesional me desempeñé en esta área, específicamente en el departamento de diseño y marketing.',
};

export const tools = [
  { name: 'Adobe Photoshop', use: 'Retoque fotográfico y fotomontajes' }, { name: 'Adobe Illustrator', use: 'Identidad visual, etiquetas e impresos' },
  { name: 'Adobe Express', use: 'Piezas rápidas para redes sociales' }, { name: 'Canva', use: 'Contenido y adaptaciones de formato' },
  { name: 'Microsoft Excel', use: 'Planilla de control de packs' }, { name: 'Google Drive', use: 'Entrega y almacenamiento de archivos' },
  { name: 'Asana', use: 'Seguimiento de tareas (etapa de prueba)' }, { name: 'Marketplaces', use: 'Mercado Libre, Falabella, Paris, Ripley, Walmart' },
];
