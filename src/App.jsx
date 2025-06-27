import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import HomePage from './pages/home/HomePage';
import ClienteListPage from './pages/cliente/ClienteListPage';
import ClienteFormPage from './pages/cliente/ClienteFormPage';
import ProdutoListPage from './pages/produto/ProdutoListPage';
import ProdutoFormPage from './pages/produto/ProdutoFormPage';
import VendaListPage from './pages/venda/VendaListPage';
import VendaFormPage from './pages/venda/VendaFormPage';
import NotFoundPage from './pages/errors/NotFoundPage';

// Import styles
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        
        {/* Clientes */}
        <Route path="/clientes" element={<ClienteListPage />} />
        <Route path="/clientes/novo" element={<ClienteFormPage />} />
        <Route path="/clientes/editar/:id" element={<ClienteFormPage />} />
        
        {/* Produtos */}
        <Route path="/produtos" element={<ProdutoListPage />} />
        <Route path="/produtos/novo" element={<ProdutoFormPage />} />
        <Route path="/produtos/editar/:id" element={<ProdutoFormPage />} />
        
        {/* Vendas */}
        <Route path="/vendas" element={<VendaListPage />} />
        <Route path="/vendas/nova" element={<VendaFormPage />} />
        
        {/* Redirect /index.php to / */}
        <Route path="/index.php" element={<Navigate to="/" replace />} />
        
        {/* 404 - Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
