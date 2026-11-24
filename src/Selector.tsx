import { Link } from 'react-router-dom';

const themes = [
  { to: '/tienda/inicio', name: 'Tienda', note: 'Crema y rojo · por capítulos', img: 'assets/p23_1.jpg', cls: 'bg-t-red text-t-cream font-tienda' },
  { to: '/practica', name: 'Práctica', note: 'Editorial oscuro · scroll continuo', img: 'assets/p17_1.jpg', cls: 'bg-p-bg text-p-ink font-practica' },
  { to: '/ecommerce', name: 'E-commerce', note: 'Tienda online · catálogo y selección', img: 'assets/p22_1.jpg', cls: 'bg-white text-e-ink font-ecommerce border border-e-line' },
];

export default function Selector() {
  return (
    <main className="min-h-screen bg-[#f6f5f3] text-e-ink font-ecommerce px-6 py-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-sm font-semibold text-e-muted">Presentación de título · Daniela Quiñones</div>
        <h1 className="mt-2 mb-10 text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.03em]">Elige una versión</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {themes.map((t) => (
            <Link key={t.to} to={t.to} className={`group rounded-[22px] overflow-hidden ${t.cls}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.img} alt="" className="w-full h-full object-cover transition-transform duration-[600ms] ease-expo group-hover:scale-[1.05]" />
              </div>
              <div className="p-5">
                <div className="text-2xl font-black">{t.name}</div>
                <div className="text-sm opacity-75 mt-1">{t.note}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
