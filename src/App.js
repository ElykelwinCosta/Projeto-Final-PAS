import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import ForgotPassword from './ForgotPassword';
import ConsultarGastosMesPessoalAtivo from './ConsultarGastosMesPessoalAtivo';
import ConsultarGastosMesPessoalInativo from './ConsultarGastosMesPessoalInativo';
import ConsultarGastosMesPensionistas from './ConsultarGastosMesPensionistas';
import About from './About';
import Documentation from './Documentation';
import Team from './Team';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/create-account" component={CreateAccountScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/consultar-gastos-mes-pessoal-ativo" component={ConsultarGastosMesPessoalAtivo} />
        <Route path="/consultar-gastos-mes-pessoal-inativo" component={ConsultarGastosMesPessoalInativo} />
        <Route path="/consultar-gastos-mes-pensionistas" component={ConsultarGastosMesPensionistas} />
        <Route path="/about" component={About} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/team" component={Team} />
      </Switch>
    </Router>
  );
};

export default App;
