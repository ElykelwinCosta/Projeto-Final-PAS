import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import ConsultarGastosMes from './ConsultarGastosMes'
//import Teste from './ConsultarGastosMes';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/create-account" element={<CreateAccountScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/consultar-gastos-mes" element={<ConsultarGastosMes />} />
    </Routes>
  </Router>
);

reportWebVitals();
