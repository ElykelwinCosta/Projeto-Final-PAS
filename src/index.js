import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import ConsultarGastosCidade from './ConsultarGastosCidade'
import Teste from './teste';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/create-account" element={<CreateAccountScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/consultar-gastos-cidade" element={<ConsultarGastosCidade />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  </Router>
);

reportWebVitals();
