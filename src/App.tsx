import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import TiendaApp from './themes/tienda/TiendaApp';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tienda/inicio" replace />} />
        <Route path="/tienda/*" element={<TiendaApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
