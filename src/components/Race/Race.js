import React, { Component } from 'react';
import classes from './Race.css';
import { Jockey } from '../Jockey';
import jsonData from '../../team.json';

//shuffle jsonData then select the first 5 for race
const shuffled = jsonData.sort(() => .5 - Math.random());
let selected = shuffled.slice(0,5) ; 

//get fields from selected array that we need for race
let randoms = selected.map((person, i) => {
    return (
        {name: person.login, avatar_url: person.avatar_url, complete: false, color: "#E57373"}
    );
});

export class Race extends Component {

    constructor(props) {
        super(props)
        this.callback = this.callback.bind(this)

        //assign randoms array to arrayJockey for Race
        this.state = {
            arrayJockeys: randoms,
        }
    }
    
    callback(progress, winnerName) {
        if (progress === 100) {
            let winner = this.state.arrayJockeys.find((name) => {
                return winnerName = name;
            })
            this.props.raceWinnerCallback(winner);
        }
        
    }
    
    render() {
        if (this.props.gameStarted) {            
            return (
                <div>
                    { 
                    this.state.arrayJockeys.map((person, i) => {
                        return (
                            <Jockey key={i} avatar={person.avatar_url} color={person.color} callback={this.callback} name={person.name} />
                        );
                    })
                    }
                </div>
            );
        } else {
            return (
                <h1>Start the race by clicking the "Start Race" button!</h1>
            );
        }
    }
}