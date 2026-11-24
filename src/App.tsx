import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Selector from './Selector';
import TiendaApp from './themes/tienda/TiendaApp';
import PracticaApp from './themes/practica/PracticaApp';
import EcommerceApp from './themes/ecommerce/EcommerceApp';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tienda/inicio" replace />} />
        <Route path="/temas" element={<Selector />} />
        <Route path="/tienda/*" element={<TiendaApp />} />
        <Route path="/practica" element={<PracticaApp />} />
        <Route path="/ecommerce" element={<EcommerceApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
