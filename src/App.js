import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import HomeScreen from './HomeScreen';
import ConsultarGastosCidade from './ConsultarGastosCidade';
import Teste from './teste';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/create-account" component={CreateAccountScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/consultar-gastos-cidade" component={ConsultarGastosCidade} />
        <Route path="/teste" component={Teste} />
      </Switch>
    </Router>
  );
};

export default App;
