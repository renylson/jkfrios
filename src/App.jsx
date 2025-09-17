

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProdutosPage from './pages/ProdutosPage';
import ClientesPage from './pages/ClientesPage';
import ContatoPage from './pages/ContatoPage';
import TrabalheConoscoPage from './pages/TrabalheConoscoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConoscoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
