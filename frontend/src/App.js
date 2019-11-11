import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Main from './components/Main'
import Login from './login/Login'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={Main} /> 
    </Switch>

    </div>
  );
}

export default App;
