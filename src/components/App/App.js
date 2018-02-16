import React, { Component } from 'react';
import './App.css';
import { Race } from '../Race';

export class App extends Component {
  
  state = {
    gameStarted: false,
    gameFinished: false,
    winner: ''
  }

  startBtnHandler = () => {
    this.setState({gameStarted: true});
  }

  resetBtnHandler = () => {
    this.setState({gameStarted: false});
  }

  raceWinnerCallback(winner) {
    console.log('Winner : ', winner);
    //this.setState({ winner: winner.name }); 
  }
 
  render() {
    const { winner } = this.state
    return (
      <div className="App">

        <div className="Track">
          <Race gameStarted={this.state.gameStarted} raceWinnerCallback={this.raceWinnerCallback} />
          {this.state.winner && <p>{this.state.winner}</p>}
        </div>

        <button className="Start" onClick={this.startBtnHandler}>Start Race!</button>
        <button className="Reset" onClick={this.resetBtnHandler}>Reset</button>
        
      </div>
    );
  }
}