import React, { Component } from 'react';
import './App.css';
import { Race } from '../Race';

export class App extends Component {
  
  state = {
    gameStarted: false,
    gameFinished: false
  }

  startBtnHandler = () => {
    this.setState({gameStarted: true});
  }

  resetBtnHandler = () => {
    this.setState({gameStarted: false});
  }
 
  render() {
    return (
      <div className="App">
        <div className="Track">
          <Race gameStarted ={this.state.gameStarted}/>
        </div>
        <button className="Start" onClick={this.startBtnHandler}>Start Race!</button>
        <button className="Reset" onClick={this.resetBtnHandler}>Reset</button>
      </div>
    );
  }
}