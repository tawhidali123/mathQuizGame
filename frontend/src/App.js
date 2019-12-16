import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Main from './components/Main'
import Login from './login/Login'
import Register from './login/Register'
import GameContainer from './components/GameContainer';
import UserUpdate from './login/UserUpdate'
import ViewScores from './components/ViewScores'

export default class App extends React.Component {
  state= {
    userObj: {},
    difficultyObj: []
  }

  getUserObj = (obj) => {
    console.log(obj)
    this.setState({userObj: obj})
  }

  componentDidMount(){
    fetch('http://localhost:3000/difficulties')
    .then(resp => resp.json())
    .then(difficulty => {
        
        this.setState({difficultyObj: difficulty})
    })
}

getDifficultyObj = () => {
  let newObj = [...this.state.difficultyObj].reverse()
  this.setState({difficultyObj: newObj})
}

  render(){
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" render={(routerProps) => <Login getUserObj={this.getUserObj} {...routerProps} />} />
      <Route path="/register" render={(routerProps) => <Register getUserObj={this.getUserObj} {...routerProps} />}/>
      <Route path="/main" render={(routerProps) => <Main userObj={this.state.userObj} {...routerProps} />} /> 
      <Route path="/play" render={(routerProps) => <GameContainer userObj={this.state.userObj} difficultyObj={this.state.difficultyObj} getDifficultyObj={this.getDifficultyObj} {...routerProps} />} />
      <Route path="/edituser" render={(routerProps) => <UserUpdate userObj={this.state.userObj} getUserObj={this.getUserObj} {...routerProps} />} />
      <Route path="/scores" render={(routerProps) => <ViewScores userObj={this.state.userObj} {...routerProps} />} />
    </Switch>

    </div>
  );
}
}
