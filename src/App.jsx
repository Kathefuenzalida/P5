import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Historico from './pages/Historico';
import About from './pages/About';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}