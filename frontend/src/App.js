import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Main from './components/Main'
import Login from './login/Login'
import Register from './login/Register'
import GameContainer from './components/GameContainer';
import UserUpdate from './login/UserUpdate'

export default class App extends React.Component {
  state= {
    userObj: {}
  }

  render(){
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/main" component={Main} /> 
      <Route path="/play" component={GameContainer} />
      <Route path="/edituser" component={UserUpdate} />
    </Switch>

    </div>
  );
}
}


