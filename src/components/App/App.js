import React, { Component } from 'react';
import './App.css';
import { Race } from '../Race';

export class App extends Component {

  state = {
    gameStarted: false,
    gameFinished: false,
    gameReset: false
  }

  startBtnHandler = () => {
    this.setState({gameStarted: true});
  }

  resetBtnHandler = () => {

  }
 
  render() {
    return (
      <div className="App">
        <div className="Track">
          <Race gameStarted={this.state.gameStarted}/>
        </div>
        <button onClick={this.startBtnHandler}>Start Race!</button>
        <button onClick={this.resetBtnHandler}>Reset</button>
      </div>
    );
  }
}