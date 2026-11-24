import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { projects } from '../../data/projects';
import { ALL } from '../../hooks/useFilter';
import { useKey } from '../../hooks/useKey';
import { scrollToId } from '../../lib/scroll';
import AccentPicker from '../../ui/AccentPicker';
import { ACCENTS, type Store, StoreCtx } from './store';
import { Footer, Header, TopBar } from './chrome';
import Hero from './sections/Hero';
import Disponible from './sections/Disponible';
import Practica from './sections/Practica';
import Categorias from './sections/Categorias';
import Catalogo from './sections/Catalogo';
import Proceso from './sections/Proceso';
import Empresa from './sections/Empresa';
import Equipo from './sections/Equipo';
import Conclusiones from './sections/Conclusiones';
import QuickView from './QuickView';
import Bag from './Bag';
import Toast from './Toast';

export default function EcommerceApp() {
  const [acc, setAcc] = useState(ACCENTS[0]);
  const [query, setQueryRaw] = useState('');
  const [filter, setFilter] = useState<string>(ALL);
  const [bag, setBag] = useState<string[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [pd, setPd] = useState<string | null>(null);
  const [toast, setToast] = useState({ text: '', on: false });
  const tt = useRef(0);
  useEffect(() => () => clearTimeout(tt.current), []);
  const flash = (text: string) => { clearTimeout(tt.current); setToast({ text, on: true }); tt.current = window.setTimeout(() => setToast((t) => ({ ...t, on: false })), 1800); };
  const toggleBag = (id: string) => {
    const p = projects.find((x) => x.id === id)!;
    setBag((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));
    flash(bag.includes(id) ? `Quitado: ${p.title}` : `Agregado a tu selección: ${p.title}`);
  };
  const setQuery = (v: string) => { if (v && !query) scrollToId('trabajos', 70); setQueryRaw(v); };
  useKey({ Escape: () => setBagOpen(false) }, bagOpen && !pd);
  const store: Store = { query, setQuery, filter, setFilter, bag, toggleBag, openPd: setPd, bagOpen, setBagOpen };
  return (
    <StoreCtx.Provider value={store}>
      <div className="font-ecommerce bg-white text-e-ink min-h-screen" style={{ '--acc': acc } as CSSProperties}>
        <TopBar /><Header />
        <main>
          <Hero /><Disponible /><Practica /><Categorias /><Catalogo /><Proceso /><Empresa /><Equipo /><Conclusiones />
        </main>
        <Footer />
        <QuickView key={pd ?? 'none'} id={pd} onClose={() => setPd(null)} />
        <Bag />
        <Toast text={toast.text} on={toast.on} />
        <AccentPicker options={ACCENTS} value={acc} onChange={setAcc} />
      </div>
    </StoreCtx.Provider>
  );
}
