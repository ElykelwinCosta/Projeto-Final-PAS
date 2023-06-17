import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import ForgotPassword from './ForgotPassword'
import ConsultarGastosMesPessoalAtivo from './ConsultarGastosMesPessoalAtivo'
import ConsultarGastosMesPessoalInativo from './ConsultarGastosMesPessoalInativo'
import ConsultarGastosMesPensionistas from './ConsultarGastosMesPensionistas'
import About from './About'
import Documentation from './Documentation'
import Team from './Team'
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/create-account" element={<CreateAccountScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/consultar-gastos-mes-pessoal-ativo" element={<ConsultarGastosMesPessoalAtivo />} />
      <Route path="/consultar-gastos-mes-pessoal-inativo" element={<ConsultarGastosMesPessoalInativo />} />
      <Route path="/consultar-gastos-mes-pensionistas" element={<ConsultarGastosMesPensionistas />} />
      <Route path="/about" element={<About />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  </Router>
);

reportWebVitals();
