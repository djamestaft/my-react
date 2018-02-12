import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import { Race } from '../Race';

export class App extends Component {

  state = {
    gameStarted: false,
    gameFinished: false,
    gameReset: false
  }

  startBtnHandler = () => {

  }

  resetBtnHandler = () => {

  }

  progressUpdater = () => {
    
  }
 
  render() {
    return (
      <div className="App">
        <div className="Track">
          <Race />
        </div>
        <button onClick={this.startBtnHandler}>Start Race!</button>
        <button onClick={this.resetBtnHandler}>Reset</button>
      </div>
    );
  }
}